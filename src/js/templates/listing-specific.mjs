export function listingTemplate(listingsData) {
  const { title, description, media, endsAt, bids, seller } = listingsData;
  const { name, avatar } = seller;

  console.log(listingsData);

  const headTitle = document.querySelector("title");
  const navTitle = document.querySelector("#auctionSpecificDropdown");

  headTitle.innerHTML = `${title} - AuctionIt`;
  navTitle.innerHTML = title;

  const listingContainer = document.createElement("div");
  listingContainer.classList.add("mb-5");

  const listingTitle = document.createElement("h1");
  listingTitle.classList.add("mt-5", "text-primary");
  listingTitle.innerHTML = title;

  const listingBody = document.createElement("div");
  listingBody.classList.add("text-center");

  listingContainer.append(listingTitle, listingBody);

  const listingMediaMain = document.createElement("img");
  listingMediaMain.src = media[0];
  listingMediaMain.alt = `Image for ${media}`;
  listingMediaMain.classList.add("img-fluid", "mt-5", "mb-4");
  listingMediaMain.setAttribute("style", "width: 500px; height: 100%;");

  const listingMediaGallery = document.createElement("div");
  listingMediaGallery.classList.add(
    "row",
    "row-cols-md-2",
    "row-cols-lg-3",
    "row-cols-xl-4",
    "justify-content-center",
    "g-3"
  );

  listingBody.append(listingMediaMain, listingMediaGallery);

  for (let i = 1; i < media.length; i++) {
    const listingMediaMain = document.createElement("img");
    listingMediaMain.src = media[i];
    listingMediaMain.alt = `Image for ${media}`;
    listingMediaMain.classList.add("col", "img-fluid", "mt-5", "mb-4");
    listingMediaMain.setAttribute("style", "width: 200px; height: 100%;");
    listingMediaGallery.append(listingMediaMain);
  }

  const listingInfo = document.createElement("div");
  listingInfo.classList.add(
    "d-flex",
    "justify-content-between",
    "m-auto",
    "mb-5"
  );
  listingInfo.setAttribute("style", "max-width: 600px");
  listingBody.append(listingInfo);

  const listingSeller = document.createElement("div");
  listingSeller.classList.add("d-flex", "justify-content-start", "mt-4");
  listingInfo.append(listingSeller);

  if (avatar) {
    const listingSellerAvatar = document.createElement("img");
    listingSellerAvatar.src = avatar;
    listingSellerAvatar.setAttribute("style", "width: 25px; height: 25px");
    listingSellerAvatar.alt = "Avatar";
    listingSeller.append(listingSellerAvatar);
  } else {
    const listingSellerAvatar = document.createElement("img");
    listingSellerAvatar.src = "/assets/icons/profile.png";
    listingSellerAvatar.setAttribute("style", "width: 25px; height: 25px");
    listingSellerAvatar.alt = "Avatar";
    listingSeller.append(listingSellerAvatar);
  }

  const listingSellerName = document.createElement("p");
  listingSellerName.classList.add("ms-2");
  listingSellerName.innerHTML = name;
  listingSeller.append(listingSellerName);

  const listingEnds = document.createElement("div");
  listingEnds.classList.add("d-flex", "justify-content-end", "mt-4");
  listingInfo.append(listingEnds);

  const listingEndsIcon = document.createElement("img");
  listingEndsIcon.src = "/assets/icons/timer.png";
  listingEndsIcon.setAttribute("style", "width: 25px; height: 25px");
  listingEndsIcon.alt = "timer";

  const date = new Date(endsAt).toLocaleString();
  const listingEndsTime = document.createElement("p");
  listingEndsTime.classList.add("ms-2");
  listingEndsTime.innerHTML = date;

  listingEnds.append(listingEndsIcon, listingEndsTime);

  const listingDesc = document.createElement("div");
  listingDesc.classList.add("m-auto", "mb-5", "text-start");
  listingDesc.setAttribute("style", "max-width: 500px");
  listingBody.append(listingDesc);

  const listingDescHeading = document.createElement("h2");
  listingDescHeading.classList.add("fs-5");
  listingDescHeading.innerHTML = "DESCRIPTION";

  const listingDescContent = document.createElement("p");
  listingDescContent.innerHTML = description;

  listingDesc.append(listingDescHeading, listingDescContent);

  const listingBidContainer = document.createElement("div");
  listingBidContainer.classList.add(
    "row",
    "d-flex",
    "justify-content-between",
    "m-auto",
    "pt-3",
    "bg-light-beige"
  );
  listingBidContainer.setAttribute("style", "max-width: 500px");
  listingBody.append(listingBidContainer);

  const listingBidInfo = document.createElement("div");
  listingBidInfo.classList.add(
    "col-sm",
    "d-flex",
    "flex-column",
    "text-start",
    "mb-4"
  );
  listingBidContainer.append(listingBidInfo);

  const listingBidText1 = document.createElement("p");
  listingBidText1.classList.add("mb-1", "text-secondary", "fs-5");
  listingBidText1.innerHTML = "Bids";

  const listingBids = document.createElement("div");
  listingBids.classList.add("d-flex", "flex-column", "mt-4");

  listingBidInfo.append(listingBidText1, listingBids);

  for (let i = 0; i < bids.length; i++) {
    const listingBidsContainer = document.createElement("div");
    listingBidsContainer.classList.add(
      "d-flex",
      "justify-content-between",
      "me-5"
    );
    listingBids.append(listingBidsContainer);

    const listingBidsBidder = document.createElement("p");
    listingBidsBidder.innerHTML = bids[i].bidderName;

    const listingBidsAmount = document.createElement("p");
    listingBidsAmount.innerHTML = `$${bids[i].amount}`;
    listingBidsAmount.classList.add("text-secondary");
    listingBidsContainer.append(listingBidsBidder, listingBidsAmount);
  }

  const listingMakeBid = document.createElement("div");
  listingMakeBid.classList.add("col-sm", "text-start", "mb-4");
  listingBidContainer.append(listingMakeBid);

  const listingMakeBidText = document.createElement("p");
  listingMakeBidText.classList.add("mb-1", "text-secondary", "fs-5");
  listingMakeBidText.innerHTML = "Place Bid:";

  const listingMakeBidForm = document.createElement("div");
  listingMakeBidForm.classList.add("mb-2", "form-floating", "mb-2");

  const listingMakeBidFormInput = document.createElement("input");
  listingMakeBidFormInput.classList.add("form-control-sm");
  listingMakeBidFormInput.setAttribute("type", "text");
  listingMakeBidFormInput.setAttribute("name", "amount");
  listingMakeBidFormInput.setAttribute("id", "floatingAmount");
  listingMakeBidFormInput.setAttribute("placeholder", "Amount");
  listingMakeBidFormInput.setAttribute("style", "border-radius: 0px");
  listingMakeBidFormInput.setAttribute("required", "true");
  // listingMakeBidFormInput.setAttribute("pattern", "/^\d+$/");
  listingMakeBidFormInput.setAttribute(
    "title",
    "You must enter a value equal to or lower then your credits"
  );
  listingMakeBidForm.append(listingMakeBidFormInput);

  const listingMakeBidButton = document.createElement("button");
  listingMakeBidButton.classList.add(
    "btn",
    "btn-buttonbg",
    "text-white",
    "ps-3",
    "pe-3"
  );
  listingMakeBidButton.setAttribute("type", "button");
  listingMakeBidButton.setAttribute("style", "border-radius: 0px");
  listingMakeBidButton.innerHTML = "BID";

  listingMakeBid.append(
    listingMakeBidText,
    listingMakeBidForm,
    listingMakeBidButton
  );

  return listingContainer;
}

export function renderListingSpecific(listingsDataSpecific, parent) {
  parent.append(listingTemplate(listingsDataSpecific));
}
