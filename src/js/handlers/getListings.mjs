import { renderListings } from "../templates/listings.mjs";
import { getListings } from "../api/listings/get.mjs";

export async function getListingsFeed() {
  const listings = await getListings();
  const container = document.querySelector("#latestAuctions");
  renderListings(listings, container);
}
