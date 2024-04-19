<script>
  import politpodium_dienstpflicht from "$lib/assets/news/politpodium_dienstpflicht.png"

  /** @enum {string} */
  const INFOTYPE = {
    EVENT: 'Event',
    INFO: 'Information',
    MISC: 'Sonstiges'
  };

  /** @type {infoProperties[]} */
  let newsList = [
    {
      title: "Politpodium Dienstpflicht",
      date: "24. April 2024",
      description: "📍 Bistro, Gymnasium Thun (Schadau)",
      image: politpodium_dienstpflicht,
      link: "politpodium-dienstpflicht",
      type: INFOTYPE.EVENT,
      completed: false,
    }, {
      title: "Vollversammlung",
      date: "26. März 2024",
      description: "📍 Rathaus Thun",
      image: "",
      link: "",
      type: INFOTYPE.EVENT,
      completed: true,
    }, {
      title: "Winterevent",
      date: "16. Dezember 2023",
      description: "📍 Quartierzentrum Lerchenfeld",
      image: "",
      link: "",
      type: INFOTYPE.EVENT,
      completed: true,
    }, {
      title: "Gründungsversammlung",
      date: "14. September 2023",
      description: "📍 Rathaus Thun",
      image: "",
      link: "",
      type: INFOTYPE.EVENT,
      completed: true,
    }
  ]
</script>

<svelte:head>
	<title>Aktuelles – JuPa Thun</title>
	<meta name="description" 
  content="Hier findest du alle aktuellen Termine und News." 
  />
</svelte:head>

<h1 class="text-3xl sm:text-6xl text-center mt-10 mb-5">Aktuelles & Termine</h1>
<h3 class="text-center mb-20">Hier findest du alle aktuellen Termine und News!</h3>

{#each newsList as props}
<a href="/news/{props.link}" class="card card-side h-64 bg-base-200 shadow-xl m-10 hover:border-8 transition-all" 
  class:border-violet-800={props.type === INFOTYPE.EVENT}
  class:border-blue-500={props.type === INFOTYPE.INFO}
  class:border-gray-700={props.type === INFOTYPE.MISC}
  class:pointer-events-none={!props.link}>

  {#if props.image}
  <figure><img class="h-full w-auto" src={props.image} alt={props.title}/></figure>
  {/if}
  <div class="card-body">
    <time>{props.date}</time>
    <h2 class="card-title">{props.title}</h2>
    <p>{props.description}</p>
    <div class="card-actions justify-end">
      {#if props.completed}
      <div class="p-2 opacity-50 rounded-lg bg-red-700 text-slate-100">Beendet</div>
      {/if}
      <div class="p-2 opacity-50 rounded-lg text-slate-100"
        class:bg-violet-800={props.type === INFOTYPE.EVENT}
        class:bg-blue-500={props.type === INFOTYPE.INFO}
        class:bg-gray-700={props.type === INFOTYPE.MISC}>
        {props.type}
      </div>
    </div>
  </div>
</a>
{/each}

<div class="chat chat-end mb-10">
  <div class="chat-bubble bg-base-200"><a class="link link-hover" href="https://forms.office.com/e/b0PNNjFqwt">Interesse Geweckt?</a></div>
</div>