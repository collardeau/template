<script>
  import Header from "./components/Header.svelte";
  import Content from "./components/Content.svelte";

  let title = "awesome app";
  let links = [
    // todo: could we generate that?
    { name: "feed", href: "#/feed" },
    { name: "about", href: "#/about" }
  ];
</script>

<div class="app-wrapper ">
  <Header {title} {links} />
  <Content />
</div>
