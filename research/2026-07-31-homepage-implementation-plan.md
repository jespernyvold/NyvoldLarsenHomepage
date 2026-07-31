# Nyvold Larsen homepage — implementation plan

Date: 31 July 2026

Status: Approved implementation direction

Company: Nyvold Larsen ApS

## Purpose

This document consolidates the approved design, content, architecture, hosting,
article, analytics and delivery decisions for the new Nyvold Larsen homepage.
It is the implementation baseline. The earlier look-and-feel and content
research remain valid where they do not conflict with the decisions below.

## Objectives

The finished website must:

- Present Nyvold Larsen as a senior, credible and principal-led technology
  advisory practice.
- Look professional and polished on desktop, tablet and mobile.
- Load quickly and operate reliably with very little maintenance.
- Use a deliberately simple technology stack with no unnecessary frameworks.
- Run in Google App Engine Standard.
- Support occasional additions, particularly new insight articles.
- Measure homepage visits, article views and article downloads through Google
  Analytics 4 for visitors who consent to analytics.

## Approved technical architecture

The website will be a static site consisting of:

- Semantic HTML.
- Handwritten responsive CSS.
- Minimal vanilla JavaScript used only where necessary.
- No React, Next.js or other frontend framework.
- No application framework, CMS or database.
- No mandatory build pipeline.
- Static-file routing configured in `app.yaml`.
- Deployment to Google App Engine Standard.

App Engine requires a runtime declaration even when it serves a static site.
The current supported runtime at implementation time will be declared, while
the website itself will remain static and will not depend on runtime
application code.

### Proposed repository structure

```text
app.yaml
www/
  index.html
  insights/
    technical-debt/
      index.html
      technical-debt.pdf
    digital-sovereignty/
      index.html
      digital-sovereignty.pdf
  privacy/
    index.html
  css/
    site.css
  js/
    consent.js
    analytics.js
  images/
  fonts/
  robots.txt
  sitemap.xml
  favicon.ico
```

The exact file names may be refined during implementation, but the static
architecture must be preserved.

## Homepage content

The homepage will follow the latest approved content structure:

1. Opening
2. Engage me when
3. What I do
4. My background
5. Insights
6. Start a conversation

### Opening

Primary heading:

> Making technology strategy matter

Supporting copy:

> I help organizations with complex, business-critical technology landscapes
> establish a clear direction—and turn it into decisions, action and lasting
> change.

> I work with executive teams as an adviser or interim leader, connecting
> strategy, architecture and execution.

### Engage me when

- A transformation has lost momentum or is not delivering the expected value.
- Technology and architecture complexity is obstructing business priorities.
- A consequential decision must be made about platforms, vendors or strategic
  direction.
- Cybersecurity, resilience or regulatory obligations require a practical
  response.
- Experienced technology or architecture leadership is needed for a critical
  period.

### What I do

The four approved service areas are:

1. IT Strategy & Architecture
2. Transformation & Modernization
3. Software Product Development
4. Interim & Fractional Leadership

These supersede the earlier proposal in which Cybersecurity & Resilience was a
standalone primary service. Cybersecurity remains relevant across the advisory
work and engagement scenarios.

### My background

The existing “My background” copy will initially be reused unchanged. This
section will establish:

- More than 20 years of experience in large and complex IT organisations.
- Senior leadership experience in the financial sector.
- Former CTO responsibility at SDC.
- Responsibility for technical strategy and architecture for a SaaS banking
  platform serving more than 50 Nordic banks.
- Direct access to the senior adviser throughout an engagement.

The section will include the confirmed profile image and a LinkedIn link.

### Insights

The first insight articles are:

- Technical Debt
- Digital Sovereignty

Insights demonstrate experience and perspective behind the concise homepage
positioning; they are not intended to become a general-purpose blog.

### Start a conversation

The homepage will finish with a calm and direct contact invitation. The primary
contact method is `jesper@nyvold-larsen.dk`. Final wording remains subject to
copy approval.

## Approved visual direction

