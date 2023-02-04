export const LANGUAGES = [
  {
    language: "af",
    name: "Afrikaans",
  },
  {
    language: "ar",
    name: "Arabisch",
  },
  {
    language: "bg",
    name: "Bulgarisch",
  },
  {
    language: "zh",
    name: "Chinesisch (vereinfacht)",
    country: "CHN"
  },
  {
    language: "da",
    name: "Dänisch",
    country: "DNK"
  },
  {
    language: "de",
    name: "Deutsch",
    country: "DEU"
  },
  {
    language: "en",
    name: "Englisch",
    country: "GB-ENG"
  },
  {
    language: "fi",
    name: "Finnisch",
    country: "FIN"
  },
  {
    language: "fr",
    name: "Französisch",
    country: "FRA"
  },
  {
    language: "el",
    name: "Griechisch",
  },
  {
    language: "hi",
    name: "Hindi",
  },
  {
    language: "it",
    name: "Italienisch",
  },
  {
    language: "ja",
    name: "Japanisch",
  },
  {
    language: "ko",
    name: "Koreanisch",
  },
  {
    language: "hr",
    name: "Kroatisch",
  },
  {
    language: "la",
    name: "Latein",
  },
  {
    language: "nl",
    name: "Niederländisch",
  },
  {
    language: "no",
    name: "Norwegisch",
  },
  {
    language: "pl",
    name: "Polnisch",
  },
  {
    language: "pt",
    name: "Portugiesisch",
  },
  {
    language: "ro",
    name: "Rumänisch",
  },
  {
    language: "ru",
    name: "Russisch",
  },
  {
    language: "sv",
    name: "Schwedisch",
  },
  {
    language: "es",
    name: "Spanisch",
  },
  {
    language: "th",
    name: "Thailändisch",
  },
  {
    language: "cs",
    name: "Tschechisch",
  },
  {
    language: "tr",
    name: "Türkisch",
  },
  {
    language: "uk",
    name: "Ukrainisch",
  },
  {
    language: "hu",
    name: "Ungarisch",
  },
  {
    language: "vi",
    name: "Vietnamesisch",
  },
];

export function getRandomLanguage() {
  return LANGUAGES[Math.floor(Math.random() * LANGUAGES.length)];
}
