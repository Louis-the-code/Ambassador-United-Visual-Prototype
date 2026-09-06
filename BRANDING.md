# Ambassadors United (AU) - Brand & System Architecture

This document outlines the core branding, design system, and technical architecture of the Ambassadors United platform. It serves as a foundational context for developers and AI agents when rebuilding, extending, or maintaining the application.

## 1. Brand Identity
**Ambassadors United (AU)** is a modern, high-contrast Christian youth platform. The design language is characterized by a minimalist, bold, and contemporary aesthetic that communicates clarity, authority, and community.

### Typography
The platform utilizes a clean, highly legible typographic hierarchy to maintain a modern editorial feel:
- **Primary Font Family:** `Roboto` (Sans-serif) is used globally for both headings and body text to ensure a clean, utilitarian aesthetic.
- **Headings:** Emphasize weight (`font-black`, `font-bold`), uppercase styling, and tight tracking (`tracking-tight`) for major display text (e.g., hero sections, page titles).
- **Navigation & Labels:** Uppercase with wide tracking (`tracking-wider`, `uppercase`) to create a structured, architectural feel.
- **Body Text:** Standard weight, readable sizes, tailored for long-form content (blogs, testimonies).

### Color Palette
The color system relies on high contrast and a disciplined palette to draw focus to content and imagery:
- **Primary Accent / Brand Color:** Navy Blue (`#1e3a8a`). Used for primary calls-to-action (e.g., the "Connect" button), active states, and accent dividers. The hover state for interactive elements deepens to `#152c6b`.
- **Backgrounds:** Crisp White (`#ffffff`) as the primary canvas, with Light Gray (`#f9fafb` / Tailwind `gray-50`) used for secondary sections to create subtle depth and separation.
- **Text & Borders:** Solid Black (`#000000`) for primary headings, high-contrast text, and hover-state borders. Subtle Grays (e.g., `gray-100`, `gray-200`) for structural borders and dividers.
- **Footer & Inverted Sections:** Deep Black (`#000000`) backgrounds with White text for grounding the layout.

## 2. UI / UX Design Patterns
The user interface avoids unnecessary ornamentation, focusing on usability, space, and structure:
- **Layout & Grids:** A max-width container (`max-w-7xl mx-auto`) with responsive padding ensures content is centered and breathable on all screen sizes. Uses CSS Grids extensively for product listings, blog cards, and schedule blocks.
- **Navigation:** A sticky, top-aligned navigation bar with a mobile hamburger menu. Links are uppercase, and the active page state is indicated by the primary blue color.
- **Buttons & Interactive Elements:** 
  - Primary actions (like the 'Connect' button) are styled as rounded pills (`rounded-full`) with solid brand coloring.
  - Content cards (blogs, testimonies, products) feature subtle borders (`border-gray-100`) that transition to sharp black (`border-black`) on hover, creating a tactile, slightly brutalist interaction.
- **Imagery:** Full-bleed hero images and aspect-ratio-controlled thumbnails for media to maintain a polished, editorial look.
- **Logo:** The brand's AU logo is a clean, minimal SVG/PNG asset placed prominently in the header and footer.

## 3. Core Functionalities & Architecture
The platform is built as a single-page React application (SPA) styled with Tailwind CSS, leveraging Firebase for dynamic content.

### Main Views / Routes
- **Home:** A dynamic landing page featuring a hero section, featured content, and quick links to core pillars.
- **About:** Details the mandate, mission, and vision of Ambassadors United.
- **Blog & Series:** A content hub displaying articles and podcast/video series, filterable by category (e.g., "The Gospel Explained", "Prophecy").
- **Schedule:** An interactive itinerary/calendar system detailing daily prayer themes (e.g., "Prosperity Mondays", "Destiny Calls").
- **Testimonies:** A masonry or grid layout of user-submitted stories and community impact.
- **Store:** An e-commerce catalog showcasing digital and physical resources (e.g., hoodies, e-books).
- **Connect:** A dedicated landing page for user engagement, sign-ups, and community onboarding.
- **Admin Dashboard:** A secured management interface for creating, editing, and deleting dynamic content.

### Technical Stack & Integrations
- **Frontend Framework:** React 18+ with TypeScript, bundled by Vite.
- **Styling:** Tailwind CSS (v4 paradigm with `@import "tailwindcss";` in the main CSS file).
- **Icons:** `lucide-react` for consistent, crisp vector iconography.
- **Backend / Database:** Firebase Firestore. The app dynamically fetches `posts` (blogs) and `products` (store) collections in real-time.
- **State Management:** React Hooks (`useState`, `useEffect`) manage route navigation, active filters, and fetched data.

## 4. Rebuilding Guidelines (For AI Agents)
If tasked with extending or rebuilding this platform, adhere to the following rules:
1. **Maintain the Aesthetic:** Do not introduce rounded, soft UI elements (like heavy drop shadows or large border-radii on cards) unless explicitly requested. Stick to the high-contrast, flat, border-driven design.
2. **Typography First:** Rely on text size, weight, and tracking for hierarchy rather than relying purely on color.
3. **Data Fetching:** Always integrate Firebase for dynamic content (blogs, store items). Avoid hardcoding vast amounts of data in the frontend components if a collection exists in Firestore.
4. **Mobile Responsiveness:** Ensure the sticky navigation and grid layouts break down gracefully on mobile devices (e.g., `grid-cols-1` on mobile to `grid-cols-3` on desktop).
5. **Component Modularity:** Break down large sections (like the Admin Dashboard or Product Cards) into modular components for maintainability.
