<script lang="ts">
	import { CodeBlock } from '@skeletonlabs/skeleton';
	import { deleteSnippet, toggleFavorite } from '../stores/SnippetStore';

	export let snippet: CodeSnippet = {
		title: '',
		language: '',
		code: '',
		favorite: false
	};
	export let index: number;
</script>

<div class="card rounded-md p-2 pb-5 flex flex-col gap-4">
	<div class="flex justify-between items-center">
		<header class="p-4">
			{snippet.title}
		</header>
		<div class="float-right flex gap-2 justify-center items-center">
			<button on:click={() => toggleFavorite(index)} class="bg-white text-black px-2 py-1 rounded-md hover:bg-gray-200">{snippet.favorite ? 'Unfavorite' : 'Favorite'}</button>
			<button class="bg-red-500 text-white w-7 h-7 rounded-full" on:click={()=>deleteSnippet(index)}>X</button>
		</div>
	</div>
	<section class="text-start">
		<CodeBlock language={snippet.language} code={snippet.code} rounded="rounded-md"/>
	</section>
</div>
