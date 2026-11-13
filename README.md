# 🛡️ Spotube Ad Blocker

A lightweight, high-performance Chrome / Edge browser extension built using Manifest V3 designed to aggressively block ads, tracking telemetry, and sponsored stream interruptions on YouTube and web-based media players.

## ✨ Features

- **Aggressive Network Interception:** Powered by Chrome's native `declarativeNetRequest` API to block ad servers, programmatic trackers, and analytics beacons instantly before they load.
- **Real-Time Stream Protection:** Targets video and audio ad-serving endpoints to prevent interruptions.
- **DOM Ad & Banner Destroyer:** Built-in content scripts use a dynamic mutation observer to automatically remove floating banner ads, sponsored card slots, and promotional UI elements.
- **Auto-Skip Video Ads:** Detects unskippable video ad modules and accelerates or skips them seamlessly.
- **Zero Performance Lag:** Written in clean, vanilla JavaScript with no heavy external UI libraries or background frameworks.

## 🚀 Installation & Local Setup

1. Clone or download this repository.
2. Open your browser and navigate to your extensions page (`chrome://extensions/` or `edge://extensions/`).
3. Enable **Developer mode** using the toggle switch in the top-right corner.
4. Click **Load unpacked** and select your `Spotube-Ad-Blocker` project folder.

## 📂 Project Structure

- `manifest.json` — Extension configuration (Manifest V3 permissions and rulesets).
- `rules.json` — Declarative network filtering rules for ad servers and tracking domains.
- `content.js` — DOM content scripts for removing UI banners and automating video ad skips.
- `popup.html` — Clean extension popup interface.
