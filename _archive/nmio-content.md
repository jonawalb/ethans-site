# NMIO content — archived

Removed from the live site on 2026-06-09. To restore, say **"Add NMIO"** and Claude will reinsert these exact snippets back into `index.html` at the marked locations.

---

## 1. Hero lede (was in `<section id="bridge">`, inside `<p class="lede">`)

**Original full paragraph:**

```html
<p class="lede">
  Experienced intelligence analyst working the open-source surface, sub-surface, and undersea-cable picture across the Indo-Pacific. Assistant Director and Head of Analysis &amp; Monitoring at the <strong>Taiwan Security Monitor</strong>; previously a maritime risk analyst at the Department of the Navy's <strong>National Maritime Intelligence-Integration Office</strong>. Coursework concentrates in intelligence analysis at George Mason.
</p>
```

**Current (NMIO-stripped) version:**

```html
<p class="lede">
  Experienced intelligence analyst working the open-source surface, sub-surface, and undersea-cable picture across the Indo-Pacific. Assistant Director and Head of Analysis &amp; Monitoring at the <strong>Taiwan Security Monitor</strong>. Coursework concentrates in intelligence analysis at George Mason.
</p>
```

---

## 2. About prose paragraph (was the third `<p>` in `<div class="about__prose">`)

**Removed paragraph (insert after the "At the Taiwan Security Monitor…" paragraph):**

```html
      <p>
        I previously worked at the Department of the Navy's <strong>National Maritime Intelligence-Integration Office</strong>, where I worked port-security and Belt and Road maritime risk assessments and built out a global map of undersea cable landing sites. I regularly engage with and brief the intelligence community on my work.
      </p>
```

---

## 3. Experience station entry (was the third `<li class="station">` in `<ol class="stations">`)

**Removed entry (insert as the last `<li class="station">` in the stations list):**

```html
    <li class="station">
      <div class="station__sigil" aria-hidden="true">
        <svg viewBox="0 0 60 60"><path d="M30 6 L54 22 L46 52 L14 52 L6 22 Z" fill="none" stroke="currentColor" stroke-width="1.2"/><path d="M30 18 L42 26 L38 42 L22 42 L18 26 Z" fill="none" stroke="currentColor" stroke-width=".8"/><circle cx="30" cy="30" r="3" fill="currentColor"/></svg>
      </div>
      <div class="station__body">
        <header class="station__head">
          <h3>Maritime Risk Analysis &amp; Assessment Analyst</h3>
          <p class="station__org">National Maritime Intelligence-Integration Office &middot; Department of the Navy</p>
          <p class="station__dates"><time>May 2024</time> &mdash; <time>May 2025</time> &middot; Suitland, MD</p>
        </header>
        <ul class="station__list">
          <li>Assessed the maritime impact of China's Belt and Road Initiative through satellite imagery and OSINT, including port-security risk assessments for domestic and foreign ports.</li>
          <li>Identified and catalogued a comprehensive map of global undersea/submarine cable landing sites and pathings through GEOINT and OSINT.</li>
        </ul>
      </div>
    </li>
```
