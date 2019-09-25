<script>
  import Header from "./components/Header.svelte";
  import Main from "./components/Main.svelte";

  let title = "my new app";
  let links = [
    { name: "feed", href: "/feed" },
    { name: "about", href: "/about" }
  ];
</script>

<div class="antialiased text-gray-900 bg-gray-200 min-h-screen">
  <Header {title} {links} />
  <Main />
</div>
