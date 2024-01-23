import { get, writable } from 'svelte/store';

//Snippet store
export const snippetStore = writable<CodeSnippet[]>([]);

//add snippet
export function addSnippet(input: CodeSnippetInput) {
	const snippets = get(snippetStore); //get and listen to changes of value of snippet store
	snippetStore.update(() => {
		return [{ ...input, favorite: false }, ...snippets];
	});
}

//delete snippet
export function deleteSnippet(index: number) {
	const snippets = get(snippetStore); //get and listen to changes of value of snippet store
	snippets.splice(index, 1); //remove one time splice(index, noOFitem)
	snippetStore.update(() => {
		return snippets;
	});
}

//toggle favorite
export function toggleFavorite(index: number) {
	const snippets = get(snippetStore); //get and listen to changes of value of snippet store
	snippetStore.update(() => {
		return snippets.map((data, dataIndex) => {
			if (index == dataIndex) {
				return { ...data, favorite: !data.favorite };
			}
            return data;
		});
	});
}
