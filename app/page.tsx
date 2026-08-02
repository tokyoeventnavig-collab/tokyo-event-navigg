import type { Metadata } from "next";
import { notFound } from "next/navigation";

import {
  getEventById,
  getEvents,
  type EventItem,
} from "../../../lib/notion";

import EventDetailClient from "./EventDetailClient";

export const revalidate = 300;

type Props = {
  params: Promise<{
    id: string;
  }>;
};

function getEventTimestamp(
  event: EventItem,
): number {
  const source =
    event.dateStart ||
    event.dateISO ||
    "";

  if (!source) {
    return Number.POSITIVE_INFINITY;
  }

  const dateValue =
    source.includes("T")
      ? source
      : `${source}T00:00:00+09:00`;

  const timestamp =
    new Date(dateValue).getTime();

  return Number.isNaN(timestamp)
    ? Number.POSITIVE_INFINITY
    : timestamp;
}

function getCategoryTokens(
  value: string,
): string[] {
  return value
    .split(/[・,、/／]/)
    .map((item) =>
      item.trim(),
    )
    .filter(Boolean);
}

function getSimilarityScore(
  currentEvent: EventItem,
  candidateEvent: EventItem,
): number {
  let score = 0;

  const currentCategories =
    new Set(
      getCategoryTokens(
        currentEvent.category,
      ),
    );

  const candidateCategories =
    getCategoryTokens(
      candidateEvent.category,
    );

  const hasSameCategory =
    candidateCategories.some(
      (category) =>
        currentCategories.has(
          category,
        ),
    );

  if (hasSameCategory) {
    score += 6;
  }

  if (
    currentEvent.area &&
    currentEvent.area !==
      "その他" &&
    candidateEvent.area ===
      currentEvent.area
  ) {
    score += 4;
  }

  if (
    currentEvent.organizer &&
    candidateEvent.organizer ===
      currentEvent.organizer
  ) {
    score += 3;
  }

  const currentTimestamp =
    getEventTimestamp(
      currentEvent,
    );

  const candidateTimestamp =
    getEventTimestamp(
      candidateEvent,
    );

  if (
    Number.isFinite(
      currentTimestamp,
    ) &&
    Number.isFinite(
      candidateTimestamp,
    )
  ) {
    const differenceInDays =
      Math.abs(
        candidateTimestamp -
          currentTimestamp,
      ) /
      86400000;

    if (
      differenceInDays <= 7
    ) {
      score += 3;
    } else if (
      differenceInDays <= 30
    ) {
      score += 1;
    }
  }

  return score;
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { id } =
    await params;

  const event =
    await getEventById(id);

  if (!event) {
    return {
      title:
        "イベントが見つかりません｜東京イベントナビ",
    };
  }

  const description =
    event.description ||
    `${event.title}の日時・会場・参加条件・申込方法を確認できます。`;

  return {
    title:
      `${event.title}｜東京イベントナビ`,

    description,

    openGraph: {
      title: event.title,
      description,
      type: "website",

      images: event.image
        ? [
            {
              url:
                event.image,
            },
          ]
        : [],
    },

    twitter: {
      card:
        "summary_large_image",

      title: event.title,

      description,

      images: event.image
        ? [
            event.image,
          ]
        : [],
    },
  };
}

export default async function EventPage({
  params,
}: Props) {
  const { id } =
    await params;

  const [
    event,
    allEvents,
  ] = await Promise.all([
    getEventById(id),
    getEvents(),
  ]);

  if (!event) {
    notFound();
  }

  const relatedEvents =
    allEvents
      .filter(
        (candidateEvent) =>
          candidateEvent.id !==
          event.id,
      )
      .map(
        (
          candidateEvent,
        ) => ({
          event:
            candidateEvent,

          score:
            getSimilarityScore(
              event,
              candidateEvent,
            ),
        }),
      )
      .filter(
        ({ score }) =>
          score > 0,
      )
      .sort((a, b) => {
        if (
          b.score !==
          a.score
        ) {
          return (
            b.score -
            a.score
          );
        }

        return (
          getEventTimestamp(
            a.event,
          ) -
          getEventTimestamp(
            b.event,
          )
        );
      })
      .slice(0, 5)
      .map(
        ({ event }) =>
          event,
      );

  return (
    <EventDetailClient
      event={event}
      allEvents={allEvents}
      relatedEvents={
        relatedEvents
      }
    />
  );
}