The approved direction remains senior, calm, modern and Scandinavian rather
than flashy or software-startup-like.

The implementation will use:

- Warm white or light neutral page backgrounds.
- Charcoal or near-black primary typography.
- Soft grey secondary surfaces.
- At most one restrained accent colour.
- An editorial serif face for important headings.
- A clean sans-serif face for body copy, labels and navigation.
- Generous whitespace and short, focused text blocks.
- Light dividers instead of excessive cards.
- A dark service section for visual transition where appropriate.
- Minimal motion with reduced-motion support.
- A responsive single-column presentation on small screens.

The site will avoid generic technology stock photography, bright gradients,
excessive animation, dense text walls and visual signals that imply a large
implementation agency.

Fonts should be self-hosted as optimized WOFF2 assets where licensing permits.
System fonts are an acceptable fallback when they produce the required visual
quality.

## Confirmed image assets

### Company logo

Source supplied by the owner:

`C:\Users\jespe\OneDrive\Billeder\Saved Pictures\logo.jpg`

The supplied logo is a horizontal Nyvold Larsen Consulting wordmark. It will be
used in the header and adapted for relevant branding metadata. It must be shown
without distortion and optimized for its rendered size. A vector or
higher-resolution source should be preferred later if one becomes available.

### Profile image

Source supplied by the owner:

`C:\Users\jespe\OneDrive\Dokumenter\CTO Assistance\Website\profilbillede.jpg`

The supplied portrait is a 350 × 350 pixel image. It will be used as the
principal profile image and displayed at a moderate size to avoid visible
upscaling. A higher-resolution original would improve large-format rendering
but is not required to begin implementation.

The source assets are intentionally not copied into the repository as part of
this research-only change. They will be copied and optimized during the
implementation phase.

## Article format

Each article will have a normal HTML page. Where a downloadable version is
provided, the article will also include an optional PDF with a clear “Download
article” action.

Each article page will include:

- Article title.
- Publication date.
- Author.
- Concise description.
- Semantic article content.
- Relevant relationship to one or more advisory services.
- Return navigation to Insights.
- A closing contact invitation.
- Search and social-sharing metadata.

The HTML page is the canonical, search-friendly reading experience. The PDF is
an additional download format. A download event records activation of the
download link; it cannot establish whether the downloaded document was read.

## Google Analytics and consent

Google Analytics 4 will be integrated through the direct Google tag
(`gtag.js`). Google Tag Manager will not be introduced because the planned
measurement does not justify the additional administration.

### Basic Consent Mode

The approved approach is Basic Consent Mode:

- Google Analytics will not load before analytics consent.
- No analytics information will be transmitted when analytics consent is
  declined.
- Analytics will activate only after the visitor accepts analytics.
- The visitor’s choice will be remembered.
- A persistent settings link will allow the choice to be changed or withdrawn.
- Advertising storage, advertising user data and advertising personalization
  will remain denied unless a future, separately approved advertising use case
  requires them.

Analytics reports will therefore represent consenting visitors, not every
visitor to the website. GA4 reporting must not be described as a complete
server-level visitor count.

### Measurements

The implementation will measure:

- Homepage page views.
- Users and sessions for consenting visitors.
- Views of each HTML article.
- PDF download events, including article/file identification.
- Contact email clicks.
- LinkedIn clicks.
- Traffic sources.
- Device categories.

GA4 Enhanced Measurement will provide standard page-view and supported file-
download events. Purposeful custom events may be added for contact and LinkedIn
actions. Event names and parameters will be documented and kept stable.

The implementation requires a GA4 Measurement ID in the form
`G-XXXXXXXXXX`.

## Privacy and consent presentation

The website will provide:

- A restrained consent notice consistent with the visual design.
- Equally clear accept and decline controls.
- A persistent cookie/analytics settings link.
- Privacy and cookie information that identifies Google Analytics, its purpose,
  storage behavior and applicable retention.
- No unnecessary cookies or third-party integrations.

Final legal language and policy choices remain the responsibility of the site
owner and should be reviewed by a qualified adviser where appropriate.

