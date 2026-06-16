document.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.querySelector('.menu-button');
  const mobileNav = document.querySelector('.mobile-nav');
  if (menuButton && mobileNav) {
    menuButton.addEventListener('click', () => mobileNav.classList.toggle('open'));
    mobileNav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => mobileNav.classList.remove('open'));
    });
  }

  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const button = form.querySelector('button[type="submit"]');
    const originalText = button.textContent;
    button.disabled = true;
    button.textContent = '전송 중...';

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' }
      });

      if (response.ok) {
        alert('상담 신청이 완료되었습니다. 영업일 기준 1~2일 내 연락드리겠습니다.');
        form.reset();
      } else {
        alert('전송에 실패했습니다. 카카오톡 상담으로 문의해주세요.');
      }
    } catch (error) {
      alert('전송 중 오류가 발생했습니다. 카카오톡 상담으로 문의해주세요.');
    } finally {
      button.disabled = false;
      button.textContent = originalText;
    }
  });
});
