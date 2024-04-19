<script>
import { Parallax, ParallaxLayer, StickyLayer } from "svelte-parallax";
import { clamp } from "$lib/util";

import AnimatedLogo from "$lib/components/AnimatedLogo.svelte";
import AnimatedStockhorn from "$lib/components/AnimatedStockhorn.svelte";

import group_portrait from "$lib/assets/group_portrait.webp";
import thun_icon from "$lib/assets/stadtthun.svg";
import dsj_icon from "$lib/assets/dsj.svg";
import okja_icon from "$lib/assets/okja.svg";
import future from "$lib/assets/whyparticipate/future.webp";
import diversity from "$lib/assets/whyparticipate/diversity.webp";
import vote from "$lib/assets/whyparticipate/vote.webp";
import community from "$lib/assets/whyparticipate/community.webp";

// Stroke offset of animated logo
/** @type {number} */
let logoStrokeOffset = 0;

// Stroke offset of animated line 1
/** @type {number} */
let stockhornStrokeOffset = 0;

/** @type {HTMLDialogElement}*/
let donateModal;

/** @type {whyParticipateProperties[]} */
let whyParticipateList = [
  {
    title: "Deine Zukunft",
    description: "Gestalte die Zukunft von Thun mit uns! Im Jugendparlament trägst du an der Entwicklung unserer Stadt bei und kannst echte Veränderungen bewirken.",
    image: future
  }, {
    title: "Deine Diversität",
    description: "Deine Einzigartigkeit ist unsere Stärke. Im Jugendparlament von Thun schätzen wir alle Hintergründe, Kulturen und Perspektiven.",
    image: diversity
  }, {
    title: "Deine Stimme",
    description: "Hier kannst du deine Meinung äussern und aktiv an Entscheidungen teilnehmen, die Thun betreffen. Deine Stimme zählt, und wir geben dir die Plattform, um gehört zu werden.",
    image: vote
  }, {
    title: "Deine Community",
    description: "Werde Teil unserer Community, die sich für die Interessen der Jugend in Thun einsetzt. Gemeinsam können wir viel bewirken!",
    image: community
  },
]

/** @type {partnerProperties[]} */
let partnerList = [
  {
    title: "DSJ FSPJ FSPG",
    link: "https://www.dsj.ch",
    image: dsj_icon
  }, {
    title: "Stadt Thun",
    link: "https://www.thun.ch",
    image: thun_icon
  }, {
    title: "Offene Kinder und Jugendarbeit",
    link: "https://www.thun.ch/kinderjugend/61874",
    image: okja_icon
  },
]

</script>

<svelte:head>
	<title>JuPa Thun</title>
	<meta name="description" 
  content="Deine Zukunft.
    Gestalte die Zukunft von Thun mit uns! Im Jugendparlament trägst du an der Entwicklung
    unserer Stadt bei und kannst echte Veränderungen bewirken." 
  />
</svelte:head>

<Parallax sections={3.5} config={{stiffness: 0.7, damping: 0.8}} >

  <StickyLayer rate={1} offset={{ top: 1.8, bottom: 2.5 }} onProgress={(progress) => {
    stockhornStrokeOffset = clamp(progress, 0, 1);
	}} class={"w-full flex flex-col justify-center pointer-events-none"}>
    <AnimatedStockhorn strokeWidth={8}
      strokeOffset={1 - stockhornStrokeOffset}
      fromColor="#757F9A" 
      toColor="#D7DDE8" 
      class="drop-shadow-xl w-full my-0 {stockhornStrokeOffset<=0 ? "opacity-0" : "opacity-20"} blur-sm transition-opacity" 
    />
	</StickyLayer>

	<StickyLayer rate={1} offset={{ top: 0, bottom: 1.3 }} onProgress={(progress) => {
    logoStrokeOffset = clamp(progress, 0, 1);
	}} class={"w-full flex flex-col lg:flex-row items-center justify-around"}>
		<AnimatedLogo strokeWidth={50}
      strokeOffset={logoStrokeOffset}
      fromColor="#757F9A" 
      toColor="#D7DDE8"
      class="drop-shadow-xl w-full sm:w-10/12 lg:w-6/12" 
    />
    <div class="mockup-phone w-11/12 sm:w-10/12 lg:w-5/12 sm:mx-0 shadow-md hover:shadow-lg">
      <div class="camera"></div> 
      <div class="display">
        <img alt="Portrait" 
          class="rounded-3xl cursor-pointer {logoStrokeOffset>=1 ? "brightness-0" : "brightness-90"} hover:brightness-100 hover:scale-125 transition-all duration-700" 
          src={group_portrait} 
        />
      </div>
    </div>
	</StickyLayer>

	<ParallaxLayer rate={0.5} offset={2.7} 
    class={"w-full flex flex-col"}>
    
    <div class="flex flex-col items-center justify-around my-10">
      <h1 class="text-2xl sm:text-5xl text-center">
        Die Jugend ist die <b>Zukunft</b>
        <br><br>
        <b>Wir</b> sind die <b>Zukunft</b>
      </h1>

      <a class="btn btn-wide my-20 hover:underline" href="https://forms.office.com/e/b0PNNjFqwt">Werde Mitglied</a>
    </div>
  </ParallaxLayer>
