# ROCKY ART – PROJECT DOCUMENTATION

**Project:** Rocky Art  
**Author:** David Rakovský  
**Website:** https://davidrakovsky.cz/  
**Repository:** dave-portfolio  
**Hosting:** GitHub Pages  
**Last updated:** 15 November 2026  
**Document status:** Initial version

---

# 1. PROJECT OVERVIEW

Rocky Art is a personal artistic portfolio and presentation of the creative work of David Rakovský.

The project combines two main areas:

1. Original artistic work – paintings, drawings and the Beneath.Surface collection.
2. Commissioned artwork – custom drawings and portraits created for customers.

The website serves as the central presentation platform for the artist, his work and available services.

The brand name is Rocky Art. The existing domain davidrakovsky.cz is retained.

# 2. TECHNOLOGY STACK

The website is a static website built using:

- HTML5
- CSS3
- JavaScript
- GitHub Pages

Development environment:

- Operating system: Windows 11
- Code editor: Visual Studio Code
- Source code repository: GitHub
- Browser testing: Firefox and other modern browsers

No server-side application or database is currently required.

# 3. PROJECT STRUCTURE

Current project structure:

```text
dave-portfolio/
│
├── css/
├── images/
├── img/
├── js/
│
├── index.html
├── kresby.html
├── obrazy.html
├── beneath-surface.html
├── kresby-backup.html
│
├── favicon.ico
├── favicon-32x32.png
├── CNAME
├── robots.txt
├── sitemap.xml
├── README.md
├── google verification HTML file
│
└── ROCKY_ART_PROJECT.md
```

Important files:

- `index.html` – main website page.
- `kresby.html` – commissioned drawings and drawing portfolio.
- `obrazy.html` – painting portfolio.
- `beneath-surface.html` – psychological and symbolic artwork collection.
- `kresby-backup.html` – backup of the drawings page before modifications.
- `sitemap.xml` – sitemap submitted to Google Search Console.
- `robots.txt` – crawler instructions.
- `CNAME` – custom domain configuration.
- `ROCKY_ART_PROJECT.md` – project documentation.

The `images`, `img`, `css` and `js` directories contain website assets and resources.

# 4. WEBSITE STRUCTURE

The website currently consists of four main pages:

| Page | File | Purpose |
|---|---|---|
| Homepage | index.html | Main presentation |
| Drawings | kresby.html | Drawings and commissions |
| Paintings | obrazy.html | Original paintings |
| Beneath.Surface | beneath-surface.html | Psychological and symbolic artwork |

The individual pages use shared CSS and JavaScript resources.

Each page has its own SEO metadata, including title, description and Open Graph information.

The website must remain responsive and usable on mobile devices.

# 5. ARTISTIC IDENTITY

Rocky Art represents several complementary artistic directions.

## Original paintings

Original paintings using oil and acrylic techniques.

## Drawings

Realistic and artistic drawings using graphite, charcoal and other drawing materials.

Commissioned subjects may include:

- Portraits
- Animals and pets
- Cars
- Motorcycles
- Other individual subjects

## Beneath.Surface

A darker artistic collection focused on psychological symbolism and existential themes.

Recurring motifs include:

- Identity
- Masks
- Reflections
- Shadows
- Inner conflict
- Human perception

The collection has a distinct visual identity but remains part of the Rocky Art brand.

# 6. SEO AND GOOGLE INDEXING

The website uses:

- Individual page titles
- Meta descriptions
- Canonical URLs
- Open Graph metadata
- XML sitemap
- robots.txt
- Google Search Console

The sitemap contains four main URLs:

- https://davidrakovsky.cz/
- https://davidrakovsky.cz/kresby.html
- https://davidrakovsky.cz/obrazy.html
- https://davidrakovsky.cz/beneath-surface.html

## Search Console status – November 2026

The homepage has been confirmed as indexed.

The individual pages have been submitted for indexing.

At the time of this documentation:

- `kresby.html` – discovered, indexing requested.
- `obrazy.html` – discovered, indexing requested.
- `beneath-surface.html` – indexing requested.

