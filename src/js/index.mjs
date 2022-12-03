import { getProfile } from "./api/profile/profile.mjs";
import { checkIfLoggedIn } from "./api/profile/header.mjs";
import * as listings from "./handlers/index.mjs";

// import { getListing } from "./api/listings/get.mjs";

const path = location.pathname;
// const profile = load("profile");

if (path === "/index.html") {
  checkIfLoggedIn();
  listings.getListingsFeedHome();
  listings.logoutListener();
} else if (path === "/pages/login.html") {
  listings.setLoginUserFormListener();
} else if (path === "/pages/register.html") {
  listings.setRegisterUserFormListener();
} else if (path === "/pages/profile.html") {
  checkIfLoggedIn();
  getProfile();
  listings.logoutListener();
} else if (path === "/pages/auctions.html") {
  checkIfLoggedIn();
  listings.getListingsFeed();
  listings.logoutListener();
} else if (path === "/pages/auction-specific.html") {
  checkIfLoggedIn();
  listings.getListingSpecific();
  listings.logoutListener();
}

// getListing("cb08411f-1096-400d-abe4-73727bfb269f");
