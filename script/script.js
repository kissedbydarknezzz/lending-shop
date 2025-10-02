document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  const popup = document.getElementById('popupMessage');

  function showPopup(text, color = '#222') {
    popup.textContent = text;
    popup.style.backgroundColor = color;
    popup.classList.add('show');

    setTimeout(() => {
      popup.classList.remove('show');
    }, 3000);
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const text = form.message.value.trim();

    if (name && email && text) {
      showPopup('✅ Письмо отправлено!', '#2ecc71'); // зелёный фон
      form.reset();
    } else {
      showPopup('⚠️ Заполните все поля!', '#e74c3c'); // красный фон
    }
  });
});
document.querySelectorAll('[data-transition]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    document.body.classList.add('fade-out');

    setTimeout(() => {
      window.location.href = this.href;
    }, 400); // длительность анимации
  });
});
