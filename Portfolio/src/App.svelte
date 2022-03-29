<script lang="ts">
  import "bootstrap/dist/css/bootstrap.min.css";

  import NavBar from "./lib/NavBar.svelte";
  import Main from "./lib/Main.svelte";
  import Footer from "./lib/Footer.svelte";
</script>

<main>
  <NavBar />
  <Main />
  <Footer />
</main>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  main {
    text-align: center;
    color: gray;
    padding: 0;
    margin: 0;
  }
  img {
    height: 16rem;
    width: 16rem;
  }
  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4rem;
    font-weight: 100;
    line-height: 1.1;
    margin: 2rem auto;
    max-width: 14rem;
  }
  p {
    max-width: 14rem;
    margin: 1rem auto;
    line-height: 1.35;
  }
  @media (min-width: 480px) {
    h1 {
      max-width: none;
    }
    p {
      max-width: none;
    }
  }
</style>
