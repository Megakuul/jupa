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

<svg fill="none" viewBox="0 0 35 480" xmlns="http://www.w3.org/2000/svg" style="max-width: 100%; max-height: 100%;" class={$$restProps.class ? $$restProps.class : ''}>
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
    stroke-dasharray="{pathLength - (strokeOffset * pathLength)}, {strokeOffset * pathLength}"
    d="M5.50014 1C-0.500067 38 0.000143051 50.5 5.50015 92C26.2198 248.339 36.5207 281.046 17 379.5C5.50014 437.5 9.05124 447.743 5.50014 481" />
</svg>  
