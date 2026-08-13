// Translation button for Arabic
document.addEventListener('DOMContentLoaded', function() {
  const translateBtn = document.createElement('button');
  translateBtn.id = 'translateToArabic';
  translateBtn.textContent = 'العربية';
  translateBtn.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    z-index: 10000;
  `;

  document.body.appendChild(translateBtn);

  translateBtn.addEventListener('click', function() {
    const currentUrl = window.location.href;
    const protocol = new URL(currentUrl).protocol;
    const isLocalOrBlockedPage = ['file:', 'about:', 'chrome:', 'chrome-extension:'].includes(protocol);

    let googleTranslateUrl;

    if (!isLocalOrBlockedPage) {
      googleTranslateUrl = `https://translate.google.com/translate?hl=en&sl=auto&tl=ar&u=${encodeURIComponent(currentUrl)}`;
    } else {
      const pageText = document.body ? document.body.innerText.trim() : '';
      const textQuery = pageText ? `&text=${encodeURIComponent(pageText.slice(0, 5000))}` : '';
      googleTranslateUrl = `https://translate.google.com/?hl=en&sl=auto&tl=ar${textQuery}`;
    }

    window.open(googleTranslateUrl, '_blank', 'noopener,noreferrer');
  });
});
