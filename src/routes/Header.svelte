<script>
  import { tweened } from 'svelte/motion';
  import { cubicInOut } from 'svelte/easing';
  import AnimatedLogo from "$lib/components/AnimatedLogo.svelte";

  // Store which updates the value in 1000ms to the next set value (in a cubic curve)
  /** @type {import('svelte/motion').Tweened<number>} */
  let iconStrokeOffset = tweened(0, {
    duration: 4000,
    easing: cubicInOut,
  });

  // Recursively update animation direction after running animation is finished
  const iconAnimateCycle = () => {
    iconStrokeOffset.set($iconStrokeOffset === 0 ? 1 : 0).then(iconAnimateCycle);
  }

  iconAnimateCycle();
</script>

<div class="navbar bg-base-300">
  <div class="navbar-start">
    <div class="dropdown">
      <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a class="text-xl font-medium" href="/">Home</a></li>
        <li><a class="text-xl font-medium" href="/news">Aktuelles</a></li>
        <li><a class="text-xl font-medium" href="/about">Über uns</a></li>
        <li>
          <summary class="text-xl font-medium">Kontakt</summary>
          <ul class="p-2">
            <ul class="p-2">
              <li><a class="link link-hover m-[1px] text-lg" href="https://linktr.ee/jupathun">Linktree</a></li>
              <li><a class="link link-hover m-[1px] text-lg" href="https://www.instagram.com/jupa.thun/">Instagram</a></li>
              <li><a class="link link-hover m-[1px] text-lg" href="https://www.tiktok.com/@jupa.thun">TikTok</a></li>
            </ul>
          </ul>
        </li>
      </ul>
    </div>
    <a class="btn btn-ghost text-xl" href="/">
      <AnimatedLogo strokeWidth={40}
        strokeOffset={$iconStrokeOffset}
        fromColor="#757F9A" 
        toColor="#D7DDE8"
        class="drop-shadow-xl w-full opacity-85" 
      />
    </a>
  </div>
  <div class="navbar-end hidden lg:flex mr-6">
    <ul class="menu menu-horizontal px-1">
      <li><a class="text-xl font-medium" href="/">Home</a></li>
      <li><a class="text-xl font-medium" href="/news">Aktuelles</a></li>
      <li><a class="text-xl font-medium" href="/about">Über uns</a></li>
      <li>
        <details>
          <summary class="text-xl font-medium">Kontakt</summary>
          <ul class="p-2 bg-base-200 z-50">
            <li><a class="link link-hover m-[1px] text-lg" href="https://linktr.ee/jupathun">Linktree</a></li>
            <li><a class="link link-hover m-[1px] text-lg" href="https://www.instagram.com/jupa.thun/">Instagram</a></li>
            <li><a class="link link-hover m-[1px] text-lg" href="https://www.tiktok.com/@jupa.thun">TikTok</a></li>
          </ul>
        </details>
      </li>
    </ul>
  </div>
</div>
