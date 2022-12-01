import { setRegisterUserFormListener } from "./handlers/register.mjs";
import { setLoginUserFormListener } from "./handlers/login.mjs";
import { logoutListener } from "./handlers/logout.mjs";

// const path = location.pathname;
// const profile = load("profile");

// if (path === '/pages/profile.html') {
//   setLoginUserFormListener();
//   setRegisterUserFormListener();
//   logoutListener();
// } else if (path === "/index.html") {
//   setLoginUserFormListener();
//   setRegisterUserFormListener();
//   logoutListener();
// } else if (path === "/pages/auctions.html") {
//   setLoginUserFormListener();
//   setRegisterUserFormListener();
//   logoutListener();
// } else if (path === "/pages/auction-specific.html") {
//   setLoginUserFormListener();
//   setRegisterUserFormListener();
//   logoutListener();
// }


setLoginUserFormListener();
setRegisterUserFormListener();
logoutListener();