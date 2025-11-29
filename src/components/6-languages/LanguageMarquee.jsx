// LanguageMarquee.jsx
import React, { useState } from "react";
import './LanguageMarquee.css';

export default function LanguageMarquee({ images = [
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
    "https://images.seeklogo.com/logo-png/44/1/next-js-logo-png_seeklogo-449824.png",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",

] }) {
  // paused عندما يكون المستخدم فوق صورة أو مركّز عليها عبر الكيبورد
  const [paused, setPaused] = useState(false);

  // نكرر القائمة حتى تكون الحركة seamless
  const displayed = [...images, ...images];

  return (
    <section className="lm-section" aria-label="Programming languages marquee">
      <h3 className="lm-title">Languages & tools I work with</h3>

      <div
        className={`lm-marquee ${paused ? "paused" : ""}`}
        // لو حبيت تقدر توقف لو المستخدم هاور على الحاوية نفسها
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="lm-track" role="list">
          {displayed.map((src, idx) => (
            <div
              key={idx}
              className="lm-item"
              role="listitem"
              tabIndex={0}
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
              onFocus={() => setPaused(true)}
              onBlur={() => setPaused(false)}
            >
              <img src={src}  alt={`language-${idx % images.length}`} />
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
