export function listingTemplate(listingsData) {
  const { title, description, media, endsAt, bids, seller } = listingsData;
  const { name, avatar } = seller;

  const headTitle = document.querySelector("title");
  const navTitle = document.querySelector("#auctionSpecificDropdown");

  headTitle.innerHTML = `${title} - AuctionIt`;
  navTitle.innerHTML = title;

  const mainTitle = document.querySelector("#title");
  const mediaMain = document.querySelector("#mediaMain");
  const mediaGallery = document.querySelector("#mediaGallery");
  const mediaPlaceholder = document.querySelector("#placeholder");
  const sellerAvatar = document.querySelector("#sellerAvatar");
  const sellerName = document.querySelector("#sellerName");
  const endsAtTime = document.querySelector("#endAt");
  const desc = document.querySelector("#description");
  const bidsList = document.querySelector("#bids");

  mainTitle.innerHTML = title;

  if (media.length) {
    mediaPlaceholder.innerHTML = "";

    mediaMain.src = media[0];
    mediaMain.alt = `images for ${title}`;

    for (let i = 1; i < media.length; i++) {
      mediaGallery.innerHTML += `<img class="col img-fluid mt-5 mb-3" style="width: 200px; height: 100%;" alt="images for ${title}" src=${media[i]} >`;
    }
  }

  sellerAvatar.src = avatar;
  sellerName.innerHTML = name;
  endsAtTime.innerHTML = new Date(endsAt).toLocaleString();
  desc.innerHTML = description;

  if (bids.length) {
    for (let i = 0; i < bids.length; i++) {
      bidsList.innerHTML += `<div class="d-flex justify-content-between me-5">
                              <p class="text-secondary">${bids[i].bidderName}</p>
                              <p class="text-secondary">$${bids[i].amount}</p>
                             </div>`;
    }
  }
}

export function renderListingSpecific(listingsDataSpecific) {
  listingTemplate(listingsDataSpecific);
}
