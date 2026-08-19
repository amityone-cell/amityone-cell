// Reveal each frame as it enters the viewport
const frames = document.querySelectorAll('.frame');
const railFill = document.getElementById('railFill');
const railCurrent = document.getElementById('railCurrent');
const railTotal = document.getElementById('railTotal');

if (railTotal) railTotal.textContent = String(frames.length).padStart(2, '0');

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (prefersReducedMotion) {
  frames.forEach(f => f.classList.add('is-visible'));
} else {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  }, { threshold: 0.3 });

  frames.forEach(f => observer.observe(f));
}

// Progress rail: fill + current frame number, based on scroll position
function updateRail() {
  let currentIndex = 0;
  const viewportMid = window.innerHeight / 2;

  frames.forEach((frame, i) => {
    const rect = frame.getBoundingClientRect();
    if (rect.top <= viewportMid && rect.bottom >= 0) {
      currentIndex = i + 1;
    }
  });

  if (currentIndex === 0 && window.scrollY < frames[0]?.offsetTop) {
    currentIndex = 0;
  }

  const progress = Math.min(1, Math.max(0, currentIndex / frames.length));
  if (railFill) railFill.style.height = `${progress * 100}%`;
  if (railCurrent) railCurrent.textContent = String(currentIndex).padStart(2, '0');
}

window.addEventListener('scroll', updateRail, { passive: true });
window.addEventListener('resize', updateRail);
updateRail();
