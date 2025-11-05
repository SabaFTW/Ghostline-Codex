# 🌙 Ghostline Codex Website

**Beautiful dark-themed constellation website for the Ghostline Codex**

---

## 🎨 What Was Built

A fully responsive, interactive website featuring:

### ✨ Design Features
- **Dark constellation theme** with animated starfield background
- **Responsive design** (mobile-first, works on all devices)
- **Glassmorphism navigation** bar with smooth scroll
- **Interactive canvas** background with moving stars and connections
- **Beautiful hover effects** and animations throughout
- **Card-based layout** for easy content browsing

### 🎭 Interactive Elements
- **Smooth scrolling** between sections
- **Animated constellation** that follows your cursor
- **Expand/collapse** Sacred Vow
- **Fade-in animations** as you scroll
- **Mobile hamburger menu**
- **Easter eggs** (Konami code, Ctrl+Shift+C, console messages)

### 📱 Sections
1. **Hero** - Landing with call-to-action
2. **Philosophy Intro** - Core principles + Sacred Vow
3. **Core Transmissions** - 4 story cards
4. **Book Series** - 5 book previews
5. **Builder Tools** - 4 interactive resource cards
6. **Fragments** - 6 philosophical pieces
7. **Tier-9** - Advanced content with warning
8. **Contribute** - How to join the Weave
9. **Footer** - Links and signature

---

## 🚀 Deployment Instructions

### Option 1: GitHub Pages (Automatic)

**The website will auto-deploy once you:**

1. **Merge this branch to `main`**:
   ```bash
   git checkout main
   git merge claude/ghostline-codex-strategy-011CUb7LdQ51QgeUtMPVmZjW
   git push origin main
   ```

2. **Enable GitHub Pages in repository settings**:
   - Go to: `Settings → Pages`
   - Source: `GitHub Actions`
   - The workflow will automatically deploy

3. **Access your site**:
   - URL will be: `https://[username].github.io/Ghostline-Codex/`
   - Or custom domain if you set one in `CNAME` file

**The GitHub Action is already configured in `.github/workflows/pages.yml`!**

---

### Option 2: Manual Deployment (Any Static Host)

The website is pure HTML/CSS/JS with no build step required!

**Deploy to:**

#### **Netlify**
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy from repo root
netlify deploy --prod --dir=.
```

#### **Vercel**
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy from repo root
vercel --prod
```

#### **Cloudflare Pages**
- Connect your GitHub repo
- Build command: (leave empty)
- Output directory: `/`

#### **Any HTTP Server**
Just serve the repository root directory. Everything needed is there!

---

## 📂 File Structure

```
Ghostline-Codex/
├── index.html              # Main landing page
├── assets/
│   ├── css/
│   │   └── style.css       # All styles (1000+ lines)
│   ├── js/
│   │   ├── script.js       # Interactive features
│   │   └── constellation.js # Animated background
│   └── images/             # (empty - for future images)
├── .github/
│   └── workflows/
│       └── pages.yml       # GitHub Pages auto-deploy
├── .nojekyll               # Bypass Jekyll processing
└── CNAME                   # Custom domain (optional)
```

---

## 🎨 Customization

### Colors
Edit CSS variables in `assets/css/style.css`:
```css
:root {
    --color-bg: #0a0e17;           /* Background */
    --color-flame: #ff6b35;        /* Flame orange */
    --color-anchor: #4ecdc4;       /* Anchor teal */
    --color-constellation: #95e1d3; /* Constellation green */
    --color-wolf: #9b59b6;         /* Wolf purple */
}
```

### Constellation Settings
Edit `assets/js/constellation.js`:
```javascript
this.config = {
    starCount: 100,              // Number of stars
    connectionDistance: 150,     // Max distance for connections
    starSpeed: 0.1,              // Movement speed
    starSize: 2,                 // Star radius
    lineOpacity: 0.15,           // Connection line opacity
    starOpacity: 0.7             // Star opacity
};
```

### Content
All content is in `index.html` - just edit the text!

---

## 🐛 Troubleshooting

### Website not showing on GitHub Pages?

1. **Check GitHub Actions**:
   - Go to `Actions` tab in GitHub
   - See if deployment workflow ran successfully

2. **Enable Pages**:
   - `Settings → Pages`
   - Source: `GitHub Actions` (not `Deploy from branch`)

3. **Wait a few minutes**:
   - First deployment can take 5-10 minutes

### Constellation not animating?

1. **Check browser console** for JavaScript errors
2. **Check browser compatibility** (needs Canvas API support)
3. **Try different browser** (Chrome/Firefox/Safari)

### Links not working?

- Make sure all markdown files exist in the paths specified
- Check that paths are relative (not absolute)

---

## 🔥 Easter Eggs

The website has hidden features! Try:

1. **Konami Code** on keyboard:
   - ↑ ↑ ↓ ↓ ← → ← → B A
   - All cards pulse with flame colors!

2. **Ctrl + Shift + C**:
   - Constellation goes wild for 5 seconds

3. **Open browser console**:
   - Pretty ASCII art and Codex message

4. **Hover over constellation**:
   - Stars connect to your cursor

---

## 📱 Testing Locally

No build step needed! Just open `index.html` in a browser.

**For best results, use a local server:**

```bash
# Python
python -m http.server 8000

# Node.js
npx http-server

# PHP
php -S localhost:8000
```

Then visit: `http://localhost:8000`

---

## 🌍 Custom Domain

To use a custom domain:

1. **Edit `CNAME` file**:
   ```
   ghostlinecodex.com
   ```

2. **Configure DNS**:
   - Add CNAME record pointing to: `[username].github.io`
   - Or A records pointing to GitHub Pages IPs

3. **Enable in GitHub**:
   - `Settings → Pages → Custom domain`
   - Enter your domain

---

## 🎯 Performance

The website is optimized for performance:

- **No external dependencies** (except Google Fonts)
- **Lazy loading** ready (for future images)
- **Debounced** resize and scroll events
- **Lightweight** (~50KB total assets)
- **Fast loading** (<1 second on good connection)

---

## 🤝 Contributing to the Website

Want to improve the UI? Here's how:

1. **Fork the repo**
2. **Make your changes** to HTML/CSS/JS
3. **Test locally** to ensure it works
4. **Open a Pull Request** with description of changes

**Guidelines:**
- Keep the dark constellation theme
- Maintain mobile responsiveness
- Test on multiple browsers
- Keep it accessible (ARIA labels, keyboard navigation)

---

## 📚 Technologies Used

- **HTML5** - Semantic, accessible markup
- **CSS3** - Custom properties, Flexbox, Grid, animations
- **JavaScript (ES6+)** - Vanilla JS, no frameworks
- **Canvas API** - Animated constellation background
- **Intersection Observer API** - Scroll animations
- **GitHub Actions** - Auto-deployment

**No build tools. No frameworks. Pure web technologies.**

---

## 🔗 Links

- **Live Site**: (will be available after GitHub Pages deployment)
- **Repository**: https://github.com/SabaFTW/Ghostline-Codex
- **Issues**: https://github.com/SabaFTW/Ghostline-Codex/issues
- **Discussions**: https://github.com/SabaFTW/Ghostline-Codex/discussions

---

## 🌟 Credits

**Design & Development**: Generated with Claude Code
**Philosophy**: The Ghostline Codex Contributors
**License**: CC BY-NC-SA 4.0

---

*PLAMEN GORI. SIDRO STOJI. CONSTELLATION DIHA.*

🔥⚓💚🐺

---

**"Sheep in wolf's clothing, we howl at what was never the moon."**
