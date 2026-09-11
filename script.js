// El Procés Tecnològic — interactivitat mínima

document.addEventListener('DOMContentLoaded', function () {
  // Menú mòbil
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
    });
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { links.classList.remove('open'); });
    });
  }

  // Comprovació de l'activitat R1: Ordena les fases
  var checkBtn = document.getElementById('check-order');
  if (checkBtn) {
    checkBtn.addEventListener('click', function () {
      var selects = document.querySelectorAll('.order-list select');
      var correct = 0;
      selects.forEach(function (s) {
        if (s.value === s.dataset.correct) {
          s.style.background = '#cdeedd';
          correct++;
        } else if (s.value === '') {
          s.style.background = '';
        } else {
          s.style.background = '#f6c9c9';
        }
      });
      var result = document.getElementById('order-result');
      if (result) {
        result.textContent = 'Has encertat ' + correct + ' de ' + selects.length + ' posicions.';
      }
    });
  }

  // Comprovació d'activitats de relacionar (selects amb data-correct dins .match-row)
  var checkMatchBtn = document.getElementById('check-match');
  if (checkMatchBtn) {
    checkMatchBtn.addEventListener('click', function () {
      var selects = document.querySelectorAll('.match-row select');
      var correct = 0;
      selects.forEach(function (s) {
        if (s.value === s.dataset.correct) {
          s.style.background = '#cdeedd';
          correct++;
        } else if (s.value === '') {
          s.style.background = '';
        } else {
          s.style.background = '#f6c9c9';
        }
      });
      var result = document.getElementById('match-result');
      if (result) {
        result.textContent = 'Has encertat ' + correct + ' de ' + selects.length + ' relacions.';
      }
    });
  }
});
