import { auctionBaseUrl } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";

const action = "/listings";

export async function getListings() {
  const getListingsUrl = `${auctionBaseUrl}${action}`;
  const response = await authFetch(getListingsUrl);

  return await response.json();
}
