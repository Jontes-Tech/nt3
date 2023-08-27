const languages = {
  af: 'Afrikaans',
  sq: 'Albanian',
  sm: 'Amharic',
  ar: 'Arabic',
  az: 'Azerbaijani',
  eu: 'Basque',
  be: 'Belarusian',
  bn: 'Bengali',
  bh: 'Bihari',
  bs: 'Bosnian',
  bg: 'Bulgarian',
  ca: 'Catalan',
  'zh-CN': 'Chinese (Simplified)',
  'zh-TW': 'Chinese (Traditional)',
  hr: 'Croatian',
  cs: 'Czech',
  da: 'Danish',
  nl: 'Dutch',
  en: 'English',
  eo: 'Esperanto',
  et: 'Estonian',
  fo: 'Faroese',
  fi: 'Finnish',
  fr: 'French',
  fy: 'Frisian',
  gl: 'Galician',
  ka: 'Georgian',
  de: 'German',
  el: 'Greek',
  gu: 'Gujarati',
  iw: 'Hebrew',
  hi: 'Hindi',
  hu: 'Hungarian',
  is: 'Icelandic',
  id: 'Indonesian',
  ia: 'Interlingua',
  ga: 'Irish',
  it: 'Italian',
  ja: 'Japanese',
  jw: 'Javanese',
  kn: 'Kannada',
  ko: 'Korean',
  la: 'Latin',
  lv: 'Latvian',
  lt: 'Lithuanian',
  mk: 'Macedonian',
  ms: 'Malay',
  ml: 'Malayam',
  mt: 'Maltese',
  mr: 'Marathi',
  ne: 'Nepali',
  no: 'Norwegian',
  nn: 'Norwegian (Nynorsk)',
  oc: 'Occitan',
  fa: 'Persian',
  pl: 'Polish',
  'pt-BR': 'Portuguese (Brazil)',
  'pt-PT': 'Portuguese (Portugal)',
  pa: 'Punjabi',
  ro: 'Romanian',
  ru: 'Russian',
  'gd': 'Scots Gaelic',
  sr: 'Serbian',
  si: 'Sinhalese',
  sk: 'Slovak',
  sl: 'Slovenian',
  es: 'Spanish',
  su: 'Sudanese',
  sw: 'Swahili',
  sv: 'Swedish',
  tl: 'Tagalog',
  ta: 'Tamil',
  te: 'Telugu',
  th: 'Thai',
  ti: 'Tigrinya',
  tr: 'Turkish',
  uk: 'Ukrainian',
  ur: 'Urdu',
  uz: 'Uzbek',
  vi: 'Vietnamese',
  cy: 'Welsh',
  xh: 'Xhosa',
  zu: 'Zulu'
};

const options = Object.entries(languages).map(([code, name]) => {
  return `<option value="${code}">${name}</option>`;
});

console.log(options.join('\n'));

