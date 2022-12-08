import { auctionBaseUrl } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";
import { load } from "../../storage/index.mjs";

const action = "/listings";
const profile = "/profiles";
const descOrder = "?sort=created&sortOrder=desc";
const few = "&limit=3";
const sellerAndBids = "?_seller=true&_bids=true";

export async function getListings() {
  const getListingsUrl = `${auctionBaseUrl}${action}${descOrder}`;
  const response = await authFetch(getListingsUrl);

  return await response.json();
}

export async function getListingsFew() {
  const getListingsUrl = `${auctionBaseUrl}${action}${descOrder}${few}`;
  const response = await authFetch(getListingsUrl);

  return await response.json();
}

export async function getListing(id) {
  if (!id) {
    throw new Error("A valid id is required");
  }

  const getListingUrl = `${auctionBaseUrl}${action}/${id}${sellerAndBids}`;
  const response = await authFetch(getListingUrl);

  return await response.json();
}

export async function getListingsByProfile() {
  const userInfo = load("profile");
  const { name } = userInfo;
  const getListingsUrl = `${auctionBaseUrl}${profile}/${name}${action}${descOrder}`;
  const response = await authFetch(getListingsUrl);

  return await response.json();
}
