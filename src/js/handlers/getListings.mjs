import {
  renderListings,
  renderListingsSearched,
} from "../templates/listings.mjs";
import { renderListingSpecific } from "../templates/listing-specific.mjs";
import { renderListingsProfile } from "../templates/listings-profile.mjs";
import * as list from "../api/listings/get.mjs";

export async function getListingsFeed() {
  const listings = await list.getListings();
  const container = document.querySelector("#allAuctions");
  renderListings(listings, container);
}

export async function getListingsSearched() {
  const listings = await list.getListings();
  const container = document.querySelector("#allAuctions");
  renderListingsSearched(listings, container);
}

export async function getListingsFeedHome() {
  const listings = await list.getListingsFew();
  const container = document.querySelector("#latestAuctions");
  renderListings(listings, container);
}

export async function getListingSpecific() {
  const queryString = document.location.search;
  const params = new URLSearchParams(queryString);
  const id = params.get("id");

  const listing = await list.getListing(id);
  const container = document.querySelector("#auctionSpecific");
  renderListingSpecific(listing, container);
}

export async function getListingsProfile() {
  const listings = await list.getListingsByProfile();
  const container = document.querySelector("#usersListings");
  renderListingsProfile(listings, container);
}
