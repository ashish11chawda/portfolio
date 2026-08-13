# imashishchawda.web.app — rebuild

Static Next.js 16 site, exported to `out/`, served by Firebase Hosting.

## Editing content

**You should never need to open a `.tsx` file to update this site.**
Everything lives in [`src/content/profile.ts`](src/content/profile.ts).

Anything still wrapped in `TODO("...")` renders as an orange dashed chip on the page,
so unfilled content is impossible to ship by accident. When every chip is gone, you're done.

## Commands

```bash
npm run dev      # http://localhost:3000
npm run build    # type-checks, then writes out/
npm run lint
```

## Deploy

```bash
npm run build
firebase deploy --only hosting
```

`firebase.json` points `public` at `out/`, sets immutable caching on hashed assets,
and adds baseline security headers.

If this project isn't linked to your Firebase project yet:

```bash
firebase login
firebase use --add        # pick the project behind imashishchawda.web.app
```

## Still to do

- [ ] Replace every `TODO()` in `src/content/profile.ts`
- [ ] Add `public/og.png` (1200×630) — the link preview for LinkedIn/X
- [ ] Add `public/favicon.ico` and the apple-touch icons
- [ ] Point the custom domain (`ashish11chawda.tech`) at this deploy
