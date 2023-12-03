<script>
	import Sidebar from '$components/sidebar.svelte';
	import '../app.css';

	let sidebarList = [
		{
			section: 'Postgres',
			items: [
				{
					title: 'List to In Query',
					icon: 'fa-solid fa-list'
				}
			]
		}
	];
</script>

<div class="border-t">
	<div class="bg-background">
		<div class="grid grid-cols-1 md:grid-cols-5 gap-4">
			<Sidebar {sidebarList}></Sidebar>
			<slot />
		</div>
	</div>
</div>
