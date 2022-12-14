import { auctionBaseUrl } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";
import { load } from "../../storage/index.mjs";

const action = "/profiles";

/**
 * Checks if a user is logged in; displaying user information if logged in, or a log in button if not
 */
export async function checkIfLoggedIn() {
  const userCreditsContainer = document.querySelector("#userCreditsContainer");
  const userCredits = document.querySelector("#credits");
  const userMenu = document.querySelector("#userMenu");
  const userIcon = document.querySelector("#userIcon");
  const loginButton = document.querySelector("#logInButton");

  const userInfo = load("profile");

  if (userInfo) {
    loginButton.style.display += "none";

    const getProfileUrl = `${auctionBaseUrl}${action}/${userInfo.name}`;
    const response = await authFetch(getProfileUrl);

    const result = await response.json();
    const { name, credits, avatar } = result;

    userIcon.innerHTML = `<img class="img-fluid" style="width: 40px" alt="Avatar for ${name}" src=${avatar}>`;
    userCredits.innerHTML = credits;
  } else {
    userCreditsContainer.style.display += "none";
    userMenu.style.display += "none";
  }
}
