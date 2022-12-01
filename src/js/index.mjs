import { setRegisterUserFormListener } from "./handlers/register.mjs";
import { setLoginUserFormListener } from "./handlers/login.mjs";
import { logoutListener } from "./handlers/logout.mjs";
import { getProfile } from "./api/profile/profile.mjs";
import { checkIfLoggedIn } from "./api/profile/header.mjs";

const path = location.pathname;
// const profile = load("profile");

if (path === '/pages/profile.html') {
  checkIfLoggedIn();
  getProfile();
  logoutListener();
} else if (path === "/index.html") {
  checkIfLoggedIn();
  logoutListener();
} else if (path === "/pages/auctions.html") {
  checkIfLoggedIn();
  logoutListener();
} else if (path === "/pages/auction-specific.html") {
  checkIfLoggedIn();
  logoutListener();
} else if (path === "/pages/login.html") {
  setLoginUserFormListener();
} else if (path === "/pages/register.html") {
  setRegisterUserFormListener();
}


// setLoginUserFormListener();
// setRegisterUserFormListener();
// logoutListener();