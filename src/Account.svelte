<script>
  import { onMount } from "svelte";
  let token = "";
  onMount(() => {
    token = localStorage.getItem("token");
    const newToken =
      new URLSearchParams(window.location.search).get("token") || "";
    if (newToken) {
      localStorage.setItem("token", newToken);
        window.location.href = "/";
    }
    if (token) {
      const user = JSON.parse(
        Buffer.from(
          token.split(".")[1].replace(/-/g, "+").replace(/_/g, "/")
        ).toString("ascii")
      );
      console.log(user);
    }
  });
</script>

{#if token}
  <button
    on:click={() => {
      localStorage.removeItem("token");
      window.location.reload();
    }}
  >Log Out</button>
{:else}
  <a href="https://identity.nt3.me/?redirect=http://localhost:3001">Log In</a>
{/if}