</Parallax>

<div class="flex flex-col items-center justify-around mb-10">
  <h1 class="text-2xl sm:text-5xl text-center mb-10">Wieso mitmachen?</h1>

  <div class="flex flex-wrap justify-center my-10 items-stretch">
  {#each whyParticipateList as props}
    <div class="card card-compact w-64 sm:w-96 bg-base-100 shadow-xl m-5 rounded-2xl border-inset border-4 border-slate-800 hover:border-4 hover:border-indigo-600 transition-all">
      <figure><img class="hover:scale-110 transition-transform duration-700 cursor-pointer" src="{props.image}" alt="{props.title}" /></figure>
      <div class="card-body">
        <h2 class="card-title">{props.title}</h2>
        <p>{props.description}</p>
      </div>
    </div>
  {/each}
  </div>
</div>

<center>
  <hr class="w-4/5 h-2 my-20 rounded-xl bg-slate-200 opacity-60 border-none">
</center>

<div class="flex flex-col items-center justify-around mt-20">
  <h1 class="text-2xl sm:text-5xl text-center my-10">Das offizielle Jugendparlament der Stadt Thun</h1>

  <p class="w-10/12 md:w-8/12 sm:w-1/2 text-center">
    Wir sind das offizielle Jugendparlament der Stadt Thun.  
    Gemäss dem Stadtratsbeschluss Nr. 67 vom 6. Juli 2023 halten wir uns an 
    <a class="cursor-pointer hover:underline" href="https://www.thun.ch/_docn/4545440/Reglement_ueber_das_Jugendparlament_RJP_SSG_142.1.pdf"><b>folgendes Reglement</b></a>.
    Unsere offizelle Gründung als Jugendparlament erfolgte am 14. September 2023 im Rathaus Thun.
    Hier findest du 
    <a class="cursor-pointer hover:underline" href="https://jupa-thun.ch/wp-content/uploads/2024/01/Statuten-Verein-JuPa-Thun.pdf"><b>unsere Statuten</b></a>. 
  </p>

  <img class="w-3/4 sm:w-1/3 opacity-90" src="{thun_icon}" alt="Stadt Thun" />

  <h2 class="text-xl sm:text-3xl text-center my-10">Unsere Partner</h2>

  <div class="w-3/4 sm:w-1/2 carousel rounded-box">
    {#each partnerList as props}
    <div class="carousel-item w-1/2 flex justify-center items-center">
      <a href="{props.link}">
        <img class="m-5 max-h-72 opacity-90" src="{props.image}" alt="{props.title}" />
      </a>
    </div>
    {/each}
  </div>

  <h2 class="text-xl sm:text-3xl text-center mt-20">Du willst das JuPa finanziell unterstützen?</h2>

  <button class="btn btn-wide my-20 hover:underline" on:click={() => donateModal.showModal()}>Spenden</button>
  <dialog bind:this={donateModal} class="modal modal-bottom sm:modal-middle">
    <div class="modal-box flex flex-col w-full sm:max-w-5xl">
      <h1 class="font-bold text-xl sm:text-3xl py-4">Spenden</h1>
      <p class="text-lg sm:text-xl pb-4">Überzeugt von uns?</p>
      <p class="py-4 text-start">
        Sie möchten die Zukunft mitgestalten und unsere Arbeit im Jugendparlament mit einem finanziellen Beitrag unterstützen?
      </p>
      <p class="py-4 text-start">
        Jede Spende hilft uns, unsere Visionen und Projekte für eine bessere Zukunft umzusetzen.
      </p>
      <p class="py-4 text-start">
        Vielen Dank für Ihre Unterstützung!
      </p>
      
      <p class="py-2 text-start"><b>IBAN: </b>CH03 0079 0016 6160 5857 2</p>
      <p class="py-2 text-start"><b>BIC: </b>KBBECH22XXX</p>
      <p class="py-2 text-start"><b>lautend auf: </b>Verein JuPa Thun</p>
      <p class="py-2 text-start"><b>Bank: </b>Kantonalbank AG BEKB | BCBE</p>

      <div class="modal-action">
        <form method="dialog">
          <button class="btn">Close</button>
        </form>
      </div>
    </div>
    <form method="dialog" class="modal-backdrop">
      <button>close</button>
    </form>
  </dialog>
</div>