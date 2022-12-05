import { load } from "../../storage/index.mjs";

export function getProfile() {
  const userName = document.querySelector("#userName");
  const userEmail = document.querySelector("#userEmail");
  const userAvatar = document.querySelector("#userAvatar");
  const userCredits = document.querySelector("#creditsProfile");

  const userInfo = load("profile");
  const { name, email, credits, avatar } = userInfo;
  userName.innerHTML = name;
  userEmail.innerHTML = email;
  userCredits.innerHTML = credits;

  if (avatar) {
    const img = document.createElement("img");
    img.src = avatar;
    img.width = "200";
    img.alt = `Profile image of ${name}`;
    userAvatar.append(img);
  } else {
    const img = document.createElement("img");
    img.src = "/assets/icons/profile.png";
    img.width = "150";
    img.alt = "Profile image default";
    userAvatar.append(img);
  }
}
