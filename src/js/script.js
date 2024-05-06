"use strict";

// Connecting vendors (plugins)
import "./_vendor";

// Functions
import { accordion, dynamicAdaptive, mobileCheck, burger } from "./functions/";

// Components
// import { formValidation } from "./components/";

window.addEventListener("DOMContentLoaded", () => {
  accordion(".faq__body", "faq__question", ".faq__wrapper", "active");
  mobileCheck();
  dynamicAdaptive();
  burger();
});
