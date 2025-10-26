import React, { useEffect } from "react";

const GoogleTranslate = () => {
  useEffect(() => {
    // Check if the script already exists
    if (document.getElementById("google-translate-script")) return;

    // Define the callback function
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        { pageLanguage: "en" },
        "google_translate_element"
      );
    };

    // Create and append the script
    const script = document.createElement("script");
    script.id = "google-translate-script";
    script.src =
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    document.body.appendChild(script);
  }, []);

  return <div heigth="100px" id="google_translate_element"></div>;
};

export default GoogleTranslate;
