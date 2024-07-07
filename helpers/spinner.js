const showSpinner = (selectorTag) => {
  const element = document.querySelector(selectorTag);

  const spinnerContainerTag = document.createElement("div");
  spinnerContainerTag.className = CLASS_SPINNER_LOADER_CONTAINER;

  const spinner = document.createElement("div");
  spinner.className = CLASS_SPINNER_LOADER;
  spinnerContainerTag.appendChild(spinner);

  element.appendChild(spinnerContainerTag);
};

const removeSpinner = (classItem) => {
  const spinnerLoaderContainer = document.querySelector(
    `.${CLASS_SPINNER_LOADER_CONTAINER}`
  );
  if (spinnerLoaderContainer) {
    spinnerLoaderContainer.remove();
  }
};

const scrollForSeeMessage = (tagHtmlSelector) => {
  const element = document.querySelector(tagHtmlSelector);
  element.scrollIntoView();
};

const ID_TAG_CONTENT_WRAPPER_TAG = "#body-page";
const CLASS_SPINNER_LOADER_CONTAINER = "spinner-loader-container";
const CLASS_SPINNER_LOADER = "spinner-loader";

export default {
  showSpinner,
  removeSpinner,
  scrollForSeeMessage,
  ID_TAG_CONTENT_WRAPPER_TAG,
  CLASS_SPINNER_LOADER_CONTAINER,
};
