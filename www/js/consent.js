(function () {
  "use strict";

  const consentKey = "nl-analytics-consent";
  const languageKey = "nl-language";
  const banner = document.querySelector("[data-consent-banner]");
  const acceptButton = document.querySelector("[data-consent-accept]");
  const declineButton = document.querySelector("[data-consent-decline]");
  const settingsButtons = document.querySelectorAll("[data-consent-settings]");

  function readPreference(key) {
    try {
      return window.localStorage.getItem(key);
    } catch (_error) {
      return null;
    }
  }

  function savePreference(key, value) {
    try {
      window.localStorage.setItem(key, value);
    } catch (_error) {
      // The choice still applies for the current page when storage is blocked.
    }
  }

  function showBanner() {
    if (!banner) return;
    banner.hidden = false;
  }

  function hideBanner() {
    if (!banner) return;
    banner.hidden = true;
  }

  function setConsent(value) {
    savePreference(consentKey, value);
    hideBanner();
    if (value === "granted") window.NLAnalytics?.load();
  }

  acceptButton?.addEventListener("click", function () {
    setConsent("granted");
  });

  declineButton?.addEventListener("click", function () {
    setConsent("denied");
  });

  settingsButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      showBanner();
      acceptButton?.focus();
    });
  });

  document.querySelectorAll("[data-language]").forEach(function (link) {
    link.addEventListener("click", function () {
      savePreference(languageKey, link.dataset.language);
    });
  });

  document.querySelectorAll("[data-event]").forEach(function (link) {
    link.addEventListener("click", function () {
      const eventType = link.dataset.event;
      const eventName = eventType === "contact" ? "contact_click" : "linkedin_click";
      window.NLAnalytics?.event(eventName, {
        link_url: link.href,
        page_language: document.documentElement.lang
      });
    });
  });

  const consent = readPreference(consentKey);
  if (consent === "granted") {
    window.NLAnalytics?.load();
  } else if (consent !== "denied") {
    showBanner();
  }
})();

