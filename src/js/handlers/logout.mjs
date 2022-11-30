import { logout } from "../api/auth/logout.mjs";

export function logoutListener() {
  // document.querySelector("[#logout]").forEach(e => e.addEventlistener("click", logout))
  const logoutButton = document.querySelector("#logout");
  logoutButton.addEventListener("click", logout);
  // logoutButton.forEach(e => {
  //   e.addEventListener("click", logout);
  // })


  // location.href = "index.html";
}