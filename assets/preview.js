if (!document.location.href.startsWith('file://')) {
  // Create background modal element
  var backgroundModal = document.createElement('div');
  backgroundModal.style.position = 'fixed';
  backgroundModal.style.top = '0';
  backgroundModal.style.left = '0';
  backgroundModal.style.width = '100%';
  backgroundModal.style.height = '100%';
  backgroundModal.style.zIndex = '9998';

  // Create content modal element
  var contentModal = document.createElement('div');
  contentModal.style.position = 'fixed';
  contentModal.style.top = '50%';
  contentModal.style.border = '1px solid var(--nc-tx-1)';
  contentModal.style.left = '50%';
  contentModal.style.padding = '10px';
  contentModal.style.transform = 'translate(-50%, -50%)';
  contentModal.style.background = 'var(--nc-bg-2)';
  contentModal.style.width = 'calc(100vw - 150px)';
  contentModal.style.height = 'calc(100vh - 150px)';
  contentModal.style.zIndex = '9999';
  contentModal.style.borderRadius = '10px';
  contentModal.style.overflow = 'scroll';
  contentModal.innerHTML = '<h2>Gams Online Demo</h2><br><p>Welcome to the online demo for Gams offline.</p><p>You can change the way games open in the dropdown "Open Gam Mode".</p><p>If you enjoy the site, and want to use it offline, be sure to download it <a href="https://github.com/Gams-Offline/Gams/archive/refs/heads/main.zip">here</a>.<blockquote><i>Right-click (two finger click) the link and click: "Save link as...", this will usually work better that just clicking it.</i></blockquote>';

  var closeBtn = document.createElement('button');
  closeBtn.innerHTML = 'Close';
  closeBtn.addEventListener('click', function() {
    document.body.removeChild(backgroundModal);
    document.body.removeChild(contentModal);
  });
  contentModal.appendChild(closeBtn)
  
  // Add modals to the page
  document.body.appendChild(backgroundModal);
  document.body.appendChild(contentModal);

  // Close modals when clicked
  backgroundModal.addEventListener('click', function() {
    document.body.removeChild(backgroundModal);
    document.body.removeChild(contentModal);
  });
  contentModal.addEventListener('click', function(event) {
    event.stopPropagation();
  });
}
