<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar, storeHighlightJs } from '@skeletonlabs/skeleton';
	import hljs from 'highlight.js';
	import 'highlight.js/styles/github-dark.css'
	storeHighlightJs.set(hljs)
</script>

<AppShell>
	<svelte:fragment slot="header">
		<AppBar>
			<h3>Navbar</h3>
		</AppBar>
	</svelte:fragment>
	<slot />
</AppShell>
