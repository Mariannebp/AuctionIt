import { auctionBaseUrl } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";

const action = "/listings";
const few = "?limit=3";
const seller = "?_seller=true";
const bids = "&_bids=true";

export async function getListings() {
  const getListingsUrl = `${auctionBaseUrl}${action}`;
  const response = await authFetch(getListingsUrl);

  return await response.json();
}

export async function getListingsFew() {
  const getListingsUrl = `${auctionBaseUrl}${action}${few}`;
  const response = await authFetch(getListingsUrl);

  return await response.json();
}

export async function getListing(id) {
  if (!id) {
    throw new Error("A valid id is required");
  }

  const getListingUrl = `${auctionBaseUrl}${action}/${id}${seller}${bids}`;
  const response = await authFetch(getListingUrl);

  return await response.json();
}
