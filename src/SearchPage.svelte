<script lang="ts">
  import Special from "./Special.svelte";

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
    window.location.href = "/";
  } else {
    if (token) {
      history.replaceState({}, "", location.pathname + "?query=" + query);
    }
    const search = async () => {
      const res = await fetch(
        `https://searchapi.jontes.page/?country=${
          localStorage.getItem("language") || ""
        }&query=${encodeURIComponent(query)}&token=${encodeURIComponent(token)}`
      );
      if (res.status === 403) {
        window.location.href = "/intermediate?query=" + query;
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
    Results by Google | Please don't scrape this page
  </ol>
{:else}
  <div class="flex justify-center items-center h-screen">
    <div
      class="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32"
    />
  </div>
{/if}
