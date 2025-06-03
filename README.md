# Skip Size Selector – UI Redesign Challenge

This project is a complete visual overhaul of the **"Choose Your Skip Size"** page from [WeWantWaste](https://wewantwaste.co.uk). While maintaining the core functionality, I reimagined the UI for a more engaging, accessible, and modern user experience using **React**, **Tailwind CSS**, and **AI-powered dev tools**.

---

🌐 **Live Demo**:  
[https://wewantwaste-e9s7ms2mv-probablypenera007s-projects.vercel.app/](https://wewantwaste-e9s7ms2mv-probablypenera007s-projects.vercel.app/)


## 🧠 My Approach

The main goal was to improve the **aesthetic appeal**, **responsiveness**, and **user interactivity** of the skip selection screen while keeping the original flow intuitive and functional.

Key decisions:

- **Image-first design**: I prioritized skip imagery as the visual anchor for selection, overlaying important details rather than separating them into content blocks.
- **Component reusability**: I designed modular components (e.g., `SkipCard`, `BottomBar`, `Header`) with clean props and transitions.
- **AI-Assisted Development**: I actively integrated **Bolt.new** and **GitHub Copilot** into my workflow to prototype component variations, suggest clean refactors, and think through edge cases. Bolt’s context-aware code suggestions significantly boosted development speed and quality.
- **Dark mode by default**: Accessibility and aesthetic value were improved with dark/light theme support throughout.

> **Note**: While the original design included a carousel for the skip cards, I opted for a scrollable card layout due to time constraints and to focus on refining the visual and interactive experience of the selection process.

---

## 🚀 Features

- 🌄 **Image-Centric Skip Cards** – Full-bleed images with overlayed pricing and skip type badges.
- ✨ **Glowing Selection Effects** – Highlighted cards scale with animated borders and shadows.
- 🧊 **Frosted Bottom Action Bar** – Glassmorphic UI for selections with fluid animation.
- 🌗 **Dark/Light Mode Support** – Toggle themes instantly for any user preference.
- 🧭 **Redesigned Progress Header** – Navigation with icons and gradient highlight for current step.
- 🌀 **Animated 404 Page** – A vibrant fallback with glowing gradient effects.

---

## 🛠️ Tech Stack

- **React**
- **Tailwind CSS**
- **React Router**
- **Lucide Icons**
- **Bolt.new** (AI-assisted development)
- **GitHub Copilot**
- **Dark Mode Hook (custom)**

---

## 🧪 How to Run Locally

```bash
git clone https://github.com/probablypenera007/wewantwaste.git
cd wewantwaste
npm install
npm run dev