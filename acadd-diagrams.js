/* Every scientific state is present in the HTML. Radios add a compact comparison. */
for (const example of document.querySelectorAll('[data-ac-outcomes]')) {
  const controls = example.querySelector('.ac-outcome-controls');
  const choices = [...controls.querySelectorAll('input[type="radio"]')];
  const panels = [...example.querySelectorAll('.ac-outcome-panel')];

  function showOutcome(value, animate) {
    for (const [index, panel] of panels.entries()) {
      panel.hidden = String(index) !== value;
      panel.classList.toggle('ac-outcome-changed', !panel.hidden && animate);
    }
  }

  showOutcome(choices.find(choice => choice.checked).value, false);
  controls.hidden = false;
  controls.addEventListener('change', event => {
    if (event.target.matches('input[type="radio"]')) {
      showOutcome(event.target.value, true);
    }
  });
}
