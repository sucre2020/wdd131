const caseForm = document.getElementById('case-form');
const resultSection = document.getElementById('submission-result');
const resultCard = resultSection.querySelector('.result-card');

caseForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const projectName = document.getElementById('project-name').value.trim() || 'Not provided';
  const state = document.getElementById('state').value.trim() || 'Not provided';
  const projectType = document.getElementById('project-type').value || 'Not provided';
  const status = document.getElementById('status').value || 'Not provided';
  const yearStarted = document.getElementById('year-started').value || 'Not provided';
  const source = document.getElementById('source').value.trim() || 'No source provided';
  const summary = document.getElementById('summary').value.trim() || 'No summary provided';
  const details = document.getElementById('details').value.trim() || 'No additional details provided';

  resultCard.innerHTML = `
    <dl>
      <div><dt>Project name</dt><dd>${projectName}</dd></div>
      <div><dt>State</dt><dd>${state}</dd></div>
      <div><dt>Project type</dt><dd>${projectType}</dd></div>
      <div><dt>Status</dt><dd>${status}</dd></div>
      <div><dt>Year started</dt><dd>${yearStarted}</dd></div>
      <div><dt>Source</dt><dd>${source}</dd></div>
      <div><dt>Summary</dt><dd>${summary}</dd></div>
      <div><dt>Additional details</dt><dd>${details}</dd></div>
    </dl>
  `;

  resultSection.hidden = false;
  resultSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  caseForm.reset();
});
