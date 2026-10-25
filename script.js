(() => {
  const buttons = [...document.querySelectorAll('[data-filter]')];
  const cards = [...document.querySelectorAll('.project[data-category]')];
  const count = document.querySelector('#project-count');
  if (!buttons.length || !cards.length) return;
  buttons.forEach(button => button.addEventListener('click', () => {
    const selected = button.dataset.filter;
    let visible = 0;
    cards.forEach(card => {
      const match = selected === 'all' || card.dataset.category.split(' ').includes(selected);
      card.hidden = !match;
      if (match) visible += 1;
    });
    buttons.forEach(b => {
      const active = b === button;
      b.classList.toggle('active', active);
      b.setAttribute('aria-pressed', String(active));
    });
    count.textContent = `(${String(visible).padStart(2, '0')})`;
  }));
})();

/* The real Stay Low cover is served by the official Parallel Vision site; keep an editorial fallback if the image request fails. */
(() => {
  const tile = document.querySelector('.artwork-stay-image');
  const cover = tile?.querySelector('img');
  if (!cover) return;
  const sync = () => {
    tile.classList.toggle('cover-ready', cover.complete && cover.naturalWidth > 0);
    tile.classList.toggle('cover-failed', cover.complete && cover.naturalWidth === 0);
  };
  cover.addEventListener('load', sync);
  cover.addEventListener('error', sync);
  sync();
})();
