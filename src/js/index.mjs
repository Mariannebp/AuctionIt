import * as profile from "./api/profile/index.mjs";
import * as handler from "./handlers/index.mjs";

const path = location.pathname;

if (path === "/index.html") {
  profile.checkIfLoggedIn();
  handler.getListingsFeedHome();
  handler.setCreateListingListener();
  handler.setUpdateAvatarListener();
  handler.logoutListener();
} else if (path === "/pages/login.html") {
  handler.setLoginUserFormListener();
} else if (path === "/pages/register.html") {
  handler.setRegisterUserFormListener();
} else if (path === "/pages/profile.html") {
  profile.checkIfLoggedIn();
  profile.checkIfLoggedInContent();
  profile.getProfile();
  handler.getListingsProfile();
  handler.setCreateListingListener();
  handler.setUpdateAvatarListener();
  handler.logoutListener();
} else if (path === "/pages/auctions.html") {
  profile.checkIfLoggedIn();
  handler.getListingsFeed();
  handler.getListingsSearched();
  handler.setCreateListingListener();
  handler.setUpdateAvatarListener();
  handler.logoutListener();
} else if (path === "/pages/auction-specific.html") {
  profile.checkIfLoggedIn();
  profile.checkIfLoggedInContent();
  handler.getListingSpecific();
  handler.setMakeBidListener();
  handler.setCreateListingListener();
  handler.setUpdateAvatarListener();
  handler.logoutListener();
}
