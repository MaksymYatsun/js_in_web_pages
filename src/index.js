const items = [
  { id: 1, brand: 'Lamere I', title: 'Recycle Boucle Knit Cardigan Pink', rating: 4.1, price: 120, imgSrc: 'img/items/item-1.jpg' },
  { id: 2, brand: 'Lamere I', title: 'Recycle Boucle Knit Cardigan Pink', rating: 4.5, price: 120, imgSrc: 'img/items/item-2.jpg' },
  { id: 3, brand: 'Lamere I', title: 'Recycle Boucle Knit Cardigan Pink', rating: 4.5, price: 1200, imgSrc: 'img/items/item-3.jpg' },
  { id: 4, brand: 'Lamere I', title: 'Recycle Boucle Knit Cardigan Pink', rating: 3.8, price: 120, imgSrc: 'img/items/item-4.jpg' },
  { id: 5, brand: 'Lamere I', title: 'Recycle Boucle Knit Cardigan Pink', rating: 4.4, price: 120, imgSrc: 'img/items/item-5.jpg' },
  { id: 6, brand: 'Lamere I', title: 'Recycle Boucle Knit Cardigan Pink', rating: 4.4, price: 120, imgSrc: 'img/items/item-6.jpg' },
  { id: 7, brand: 'Lamere I', title: 'Recycle Boucle Knit Cardigan Pink', rating: 5, price: 120, imgSrc: 'img/items/item-7.jpg' },
  { id: 8, brand: 'Lamere I', title: 'Recycle Boucle Knit Cardigan Pink', rating: 4.5, price: 120, imgSrc: 'img/items/item-8.jpg' },
  { id: 9, brand: 'Lamere I', title: 'Recycle Boucle Knit Cardigan Pink', rating: 4.2, price: 120, imgSrc: 'img/items/item-9.jpg' },
  { id: 10, brand: 'Lamere I', title: 'Recycle Boucle Knit Cardigan Pink', rating: 4.8, price: 120, imgSrc: 'img/items/item-10.jpg' },
];

function generateList(items) {

  const list = document.createElement("ul");

  items.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.classList.add("flex", "justify-between", "mb-3");

    const itemImg = document.createElement("img");
    itemImg.src = item.imgSrc;
    itemImg.classList.add("max-w-[100px]", "h-full")

    const itemInfo = document.createElement("div");
    itemInfo.classList.add("text-sm", "pt-3", "pl-3", "flex", "flex-col");

    const itemBrand = document.createElement("p");
    itemBrand.textContent = item.brand;
    itemBrand.classList.add("text-title-active", "uppercase", "mb-1", "tracking-[0.125rem]");
    itemInfo.appendChild(itemBrand);

    const itemTitle = document.createElement("p");
    itemTitle.classList.add("mb-1", "text-label")
    itemTitle.textContent = item.title;
    itemInfo.appendChild(itemTitle);

    const itemPrice = document.createElement("div");
    itemPrice.textContent = '$' + item.price;
    itemPrice.classList.add("text-[#DD8560]", "text-sm");
    itemInfo.appendChild(itemPrice);

    const itemRating = document.createElement("div");
    itemRating.classList.add("flex", "my-auto", "text-xs");
    itemInfo.appendChild(itemRating);

    const ratingStar = document.createElement("img");
    ratingStar.src = 'img/star.svg';
    ratingStar.classList.add("mr-[2px]")
    itemRating.appendChild(ratingStar);

    const ratingPoint = document.createElement("p");
    ratingPoint.textContent = item.rating + ' Rating';
    ratingPoint.classList.add("text-label")
    itemRating.appendChild(ratingPoint);

    const itemBottom = document.createElement("div");
    itemBottom.classList.add("flex", "justify-between")
    itemInfo.appendChild(itemBottom);

    const itemBottomSizes = document.createElement("div");
    itemBottomSizes.classList.add("flex");
    itemBottom.appendChild(itemBottomSizes);

    const sizeText = document.createElement("p");
    sizeText.textContent = "Size";
    sizeText.classList.add("mr-4")
    itemBottomSizes.appendChild(sizeText);

    const sizeS = document.createElement("span");
    sizeS.textContent = "S";
    sizeS.classList.add("mr-5", "size-mark");
    itemBottomSizes.appendChild(sizeS);

    const sizeM = document.createElement("span");
    sizeM.textContent = "M";
    sizeM.classList.add("mr-5", "size-mark");
    itemBottomSizes.appendChild(sizeM);

    const sizeL = document.createElement("span");
    sizeL.classList.add("size-mark")
    sizeL.textContent = "L";
    itemBottomSizes.appendChild(sizeL);

    const itemBottomHeart = document.createElement("img");
    itemBottomHeart.src = "img/heart.svg"
    itemBottom.appendChild(itemBottomHeart);

    listItem.appendChild(itemImg);
    listItem.appendChild(itemInfo);
    list.appendChild(listItem);
  });

  return list;
}

const list = generateList(items);
document.getElementById("clothes-list").appendChild(list)
