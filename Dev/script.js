document.addEventListener("DOMContentLoaded", () => {
  // ──────────── ⚡ OVERDRIVE: BOOT SEQUENCE ─────────────
  const bootChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*<>";
  const typewriters = document.querySelectorAll(".boot-typewriter");
  const glitches = document.querySelectorAll(".boot-glitch");
  const fades = document.querySelectorAll(".boot-fade");

  // Shared glitch logic for boot
  const bootScramble = (el, originalText, duration) => {
    return new Promise((resolve) => {
      el.classList.add("is-glitching");
      let iteration = 0;
      const interval = setInterval(() => {
        const scrambled = originalText
          .split("")
          .map((char, index) => {
            if (index < iteration) return originalText[index];
            if (char === " ") return " ";
            return bootChars[Math.floor(Math.random() * bootChars.length)];
          })
          .join("");

        el.innerText = scrambled;
        if (iteration >= originalText.length) {
          clearInterval(interval);
          el.classList.remove("is-glitching");
          el.classList.add("is-resolved");
          resolve();
        }
        iteration += originalText.length / (duration / 30);
      }, 30);
    });
  };

  const bootType = (el, originalText, speed) => {
    return new Promise((resolve) => {
      el.classList.add("is-typing");
      el.innerText = "";
      let i = 0;
      const interval = setInterval(() => {
        el.innerText += originalText.charAt(i);
        i++;
        if (i >= originalText.length) {
          clearInterval(interval);
          el.classList.remove("is-typing");
          el.classList.add("is-finished");
          resolve();
        }
      }, speed);
    });
  };

  // Prepare elements
  const typewriterTexts = Array.from(typewriters).map((el) => {
    const text = el.innerText.trim();
    el.innerText = "";
    return text;
  });

  const glitchTexts = Array.from(glitches).map((el) => {
    const text = el.innerText.trim();
    el.innerText = text.replace(/./g, " "); // preserve height
    return text;
  });

  // Run Sequence
  setTimeout(async () => {
    if (glitches[0]) await bootScramble(glitches[0], glitchTexts[0], 800);

    for (let i = 0; i < typewriters.length; i++) {
      await bootType(typewriters[i], typewriterTexts[i], 70);
    }

    if (glitches[1]) await bootScramble(glitches[1], glitchTexts[1], 600);

    fades.forEach((f) => f.classList.add("is-visible"));
  }, 300);

  // ──────────── ⚡ OVERDRIVE: CIPHER GLITCH ─────────────
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*<>";
  const links = document.querySelectorAll(".cipher-link, .redacted-text");

  links.forEach((link) => {
    const originalText = link.dataset.value || link.innerText.trim();
    let interval = null;

    const scramble = () => {
      let iteration = 0;
      clearInterval(interval);
      link.classList.add("is-glitching");
      link.classList.remove("is-resolved");

      interval = setInterval(() => {
        const scrambled = originalText
          .split("")
          .map((char, index) => {
            if (index < iteration) {
              return originalText[index];
            }
            if (char === " ") return " ";
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("");

        link.innerText = scrambled;
        link.setAttribute("data-text", scrambled);

        if (iteration >= originalText.length) {
          clearInterval(interval);
          link.classList.remove("is-glitching");
          link.classList.add("is-resolved");
        }

        iteration += 1 / 2; // Controls decode speed
      }, 30);
    };

    link.addEventListener("mouseenter", scramble);
    link.addEventListener("focus", scramble);
  });
});
