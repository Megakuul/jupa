<script>
  import "$lib/tailwind.css";

	import Header from './Header.svelte';
  import Footer from './Footer.svelte';

</script>

<div class="main">
	<Header />

	<main>
		<slot />
	</main>

  <Footer />
</div>
