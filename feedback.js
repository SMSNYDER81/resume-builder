(function () {
  'use strict';

  const script = document.currentScript || document.querySelector('script[data-repo]');
  const repo = script ? script.getAttribute('data-repo') : 'SMSNYDER81/resume-builder';
  const issuesURL = 'https://github.com/' + repo + '/issues/new?template=feedback.md';

  const css = `
    #rf-toast{position:fixed;bottom:22px;left:22px;z-index:9999;background:#0f1a2e;border:1px solid rgba(99,179,255,0.3);border-radius:10px;padding:13px 16px;font-family:'IBM Plex Mono',monospace;font-size:12px;color:#a0c0de;max-width:300px;box-shadow:0 8px 32px rgba(0,0,0,0.4);transform:translateY(12px);opacity:0;transition:0.35s ease;pointer-events:none}
    #rf-toast.show{opacity:1;transform:none;pointer-events:all}
    #rf-toast a{color:#63b3ff;text-decoration:none;font-weight:500}
    #rf-toast a:hover{text-decoration:underline}
    #rf-toast-close{float:right;background:none;border:none;color:#6888a8;cursor:pointer;font-size:14px;margin-left:10px;padding:0;line-height:1}
    #rf-modal-overlay{position:fixed;inset:0;z-index:10000;background:rgba(0,0,0,0.7);backdrop-filter:blur(6px);display:flex;align-items:center;justify-content:center;opacity:0;pointer-events:none;transition:0.25s ease}
    #rf-modal-overlay.show{opacity:1;pointer-events:all}
    #rf-modal{background:#0f1a2e;border:1px solid rgba(99,179,255,0.25);border-radius:14px;padding:28px;width:380px;max-width:92vw;transform:translateY(10px);transition:0.25s ease;font-family:'IBM Plex Mono',monospace}
    #rf-modal-overlay.show #rf-modal{transform:none}
    #rf-modal h3{font-size:14px;color:#eef4ff;margin-bottom:8px}
    #rf-modal p{font-size:11px;color:#a0c0de;line-height:1.6;margin-bottom:18px}
    #rf-modal-btns{display:flex;gap:8px;flex-wrap:wrap}
    #rf-modal-btns a{display:inline-block;background:#3b82f6;color:#fff;font-size:11px;padding:9px 16px;border-radius:7px;text-decoration:none;transition:0.15s}
    #rf-modal-btns a:hover{background:#2563eb}
    #rf-modal-btns button{background:transparent;border:1px solid rgba(99,179,255,0.2);color:#6888a8;font-size:11px;font-family:'IBM Plex Mono',monospace;padding:9px 16px;border-radius:7px;cursor:pointer;transition:0.15s}
    #rf-modal-btns button:hover{border-color:#63b3ff;color:#63b3ff}
  `;

  function injectCSS() {
    const el = document.createElement('style');
    el.textContent = css;
    document.head.appendChild(el);
  }

  function showToast() {
    if (localStorage.getItem('fb_toast_seen')) return;
    localStorage.setItem('fb_toast_seen', '1');

    const el = document.createElement('div');
    el.id = 'rf-toast';
    el.innerHTML = `<button id="rf-toast-close" title="Dismiss">✕</button>👋 Enjoying ResumeForge? <a href="${issuesURL}" target="_blank" rel="noopener">Send feedback</a> — it takes 30 seconds.`;
    document.body.appendChild(el);

    setTimeout(() => el.classList.add('show'), 200);
    setTimeout(() => el.classList.remove('show'), 6000);

    document.getElementById('rf-toast-close').addEventListener('click', () => el.classList.remove('show'));
  }

  function showExitModal() {
    if (localStorage.getItem('fb_exit_seen')) return;
    localStorage.setItem('fb_exit_seen', '1');

    const overlay = document.createElement('div');
    overlay.id = 'rf-modal-overlay';
    overlay.innerHTML = `
      <div id="rf-modal">
        <h3>Before you go — got 30 seconds?</h3>
        <p>ResumeForge is free forever. If you found it useful (or found something broken), a quick note helps a lot.</p>
        <div id="rf-modal-btns">
          <a href="${issuesURL}" target="_blank" rel="noopener">✦ Leave Feedback</a>
          <button id="rf-modal-close">No thanks</button>
        </div>
      </div>`;
    document.body.appendChild(overlay);

    requestAnimationFrame(() => overlay.classList.add('show'));

    function close() { overlay.classList.remove('show'); setTimeout(() => overlay.remove(), 300); }
    document.getElementById('rf-modal-close').addEventListener('click', close);
    overlay.addEventListener('click', e => { if (e.target === overlay) close(); });
  }

  document.addEventListener('DOMContentLoaded', () => {
    injectCSS();
    setTimeout(showToast, 4000);

    // Exit intent — desktop: mouse leaves top of viewport
    document.addEventListener('mouseleave', e => {
      if (e.clientY < 20) showExitModal();
    }, { once: true });

    // Exit intent — mobile: back button / pagehide
    window.addEventListener('pagehide', showExitModal, { once: true });
  });
})();
