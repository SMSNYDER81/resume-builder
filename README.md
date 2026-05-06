# ResumeForge — Free Resume Builder

A free, privacy-first resume builder that runs entirely in the browser. No account, no subscription, no data sent to any server.

**Live site:** [resumeforge.net](https://resumeforge.net)

## Features

- **8 templates** — Classic, Modern, Minimal, Creative, Executive, Sidebar, Compact, ATS
- **10 accent colors** + custom hex color picker
- **4 font pairings** — DM Sans/Playfair, Syne/Mono, Crimson Pro, Fraunces
- **1-col / 2-col layout toggle** (Modern template)
- **Photo upload** — drag & drop, hidden on ATS/Minimal/Compact templates
- **Resume + Cover Letter modes** — tab switcher in topbar
- **AI writing assistant** — Anthropic, OpenAI, or Gemini via your own API key
- **Section reordering** — ↑↓ buttons on experience entries
- **3 PDF export methods** — Print/Save, jsPDF, html2canvas
- **Skills tag system** — Enter key to add, click × to remove
- **Certifications section**
- **100% client-side** — nothing ever leaves your browser

## Tech stack

- Vanilla HTML/CSS/JS — zero frameworks, zero build steps
- jsPDF + html2canvas for PDF export
- Google Fonts (Syne, IBM Plex Mono, DM Sans, Lora, Playfair Display, Fraunces, Crimson Pro)
- Deployed on Cloudflare Pages

## Structure

```
/
├── index.html          # Main resume builder
├── about.html          # About page
├── privacy.html        # Privacy policy
├── ads.txt             # AdSense authorization
├── sitemap.xml
├── robots.txt
├── feedback.js         # Feedback toast + exit intent modal
├── og-image.svg        # Open Graph image (1200×630)
├── .well-known/
│   └── security.txt
└── blog/
    ├── index.html
    ├── free-vs-paid-resume-builder.html
    ├── how-to-write-resume-no-experience.html
    ├── ats-resume-tips.html
    ├── how-to-write-professional-summary.html
    ├── resume-skills-section.html
    ├── resume-length-one-page-or-two.html
    ├── how-to-explain-employment-gap.html
    └── resume-formats-explained.html
```

## Privacy

All resume data is processed locally in the browser. No data is transmitted to any server. AI API keys are stored in localStorage only and are never sent to ResumeForge's infrastructure — they go directly to your chosen AI provider (Anthropic, OpenAI, or Google).

## License

MIT
