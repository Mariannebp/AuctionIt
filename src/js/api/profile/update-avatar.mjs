import { auctionBaseUrl } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";
import * as storage from "../../storage/index.mjs";

export async function updateAvatar(avatarData) {
  const userInfo = storage.load("profile");
  const { name } = userInfo;
  const action = `/profiles/${name}/media`;
  const method = "put";

  const updateAvatarUrl = `${auctionBaseUrl}${action}`;

  const response = await authFetch(updateAvatarUrl, {
    method,
    body: JSON.stringify(avatarData),
  });

  const user = await response.json();

  console.log(user);
  if (response.ok) {
    storage.save("profile", user);
    location.href = "profile.html";
  } else {
    alert("Something went wrong, please make sure you enter a valid url");
  }
}
