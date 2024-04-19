<script>
  import { tweened } from "svelte/motion";
  import { cubicInOut } from 'svelte/easing';
  import AnimatedLogo from "$lib/components/AnimatedLogo.svelte";

  // Store which updates the value in 1000ms to the next set value (in a cubic curve)
  /** @type {import('svelte/motion').Tweened<number>} */
    let iconStrokeOffset = tweened(0, {
    delay: 1000,
    duration: 4000,
    easing: cubicInOut,
  });

  // Recursively update animation direction after running animation is finished
  const iconAnimateCycle = () => {
    iconStrokeOffset.set($iconStrokeOffset === 0 ? 1 : 0).then(iconAnimateCycle);
  }

  iconAnimateCycle();
</script>

<footer class="footer p-10 bg-base-200 text-base-content">
  <nav>
    <h6 class="footer-title">EXPLORE</h6> 
    <a class="link link-hover" href="/">Home</a>
    <a class="link link-hover" href="/news">Aktuelles</a>
    <a class="link link-hover" href="/about">Über uns</a>
  </nav>
  <nav>
    <h6 class="footer-title">ORGANIZATION</h6> 
    <a class="link link-hover" href="/about">Über uns</a>
    <a class="link link-hover" href="https://forms.office.com/e/b0PNNjFqwt">Mitglied werden</a>
    <a class="link link-hover" href="https://linktr.ee/jupathun">Kontakt</a>
  </nav>
  <nav>
    <h6 class="footer-title">LEGAL</h6>
    <a class="link link-hover" href="/privacy-policy">Datenschutzerklärung</a>
    <a class="link link-hover" href="/imprint">Impressum</a>
  </nav>
</footer> 
<footer class="footer px-10 py-4 border-t bg-base-200 text-base-content border-base-300">
  <aside class="items-center grid-flow-col">
		<AnimatedLogo strokeWidth={50}
      strokeOffset={$iconStrokeOffset}
      fromColor="#757F9A" 
      toColor="#D7DDE8"
      class="drop-shadow-xl w-8/12 sm:w-6/12" 
    />
    <h3><b>JuPa Thun</b></h3>
  </aside> 
  <nav class="md:place-self-center md:justify-self-end">
    <div class="grid grid-flow-col gap-4">
      <a href="mailto:mailto:info@jupa-thun.ch">
        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="fill-current"> 
          <title id="email"> Email </title> 
          <path stroke="inherit" fill="inherit" d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"></path>
        </svg>
      </a>
      <a href="https://github.com/megakuul/jupa">
        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" class="fill-current">
          <title> GitHub </title>
          <path stroke="inherit" fill="inherit" clip-rule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"/>
        </svg>
      </a>
      <a href="https://www.instagram.com/jupa.thun">
        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1001 1001" class="fill-current">
          <title> Instagram </title>
          <path stroke="inherit" fill="inherit" class="cls-1" d="M295.42,6c-53.2,2.51-89.53,11-121.29,23.48-32.87,12.81-60.73,30-88.45,57.82S40.89,143,28.17,175.92c-12.31,31.83-20.65,68.19-23,121.42S2.3,367.68,2.56,503.46,3.42,656.26,6,709.6c2.54,53.19,11,89.51,23.48,121.28,12.83,32.87,30,60.72,57.83,88.45S143,964.09,176,976.83c31.8,12.29,68.17,20.67,121.39,23s70.35,2.87,206.09,2.61,152.83-.86,206.16-3.39S799.1,988,830.88,975.58c32.87-12.86,60.74-30,88.45-57.84S964.1,862,976.81,829.06c12.32-31.8,20.69-68.17,23-121.35,2.33-53.37,2.88-70.41,2.62-206.17s-.87-152.78-3.4-206.1-11-89.53-23.47-121.32c-12.85-32.87-30-60.7-57.82-88.45S862,40.87,829.07,28.19c-31.82-12.31-68.17-20.7-121.39-23S637.33,2.3,501.54,2.56,348.75,3.4,295.42,6m5.84,903.88c-48.75-2.12-75.22-10.22-92.86-17-23.36-9-40-19.88-57.58-37.29s-28.38-34.11-37.5-57.42c-6.85-17.64-15.1-44.08-17.38-92.83-2.48-52.69-3-68.51-3.29-202s.22-149.29,2.53-202c2.08-48.71,10.23-75.21,17-92.84,9-23.39,19.84-40,37.29-57.57s34.1-28.39,57.43-37.51c17.62-6.88,44.06-15.06,92.79-17.38,52.73-2.5,68.53-3,202-3.29s149.31.21,202.06,2.53c48.71,2.12,75.22,10.19,92.83,17,23.37,9,40,19.81,57.57,37.29s28.4,34.07,37.52,57.45c6.89,17.57,15.07,44,17.37,92.76,2.51,52.73,3.08,68.54,3.32,202s-.23,149.31-2.54,202c-2.13,48.75-10.21,75.23-17,92.89-9,23.35-19.85,40-37.31,57.56s-34.09,28.38-57.43,37.5c-17.6,6.87-44.07,15.07-92.76,17.39-52.73,2.48-68.53,3-202.05,3.29s-149.27-.25-202-2.53m407.6-674.61a60,60,0,1,0,59.88-60.1,60,60,0,0,0-59.88,60.1M245.77,503c.28,141.8,115.44,256.49,257.21,256.22S759.52,643.8,759.25,502,643.79,245.48,502,245.76,245.5,361.22,245.77,503m90.06-.18a166.67,166.67,0,1,1,167,166.34,166.65,166.65,0,0,1-167-166.34" transform="translate(-2.5 -2.5)"/>
        </svg>
      </a>
      <a href="https://www.tiktok.com/@jupa.thun">
        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" class="fill-current">
          <title> TikTok </title>
          <path stroke="inherit" fill="inherit" d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
        </svg>
      </a>
    </div>
  </nav>
</footer>