<script>
  import { scrollto } from "svelte-scrollto";
</script>

<header class="header-container">
  <div class="header">
    <a href="/">
      <img src="/logo.svg" alt="logo" class="select-none w-[116px] h-[42px]" />
    </a>
    <nav class="nav">
      <a href="#About" use:scrollto={"#About"} class="nav-link">ABOUT</a>
      <a href="#Market" use:scrollto={"#Market"} class="nav-link">MARKET</a>
      <a href="#Roadmap" use:scrollto={"#Roadmap"} class="nav-link">ROADMAP</a>
      <a
        href="#Bedroom"
        use:scrollto={"#Bedroom"}
        class="nav-bedroom-link-container"
      >
        <span class="nav-bedroom-link"> BEDROOM </span>
        <img src="/icons/bedroom_icon.svg" alt="bedroom-icon" />
      </a>
    </nav>
    <div class="opensea-button-container">
      <button class="opensea-button">
        <img src="/icons/opensea_header_logo.svg" alt="opensea-logo" />
      </button>
    </div>
  </div>
</header>
