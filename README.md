# website-daytrip

Booking website for **DayTrip** (daytrip.ma), the customer brand of Atlas Wings, a Marrakech travel company: day trips, excursions, circuits and transport.

Right now this is an empty scaffold with a single "Coming soon" page. Booking flow, database, back office and payments (Stripe + PayPal) come later.

## Stack

- [Astro](https://astro.build) (TypeScript strict), static output by default
- Hosted on Vercel via `@astrojs/vercel`
- Node 24 (see `.nvmrc`), npm

## Commands

```bash
npm install
npm run dev      # local dev server at http://localhost:4321
npm run build    # production build
npm run preview  # preview the build locally
```

## Before launch

The domain is live, so indexing is blocked until the real site is ready. Remove all three (search for `TODO(launch)`):

- [ ] `src/pages/index.astro`: remove `<meta name="robots" content="noindex, nofollow">`
- [ ] `public/robots.txt`: replace `Disallow: /` with the real rules and a `Sitemap:` line
- [ ] `vercel.json`: remove the `X-Robots-Tag: noindex` header (note sits in `astro.config.mjs`)

## License

See [LICENSE](LICENSE).
