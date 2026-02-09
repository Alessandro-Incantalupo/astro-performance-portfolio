# PostHog Analytics Integration

This document explains how we integrated PostHog analytics into the Astro application and provides a beginner-friendly guide to the privacy implications (GDPR & Cookies).

## 1. What We Did: The Integration

To track user behavior without compromising performance or privacy, we implemented a lightweight, manual integration of PostHog.

### Implementation Details

1.  **Library**: We use `posthog-js`, the official lightweight JavaScript library.
2.  **Initialization**:
    - The script is located in `src/components/layout/BaseHead.astro`.
    - It initializes PostHog **once** on the first page load.
    - It uses **Environment Variables** (`PUBLIC_POSTHOG_API_KEY` and `PUBLIC_POSTHOG_HOST`) to keep sensitive keys out of the code.
3.  **View Transitions Support**:
    - Since Astro uses `ClientRouter` (View Transitions) to navigate without full page reloads, a standard analytics script would only count the first page visit.
    - **Our Fix**: We listen for the `astro:page-load` event and manually trigger a `$pageview` capture every time the user navigates to a new route.

```javascript
// Simplified logic from BaseHead.astro
document.addEventListener('astro:page-load', () => {
  if (window.posthog) {
    window.posthog.capture('$pageview');
  }
});
```

---

## 2. Privacy, Cookies & GDPR (A Newbie Guide)

Analytics are great for understanding your users, but they come with responsibilities. Here is a simple breakdown of the privacy mechanics.

### What are Cookies? 🍪

Imagine you visit a coffee shop (your website).

- **Without Cookies**: Every time you go to the counter, the barista treats you like a stranger. "Hi, I'm new here!"
- **With Cookies**: The barista gives you a stamped loyalty card. Next time you visit, you show the card. "Ah, welcome back! This is your 3rd visit."

**In technical terms**: A cookie is a tiny text file stored in the user's browser. PostHog uses it to assign a random ID (e.g., `user_123`) to the visitor so it knows that the person visiting the "Home" page is the same person who later visited the "Contact" page.

### What does "identified_only" mean?

In our configuration, we set:

```javascript
person_profiles: 'identified_only';
```

- **Normally**, PostHog creates a "Profile" for every anonymous visitor, storing their history forever.
- **Identified Only**: PostHog will **NOT** create a permanent profile for anonymous visitors. It only tracks their events temporarily. It will only create a profile if the user explicitly logs in or identifies themselves (e.g., via a signup form).
- **Benefit**: This is much more privacy-friendly and often cheaper.

### Do I need a Cookie Banner? (GDPR)

**Short Answer**: **Yes**, effectively.

**The Explanation**:

- **GDPR (Europe)** and **ePrivacy Directive** say you cannot store _non-essential_ cookies without consent.
- Analytics cookies are usually considered _non-essential_ (the website works fine without them).
- Therefore, to be 100% compliant, you should usually have a "Cookie Banner" that asks: _"Can we use cookies to count visits?"_
  - If they say **No**: You should not initialize PostHog.
  - If they say **Yes**: You load PostHog.

_Currently, our implementation loads PostHog automatically. To be fully compliant, you would wrap the initialization logic inside a check for that consent._

---

## 3. Exploiting PostHog for Your Portfolio 🚀

Here is how you can use these tools to improve your CV and future blog.

### A. Session Replays (The "Netflix" for your UX)

**What it is:** PostHog records a video-like replay of what users do on your site.
**Why for a Portfolio?**

- **Watch Recruiters**: See exactly _how_ a recruiter views your CV. Do they scroll to the "Experience" section? Do they click your GitHub links? Do they get stuck on a weird layout bug on mobile?
- **Debug Projects**: If you interact with your own demos, you can see where things break.

> **Privacy Note**: By default, PostHog "masks" (hides) all input text boxes (like passwords or credit card numbers) so you don't accidentally record sensitive data. You don't need to do anything extra for this!

**How to use "Share Replay":**

1. Go to your PostHog Dashboard -> **Session Replays**.
2. Click on a recording.
3. Click the **"Share"** button in the top right.
4. You can generate a **Public Link** to send to a friend or colleague (e.g., "Hey, look how this user got confused by my navigation!").

### B. Heatmaps

**What it is:** Shows where people click and scroll.
**Why for a Portfolio?**

- **Scroll Depth**: Check if recruiters actually read your "About Me" at the bottom, or if they only see the top header.
- **Dead Clicks**: Are people clicking on things that look like buttons but aren't? Fix them!

### C. Actions & Trends

**What it is:** Custom events.
**Idea**:

- Create an "Action" in PostHog called **"Downloaded CV"** (tracking clicks on your "Download Resume" button).
- Create a graph on your dashboard showing **"CV Downloads per Week"**. This is a great metric to track your job hunt progress!

### D. Recommended Metrics to Track 📊

Since you are running a Portfolio/CV site, here are the most useful metrics you already have access to (no extra code needed!):

| Metric            | Why it's useful                                                                                                                              | PostHog Property                    |
| :---------------- | :------------------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------- |
| **Top Referrers** | See where recruiters found you (LinkedIn, GitHub, Twitter?).                                                                                 | `Referrer URL` / `Referring Domain` |
| **User Location** | See which cities/countries are viewing your profile.                                                                                         | `City` / `Country` (GeoIP)          |
| **Device Type**   | **Critical:** Are recruiters checking your site on their phone while commuting? If 50% are on Mobile, make sure your mobile view is perfect! | `Device Type` / `Screen Width`      |
| **Path Name**     | Which projects are they clicking on? Do they go straight to `/cv` or explore `/blog`?                                                        | `Current URL` / `Path Name`         |
| **Web Vitals**    | Is your site slow? PostHog automatically tracks LCP (Loading speed) and CLS (Layout shifts).                                                 | `$web_vitals` event                 |

---

## 4. Creating Your Own Custom Dashboards 🛠️

Want to see all these metrics in one place? Here is how to create a dashboard like the "Portfolio Stats" one effective immediately:

### Step 1: Create a Dashboard

1.  Log in to PostHog.
2.  Go to the **"Dashboards"** tab on the left sidebar.
3.  Click **"New Dashboard"** in the top right.
4.  Give it a name (e.g., "My CV Stats") and click "Create".

### Step 2: Add Insights (Charts)

Empty dashboards are sad. Let's add data.

1.  Inside your new dashboard, click **"Add insight"** -> **"Trends"** (this is for line charts, bar charts, maps, etc.).
2.  **Configure the user query**:
    - **Series**: Keep it as "Pageview" (Total count).
    - **Breakdown by**: Click "Add breakdown" and search for a property like `Current URL` (to see top pages) or `Device Type` (Mobile vs Desktop).
    - **Chart Type**: Change "Line chart" to "Pie chart", "Bar chart", or "World Map" depending on what looks best.
3.  Click **"Save & add to dashboard"**.

### Step 3: Organize

- You can drag and drop tiles to resize them or move them around.
- You can click the "..." menu on any tile to edit the colors or filters.
