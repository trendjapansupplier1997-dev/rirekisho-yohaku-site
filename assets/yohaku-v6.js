(() => {
  document.querySelectorAll('[data-pending="true"]').forEach((el) => {
    el.addEventListener("click", (event) => {
      event.preventDefault();
      el.animate([{opacity:1},{opacity:.65},{opacity:1}], {duration:220, easing:"ease-out"});
    });
  });
})();
