import * as temp from "../templates/index.mjs";
import * as list from "../api/listings/get.mjs";

/**
 * Get listings for the auctions page
 */
export async function getListingsFeed() {
  const listings = await list.getListings();
  const container = document.querySelector("#allAuctions");
  temp.renderListingsAll(listings, container);
}

/**
 * Get searched listings for the auctions page
 */
export async function getListingsSearched() {
  const listings = await list.getListings();
  const container = document.querySelector("#allAuctions");
  temp.renderListingsSearched(listings, container);
}

/**
 * Get listings for the home page
 */
export async function getListingsFeedHome() {
  const listings = await list.getListingsFew();
  const container = document.querySelector("#latestAuctions");
  temp.renderListingsHome(listings, container);
}

/**
 * Get a single listing based on the ID being passed
 * @param {number} id of the post being targeted
 */
export async function getListingSpecific() {
  const queryString = document.location.search;
  const params = new URLSearchParams(queryString);
  const id = params.get("id");
  localStorage.setItem("listId", id);

  const listing = await list.getListing(id);
  temp.renderListingSpecific(listing);
}

/**
 * Get listings for the profile page
 */
export async function getListingsProfile() {
  const listings = await list.getListingsByProfile();
  const container = document.querySelector("#usersListings");
  temp.renderListingsProfile(listings, container);
}
