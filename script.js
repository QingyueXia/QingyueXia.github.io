(() => {
  const button = document.getElementById('language');
  let language = 'zh';
  try { language = localStorage.getItem('qx-language') === 'en' ? 'en' : 'zh'; } catch {}
  function render() {
    document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
    document.querySelectorAll('[data-zh][data-en]').forEach(element => { element.textContent = element.dataset[language]; });
    button.innerHTML = `${language === 'zh' ? 'English' : '中文'}`;
    button.setAttribute('aria-label', language === 'zh' ? 'Switch to English' : '切换到中文');
    document.querySelector('meta[name="description"]').content = language === 'zh' ? '夏清悦的博士研究主页。BIT，计算机科学与技术，研究方向为深度强化学习（DRL）。' : 'Qingyue Xia’s PhD research homepage. Computer Science and Technology at BIT. Research in deep reinforcement learning (DRL).';
  }
  button.addEventListener('click', () => {
    language = language === 'zh' ? 'en' : 'zh';
    try { localStorage.setItem('qx-language', language); } catch {}
    render();
  });
  document.getElementById('year').textContent = new Date().getFullYear();
  render();
})();
