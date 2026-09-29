import { useEffect, useState } from "react";
import "./HeroSlider.css";

// Every image placed in src/assets/hero/ becomes a slide automatically.
// Name them 1.jpg, 2.jpg, 3.jpg, 4.jpg ... (they play in this order).
const modules = import.meta.glob("../assets/hero/*.{jpg,jpeg,png,webp}", {
  eager: true,
  import: "default",
});

const slides = Object.keys(modules)
  .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
  .map((path, i) => ({
    src: modules[path],
    alt: `Gist Mantra process plant view ${i + 1}`,
  }));

export default function HeroSlider({ interval = 5000 }) {
  const count = slides.length;
  const [index, setIndex] = useState(0);

  // Auto-play. The timer restarts whenever the slide changes (also after a manual click).
  useEffect(() => {
    if (count < 2) return;
    const id = setTimeout(() => setIndex((i) => (i + 1) % count), interval);
    return () => clearTimeout(id);
  }, [index, count, interval]);

  const go = (i) => setIndex((i + count) % count);

  return (
    <div className="hero-slider" aria-roledescription="carousel" aria-label="Plant photographs">
      {slides.map((s, i) => (
        <div
          key={s.src}
          className={`hero-slide${i === index ? " active" : ""}`}
          aria-hidden={i !== index}
        >
          <img src={s.src} alt={s.alt} loading={i === 0 ? "eager" : "lazy"} />
        </div>
      ))}

      {count > 1 && (
        <>
          <button className="hero-arrow prev" onClick={() => go(index - 1)} aria-label="Previous image">‹</button>
          <button className="hero-arrow next" onClick={() => go(index + 1)} aria-label="Next image">›</button>
          <div className="hero-dots">
            {slides.map((s, i) => (
              <button
                key={s.src}
                className={i === index ? "active" : ""}
                onClick={() => go(i)}
                aria-label={`Show image ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}