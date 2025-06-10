const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
  const question = faq.querySelector('.question');
  const answer = faq.querySelector('.answer');
  const icon = faq.querySelector('.toggle-icon');

  question.addEventListener('click', () => {
    faqs.forEach(f => {
      if (f !== faq) {
        f.querySelector('.answer').classList.remove('show');
        f.querySelector('.toggle-icon').src = 'icon-plus.svg';
      }
    });

    const isShown = answer.classList.contains('show');
    answer.classList.toggle('show');
    icon.src = isShown ? 'icon-plus.svg' : 'icon-minus.svg';
  });
});