A submitted indexing request does not guarantee indexing.

Google must be allowed to crawl and evaluate the pages.

Important: URL fragments such as `/#gallery` or `/#commissions` are sections of the homepage, not separate HTML pages.

## SEO development principles

- Preserve existing working URLs.
- Avoid unnecessary changes during the initial indexing period.
- Improve page content gradually.
- Maintain relevant internal links.
- Do not create duplicate pages without a clear reason.
- Check indexing status before making significant SEO changes.

# 7. HOSTING – GITHUB PAGES

The website currently uses GitHub Pages.

The main reason for choosing this solution is that it provides free static website hosting.

The current website does not require a paid hosting service.

## Important hosting decision

**We do not pay for hosting until there is a real reason.**

A paid hosting service is not automatically better for the current project.

The existing hosting solution should be retained as long as it reliably supports the website and its intended use.

## Known GitHub Pages limits

The limits discussed during project planning include:

- Maximum published site size: 1 GB.
- Soft bandwidth limit: 100 GB per month.
- Soft build limit: 10 builds per hour.
- Deployment should complete within 10 minutes.

These limits and GitHub Pages terms should be checked periodically against current official documentation.

## Important limitation

GitHub Pages is intended primarily for static websites.

Its terms also restrict certain commercial uses, including sites primarily intended to facilitate commercial transactions.

The intended use of Rocky Art must therefore remain consistent with GitHub Pages terms.

If the website's functionality or commercial purpose changes significantly, the hosting suitability must be reviewed.

A transition to paid hosting should only be considered when justified by:

- Technical requirements.
- Hosting terms.
- Traffic or resource limitations.
- New functionality requiring server-side processing.
- Other concrete operational needs.

# 8. DEVELOPMENT PRINCIPLES

The following principles guide future development:

1. Preserve working functionality.
2. Avoid unnecessary redesigns.
3. Make changes incrementally.
4. Test changes before publishing.
5. Keep backups before risky modifications.
6. Maintain consistent design across all pages.
7. Preserve mobile responsiveness.
8. Avoid unnecessary expenses.
9. Understand the existing implementation before modifying it.

The website should remain simple, maintainable and inexpensive to operate.

# 9. COLLABORATION AND WORKFLOW

The project is developed collaboratively with ChatGPT.

Communication preferences:

- Czech language.
- Informal but precise communication.
- Simple explanations.
- Step-by-step workflow.
- One concrete task at a time.
- Wait for confirmation before moving to the next step.
- Avoid unnecessarily long instructions.

The user wants to understand and manage the website independently.

For code modifications:

- Preserve existing code where possible.
- Explain what is being changed and why.
- Avoid changing unrelated sections.
- Use English for code comments.
- Prefer complete, clearly identified code replacements when appropriate.

Important decisions should be recorded in this document.

# 10. BACKUP AND VERSION CONTROL

GitHub is the primary repository and version history for the source code.

The project should also have a local backup.

Recommended backup strategy:

- Keep the GitHub repository updated.
- Maintain a local copy of the project.
- Preserve important backup files before risky modifications.
- Keep this documentation updated.

This document does not replace the source code or the original conversation history.

Each serves a different purpose.

# 11. FUTURE DEVELOPMENT

Potential future tasks:

- Continue monitoring Google indexing.
- Gradually improve SEO content.
- Improve descriptions of commissioned drawings.
- Review internal links between individual pages.
- Continue developing the artistic portfolio.
- Improve the presentation of original paintings.
- Develop marketing activities through Facebook and short-form video.
- Periodically review GitHub Pages limits and terms.

These are potential tasks, not commitments to immediate changes.

# 12. CHANGE LOG

## 15 November 2026 – Initial documentation

- Created the first project documentation.
- Recorded current website structure.
- Documented the technology stack.
- Recorded SEO and indexing status.
- Documented the GitHub Pages hosting decision.
- Established development and collaboration principles.

---

**END OF DOCUMENT**