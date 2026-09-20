import { useEffect, useState } from "react";

const languages = [
  ["en", "English"],
  ["te", "తెలుగు"],
  ["hi", "हिन्दी"],
  ["mr", "मराठी"],
  ["kn", "ಕನ್ನಡ"],
  ["ta", "தமிழ்"],
];

function translatePage(language) {
  const googleSelect = document.querySelector(".goog-te-combo");
  if (!googleSelect) return;
  googleSelect.value = language;
  googleSelect.dispatchEvent(new Event("change"));
}

export function LanguageSelector() {
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "en,te,hi,mr,kn,ta",
          autoDisplay: false,
        },
        "google_translate_element",
      );
    };

    if (!document.querySelector('script[src*="translate.google.com"]')) {
      const script = document.createElement("script");
      script.src =
        "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    } else if (window.google?.translate) {
      window.googleTranslateElementInit();
    }
  }, []);

  const handleChange = (event) => {
    const nextLanguage = event.target.value;
    setLanguage(nextLanguage);
    translatePage(nextLanguage);
    window.setTimeout(() => translatePage(nextLanguage), 250);
  };

  return (
    <label className="language-selector" title="Translate page">
      <span aria-hidden="true">文</span>
      <select
        aria-label="Translate page"
        value={language}
        onChange={handleChange}
      >
        {languages.map(([code, label]) => (
          <option value={code} key={code}>
            {label}
          </option>
        ))}
      </select>
      <span className="google-translate-widget" id="google_translate_element" />
    </label>
  );
}
