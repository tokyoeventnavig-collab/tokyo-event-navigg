import {
  getEvents,
} from "../../lib/notion";

import RecentClient from "./RecentClient";

export const revalidate = 300;

export default async function RecentPage() {
  const events =
    await getEvents();

  return (
    <RecentClient
      events={events}
    />
  );
}
