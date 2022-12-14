import { auctionBaseUrl } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";
import { load } from "../../storage/index.mjs";

const action = "/listings";
const profile = "/profiles";
const descOrder = "?sort=created&sortOrder=desc";
const few = "&limit=3";
const sellerAndBids = "?_seller=true&_bids=true";

/**
 * function that call for default number of listings from the API in descending order
 */
export async function getListings() {
  const getListingsUrl = `${auctionBaseUrl}${action}${descOrder}`;
  const response = await authFetch(getListingsUrl);

  return await response.json();
}

/**
 * function that call for a limited number of the last listings in descending order
 */
export async function getListingsFew() {
  const getListingsUrl = `${auctionBaseUrl}${action}${descOrder}${few}`;
  const response = await authFetch(getListingsUrl);

  return await response.json();
}

/**
 * function that call for a listing matching the ID being passed from the API
 * @param {number} id the id of the post being targeted
 */
export async function getListing(id) {
  if (!id) {
    throw new Error("A valid id is required");
  }

  const getListingUrl = `${auctionBaseUrl}${action}/${id}${sellerAndBids}`;
  const response = await authFetch(getListingUrl);

  return await response.json();
}

/**
 * function that call for the listings created by the logged in profile, in descending order
 */
export async function getListingsByProfile() {
  const userInfo = load("profile");
  const { name } = userInfo;
  const getListingsUrl = `${auctionBaseUrl}${profile}/${name}${action}${descOrder}`;
  const response = await authFetch(getListingsUrl);

  return await response.json();
}
