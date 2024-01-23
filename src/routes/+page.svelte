<!-- YOU CAN DELETE EVERYTHING IN THIS PAGE -->

<script lang="ts">
	import CodeCard from '../components/CodeCard.svelte';
	import { addSnippet, snippetStore } from '../stores/SnippetStore';

	let formData: CodeSnippetInput = {
		title: '',
		language: 'html',
		code: ''
	};

	snippetStore.set([
		{
			title: 'New snippet 1',
			language: 'html',
			code: '<div>Hello world !!</div>',
			favorite: false
		},
		{
			title: 'New snippet 2',
			language: 'css',
			code: `body{
				color:red;
			}`,
			favorite: false
		}
	]);
</script>

<div class="flex justify-center">
	<div class="grid grid-cols-1 gap-4 min-w-full md:min-w-[750px]">
		<p class="text-center py-6 h3">Create a code snippet</p>
		<div class="card rounded-md p-4 w-full text-token gap-5 flex flex-col">
			<label class="label">
				<span>Snippet Title</span>
				<input
					type="text"
					placeholder="Enter title here..."
					class="input px-5 rounded-md"
					bind:value={formData.title}
				/>
			</label>
			<label class="label">
				<span>Programming language</span>
				<select class="select rounded-md px-5" bind:value={formData.language}>
					<option value="html">HTML</option>
					<option value="css">CSS</option>
					<option value="javascript">Javascript</option>
				</select>
			</label>
			<label class="label">
				<span>Snippet Title</span>
				<textarea
					placeholder="Enter code here..."
					rows="4"
					class="textarea px-5 rounded-md"
					bind:value={formData.code}
				/>
			</label>
			<button
				on:click={() => addSnippet(formData)}
				class="bg-blue-500 text-white px-2 py-1 rounded-md hover:bg-opacity-80 transition duration-150"
				>Submit</button
			>
		</div>

		<div class="text-center py-6 flex flex-col gap-5">
			<p class="h3">My Code Snippets</p>
			{#each $snippetStore as snippetData, index}
				<CodeCard snippet={snippetData} {index} />
			{/each}
		</div>
	</div>
</div>
