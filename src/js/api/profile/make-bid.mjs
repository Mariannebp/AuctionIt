import { auctionBaseUrl } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";

/**
 * Makes a bid on a listing
 * @param {number} bidData represents the input information
 * @returns
 */
export async function makeBid(bidData) {
  const listId = localStorage.getItem("listId");
  const action = `/listings/${listId}/bids`;
  const method = "post";

  const makeBidUrl = `${auctionBaseUrl}${action}`;

  const response = await authFetch(makeBidUrl, {
    method,
    body: JSON.stringify(bidData),
  });

  if (response.ok) {
    alert("You have made a bid!");
    return await response.json();
  } else {
    alert(
      "Something went wrong, please make sure your bid is equal to or lower then your credits"
    );
  }
}
