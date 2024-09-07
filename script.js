// Radio button border
const radioGroups = document.querySelectorAll(".radio-group-right");

radioGroups.forEach((group) => {
  const input = group.querySelector('input[type="radio"]');

  input.addEventListener("change", () => {
    radioGroups.forEach((g) => g.classList.remove("active"));

    if (input.checked) {
      group.classList.add("active");
    }
  });
});

const flagSelector = document.getElementById("flag-selector");

// changePrice
const countryPrices = {
  egypt: {
    regularPrice: 29.6,
    yourPrice: 28.4,
    discount: -9.6,
    setupFee: 0.0,
    totalPm: 227.2,
    currency: "EGP",
  },
  saudi: {
    regularPrice: 129.6,
    yourPrice: 128.4,
    discount: -7,
    setupFee: 0.0,
    totalPm: 327.2,
    currency: "SAR",
  },
  uae: {
    regularPrice: 229.6,
    yourPrice: 228.4,
    discount: -8,
    setupFee: 0.0,
    totalPm: 427.2,
    currency: "AED",
  },
};

const regularPriceElement = document.querySelector(".regular-price");
const yourPriceElement = document.querySelector(".your-price");
const discountElement = document.querySelector(".discount");
const setupFeeElement = document.querySelector(".setup-fee");
const totalPmElement = document.querySelector(".total-pm");

flagSelector.addEventListener("change", function () {
  const selectedCountry = this.value;

  const country = countryPrices[selectedCountry];

  regularPriceElement.textContent =
    country.regularPrice.toFixed(2) + country.currency;
  yourPriceElement.textContent =
    country.yourPrice.toFixed(2) + country.currency;
  discountElement.textContent = country.discount.toFixed(2) + country.currency;
  setupFeeElement.textContent = country.setupFee.toFixed(2) + country.currency;
  totalPmElement.textContent = country.totalPm.toFixed(2) + country.currency;
});
