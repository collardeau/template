<script>
  import Header from "./components/Header.svelte";
  import Main from "./components/Main.svelte";
  import Home from "./components/Home.svelte";

  let title = "My New App";
  let links = [{ id: "Home", href: "/" }, { id: "About", href: "/about" }];
</script>

<div class="antialiased text-gray-900 bg-gray-200 min-h-screen">
  <Header {title} {links} />
  <Main />
</div>
