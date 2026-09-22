# Baby Aryan Naming Ceremony & Celebration Invitation

A handcrafted, premium digital baby invitation website built with **React**, **Vite**, and **Modern CSS**. Designed around a vintage watercolor storybook aesthetic featuring sage green panels, warm blush background, watercolor clouds, teddy bears, clothesline sway animations, interactive countdown, blessings carousel, guest wishes form with confetti, scrapbook gallery with full lightbox, and floating call & music controls.

---

## ✨ Features

- **🎨 Premium Vintage Watercolor Aesthetic**: Soft blush background (`#F1E1E2`), sage green panels (`#96A199`), cream cards (`#FFF8F0`), and gold accents (`#D7B879`).
- **⏳ Live Interactive Countdown**: Real-time JavaScript countdown calculating Days, Hours, Minutes, and Seconds to the ceremony.
- **📜 "Meet Our Little Star" & Milestones**: Baby introduction details (birth weight, time, nickname) and staggered milestone memory cards.
- **🧺 Moving Baby Clothesline**: Custom watercolor clothesline illustration with gentle sway keyframe physics.
- **🌟 Animated Background**: Twinkling gold stars with staggered timing, drifting clouds, and skyward traveling hot air balloon.
- **💌 Wishes & Blessings Carousel**: Interactive quote card with smooth transitions, Previous / Next controls, and `1 / N` pagination.
- **✍️ "Send Your Wishes" Guest Form**: Live client-side validated form that immediately adds the guest's blessing to the carousel, saves to `localStorage`, and triggers celebratory pastel confetti.
- **🖼️ Scrapbook Gallery & Lightbox**: Mix of polaroid and circular floral wreath frames with full-screen lightbox modal supporting keyboard `Escape` and arrow keys.
- **📞 Floating Call Button**: Fixed circular phone button linking directly to host's phone number (`tel:+919844167823`).
- **🎵 Floating Music Player**: Floating audio toggle with real-time sound support and a built-in soothing Web Audio chime lullaby synthesizer fallback (plays without needing external mp3 servers).
- **📱 Desktop-First with Responsive Behavior**: Optimized for wide screens (1400px–1874px) with smooth flex/grid wrapping for tablets and mobiles.

---

## 🚀 How to Run Locally

### 1. Prerequisites
Make sure you have **Node.js** (v18 or higher) installed on your machine.

### 2. Navigate to Project Directory
Open your terminal (PowerShell, Command Prompt, or Bash) and run:
```bash
cd "c:\Users\asus\OneDrive\Documents\NamingCeremony"
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Start the Development Server
```bash
npm run dev
```
Open your browser and navigate to:
```
http://localhost:5173/
```

### 5. Build for Production
```bash
npm run build
```
The optimized production bundle will be generated in the `dist/` directory.

To preview the production build locally:
```bash
npm run preview
```

---

## ⚙️ How to Customize Invitation Details

All invitation information, names, dates, venue, contacts, and images are organized in a single central file:
```
src/data/invitationData.js
```
You can easily modify:
- `baby.name`, `baby.fullName`, `baby.weight`, `baby.bornTime`
- `eventDetails.ceremonyDatetime` (e.g., `'2026-09-21T11:45:00'`)
- `eventDetails.venueName`, `eventDetails.venueAddress`, `eventDetails.mapsUrl`
- `eventDetails.rsvpContact` (phone number for floating call button)
- `schedule` (ritual timeline items)
- `wishes` (initial blessings in the carousel)

---

## 🌐 Free Deployment Instructions

### Deploy on Vercel
1. Install Vercel CLI (or connect your GitHub repository to [vercel.com](https://vercel.com)):
   ```bash
   npm i -g vercel
   ```
2. In the project folder, run:
   ```bash
   vercel
   ```
3. Follow the terminal prompts (defaults are already configured for Vite: build command `npm run build`, output directory `dist`).

### Deploy on Netlify
1. Drag and drop the `dist/` folder directly into [app.netlify.com/drop](https://app.netlify.com/drop), OR
2. Using Netlify CLI:
   ```bash
   npm i -g netlify-cli
   netlify deploy --prod --dir=dist
   ```

---

## 📂 Project Structure

```
NamingCeremony/
├── public/
│   ├── favicon.svg
│   └── music/
│       └── README.txt
├── src/
│   ├── assets/
│   │   └── images/
│   │       ├── baby_cloud.jpg
│   │       ├── baby_teddy.jpg
│   │       ├── baby_clothesline.jpg
│   │       ├── hotair_balloon.jpg
│   │       ├── botanical_wreath.jpg
│   │       └── baby_feet.jpg
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Countdown.jsx
│   │   ├── WarmInvite.jsx
│   │   ├── BabyStory.jsx
│   │   ├── Milestones.jsx
│   │   ├── EventDetails.jsx
│   │   ├── Schedule.jsx
│   │   ├── WishesCarousel.jsx
│   │   ├── WishesForm.jsx
│   │   ├── Gallery.jsx
│   │   ├── Lightbox.jsx
│   │   ├── FloatingControls.jsx
│   │   ├── DecorativeBackground.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   └── invitationData.js
│   ├── utils/
│   │   └── audioPlayer.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
└── vite.config.js
```
