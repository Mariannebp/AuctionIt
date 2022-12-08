import { updateAvatar } from "../api/profile/update-avatar.mjs";

export async function setUpdateAvatarListener() {
  const form = document.querySelector("#updateAvatarForm");

  if (form) {
    form.addEventListener("submit", async (event) => {
      event.preventDefault();

      const form = event.target;
      const formData = new FormData(form);
      const update = Object.fromEntries(formData.entries());

      await updateAvatar(update);
    });
  }
}
