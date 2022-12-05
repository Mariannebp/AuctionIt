import { updateAvatar } from "../api/profile/update-avatar.mjs";
import { load } from "../storage/index.mjs";

export async function setUpdateAvatarListener() {
  const form = document.querySelector("#updateAvatarForm");
  const userInfo = load("profile");
  const { avatar } = userInfo;

  if (form) {
    const button = form.querySelector("button");
    button.disabled = true;

    form.avatar.value = avatar;

    button.disabled = false;

    form.addEventListener("submit", async (event) => {
      event.preventDefault();

      const form = event.target;
      const formData = new FormData(form);
      const update = Object.fromEntries(formData.entries());

      await updateAvatar(update);
    });
  }
}
