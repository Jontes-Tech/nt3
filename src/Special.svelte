<script lang="ts">
  interface Result {
    title: string;
    link: URL;
    description: string;
    backgroundImage?: string;
  }
  export let special: Result | null;
  if (special && special.link.hostname.slice(-14) === ".wikipedia.org") {
    fetch(
      special.link.origin +
        "/api/rest_v1/page/summary/" +
        special.link.pathname.split("/").slice(-1)[0]
    )
      .then((res) => res.json())
      .then((res) => {
        if (!special) return;
        special.title = res.title
        special.backgroundImage = `https://wsrv.nl/?url=${res.originalimage.source}&w=896&h=280&fit=cover&a=attention`;
        console.log(special);
      });
  }
</script>

{#if special}
  {#if special.link.hostname === "www.youtube.com"}
    <iframe
      src={"https://yewtu.be/embed/" +
        new URL(special.link).searchParams.get("v")}
      class="rounded-t-xl shadow-lg"
      title="YouTube video player"
      width="100%"
      height="550"
      frameborder="0"
      allow="picture-in-picture"
      allowfullscreen
    />
    <p
      class="p-2 bg-neutral-800 outline-t outline-secondary rounded-b-xl text-white"
    >
      {special.title}
    </p>
  {:else if special.link.hostname === "jontes.page"}
    <section class="bg-neutral-100 dark:bg-neutral-900 w-full">
      <div
        class="grid max-w-screen-xl px-8 py-16 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12"
      >
        <div class="mr-auto place-self-center lg:col-span-7">
          <h1
            class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white"
          >
            Jonte's Page
          </h1>
          <p
            class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400"
          >
            A personal website by Jonatan Holmgren
          </p>

          <a
            href="https://jontes.page"
            class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center border bg-secondary rounded-lg"
          >
            Visit
          </a>
        </div>
        <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img
            src="https://jontes.page/images/avatar.webp"
            class="h-64 w-64 rounded-full"
            alt="Jonte"
          />
        </div>
      </div>
    </section>
  {:else if special.link.hostname.includes("wikipedia.org")}
    <!-- Section with special.backgroundImage as background, low brightness -->
    <a
      href={special.link.href}
      draggable="false"
      class="block bg-cover bg-center bg-no-repeat bg-fixed bg-neutral-100 dark:bg-neutral-900 p-12 h-[268px]"
      style={`background: linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6) ), url(https://wsrv.nl/?url=${special.backgroundImage}&w=896&h=280&fit=cover&a=attention); backdrop-filter: blur(10px); background-position: 0%; background-size: cover; backdrop-filter: blur(10px);`}
    >
      <div class="mr-auto place-self-center lg:col-span-7 text-white">
        <h1
          class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl"
        >
          {special.title}
        </h1>
        <p
          class="max-w-2xl mb-6 font-lightg:mb-8 md:text-lg lg:text-xl"
        >
          {special.description}
        </p>
      </div>
    </a>
    <span class="text-neutral-600">Thanks to Wikipedia and wsrv.nl</span>
  {/if}
{/if}
