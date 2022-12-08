import { makeBid } from "../api/profile/make-bid.mjs";

export async function setMakeBidListener() {
  const form = document.querySelector("#formBid");
  const input = document.querySelector("#floatingAmount");

  if (form) {
    form.addEventListener("submit", async (event) => {
      event.preventDefault();

      const bidValue = input.value;
      const bid = {
        amount: Number(bidValue),
      };

      await makeBid(bid);
      form.reset();
      location.reload();
    });
  }
}
