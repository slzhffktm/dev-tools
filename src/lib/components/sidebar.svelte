<script lang="ts">
	import { cn } from '@/utils';
	import { Button } from '$components/ui/button';

	let className: string | null | undefined = undefined;
	export { className as class };

	/**
	 * @type []{ section: string, items: []{ title: string, icon: string } }
	 */
	export let sidebarList;
</script>

<div class={cn('pb-12', className)}>
	<div class="space-y-4 py-4">
		{#each sidebarList as { section, items }}
			<div class="px-3 py-2">
				<h2 class="mb-2 px-4 text-lg font-semibold tracking-tight">
					{section}
				</h2>
				<div class="space-y-1">
					{#each items as { title, icon }}
						<Button variant="secondary" class="w-full justify-start">
							<i class="{icon} mr-2" />
							{title}
						</Button>
					{/each}
				</div>
			</div>
		{/each}
	</div>
</div>
