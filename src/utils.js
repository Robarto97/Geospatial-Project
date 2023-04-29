import { handleChange } from "./fetchData.js";

const addressList = document.querySelector(".address-list");
const addressInput = document.querySelector("#address");

export function addListeners() {
  if (addressList.children.length > 0) {
    Array.from(addressList.children).forEach((list) => {
      list.addEventListener("click", handleClick);
    });
  }
}

function handleClick(e) {
  addressInput.value = e.target.textContent;
  if (addressList.children.length === 1) {
    addressList.replaceChildren();
    return;
  }
  handleChange();
}

export function addListElements(data) {
  addressList.replaceChildren();

  for (const item of data) {
    addressList.innerHTML += `<li>${item.text}</li>`;
  }
}
