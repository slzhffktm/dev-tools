<script>
	import Sidebar from '$components/sidebar.svelte';
	import '../app.css';

	let sidebarList = [
		{
			section: 'Postgres',
			items: [
				{
					title: 'List to In Query',
					icon: 'fa-solid fa-list',
					href: '/postgres/list-to-in-query'
				},
				{
					title: 'List to Out Query',
					icon: 'fa-solid fa-list',
					href: '/postgres/list-to-in-query'
				}
			]
		}
	];

	let selectedTitle = 'List to In Query';
</script>

<div class="border-t">
	<div class="bg-background">
		<div class="grid grid-cols-1 md:grid-cols-5 gap-4">
			<Sidebar {sidebarList} bind:selectedTitle class="hidden lg:block" />
			<div class="w-full mx-5 mt-10">
				<h1 class="text-3xl font-bold">{selectedTitle}</h1>
				<slot />
			</div>
		</div>
	</div>
</div>
