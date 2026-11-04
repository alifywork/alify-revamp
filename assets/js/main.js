'use strict';

document.addEventListener('DOMContentLoaded', () => {
  // Register GSAP plugins if loaded
  if (typeof gsap !== 'undefined') {
    const plugins = [];
    if (typeof ScrollTrigger !== 'undefined') plugins.push(ScrollTrigger);
    if (typeof ScrollToPlugin !== 'undefined') plugins.push(ScrollToPlugin);
    if (typeof SplitText !== 'undefined') plugins.push(SplitText);
    if (typeof Flip !== 'undefined') plugins.push(Flip);

    if (plugins.length > 0) {
      gsap.registerPlugin(...plugins);
    }
  }
});
