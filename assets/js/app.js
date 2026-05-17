document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initAnimation();
  initToast();

  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', handleSubmit);
  }
});

async function handleSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const name = form.elements['이름'].value;
  const submitBtn = form.querySelector('button[type="submit"]');
  const originalText = submitBtn.innerHTML;

  submitBtn.disabled = true;
  submitBtn.innerHTML = '<iconify-icon icon="lucide:loader-2" width="16" class="animate-spin"></iconify-icon> 전송 중...';

  try {
    const response = await fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      showToast(`${name}님, 상담 신청이 완료되었습니다!`);
      form.reset();
    } else {
      showToast('전송에 실패했습니다. 잠시 후 다시 시도해주세요.');
    }
  } catch (error) {
    showToast('전송 중 오류가 발생했습니다. 카카오톡으로 문의해주세요.');
  } finally {
    submitBtn.disabled = false;
    submitBtn.innerHTML = originalText;
  }
}
