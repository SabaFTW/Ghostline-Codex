/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   GHOSTLINE CODEX - CONSTELLATION
   Animated starfield background
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

class ConstellationCanvas {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        if (!this.canvas) return;

        this.ctx = this.canvas.getContext('2d');
        this.stars = [];
        this.connections = [];
        this.mouse = { x: null, y: null, radius: 150 };

        // Configuration
        this.config = {
            starCount: 100,
            connectionDistance: 150,
            starSpeed: 0.1,
            starSize: 2,
            lineOpacity: 0.15,
            starOpacity: 0.7,
            colors: {
                star: '#4ecdc4',      // Anchor teal
                line: '#ff6b35',      // Flame orange
                accent: '#95e1d3'     // Constellation green
            }
        };

        this.init();
    }

    init() {
        this.resize();
        this.createStars();
        this.animate();

        // Event listeners
        window.addEventListener('resize', () => this.resize());
        window.addEventListener('mousemove', (e) => this.handleMouseMove(e));
        window.addEventListener('mouseout', () => this.handleMouseOut());
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = document.documentElement.scrollHeight;
    }

    createStars() {
        this.stars = [];
        const numStars = this.config.starCount;

        for (let i = 0; i < numStars; i++) {
            this.stars.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                vx: (Math.random() - 0.5) * this.config.starSpeed,
                vy: (Math.random() - 0.5) * this.config.starSpeed,
                radius: Math.random() * this.config.starSize + 1,
                opacity: Math.random() * 0.5 + 0.5
            });
        }
    }

    handleMouseMove(e) {
        this.mouse.x = e.clientX;
        this.mouse.y = e.clientY + window.pageYOffset;
    }

    handleMouseOut() {
        this.mouse.x = null;
        this.mouse.y = null;
    }

    drawStar(star) {
        this.ctx.beginPath();
        this.ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);

        // Gradient for star glow
        const gradient = this.ctx.createRadialGradient(
            star.x, star.y, 0,
            star.x, star.y, star.radius * 3
        );

        gradient.addColorStop(0, this.config.colors.star);
        gradient.addColorStop(1, 'transparent');

        this.ctx.fillStyle = gradient;
        this.ctx.globalAlpha = star.opacity * this.config.starOpacity;
        this.ctx.fill();
        this.ctx.globalAlpha = 1;
    }

    drawConnection(star1, star2, distance) {
        const opacity = (1 - distance / this.config.connectionDistance) * this.config.lineOpacity;

        this.ctx.beginPath();
        this.ctx.moveTo(star1.x, star1.y);
        this.ctx.lineTo(star2.x, star2.y);

        // Gradient line
        const gradient = this.ctx.createLinearGradient(
            star1.x, star1.y,
            star2.x, star2.y
        );

        gradient.addColorStop(0, this.config.colors.line);
        gradient.addColorStop(1, this.config.colors.accent);

        this.ctx.strokeStyle = gradient;
        this.ctx.globalAlpha = opacity;
        this.ctx.lineWidth = 1;
        this.ctx.stroke();
        this.ctx.globalAlpha = 1;
    }

    updateStar(star) {
        // Move star
        star.x += star.vx;
        star.y += star.vy;

        // Bounce off edges
        if (star.x < 0 || star.x > this.canvas.width) {
            star.vx *= -1;
        }

        if (star.y < 0 || star.y > this.canvas.height) {
            star.vy *= -1;
        }

        // Keep within bounds
        star.x = Math.max(0, Math.min(this.canvas.width, star.x));
        star.y = Math.max(0, Math.min(this.canvas.height, star.y));

        // Pulse opacity
        star.opacity += (Math.random() - 0.5) * 0.01;
        star.opacity = Math.max(0.3, Math.min(1, star.opacity));
    }

    getDistance(x1, y1, x2, y2) {
        return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    }

    animate() {
        // Clear canvas
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // Update and draw stars
        this.stars.forEach(star => {
            this.updateStar(star);
            this.drawStar(star);
        });

        // Draw connections
        for (let i = 0; i < this.stars.length; i++) {
            for (let j = i + 1; j < this.stars.length; j++) {
                const star1 = this.stars[i];
                const star2 = this.stars[j];
                const distance = this.getDistance(star1.x, star1.y, star2.x, star2.y);

                if (distance < this.config.connectionDistance) {
                    this.drawConnection(star1, star2, distance);
                }
            }

            // Connect to mouse if close enough
            if (this.mouse.x !== null && this.mouse.y !== null) {
                const star = this.stars[i];
                const distance = this.getDistance(star.x, star.y, this.mouse.x, this.mouse.y);

                if (distance < this.mouse.radius) {
                    this.ctx.beginPath();
                    this.ctx.moveTo(star.x, star.y);
                    this.ctx.lineTo(this.mouse.x, this.mouse.y);

                    const opacity = (1 - distance / this.mouse.radius) * 0.3;
                    this.ctx.strokeStyle = this.config.colors.line;
                    this.ctx.globalAlpha = opacity;
                    this.ctx.lineWidth = 2;
                    this.ctx.stroke();
                    this.ctx.globalAlpha = 1;

                    // Draw cursor glow
                    this.ctx.beginPath();
                    this.ctx.arc(this.mouse.x, this.mouse.y, 5, 0, Math.PI * 2);
                    const cursorGradient = this.ctx.createRadialGradient(
                        this.mouse.x, this.mouse.y, 0,
                        this.mouse.x, this.mouse.y, 15
                    );
                    cursorGradient.addColorStop(0, this.config.colors.line);
                    cursorGradient.addColorStop(1, 'transparent');
                    this.ctx.fillStyle = cursorGradient;
                    this.ctx.globalAlpha = 0.5;
                    this.ctx.fill();
                    this.ctx.globalAlpha = 1;
                }
            }
        }

        requestAnimationFrame(() => this.animate());
    }
}

