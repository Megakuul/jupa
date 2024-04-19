<script>
  import founding from "$lib/assets/timeline/founding.webp"
  import approval from "$lib/assets/timeline/approval.webp"
  import initiative from "$lib/assets/timeline/initiative.webp"
  import maria from "$lib/assets/executive/maria.webp"
  import domi from "$lib/assets/executive/domi.webp"
  import laura from "$lib/assets/executive/laura.webp"
  import louis from "$lib/assets/executive/louis.webp"
  import nicolas from "$lib/assets/executive/nicolas.webp"

  /** @type {executiveProperties[]} */
  let executiveListFirstRow = [
    {
      name: "Maria Rigon",
      age: "24",
      description: "Co-Präsidium, Finanzen",
      image: maria,
      flipped: false,
    }, {
      name: "Dominik Jaggi",
      age: "16",
      description: "Co-Präsidium, Projekte",
      image: domi,
      flipped: false,
    }
  ]

  /** @type {executiveProperties[]} */
  let executiveListSecondRow = [
    {
      name: "Laura Camenzind",
      age: "19",
      description: "Administration",
      image: laura,
      flipped: false,
    }, {
      name: "Louis Tagmann",
      age: "17",
      description: "Events",
      image: louis,
      flipped: false,
    }, {
      name: "Nicolas Mezger",
      age: "18",
      description: "Social Media & Website", // +Professioneller Goofy
      image: nicolas,
      flipped: false,
    }
  ]

  /** @type {timelineProperties[]}*/
  let timelineList = [
    {
      date: "September 2023",
      title: "Gründung",
      description: "Offizielle Gründung, Wahl des ersten Vorstands und Verabschiedung der ersten Statuten des Jugendparlament Thun im Rathaus mit über 40 Jugendlichen!",
      iconindex: 2,
      image: founding
    }, {
      date: "Juli 2023",
      title: "Genehmigung durch den Stadtrat",
      description: "Am 6. Juli 2023 genehmigte der Stadtrat das Reglement über das Jugendparlament mit 37 zu 0 Stimmen (bei einer Enthaltung)!",
      iconindex: 1,
      image: approval
    }, {
      date: "Februar 2022",
      title: "Jugendvorstoss",
      description: "Im Februar 2022 haben Ronja Grieder und Dominik Jaggi einen von 45 Jugendlichen unterschriebenen Jugendvorstoss bei der Stadtkanzlei in Thun eingereicht.",
      iconindex: 0,
      image: initiative
    },
  ]
</script>

<svelte:head>
	<title>Über uns – JuPa Thun</title>
	<meta name="description" 
  content="Erfahre mehr über den Vorstand und die Geschichte vom Jugendparlament Thun." 
  />
</svelte:head>

<h1 class="text-3xl sm:text-6xl text-center mt-10 mb-20">Unser Vorstand</h1>

<ul class="flex flex-wrap justify-around items-center my-10 sm:mx-20">
  {#each executiveListFirstRow as props}
  <li class="my-10">
      {#if props.flipped}
      <button class="rounded-badge bg-base-200 flip shadow-xl" on:click={() => {props.flipped = !props.flipped}}>
        <div class="h-72 w-72 sm:h-96 sm:w-96 p-8 flex flex-col justify-center items-center shadow-inner">
          <h3 class="text-lg sm:text-xl font-semibold">{props.name}, {props.age}</h3>
          <p>{props.description}</p>
        </div>
      </button>
      {:else}
      <button class="rounded-badge bg-base-200 overflow-hidden flip shadow-xl" on:click={() => {props.flipped = !props.flipped}}>
        <img class="h-[282px] w-72 sm:h-[378px] sm:w-96 hover:scale-110 transition-transform duration-700" 
          src={props.image} alt={props.name} />
      </button>
      {/if}
  </li>
  {/each}
</ul>

<ul class="flex flex-wrap justify-around items-center my-10 sm:mx-20">
  {#each executiveListSecondRow as props}
  <li class="my-10">
      {#if props.flipped}
      <button class="rounded-badge bg-base-200 flip shadow-xl" on:click={() => {props.flipped = !props.flipped}}>
        <div class="h-72 w-72 sm:h-80 sm:w-80 p-8 flex flex-col justify-center items-center shadow-inner">
          <h3 class="text-lg sm:text-xl font-semibold">{props.name}, {props.age}</h3>
          <p>{props.description}</p>
        </div>
      </button>
      {:else}
      <button class="rounded-badge bg-base-200 overflow-hidden flip shadow-xl" on:click={() => {props.flipped = !props.flipped}}>
        <img class="h-[282px] w-72 sm:h-[314px] sm:w-80 select-none hover:scale-110 transition-transform duration-700" 
          src={props.image} alt={props.name} />
      </button>
      {/if}
  </li>
  {/each}
</ul>

<center>
  <hr class="w-4/5 h-2 my-20 rounded-xl bg-slate-200 opacity-60 border-none">
</center>

<h1 class="text-3xl sm:text-6xl text-center mt-10 mb-32">Unsere Geschichte</h1>

<ul class="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
  {#each timelineList as props, i}
  <li>
    <!-- Center Icons -->
    <div class="timeline-middle">
      {#if props.iconindex===0}
      <!-- Write -->
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 21" class="h-7 w-7">
        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 4a2.121 2.121 0 0 1 0 3l-9.5 9.5l-4 1l1-3.944l9.504-9.552a2.116 2.116 0 0 1 2.864-.125zM9.5 17.5h8m-2-11l1 1" />
      </svg>
      {:else if props.iconindex===1}
      <!-- Approval -->
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-7 w-7">
        <path fill="currentColor" d="m23 12l-2.44-2.78l.34-3.68l-3.61-.82l-1.89-3.18L12 3L8.6 1.54L6.71 4.72l-3.61.81l.34 3.68L1 12l2.44 2.78l-.34 3.69l3.61.82l1.89 3.18L12 21l3.4 1.46l1.89-3.18l3.61-.82l-.34-3.68zm-13 5l-4-4l1.41-1.41L10 14.17l6.59-6.59L18 9z" />
      </svg>
      {:else if props.iconindex===2}
      <!-- Flag -->
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-7 w-7">
        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a5 5 0 0 1 7 0a5 5 0 0 0 7 0v9a5 5 0 0 1-7 0a5 5 0 0 0-7 0zm0 16v-7" />
      </svg>
      {/if}
    </div>

    <div class="{(i & 1) ? "timeline-start" : "timeline-end"} flex flex-col justify-center items-center mb-10">
      <div class="card w-11/12 sm:w-8/12 bg-base-100 shadow-xl mb-10">
        <figure><img class="cursor-pointer hover:scale-110 transition-transform duration-700" src={props.image} alt={props.title} /></figure>
        <div class="card-body">
          <time class="font-mono italic">{props.date}</time>
          <h2 class="card-title">{props.title}</h2>
          <p>{props.description}</p>
        </div>
      </div>
    </div>
    <hr/>
  </li>
  {/each}
</ul>

<style>
  .flip {
    animation: flip .8s linear;
  }

  @keyframes flip {
    0% {
      transform: rotateY(0deg);
      filter: brightness(0%);
    }
    40% {
      transform: rotateY(90deg);
    }
    60% {
      filter: brightness(0%);
    }
    100% {
      transform: rotateY(0deg);
      filter: brightness(100%);
    }
  }
</style>