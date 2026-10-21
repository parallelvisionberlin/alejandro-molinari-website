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
