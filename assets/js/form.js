/* form.js — 가맹 상담 신청 폼 */
function initContactForm() {
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
        showToast('상담 신청이 완료되었습니다. 영업일 기준 1~2일 내 연락드리겠습니다.');
        form.reset();
      } else {
        showToast('전송에 실패했습니다. 카카오톡 상담 또는 031-375-0717로 문의해주세요.');
      }
    } catch (error) {
      showToast('전송 중 오류가 발생했습니다. 카카오톡 상담 또는 031-375-0717로 문의해주세요.');
    } finally {
      button.disabled = false;
      button.textContent = originalText;
    }
  });
}
