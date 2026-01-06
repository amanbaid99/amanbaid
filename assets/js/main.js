const sections = [
  'hero',
  'about',
  'experience',
  'certifications',
  'linkedin',
  'contact'
];

const app = document.getElementById('app');

sections.forEach(section => {
  fetch(`sections/${section}.html`)
    .then(res => res.text())
    .then(html => {
      const div = document.createElement('div');
      div.innerHTML = html;
      app.appendChild(div);
    });
});
