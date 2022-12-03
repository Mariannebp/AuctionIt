import { renderListings } from "../templates/listings.mjs";
import { renderListingSpecific } from "../templates/listing-specific.mjs";
import {
  getListings,
  getListing,
  getListingsFew,
} from "../api/listings/get.mjs";

export async function getListingsFeed() {
  const listings = await getListings();
  const container = document.querySelector("#allAuctions");
  renderListings(listings, container);
}

export async function getListingsFeedHome() {
  const listings = await getListingsFew();
  const container = document.querySelector("#latestAuctions");
  renderListings(listings, container);
}

export async function getListingSpecific() {
  const queryString = document.location.search;
  const params = new URLSearchParams(queryString);
  const id = params.get("id");

  const listing = await getListing(id);
  const container = document.querySelector("#auctionSpecific");
  renderListingSpecific(listing, container);
}
