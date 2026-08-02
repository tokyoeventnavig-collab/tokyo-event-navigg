import {
  getEvents,
} from "../../lib/notion";

import FavoritesClient from "./FavoritesClient";

export const revalidate = 300;

export default async function FavoritesPage() {
  const events =
    await getEvents();

  return (
    <FavoritesClient
      events={events}
    />
  );
}
