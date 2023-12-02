import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';
/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		alias: {
			$components: 'src/lib/components',
			'$components/*': 'src/lib/components/*',
			$primitives: 'src/lib/primitives',
			'$primitives/*': 'src/lib/primitives/*',
			'@': 'src/lib',
			'@/*': 'src/lib/*'
		}
	},
	preprocess: vitePreprocess()
};
export default config;
