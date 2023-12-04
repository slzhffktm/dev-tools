<script>
	import { cn } from '@/utils';
	import { Button } from '$components/ui/button';

	/**
	 * @type string | null | undefined
	 */
	let className = undefined;
	export { className as class };

	/**
	 * @type { section: string, items: { title: string, icon: string, href: string, active?: boolean }[] }[]
	 */
	export let sidebarList;

	/**
	 * @type string
	 */
	export let selectedTitle;
</script>

<div class={cn('pb-12', className)}>
	<div class="space-y-4 py-4">
		{#each sidebarList as { section, items }}
			<div class="px-3 py-2">
				<h2 class="mb-2 px-4 text-lg font-semibold tracking-tight">
					{section}
				</h2>
				<div class="space-y-1">
					{#each items as { title, icon, href, active }}
						<Button
							variant={selectedTitle === title ? 'secondary' : 'ghost'}
							class="w-full justify-start"
							{href}
							on:click={() => {
								selectedTitle = title;
							}}
						>
							<i class="{icon} mr-2" />
							{title}
						</Button>
					{/each}
				</div>
			</div>
		{/each}
	</div>
</div>
