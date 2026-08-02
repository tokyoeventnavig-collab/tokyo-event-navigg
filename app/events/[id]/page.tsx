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
  params: Promise<{ id: string }>;
};

function timestamp(event: EventItem): number {
  const source = event.dateStart || event.dateISO || "";
  if (!source) return Number.POSITIVE_INFINITY;
  const time = new Date(source).getTime();
  return Number.isNaN(time) ? Number.POSITIVE_INFINITY : time;
}

function tokens(value: string): string[] {
  return value
    .split(/[・,、/／]/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function score(current: EventItem, candidate: EventItem): number {
  let value = 0;
  const categories = new Set(tokens(current.category));

  if (tokens(candidate.category).some((item) => categories.has(item))) {
    value += 6;
  }

  if (
    current.area &&
    current.area !== "その他" &&
    candidate.area === current.area
  ) {
    value += 4;
  }

  if (
    current.organizer &&
    candidate.organizer === current.organizer
  ) {
    value += 3;
  }

  const difference = Math.abs(timestamp(current) - timestamp(candidate));

  if (Number.isFinite(difference)) {
    const days = difference / 86400000;
    if (days <= 7) value += 3;
    else if (days <= 30) value += 1;
  }

  return value;
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { id } = await params;
  const event = await getEventById(id);

  if (!event) {
    return {
      title: "イベントが見つかりません｜東京イベントナビ",
    };
  }

  const description =
    event.description ||
    `${event.title}の日時・会場・参加条件・申込方法を確認できます。`;

  return {
    title: `${event.title}｜東京イベントナビ`,
    description,
    openGraph: {
      title: event.title,
      description,
      type: "website",
      images: event.image ? [{ url: event.image }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: event.title,
      description,
      images: event.image ? [event.image] : [],
    },
  };
}

export default async function EventPage({ params }: Props) {
  const { id } = await params;

  const [event, allEvents] = await Promise.all([
    getEventById(id),
    getEvents(),
  ]);

  if (!event) notFound();

  const related = allEvents
    .filter((item) => item.id !== event.id)
    .map((item) => ({ item, score: score(event, item) }))
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score || timestamp(a.item) - timestamp(b.item))
    .slice(0, 5)
    .map(({ item }) => item);

  return (
    <EventDetailClient
      event={event}
      allEvents={allEvents}
      relatedEvents={related}
    />
  );
}
