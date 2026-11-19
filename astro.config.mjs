// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
	site: 'https://daytrip.ma',
	trailingSlash: 'never',
	// Static by default; pages can opt in to on-demand rendering later.
	output: 'static',
	adapter: vercel(),
	// TODO(launch): vercel.json sends 'X-Robots-Tag: noindex' on every route (JSON has no comments,
	// so the note lives here). Remove that header before launch.
});