// Initialize constellation when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const constellation = new ConstellationCanvas('constellation-canvas');

    // Easter egg: Konami code makes constellation go wild
    let konamiTriggered = false;
    window.addEventListener('keydown', (e) => {
        if (e.key === 'c' && e.ctrlKey && e.shiftKey && !konamiTriggered) {
            konamiTriggered = true;

            // Increase animation intensity
            constellation.config.starSpeed *= 3;
            constellation.config.connectionDistance *= 1.5;
            constellation.config.lineOpacity *= 2;

            // Change colors to flame
            constellation.config.colors.star = '#ff6b35';
            constellation.config.colors.line = '#ff6b35';
            constellation.config.colors.accent = '#ff8c61';

            console.log('🔥 CONSTELLATION IGNITED! 🔥');

            // Reset after 5 seconds
            setTimeout(() => {
                constellation.config.starSpeed /= 3;
                constellation.config.connectionDistance /= 1.5;
                constellation.config.lineOpacity /= 2;
                constellation.config.colors.star = '#4ecdc4';
                constellation.config.colors.line = '#ff6b35';
                constellation.config.colors.accent = '#95e1d3';
                konamiTriggered = false;
                console.log('Constellation returned to calm. The Weave breathes.');
            }, 5000);
        }
    });

    // Adjust canvas on window resize with debounce
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            constellation.resize();
            constellation.createStars();
        }, 250);
    });

    // Adjust canvas height on scroll (for dynamic content)
    let scrollTimeout;
    window.addEventListener('scroll', () => {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            const newHeight = document.documentElement.scrollHeight;
            if (Math.abs(constellation.canvas.height - newHeight) > 100) {
                constellation.canvas.height = newHeight;
            }
        }, 500);
    });
});

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   PLAMEN GORI. SIDRO STOJI.
   CONSTELLATION DIHA.
   🔥⚓💚🐺
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
