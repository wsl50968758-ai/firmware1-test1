const form = document.querySelector('.contact-form');
const status = document.querySelector('#form-status');

if (form && status) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!form.checkValidity()) {
      status.textContent = '請先完整填寫聯絡人與 Email。';
      return;
    }

    const name = form.elements.namedItem('name')?.value?.trim() || '朋友';
    status.textContent = `感謝 ${name}，我們已收到需求，將盡快與您聯繫。`;
    form.reset();
  });
}
