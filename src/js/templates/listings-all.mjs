export function listingTemplate(listingsData) {
  const { id, title, media, endsAt, _count } = listingsData;
  const { bids } = _count;

  const listingContainer = document.createElement("div");
  listingContainer.classList.add("col", "mb-5");

  const listingCard = document.createElement("div");
  listingCard.classList.add(
    "card",
    "h-100",
    "d-flex",
    "flex-column",
    "m-auto",
    "mb-3",
    "border-beige",
    "pb-0"
  );
  listingCard.setAttribute("style", "max-width: 19rem; border-radius: 0px");
  listingContainer.append(listingCard);

  const listingContent = document.createElement("div");
  listingContent.classList.add("m-2", "mb-auto", "text-center");
  listingCard.append(listingContent);

  if (media.length) {
    const listingMedia = document.createElement("img");
    listingMedia.classList.add("img-fluid");
    listingMedia.setAttribute("style", "max-height: 200px; max-width: 100%;");
    listingMedia.src = media[0];
    listingMedia.alt = `Image for ${title}`;
    listingContent.append(listingMedia);
  } else {
    const listingMedia = document.createElement("div");
    listingMedia.classList.add("m-3", "border");
    listingMedia.setAttribute("style", "height: 200px; max-width: 100%;");
    listingContent.append(listingMedia);

    const listingMediaInner = document.createElement("div");
    listingMediaInner.classList.add("m-3", "border");
    listingMediaInner.setAttribute("style", "height: 166px; max-width: 100%;");
    listingMedia.append(listingMediaInner);
  }

  const listingInfo = document.createElement("div");
  listingInfo.classList.add("card-body");
  listingContent.append(listingInfo);

  const listingTitle = document.createElement("h2");
  listingTitle.classList.add("card-title", "fs-5", "text-center", "mt-4");
  listingTitle.innerHTML = title;
  listingInfo.append(listingTitle);

  const listingEnds = document.createElement("div");
  listingEnds.classList.add("d-flex", "justify-content-end", "mt-4");
  listingInfo.append(listingEnds);

  const listingEndsIcon = document.createElement("img");
  listingEndsIcon.src = "../assets/icons/timer.png";
  listingEndsIcon.setAttribute("style", "max-width: 25px; height: 100%");
  listingEndsIcon.alt = "timer";

  const date = new Date(endsAt).toLocaleString();
  const listingEndsTime = document.createElement("p");
  listingEndsTime.classList.add("ms-2");
  listingEndsTime.innerHTML = date;

  listingEnds.append(listingEndsIcon, listingEndsTime);

  const listingFooter = document.createElement("div");
  listingFooter.classList.add(
    "card-footer",
    "bg-transparent",
    "border-beige",
    "d-flex",
    "justify-content-around",
    "align-items-center",
    "p-0"
  );
  listingCard.append(listingFooter);

  const listingFooterBid = document.createElement("div");
  listingFooterBid.classList.add("text-center", "text-secondary", "mt-2");
  listingFooter.append(listingFooterBid);

  const listingFooterBidText = document.createElement("p");
  listingFooterBidText.classList.add("mb-1");
  listingFooterBidText.innerHTML = "Bids";
  listingFooterBid.append(listingFooterBidText);

  const listingFooterBidCount = document.createElement("p");
  listingFooterBidCount.classList.add("mb-1", "fw-bold");
  listingFooterBidCount.innerHTML = bids;
  listingFooterBid.append(listingFooterBidCount);

  const listingViewItem = document.createElement("div");
  listingViewItem.classList.add("text-center");
  listingFooter.append(listingViewItem);

  const listingViewItemLink = document.createElement("a");
  listingViewItemLink.classList.add("text-info", "text-decoration-none");
  listingViewItemLink.setAttribute("style", "cursor: pointer;");
  listingViewItemLink.href = `./auction-specific.html?id=${id}`;
  listingViewItemLink.innerHTML = "View Item";
  listingViewItem.append(listingViewItemLink);

  return listingContainer;
}

export function renderListingsAll(listingsDataList, parent) {
  parent.append(...listingsDataList.map(listingTemplate));
}

export function renderListingsSearched(listingsDataList, parent) {
  const searchInput = document.querySelector("#search");

  searchInput.addEventListener("input", (e) => {
    let searchValue = e.target.value.toLowerCase();
    console.log(searchValue);
    const container = document.querySelector("#allAuctions");
    container.innerHTML = "";

    listingsDataList.forEach((i) => {
      if (i.title.toLowerCase().startsWith(searchValue)) {
        parent.append(listingTemplate(i));
      }
    });
  });
}
