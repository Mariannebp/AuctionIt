import * as profile from "./api/profile/index.mjs";
import * as listings from "./handlers/index.mjs";

const path = location.pathname;

if (path === "/index.html") {
  profile.checkIfLoggedIn();
  listings.getListingsFeedHome();
  listings.setUpdateAvatarListener();
  listings.logoutListener();
} else if (path === "/pages/login.html") {
  listings.setLoginUserFormListener();
} else if (path === "/pages/register.html") {
  listings.setRegisterUserFormListener();
} else if (path === "/pages/profile.html") {
  profile.checkIfLoggedIn();
  profile.checkIfLoggedInContent();
  profile.getProfile();
  listings.setUpdateAvatarListener();
  listings.logoutListener();
} else if (path === "/pages/auctions.html") {
  profile.checkIfLoggedIn();
  listings.getListingsFeed();
  listings.getListingsSearched();
  listings.setUpdateAvatarListener();
  listings.logoutListener();
} else if (path === "/pages/auction-specific.html") {
  profile.checkIfLoggedIn();
  profile.checkIfLoggedInContent();
  listings.getListingSpecific();
  listings.setUpdateAvatarListener();
  listings.logoutListener();
}
