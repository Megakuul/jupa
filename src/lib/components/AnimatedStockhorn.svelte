<script>
  import { onMount } from "svelte";

  /** @type {number} */
  export let strokeOffset;
  /** @type {number} */
  export let strokeWidth;
  /** @type {string} */
  export let fromColor;
  /** @type {string} */
  export let toColor;

  /** @type {SVGPathElement} */
  let path;

  /** @type {number} */
  let pathLength = 0;

  onMount(() => {
    pathLength = path.getTotalLength();
  })
</script>

<svg fill="none" viewBox="1 0 519 138.5" xmlns="http://www.w3.org/2000/svg" style="max-width: 100%; max-height: 100%;" class={$$restProps.class ? $$restProps.class : ''}>
  <defs>
    <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:{fromColor}; stop-opacity:1" />
      <stop offset="100%" style="stop-color:{toColor}; stop-opacity:1" />
    </linearGradient>
  </defs>
  <path 
    bind:this={path}
    stroke="url(#gradient1)" 
    filter="url(#shadow)" 
    stroke-width="{strokeWidth}" 
    stroke-dasharray="{pathLength}" 
    stroke-dashoffset="{strokeOffset * pathLength}"  
    d="M0.5 113L70.5 120L132 126L149 113L223.5 95L242 41.5L246.5 9.5L269.5 2.5L291.5 6.5L311.5 9.5L348 120L379 113L449.5 120L519.5 141" />
</svg>  
