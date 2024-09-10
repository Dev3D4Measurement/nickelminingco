const defaultLanguage = "en";
let currentLanguage = localStorage.getItem("language") || defaultLanguage;

function changeLanguage(lang) {
  currentLanguage = lang;
  localStorage.setItem("language", lang);
  loadLanguageFile(lang);
}

function loadLanguageFile(lang) {
  fetch(`languages/${lang}.json`)
    .then((response) => response.json())
    .then((data) => {
      updateContent(data);
      updateMetaTags(data.meta);
      document.documentElement.lang = lang;
    })
    .catch((error) => {
      console.error("Error loading language file:", error);
      if (lang !== defaultLanguage) {
        console.log("Falling back to default language");
        loadLanguageFile(defaultLanguage);
      }
    });
}

function updateContent(data) {
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const keys = element.getAttribute("data-i18n").split(".");
    let value = data;
    for (const key of keys) {
      value = value && value[key];
    }
    if (value) {
      if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
        element.placeholder = value;
      } else {
        element.textContent = value;
      }
    }
  });
}

function updateMetaTags(metaData) {
  if (metaData) {
    document.title = metaData.title || "SBP";
    document
      .querySelector('meta[name="description"]')
      .setAttribute("content", metaData.description || "");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const languageSelect = document.getElementById("languageSelect");
  languageSelect.value = currentLanguage;
  languageSelect.addEventListener("change", (event) => {
    changeLanguage(event.target.value);
  });

  loadLanguageFile(currentLanguage);
});