## Search and sharing

The implementation will include:

- Unique and descriptive page titles.
- Meta descriptions.
- Canonical URLs.
- Open Graph metadata.
- A site-specific social-sharing image if a suitable asset is approved.
- Structured article data where appropriate.
- Descriptive image alternative text.
- Correct semantic heading hierarchy.
- `robots.txt`.
- An XML sitemap.
- Google Search Console submission after production launch.

## Performance requirements

Performance and reliability are primary acceptance criteria. The site will use:

- Optimized image dimensions and formats.
- Explicit image dimensions to prevent layout shifts.
- Responsive images where useful.
- Locally hosted and subsetted fonts where practical.
- Minimal JavaScript.
- Versioned static asset paths where long-lived caching is used.
- Shorter cache lifetimes for HTML pages.
- Appropriate App Engine cache headers.
- No unnecessary third-party scripts.

The site should achieve excellent Core Web Vitals under realistic network and
device conditions, subject to the final font and image assets.

## Accessibility requirements

The implementation will provide:

- Semantic landmarks and headings.
- Keyboard-operable navigation and controls.
- Visible focus indicators.
- Sufficient colour contrast.
- Touch-friendly control sizes.
- Meaningful alternative text.
- Reduced-motion support.
- A usable consent interface for keyboard and assistive-technology users.
- Clear link and button labels.

## App Engine configuration and deployment

Google App Engine Standard will be configured with:

- A current supported runtime declaration.
- Static handlers for pages and assets.
- HTTPS enforcement.
- Clean, stable article URLs.
- Separate caching rules for HTML and versioned assets.
- An appropriate error page.
- Versioned deployments for verification and rollback.

The deployment sequence will be:

1. Create or select the Google Cloud project.
2. Choose the App Engine region carefully because the selection is permanent
   for the project.
3. Configure the GA4 property and obtain its Measurement ID.
4. Deploy a non-production version without immediately directing all traffic
   to it.
5. Verify the App Engine URL, site behavior and metadata.
6. Validate consent choices and analytics events.
7. Promote the verified version.
8. Connect the custom domain and verify HTTPS.
9. Submit the sitemap through Google Search Console.

## Validation and acceptance

Before production promotion, validation will cover:

- Desktop, tablet and mobile layouts.
- Current major browsers.
- Visual consistency and typography.
- Keyboard navigation and focus order.
- Colour contrast and reduced motion.
- Image quality and layout stability.
- Broken links and missing assets.
- Article HTML pages and PDF downloads.
- Search and social metadata.
- Consent acceptance, rejection, persistence and withdrawal.
- Absence of Google Analytics requests before consent.
- GA4 page views and download/contact events after consent.
- App Engine HTTPS, routing, caching and error behavior.
- Performance and Core Web Vitals.

## Inputs still required for implementation

- Existing “My background” copy.
- Full text of the Technical Debt article.
- Full text of the Digital Sovereignty article.
- Confirmation whether PDFs will be supplied or generated from final article
  content.
- GA4 Measurement ID.
- LinkedIn profile URL.
- Confirmation of the primary email address.
- Custom domain and Google Cloud project details.
- Final language strategy.
- Approved privacy and cookie wording.
- Higher-resolution or vector logo and portrait assets if available.

## Implementation sequence

1. Confirm the remaining content, assets, identifiers and policy wording.
2. Create the static site structure and App Engine configuration.
3. Implement the responsive homepage and approved visual system.
4. Implement the initial HTML article pages and optional PDFs.
5. Add metadata, sitemap, accessibility and optimized assets.
6. Integrate GA4 with Basic Consent Mode and documented events.
7. Complete visual, functional, accessibility, analytics and performance
   validation.
8. Deploy a version to App Engine, verify it, promote it and connect the custom
   domain.

## Scope control

The initial implementation will not introduce a CMS, database, contact form,
scheduling widget, advertising integration, frontend framework or other dynamic
platform capability unless a new requirement makes it necessary and the change
is explicitly approved.
