const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('#site-nav');
menuButton?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});
nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton?.setAttribute('aria-expanded', 'false');
}));

fetch('updates.json')
  .then(response => {
    if (!response.ok) throw new Error('Update feed unavailable');
    return response.json();
  })
  .then(updates => {
    document.querySelector('#updates-list').innerHTML = updates.map(update => `
      <article class="update-item">
        <time datetime="${update.date}">${new Date(`${update.date}T12:00:00`).toLocaleDateString('en-US', {year:'numeric', month:'short', day:'numeric'})}</time>
        <span class="version">${update.version}</span>
        <div><h3>${update.title}</h3><p>${update.summary}</p></div>
      </article>`).join('');
  })
  .catch(() => {
    document.querySelector('#updates-list').innerHTML = '<p>Field intelligence is temporarily offline.</p>';
  });
