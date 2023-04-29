import { addListElements, addListeners } from "./utils.js";

const addressList = document.querySelector(".address-list");
const addressInput = document.querySelector("#address");

export async function handleChange() {
  try {
    const query = addressInput.value;

    if (addressInput.value === "") {
      addressList.replaceChildren();
      return;
    }

    const response = await fetch(
      `https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/suggest?f=json&text=${query}&maxSuggestions=10`
    );

    if (!response.ok) {
      throw Error("Wrong request!");
    }

    const data = await response.json();
    addListElements(data.suggestions);
    addListeners();
  } catch (error) {
    alert(error.message);
  }
}
