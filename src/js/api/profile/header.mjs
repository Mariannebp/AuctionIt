import { load } from "../../storage/index.mjs";

export function checkIfLoggedIn() {
  const userCreditsContainer = document.querySelector("#userCreditsContainer");
  const userCredits = document.querySelector("#credits");
  const userMenu = document.querySelector("#userMenu");
  const userIcon = document.querySelector("#userIcon");
  const loginButton = document.querySelector("#logInButton");

  const profile = load("profile");


  if (profile) {
    loginButton.style.display += "none";

    const { credits, avatar } = profile;
    userCredits.innerHTML = credits;

    if (avatar) {
      const img = document.createElement("img");
      img.src = avatar;
      img.width = "40";
      img.alt = `Profile image of ${name}`;
      userIcon.append(img);
    } else {
      const img = document.createElement("img");
      img.src = "/assets/icons/profile.png";
      img.width = "32";
      img.alt = "Profile image default";
      userIcon.append(img);
    }

  } else {
    userCreditsContainer.style.display += "none";
    userMenu.style.display += "none";
  }
}