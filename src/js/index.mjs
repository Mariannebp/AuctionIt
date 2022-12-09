import * as profile from "../js/api/profile/index.mjs";
import * as handler from "../js/handlers/index.mjs";

const path = location.pathname;

// For testing both - not working on launch //

if (path === "/AuctionIt/index.html" || path === "/index.html") {
  profile.checkIfLoggedIn();
  handler.getListingsFeedHome();
  handler.setCreateListingListener();
  handler.setUpdateAvatarListener();
  handler.logoutListener();
} else if (
  path === "/AuctionIt/pages/login.html" ||
  path === "/pages/login.html"
) {
  handler.setLoginUserFormListener();
} else if (
  path === "/AuctionIt/pages/register.html" ||
  path === "/pages/register.html"
) {
  handler.setRegisterUserFormListener();
} else if (
  path === "/AuctionIt/pages/profile.html" ||
  path === "/pages/profile.html"
) {
  profile.checkIfLoggedIn();
  profile.checkIfLoggedInContent();
  profile.getProfile();
  handler.getListingsProfile();
  handler.setCreateListingListener();
  handler.setUpdateAvatarListener();
  handler.logoutListener();
} else if (
  path === "/AuctionIt/pages/auctions.html" ||
  path === "/pages/auctions.html"
) {
  profile.checkIfLoggedIn();
  handler.getListingsFeed();
  handler.getListingsSearched();
  handler.setCreateListingListener();
  handler.setUpdateAvatarListener();
  handler.logoutListener();
} else if (
  path === "/AuctionIt/pages/auction-specific.html" ||
  path === "/pages/auction-specific.html"
) {
  profile.checkIfLoggedIn();
  profile.checkIfLoggedInContent();
  handler.getListingSpecific();
  handler.setMakeBidListener();
  handler.setCreateListingListener();
  handler.setUpdateAvatarListener();
  handler.logoutListener();
}
