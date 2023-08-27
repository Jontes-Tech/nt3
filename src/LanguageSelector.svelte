<script>
  const oldLang = localStorage.getItem("language");
  let lang = oldLang || "";
</script>

<!-- Bas -->

<select
  class="p-2"
  bind:value={lang}
  on:change={() => {
    localStorage.setItem("language", lang);
    window.location.reload();
  }}
  style={{ width: "100%" }}
>
  <option value="">Default</option>
  <option value="af">Afrikaans</option>
  <option value="sq">Albanian</option>
  <option value="sm">Amharic</option>
  <option value="ar">Arabic</option>
  <option value="az">Azerbaijani</option>
  <option value="eu">Basque</option>
  <option value="be">Belarusian</option>
  <option value="bn">Bengali</option>
  <option value="bh">Bihari</option>
  <option value="bs">Bosnian</option>
  <option value="bg">Bulgarian</option>
  <option value="ca">Catalan</option>
  <option value="zh-CN">Chinese (Simplified)</option>
  <option value="zh-TW">Chinese (Traditional)</option>
  <option value="hr">Croatian</option>
  <option value="cs">Czech</option>
  <option value="da">Danish</option>
  <option value="nl">Dutch</option>
  <option value="en">English</option>
  <option value="eo">Esperanto</option>
  <option value="et">Estonian</option>
  <option value="fo">Faroese</option>
  <option value="fi">Finnish</option>
  <option value="fr">French</option>
  <option value="fy">Frisian</option>
  <option value="gl">Galician</option>
  <option value="ka">Georgian</option>
  <option value="de">German</option>
  <option value="el">Greek</option>
  <option value="gu">Gujarati</option>
  <option value="iw">Hebrew</option>
  <option value="hi">Hindi</option>
  <option value="hu">Hungarian</option>
  <option value="is">Icelandic</option>
  <option value="id">Indonesian</option>
  <option value="ia">Interlingua</option>
  <option value="ga">Irish</option>
  <option value="it">Italian</option>
  <option value="ja">Japanese</option>
  <option value="jw">Javanese</option>
  <option value="kn">Kannada</option>
  <option value="ko">Korean</option>
  <option value="la">Latin</option>
  <option value="lv">Latvian</option>
  <option value="lt">Lithuanian</option>
  <option value="mk">Macedonian</option>
  <option value="ms">Malay</option>
  <option value="ml">Malayam</option>
  <option value="mt">Maltese</option>
  <option value="mr">Marathi</option>
  <option value="ne">Nepali</option>
  <option value="no">Norwegian</option>
  <option value="nn">Norwegian (Nynorsk)</option>
  <option value="oc">Occitan</option>
  <option value="fa">Persian</option>
  <option value="pl">Polish</option>
  <option value="pt-BR">Portuguese (Brazil)</option>
  <option value="pt-PT">Portuguese (Portugal)</option>
  <option value="pa">Punjabi</option>
  <option value="ro">Romanian</option>
  <option value="ru">Russian</option>
  <option value="gd">Scots Gaelic</option>
  <option value="sr">Serbian</option>
  <option value="si">Sinhalese</option>
  <option value="sk">Slovak</option>
  <option value="sl">Slovenian</option>
  <option value="es">Spanish</option>
  <option value="su">Sudanese</option>
  <option value="sw">Swahili</option>
  <option value="sv">Swedish</option>
  <option value="tl">Tagalog</option>
  <option value="ta">Tamil</option>
  <option value="te">Telugu</option>
  <option value="th">Thai</option>
  <option value="ti">Tigrinya</option>
  <option value="tr">Turkish</option>
  <option value="uk">Ukrainian</option>
  <option value="ur">Urdu</option>
  <option value="uz">Uzbek</option>
  <option value="vi">Vietnamese</option>
  <option value="cy">Welsh</option>
  <option value="xh">Xhosa</option>
  <option value="zu">Zulu</option>
</select>
