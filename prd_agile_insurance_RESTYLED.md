# Product Requirements Document – Agile Insurance Brokers Website

## Project Overview
Create a modern, responsive website for Agile Insurance Brokers Ltd. The site should inform, build credibility, and facilitate client engagement.

## Pages
- Home
- About Us (with embedded sub-pages)
  - Our Services
  - Our Products
  - Our Team
- Our Partners & Clients
- Contact Us
- Request a Quote (form-based, future stage)

## Content Management
Content pages are statically generated with Markdown.
Cursor will parse:
- `homepage.md`
- `about_us.md` + subpages: `our_services.md`, `our_products.md`, `our_team.md`
- `our_partners_and_clients.md`
- `contact_us.md`

## Layout & UX
- Navigation menu includes dropdown for About Us subpages.
- Internal links connect About Us to subpages.

## Security
- Implement OWASP Top 10 safeguards
- Sanitize all user-facing inputs (e.g., quote form)
