# Agency site

Next.js 15 (App Router) + Tailwind + TypeScript. Static by default, deploys to Vercel with no configuration.

## Run it

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open http://localhost:3000

`npm run typecheck` and `npm run build` both pass as shipped.

## Change the content before anything else

Everything a visitor reads lives in four files. No CMS needed yet.

| File | What it controls |
|---|---|
| `src/content/site.ts` | Company name, contact details, booking link, address. **Start here.** |
| `src/content/services.ts` | The five services. Order matters — index 0 is the bottom of the stack. |
| `src/content/cases.ts` | Case studies. Replace all three with real projects. |
| `src/content/team.ts` | People on the about page. |

## The design

Services render as strata, not as five identical cards: infrastructure is the
heaviest layer at the bottom, marketing sits on top. The point is that a client
can enter at any layer and grow into the others. That is the one deliberately
bold element — everything else is kept quiet so it lands.

- Type: Archivo (headings), Source Serif 4 (body). Serif body copy is what
  separates this from every competitor site running Inter.
- Colour: ink `#101A22`, stone `#E4E7E1`, pine `#2C6A5C` signal, brass `#B08A3E`
  hairlines on layer seams only.
- Motion: only where a person triggered it. No scroll reveals.

Tokens are in `tailwind.config.ts`.

## Contact form

`POST /api/contact` validates, drops honeypot submissions, then forwards to
`CRM_WEBHOOK_URL`. With no webhook set it logs to console so nothing is lost in
development. Point it at HubSpot, Zoho, or your own CRM.

## SEO already wired

- Per-page metadata and canonicals
- `ProfessionalService` and `Service` JSON-LD
- `sitemap.xml` and `robots.txt` generated from your content
- Every service gets its own indexable page — this is where search traffic comes from

## Before you launch

- [ ] Replace everything in `src/content/site.ts`
- [ ] Write three real case studies with real numbers
- [ ] Real team photographs in `src/app/about/page.tsx` (stock photos lose technical buyers)
- [ ] Set `NEXT_PUBLIC_SITE_URL` and `CRM_WEBHOOK_URL`
- [ ] Add OG images (`src/app/opengraph-image.tsx`)
- [ ] Verify in Google Search Console, submit the sitemap
- [ ] Google Business Profile if you serve a specific city

## Adding a CMS later

The content files are already shaped like CMS documents. Move `services`,
`cases` and `team` into Sanity or Payload as schemas with the same fields,
swap the imports for a fetch, and no page component has to change.

## If you need two languages

Do it now, not later. Add `i18n` routing under `src/app/[locale]/`, move the
content files to `src/content/<locale>/`, and add `hreflang` via
`alternates.languages` in the metadata. Retrofitting this onto a live site is
significantly more work.
