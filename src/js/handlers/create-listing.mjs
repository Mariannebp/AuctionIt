import { createListing } from "../api/listings/create.mjs";

/**
 * A listener for when users are creating a new listing
 */
// export function setCreateListingListener() {
//   const form = document.querySelector("#newListingForm");
//   const newTitle = document.querySelector("#floatingTitle");
//   const newDesc = document.querySelector("#floatingDescription");
//   const newTags = document.querySelector("#floatingTags");
//   const newMedia = document.querySelector("#floatingMedia");
//   const newEndsAt = document.querySelector("#floatingEndsAt");

//   if (form) {
//     form.addEventListener("submit", async (event) => {
//       event.preventDefault();

//       const title = newTitle.value;
//       const desc = newDesc.value;
//       const tags = newTags.value.split(", ");
//       const media = newMedia.value.split(", ");
//       const endsAt = newEndsAt.value;

//       await createListing({
//         title: title,
//         description: desc,
//         tags: tags,
//         media: media,
//         endsAt: endsAt,
//       });

//       form.reset();
//       location.reload();
//     });
//   }
// }

export function setCreateListingListener() {
  const form = document.querySelector("#newListingForm");
  const newTitle = document.querySelector("#floatingTitle");
  const newDesc = document.querySelector("#floatingDescription");
  const newTags = document.querySelector("#floatingTags");
  const newMedia = document.querySelector("#floatingMedia");
  const newEndsAt = document.querySelector("#floatingEndsAt");

  if (form) {
    form.addEventListener("submit", async (event) => {
      event.preventDefault();

      const title = newTitle.value;
      const desc = newDesc.value;
      const tags = newTags.value.split(", ");
      const media = newMedia.value.split(", ");
      const endsAt = newEndsAt.value;
      const currentTime = new Date().toISOString();

      console.log(currentTime);
      if (endsAt > currentTime) {
        await createListing({
          title: title,
          description: desc,
          tags: tags,
          media: media,
          endsAt: endsAt,
        });
        form.reset();
        location.reload();
      } else {
        alert("The date must be in the future");
      }
    });
  }
}
