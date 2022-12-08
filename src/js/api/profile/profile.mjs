import { auctionBaseUrl } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";
import { load } from "../../storage/index.mjs";

const action = "/profiles";

export async function getProfile() {
  const userName = document.querySelector("#userName");
  const userEmail = document.querySelector("#userEmail");
  const userAvatar = document.querySelector("#userAvatar");
  const userCredits = document.querySelector("#creditsProfile");
  const userWins = document.querySelector("#winsProfile");
  const userListings = document.querySelector("#listingsProfile");

  const userInfo = load("profile");

  const getProfileUrl = `${auctionBaseUrl}${action}/${userInfo.name}`;
  const response = await authFetch(getProfileUrl);

  const result = await response.json();
  const { name, email, avatar, credits, wins, _count } = result;

  userName.innerHTML = name;
  userEmail.innerHTML = email;
  userAvatar.innerHTML = `<img class="img-fluid" style="width: 200px" alt="Avatar for ${name}" src=${avatar}>`;
  userCredits.innerHTML = credits;
  userWins.innerHTML = wins;
  userListings.innerHTML = _count.listings;
}
