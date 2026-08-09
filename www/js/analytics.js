(function () {
  "use strict";

  const measurementId = document.documentElement.dataset.gaId || "";
  const validMeasurementId = /^G-[A-Z0-9]{6,14}$/.test(measurementId);
  let loaded = false;

  function load() {
    if (loaded || !validMeasurementId) return;

    window.dataLayer = window.dataLayer || [];
    window.gtag = function () {
      window.dataLayer.push(arguments);
    };
    window.gtag("js", new Date());
    window.gtag("config", measurementId, {
      anonymize_ip: true,
      allow_google_signals: false,
      allow_ad_personalization_signals: false
    });

    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
    document.head.appendChild(script);
    loaded = true;
  }

  function event(name, parameters) {
    if (!loaded || typeof window.gtag !== "function") return;
    window.gtag("event", name, parameters || {});
  }

  window.NLAnalytics = { load, event };
})();

