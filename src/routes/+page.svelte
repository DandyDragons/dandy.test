<script>
  import Popups from "$lib/Components/Popups.svelte";
  const nfts = [
    "/imgs/dandy26.svg",
    "/imgs/dandy71.svg",
    "/imgs/dandy141.svg",
    "/imgs/dandy155.svg",
  ];
  const max = nfts.length;
  const min = -1;
  let selected = 0;
  const prev = () => {
    selected - 1 === min ? (selected = max - 1) : (selected -= 1);
  };
  const next = () => {
    selected + 1 === max ? (selected = 0) : (selected += 1);
  };
  setInterval(next, 3500);
</script>

<main class="min-h-screen">
  <article class="flex flex-row max-h-1/5 my-8 px-1 justify-evenly">
    <section class="text-[36px] w-1/2 font-semibold text-black/95 p-2">
      <h1 class="tracking-wide uppercase font-bold leading-relaxed p-5">
        <div class="tracking-[.04em]">Welcome</div>
        <div>
          To <a
            href="/"
            class="bg-dandy_dragon_hero_gradient bg-clip-text text-transparent font-bold tracking-[-.01em]"
            >Dandy Dragons</a
          >
        </div>
        <div class="tracking-[.08em]">A super collection</div>
        <div class="tracking-[-.02em]">
          Made by <a
            href="/"
            class="bg-dandy_team_gradient text-transparent bg-clip-text font-bold"
            >DandyTeam</a
          >
        </div>
      </h1>
    </section>
    <section
      class="flex flex-col justify-center items-center w-1/2 select-none"
    >
      <div class=" relative flex flex-row justify-center items-baseline">
        <img
          src={selected - 1 === min ? nfts[max - 1] : nfts[selected - 1]}
          alt="nft"
          class="carousel-imgs"
        />
        <img
          src={nfts[selected]}
          alt="nft"
          class="carousel-imgs w-[156.72px] h-[199.65px]"
        />
        <img
          src={selected + 1 === max ? nfts[0] : nfts[selected + 1]}
          alt="nft"
          class="carousel-imgs"
        />
        <div
          class="absolute flex flex-row z-50 justify-between items-center top-4 left-0 w-full h-full"
        >
          <button on:click={prev} class="carousel-btn rounded-r-md">
            &#10094;
          </button>
          <button on:click={next} class="carousel-btn rounded-l-md">
            &#10095;
          </button>
        </div>
        <img
          src="/imgs/carousel_bg.svg"
          alt="bg"
          class="absolute -bottom-10 right-0 left-0 -z-50"
        />
      </div>
      <div class="flex justify-around mt-5">
        {#each nfts as d, i}
          <div class={selected === i ? "dot bg-[#00B0FC]" : "dot"} />
        {/each}
      </div>
    </section>
  </article>
  <article id="About" class="max-h-1/5 my-3 px-1.5 justify-evenly">
    <div
      class="relative flex flex-col items-center px-40 justify-center w-full h-full bg-[#181818] rounded-md text-white"
    >
      <h2 class="font-[625] text-[28px] m-3 text-center">ABOUT</h2>
      <h3 class="text-2xl font-semibold pl-6 my-4">
        <span
          class="bg-dandy_dragon_about_gradient bg-clip-text text-transparent font-bold"
          >Dandy Dragons</span
        >
        is a collection of 5,000 Dragon
        <Popups
          ><span class="text-[#0E8BFF] font-bold" slot="text">NFTs</span>
          <span slot="ptext">Non-Fungible Tokens</span>
        </Popups>
        based on polygon blockchain .
        <br /> This crazy collection is a full of suprises and we have a big ideas
        for this collection !
      </h3>
      <div class="flex flex-row justify-center items-center my-6">
        <div
          class="flex flex-col justify-center items-center m-1.5 mx-2.5 font-semibold"
        >
          <span class="text-[#676767] mb-1">READ OUR</span>
          <button
            class="flex flex-row justify-center items-center w-[12rem] h-[3.05rem] rounded-[38px] bg-Blue_about_button_gradient pr-2"
          >
            <img
              src="/icons/paper_icon.svg"
              alt="paper-icon"
              class="pr-1 select-none"
            />
            WHITE PAPER</button
          >
        </div>
        <div
          class="flex flex-col justify-center items-center my-1.5 mx-2.5 font-semibold"
        >
          <span class="text-[#676767] mb-1">FREQUENTLY ASKED</span>
          <button
            class="flex flex-row justify-center items-center w-[12rem] h-[3.05rem] rounded-[38px] bg-Red_about_button_gradient pr-2"
            ><img
              src="/icons/questionmark_icon.svg"
              alt="questionmark-icon"
              class="pr-1 select-none"
            />
            QUESTIONS</button
          >
        </div>
        <div class="absolute bottom-0 left-2.5 select-none">
          <img src="/imgs/dandyabout.svg" alt="Dragon" />
        </div>
      </div>
    </div>
  </article>
</main>
<footer
  class="flex flex-col justify-center items-center relative h-[38rem] mt-8"
>
  <h3 class="text-4xl font-[750] text-center tracking-[.19em] h-64 pl-4">
    WHAT WILL BE NEXT <br /> DRAGON ?!
  </h3>
  <div
    class=" flex flex-row absolute bottom-0 left-0 w-full text-slate-50 pb-1.5"
  >
    <svg
      class="mb-1 mx-2 mt-14"
      width="284"
      height="86"
      viewBox="0 0 293 95"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.25 41.875V19.725C4.15 19.625 3.9 19.325 3.5 18.925C3.1 18.525 2.7 18.075 2.3 17.575C1.85 17.075 1.45 16.525 1.05 15.925C0.65 15.375 0.35 14.875 0.25 14.375H34.5C34.9 14.375 35.35 14.575 35.85 14.925C36.3 15.275 36.75 15.725 37.15 16.225C37.55 16.775 37.85 17.325 38.1 17.925C38.35 18.525 38.5 19.025 38.5 19.425V36.825C38.5 37.325 38.35 37.825 38.1 38.375C37.85 38.975 37.55 39.525 37.15 40.025C36.75 40.575 36.3 41.025 35.85 41.375C35.35 41.725 34.9 41.875 34.5 41.875H4.25ZM28 33.175V23.075C28 22.875 27.9 22.675 27.75 22.475C27.55 22.275 27.4 22.125 27.25 22.125H14.75V34.125H27.25C27.4 34.125 27.55 34.025 27.75 33.825C27.9 33.625 28 33.375 28 33.175ZM71.865 41.875L70.265 38.575H57.6649L56.0649 41.875H45.0149L58.4149 14.375H69.565L82.915 41.875H71.865ZM63.965 25.225L61.2649 30.875H66.615L63.965 25.225ZM114.005 27.875V14.375H124.505V41.875H114.155L100.805 28.375V41.875H90.305V14.375H100.605L114.005 27.875ZM132.219 41.875V14.375H162.469C162.869 14.375 163.319 14.575 163.819 14.925C164.269 15.275 164.719 15.725 165.119 16.225C165.519 16.775 165.819 17.325 166.069 17.925C166.319 18.525 166.469 19.025 166.469 19.425V36.825C166.469 37.325 166.319 37.825 166.069 38.375C165.819 38.975 165.519 39.525 165.119 40.025C164.719 40.575 164.269 41.025 163.819 41.375C163.319 41.725 162.869 41.875 162.469 41.875H132.219ZM155.969 33.175V23.075C155.969 22.875 155.869 22.675 155.719 22.475C155.519 22.275 155.369 22.125 155.219 22.125H142.719V34.125H155.219C155.369 34.125 155.519 34.025 155.719 33.825C155.869 33.625 155.969 33.375 155.969 33.175ZM184.76 14.375H172.71L184.66 28.125V41.875H195.16V28.175L207.16 14.375H195.11L189.91 20.875L184.76 14.375Z"
        fill="white"
      />
      <path
        d="M4.25 83.75V61.6C4.15 61.5 3.9 61.2 3.5 60.8C3.1 60.4 2.7 59.95 2.3 59.45C1.85 58.95 1.45 58.4 1.05 57.8C0.65 57.25 0.35 56.75 0.25 56.25H34.5C34.9 56.25 35.35 56.45 35.85 56.8C36.3 57.15 36.75 57.6 37.15 58.1C37.55 58.65 37.85 59.2 38.1 59.8C38.35 60.4 38.5 60.9 38.5 61.3V78.7C38.5 79.2 38.35 79.7 38.1 80.25C37.85 80.85 37.55 81.4 37.15 81.9C36.75 82.45 36.3 82.9 35.85 83.25C35.35 83.6 34.9 83.75 34.5 83.75H4.25ZM28 75.05V64.95C28 64.75 27.9 64.55 27.75 64.35C27.55 64.15 27.4 64 27.25 64H14.75V76H27.25C27.4 76 27.55 75.9 27.75 75.7C27.9 75.5 28 75.25 28 75.05ZM80.4438 61.25V69.75C80.4438 70.85 80.3437 71.75 80.1937 72.55C80.0437 73.35 79.7437 74.05 79.3437 74.55C78.8937 75.1 78.2937 75.5 77.4937 75.8C76.6937 76.1 75.6938 76.25 74.4938 76.25H73.9937L81.8938 83.75H69.4938L59.0938 74V69H69.2437C69.6937 69 69.9438 68.7 69.9438 68.1V64.9C69.9438 64.7 69.8438 64.5 69.6938 64.3C69.5438 64.1 69.3937 64 69.2437 64H56.6937V83.75H46.1938V56.25H76.4937C76.8937 56.25 77.3438 56.45 77.8438 56.8C78.2938 57.15 78.6938 57.6 79.0938 58.1C79.4938 58.6 79.7938 59.15 80.0438 59.75C80.2938 60.35 80.4438 60.85 80.4438 61.25ZM114.707 83.75L113.107 80.45H100.507L98.9069 83.75H87.8569L101.257 56.25H112.407L125.757 83.75H114.707ZM106.807 67.1L104.107 72.75H109.457L106.807 67.1ZM162.568 83.75H136.218C135.768 83.75 135.318 83.6 134.868 83.25C134.368 82.9 133.968 82.45 133.568 81.95C133.168 81.45 132.868 80.9 132.618 80.3C132.368 79.75 132.268 79.25 132.268 78.75V61.25C132.268 60.85 132.368 60.35 132.618 59.75C132.868 59.15 133.168 58.6 133.568 58.1C133.968 57.6 134.368 57.15 134.868 56.8C135.318 56.45 135.768 56.25 136.218 56.25H166.518V64H143.468C143.268 64 143.118 64.15 142.968 64.35C142.818 64.55 142.768 64.75 142.768 64.9V75.1C142.768 75.3 142.818 75.5 142.968 75.7C143.068 75.9 143.268 76 143.468 76H155.318C155.468 76 155.618 75.9 155.768 75.7C155.918 75.5 156.018 75.3 156.018 75.1V73.85H146.868V66.15H166.518V78.75C166.518 79.25 166.368 79.75 166.118 80.3C165.868 80.9 165.568 81.45 165.168 81.95C164.768 82.45 164.368 82.9 163.918 83.25C163.418 83.6 162.968 83.75 162.568 83.75ZM204.531 83.75H178.181C177.731 83.75 177.281 83.6 176.831 83.25C176.331 82.9 175.931 82.45 175.531 81.95C175.131 81.45 174.831 80.9 174.581 80.3C174.331 79.75 174.231 79.25 174.231 78.75V61.25C174.231 60.85 174.331 60.35 174.581 59.75C174.831 59.15 175.131 58.6 175.531 58.1C175.931 57.6 176.331 57.15 176.831 56.8C177.281 56.45 177.731 56.25 178.181 56.25H204.531C204.931 56.25 205.381 56.45 205.881 56.8C206.331 57.15 206.731 57.6 207.131 58.1C207.531 58.6 207.831 59.15 208.081 59.75C208.331 60.35 208.481 60.85 208.481 61.25V78.75C208.481 79.25 208.331 79.75 208.081 80.3C207.831 80.9 207.531 81.45 207.131 81.95C206.731 82.45 206.331 82.9 205.881 83.25C205.381 83.6 204.931 83.75 204.531 83.75ZM197.981 75.1V64.9C197.981 64.7 197.881 64.5 197.731 64.3C197.581 64.1 197.431 64 197.281 64H185.431C185.231 64 185.081 64.15 184.931 64.35C184.781 64.55 184.731 64.75 184.731 64.9V75.1C184.731 75.3 184.781 75.5 184.931 75.7C185.031 75.9 185.231 76 185.431 76H197.281C197.431 76 197.581 75.9 197.731 75.7C197.881 75.5 197.981 75.3 197.981 75.1ZM239.894 69.75V56.25H250.394V83.75H240.044L226.694 70.25V83.75H216.194V56.25H226.494L239.894 69.75ZM262.058 83.75C261.608 83.75 261.158 83.6 260.708 83.25C260.208 82.9 259.808 82.45 259.408 81.95C259.008 81.45 258.708 80.9 258.458 80.3C258.208 79.75 258.108 79.25 258.108 78.75V74.1H268.608V75.15C268.608 75.35 268.658 75.55 268.808 75.75C268.958 75.95 269.108 76.05 269.308 76.05H279.958L260.208 69.65C259.758 69.4 259.308 69.05 258.908 68.65C258.508 68.25 258.208 67.8 258.108 67.3V61.25C258.108 60.85 258.208 60.35 258.458 59.75C258.708 59.15 259.008 58.6 259.408 58.1C259.808 57.6 260.208 57.15 260.708 56.8C261.158 56.45 261.608 56.25 262.058 56.25H287.158C287.558 56.25 288.008 56.45 288.508 56.8C288.958 57.15 289.358 57.6 289.758 58.1C290.158 58.6 290.458 59.15 290.708 59.75C290.958 60.35 291.108 60.85 291.108 61.25V65.9H280.608V64.85C280.608 64.65 280.508 64.45 280.358 64.25C280.208 64.05 280.058 63.95 279.908 63.95H269.258L289.008 70.35C289.508 70.7 289.958 71.05 290.358 71.4C290.708 71.8 290.958 72.2 291.108 72.7V78.75C291.108 79.25 290.958 79.75 290.708 80.3C290.458 80.9 290.158 81.45 289.758 81.95C289.358 82.45 288.958 82.9 288.508 83.25C288.008 83.6 287.558 83.75 287.158 83.75H262.058Z"
        fill="white"
      />
      <path
        d="M218.463 16.4501V17.3126H219.025C219.363 17.3126 219.588 17.2751 219.663 17.2001C219.738 17.1251 219.813 17.0126 219.813 16.8251C219.813 16.6376 219.663 16.4876 219.438 16.3751C219.475 16.4501 219.325 16.4501 218.988 16.4501H218.463ZM217.412 20.0126C217.45 20.0876 217.488 20.1251 217.563 20.1251C217.638 20.1626 217.675 20.2001 217.75 20.2751L217.713 20.2376C218.125 20.4251 218.463 20.5376 218.725 20.5751C218.988 20.6501 219.175 20.6501 219.25 20.6501H219.287C219.7 20.6501 220.188 20.5376 220.788 20.2751H220.713C220.788 20.2001 220.825 20.1626 220.863 20.1251L221.05 20.0126H220L219.663 19.1876L219.7 19.2251C219.475 18.9626 219.325 18.7751 219.175 18.6251L218.875 18.2876H218.613H218.463V20.0126H217.412ZM219.287 14.6876C218.125 14.6876 217.263 15.2126 216.663 16.1876V16.1501C216.363 16.7501 216.213 17.2376 216.213 17.6126C216.25 17.9126 216.288 18.1376 216.363 18.2876L216.663 19.1876L216.625 19.1501C216.7 19.3751 216.962 19.6751 217.412 20.0126V15.4751H218.988C219.663 15.4751 220.075 15.5501 220.225 15.7001H220.15C220.188 15.7751 220.225 15.7751 220.263 15.7751H220.338C220.338 15.8126 220.413 15.8126 220.488 15.8126C220.825 16.2626 221.013 16.5626 221.013 16.7501C221.013 17.4626 220.713 17.9126 220.113 18.0626C220.15 18.1376 220.187 18.2126 220.225 18.2501L220.413 18.4751C220.488 18.5501 220.525 18.6251 220.563 18.6626L220.675 18.8876L221.238 19.8251L221.575 19.4876C221.65 19.4126 221.763 19.2626 221.838 19.1126L221.8 19.1501C221.95 18.7376 222.062 18.4751 222.1 18.3251C222.137 18.2126 222.175 18.0251 222.25 17.7251L222.213 17.5376C222.213 17.1626 222.1 16.8251 221.95 16.4876C221.8 16.1501 221.575 15.8501 221.313 15.5876C221.05 15.3251 220.75 15.1001 220.413 14.9501C220.075 14.8001 219.738 14.6876 219.438 14.6876H219.287ZM219.287 13.6001C220.037 13.6001 220.675 13.8251 221.162 14.2001H221.125C221.8 14.5751 222.363 15.0626 222.738 15.7001C223.113 16.3751 223.338 17.0126 223.338 17.6501C223.338 18.2501 223.113 18.9251 222.663 19.6751H222.7C222.475 20.2751 221.987 20.7626 221.162 21.1751C220.787 21.4001 220.488 21.5126 220.338 21.5876C220.15 21.6626 219.963 21.7001 219.775 21.7001H219.287C218.462 21.7001 217.75 21.5501 217.188 21.1751C216.55 20.8001 216.063 20.3501 215.725 19.7501C215.35 19.1876 215.2 18.4751 215.2 17.6501C215.2 17.2001 215.2 16.9001 215.275 16.6751C215.35 16.4501 215.463 16.1876 215.65 15.8126L215.725 15.7376C216.138 15.0251 216.663 14.5001 217.263 14.2001C217.788 13.8251 218.462 13.6001 219.287 13.6001Z"
        fill="white"
      />
    </svg>
    <div class="flex flex-col items-start flex-1">
      <div class="h-1/2 flex flex-row justify-center items-end">
        <div
          class="flex flex-row justify-start items-center bg-[#272727] rounded-lg w-fit h-fit px-1 py-0.5"
        >
          <label
            class="footer-nav-link flex justify-center items-center bg-[#06A9DD]"
            for="EmailInput"
            ><img src="/icons/mail_icon.svg" alt="mail-icon" /></label
          >
          <form class="flex flex-row justify-center items-center w-fit text-xs">
            <input
              type="text"
              placeholder="Enter your e-mail for more!"
              class="h-[2.625rem] rounded-l-md ml-0.5 w-40 text-black outline-none p-1.5 bg-[#D1D1D1]"
            />
            <button
              type="submit"
              class="rounded-r-md bg-[#06A9DD] h-[2.625rem] w-6 flex justify-center items-center"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <g clip-path="url(#clip0_116_109)">
                  <path d="M16 0H0V16H16V0Z" fill="url(#pattern0)" />
                </g>
                <defs>
                  <pattern
                    id="pattern0"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                  >
                    <use
                      xlink:href="#image0_116_109"
                      transform="translate(0 0.0326087) scale(0.01 0.00934783)"
                    />
                  </pattern>
                  <clipPath id="clip0_116_109">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                  <image
                    id="image0_116_109"
                    width="100"
                    height="100"
                    xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAABmJLR0QA/wD/AP+gvaeTAAADrElEQVR4nO3du2tUQRSA8e+o+Oi0EXwUKqiVIAjiC41aBQz4wlZBEP8CUWMw+MZWBFtLUTBgYSNEJSaFiGilomijYqWVL9BjcW9QcJPcmb2bnTP3/CCQsDOTId/mZndvkgvOOeecc84555xzztkgdS2kqiuALcBCYGZd6ybuF/AJGBGRt3Us2HYQVd0BnAc2tL8d08aAfhEZbmeR6CCqOoMixPF2NpAZBS4CAyLyO2aBWW18co/xPwFOlu/3xy4QrDxM3Yud3wAK7Iw5fMUGGcN/ZkxlTEQ2hU4KDqKqy4BaHlE0wIrQR18zIj7J1og5TbU5dEJMkEURc5pqSeiEmCDzIuY0VfDXKiaI6yAPkhgPkhgPkhgPkhgPkhgPkhgPkhgPkhgPkhhLQW4C24ClwHrgKhB1Vi5l7ZwxnE6nReTMPx+/Bx6r6j3gBjC7O9uqn4XvkOfA2VY3iMgQsB/4Oa076iALQYZERCe6UUTukFEUC0G+TDUgpygWgqytMiiXKBaCHFDVlVUG5hDFQpC5wB1VrXTq2HoUC0EAVgP3VXVxlcFllN3A947uqgOsBAFYBQwHRLkL7MVYFEtBoAFRrAWBzKNYDAIZR4l5LesD8KTujUS6rKqHReTHVANF5K6qHgBukdFrX+apaq+qftPpMRi6P6uHrGjl4etot/cxkcYFARCR68DTbu+jlUYGKd3v9gZaaXKQJDU5yPZub6CVRgZR1UNUfFl/ujUuiKr2Ate6vY+JBD8xVNUjwJEO7CXGC6DSE0MAVe0j8SeGMc/UFwPr6t5IhFfAsYAYvRS/SpRsDLB7yHoFbBeRD1UGlzFuA3M6uqsaWAySbQywFyTrGGArSPYxwE6Ql0BPQIw+YAhjMcBGkO/ALhH5WGWwhYe2k7EQ5IaIvK4y0HoMsBHkWZVBOcQAG0HmTzUglxhgI8geLf6dYEs5xQAbQdYAA61uUNXdZBQD7PwF1aCqrgGuAG8oXk87SHFu3MKdqjIrQQD2lW9Zy+relQMPkhgPkhgPkhgPkhgPkhgPkhgPkhgPkhgPkpiYIN9q30W+voZOiAlS6VSqA4o//wsSE+RhxJymehQ6ITiIiLyjuACWm9xozJXbYn+o91Nc1se1pvy9FlWQqCDltZUuxcxtiHMi8iBmYjsnqE5R3BNO4BcHG6fABeB07AJ1XFiyp9zExnbXMm4UOBn7nTGuzkuvLqe45tISYEFd6ybuM8V/SB0pH+w455xzzjnnnHPOOdcYfwCGSmA3VdihIAAAAABJRU5ErkJggg=="
                  />
                </defs>
              </svg>
            </button>
          </form>
        </div>
        <nav class="bg-[#272727] rounded-lg w-fit h-fit p-0.5 ml-1">
          <ul class="flex">
            <li
              class="footer-nav-link bg-Blue_about_button_gradient w-[6rem] text-xs font-semibold leading-4 tracking-wide"
            >
              <a
                href="/"
                class="flex flex-row justify-center items-center pl-1.5"
              >
                <img
                  class="mr-2"
                  src="/icons/paper_icon.svg"
                  alt="paper-icon"
                  height="24"
                  width="24"
                />
                <span> WHITE PAPER</span>
              </a>
            </li>
            <li class="footer-nav-link bg-[#1DA1F2]">
              <a href="/"
                ><img src="/icons/twitter_icon.svg" alt="twitter-logo" /></a
              >
            </li>
            <li class="footer-nav-link bg-[#7289DA]">
              <a href="/"
                ><img src="/icons/discord_icon.svg" alt="discord-logo" /></a
              >
            </li>
            <li class="footer-nav-link bg-[#0088CC]">
              <a href="/"
                ><img src="/icons/telegram_icon.svg" alt="telegram-logo" /></a
              >
            </li>
            <li class="footer-nav-link bg-[#E1306C]">
              <a href="/"
                ><img src="/icons/instagram_icon.svg" alt="instagram-logo" /></a
              >
            </li>
            <li class="footer-nav-link bg-[#2081E2]">
              <a href="/"
                ><img
                  src="/icons/opensea_footer_icon.svg"
                  alt="opensea-logo"
                /></a
              >
            </li>
          </ul>
        </nav>
      </div>
      <div class="h-1/2 pt-8 w-full">
        <div
          class="flex justify-between py-0.5 px-4 mr-4 bg-[#272727] rounded-lg font-medium tracking-wide"
        >
          <h5>2022©DandyDragons</h5>
          <ul
            class="flex justify-center items-center flex-1 font-semibold text-sm text-[#807F7F]"
          >
            <li class="mx-1.5 text-[#275BDB] text-center">Terms&Conditions</li>
            <li>|</li>
            <li class="mx-1.5 text-[#275BDB] text-center">WhitePaper</li>
            <li>|</li>
            <li class="mx-1.5 text-[#275BDB] text-center">Privacy</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <img
    class="absolute -z-40 bottom-64 left-5"
    src="/imgs/footer_dragon.svg"
    alt="footer-dragon"
  />
  <svg
    class="absolute bottom-0 left-0 -z-20 w-full select-none"
    viewBox="0 0 948 280"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M949 213.051L916.967 180.076C884.933 147.102 820.867 81.1526 756.8 70.1611C692.733 59.1696 628.667 103.136 564.6 103.136C500.533 103.136 436.467 59.1696 372.4 31.6908C308.333 4.21199 244.267 -6.77953 180.2 4.21199C116.133 15.2035 84.914 31.4585 29 60.5C17.5214 66.4619 0 76.5 0 76.5C0 76.5 0 201.736 0 279H20.0333C52.0666 279 116.133 279 180.2 279C244.267 279 308.333 279 372.4 279C436.467 279 500.533 279 564.6 279C628.667 279 692.733 279 756.8 279C820.867 279 884.933 279 916.967 279H949V213.051Z"
      fill="#101010"
    />
  </svg>

  <svg
    class="absolute bottom-2 left-0 -z-30 w-full select-none"
    viewBox="0 0 970 290"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M970 220.988L937.677 186.785C905.354 152.582 840.707 84.1759 776.061 72.7749C711.414 61.3739 646.768 106.978 582.121 106.978C517.475 106.978 452.828 61.3739 388.182 32.8714C323.535 4.3689 258.889 -7.0321 194.242 4.3689C129.596 15.7699 64.9495 49.9729 32.6263 67.0744L0.303078 84.1759V289.394H32.6263C64.9495 289.394 129.596 289.394 194.242 289.394C258.889 289.394 323.535 289.394 388.182 289.394C452.828 289.394 517.475 289.394 582.121 289.394C646.768 289.394 711.414 289.394 776.061 289.394C840.707 289.394 905.354 289.394 937.677 289.394H970V220.988Z"
      fill="url(#paint0_linear_17_3)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_17_3"
        x1="970"
        y1="32.5043"
        x2="0.049205"
        y2="88.9578"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#4481EB" />
        <stop offset="1" stop-color="#04BEFE" />
      </linearGradient>
    </defs>
  </svg>
</footer>

<style>
  .carousel-imgs {
    filter: drop-shadow(-11px 7px 13px rgba(0, 0, 0, 0.39));
  }
</style>
