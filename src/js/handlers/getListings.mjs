import * as temp from "../templates/index.mjs";
import * as list from "../api/listings/get.mjs";

export async function getListingsFeed() {
  const listings = await list.getListings();
  const container = document.querySelector("#allAuctions");
  temp.renderListings(listings, container);
}

export async function getListingsSearched() {
  const listings = await list.getListings();
  const container = document.querySelector("#allAuctions");
  temp.renderListingsSearched(listings, container);
}

export async function getListingsFeedHome() {
  const listings = await list.getListingsFew();
  const container = document.querySelector("#latestAuctions");
  temp.renderListings(listings, container);
}

export async function getListingSpecific() {
  const queryString = document.location.search;
  const params = new URLSearchParams(queryString);
  const id = params.get("id");

  const listing = await list.getListing(id);
  const container = document.querySelector("#auctionSpecific");
  temp.renderListingSpecific(listing, container);
}

export async function getListingsProfile() {
  const listings = await list.getListingsByProfile();
  const container = document.querySelector("#usersListings");
  temp.renderListingsProfile(listings, container);
}
