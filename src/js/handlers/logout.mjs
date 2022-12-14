import { logout } from "../api/auth/logout.mjs";

/**
 * A listener for when users are logging out
 */
export function logoutListener() {
  const logoutButton = document.querySelector("#logout");
  logoutButton.addEventListener("click", () => {
    logout();
    location.reload();
  });
}
