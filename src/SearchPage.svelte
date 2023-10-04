<script lang="ts">
  import { onMount } from "svelte";
  import Special from "./Special.svelte";
  import { writable } from "svelte/store";

  interface Result {
    title: string;
    link: URL;
    description: string;
    image?: string;
  }

  const urlParams = new URLSearchParams(window.location.search);
  const query = urlParams.get("query");
  const token = urlParams.get("token") || "";
  let results: Result[] = [];
  let loaded = false;
  let special: Result | null = null;
  if (!query) {
    console.log(query);
  } else {
    if (token) {
      history.replaceState({}, "", location.pathname + "?query=" + query);
    } else {
      window.location.href = "/intermediate?query=" + query;
    }
    const search = async () => {
      const res = await fetch(
        `https://searchapi.jontes.page/?country=${
          localStorage.getItem("language") || ""
        }&query=${encodeURIComponent(query)}&token=${encodeURIComponent(token)}`
      );
      if (res.status === 403) {
        window.location.href = "/intermediate?query=" + query;
      } else if (res.status === 429) {
        console.log(res.headers.get("x-ratelimit-reset"));
        alert(
          "You're searching too fast! You can't search for " +
            res.headers.get("x-ratelimit-reset") +
            " seconds."
        );
      } else if (!res.ok) {
        alert(
          "I ain't got no clue what happened, but it for sure wasn't good."
        );
      }
      const between = await res.json();
      between.forEach((result: Result) => {
        result.link = new URL(result.link);
      });
      const json: Result[] = between;
      // Find the first special domain, if any
      for (let i = 0; i < Math.min(6, json.length); i++) {
        if (
          specialDomains.includes(new URL(json[i].link).hostname) ||
          json[i].link.hostname.slice(-14) === ".wikipedia.org"
        ) {
          console.log("Found special domain", json[i]);
          json[i].link = new URL(json[i].link);
          special = json[i];
          json.splice(i, 1);
          break;
        }
      }
      results = json;
      loaded = true;
    };
    search();
  }
  const specialDomains = ["www.youtube.com", "jontes.page"];

  onMount(() => {
    const searching = document.getElementById("searching");
    let funnyTexts = [
      "Searching",
      "Still searching",
      "Something's most definitely wrong with your internet",
      "Nah, we screwed fam",
      "We're probably not gonna find anything",
      "But if we do, it's gonna be a miracle",
      "Eh, you might as well give up",
    ];
    const interval = setInterval(() => {
      if (loaded) {
        clearInterval(interval);
        if (searching?.innerText !== "Searching") {
          new Audio(
            "https://i1.theportalwiki.net/img/5/56/GLaDOS_05_part1_success-1.wav"
          ).play();
          // Haha, sneaky Portal reference
        }
        return;
      }
      if (searching) {
        const index = funnyTexts.indexOf(searching.innerText);
        if (index !== funnyTexts.length - 1) {
          searching.innerText = funnyTexts[index + 1];
        }
      }
    }, 2500);
  });
</script>

{#if loaded}
  <img
    src="/web.svg"
    alt="The Web Times"
    class="mb-2 mx-auto"
    draggable="false"
  />
  <Special {special} />
  <p class="text-2xl mt-12">Web Results</p>
  <ol class="mt-2">
    {#each results as result}
      <a href={result.link.href}>
        <li class="p-2 rounded bg-neutral-100 my-2">
          <span class="text-sm text-neutral-600"
            ><img
              src={"https://external-content.duckduckgo.com/ip3/" +
                result.link.hostname +
                ".ico"}
              alt=""
              class="h-8 w-8 bg-neutral-600 p-1 rounded inline mr-2"
            />{result.link.hostname}</span
          >
          <h2 class="text-lg">{result.title}</h2>
          <p class="text-sm text-neutral-600">{result.description}</p>
        </li>
      </a>
    {/each}
    Results by Google | I am paying, don't be evil
  </ol>
{:else}
  <img
    src="/web.svg"
    alt="The Web Times"
    class="mb-2 mx-auto"
    draggable="false"
  />
  <p class="text-2xl mt-12">
    <span id="searching">Searching</span>
  </p>
{/if}
