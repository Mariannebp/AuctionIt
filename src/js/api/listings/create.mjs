import { auctionBaseUrl } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";

const action = "/listings";
const method = "post";

/**
 * Creates a new listing
 * @param {string} listData - Represents input information
 */
export async function createListing(listData) {
  const createListUrl = auctionBaseUrl + action;

  const response = await authFetch(createListUrl, {
    method,
    body: JSON.stringify(listData),
  });

  if (response.ok) {
    return await response.json();
  } else {
    alert("Something went wrong, please try again");
  }
}
