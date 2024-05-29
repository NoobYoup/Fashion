//Click drop down policy
const panelPolicyElements = document.querySelectorAll('.panel-policy');

panelPolicyElements.forEach(panel => {
  const panelHeading = panel.querySelector('.panel-policy-sales, .panel-policy-payment, .panel-policy-order, .more .panel-policy-return, .panel-policy-privacy, .panel-policy-collab');
  const panelTitle = panel.querySelector('.panel-policy-sales-title, .panel-policy-payment-title, .panel-policy-order-title, .panel-policy-return-title, .panel-policy-privacy-title, .panel-policy-collab-title');
  const arrow = panel.querySelector('.arrow');

  // Biến trạng thái của panel-policy-title
  let isOpen = false;

  function togglePanelPolicy() {
    // Chuyển đổi trạng thái
    isOpen = !isOpen;

    if (isOpen) {
      panelTitle.style.display = 'block';
      arrow.classList.remove('ti-angle-double-right');
      arrow.classList.add('ti-angle-double-down');
    } else {
      panelTitle.style.display = 'none';
      arrow.classList.remove('ti-angle-double-down');
      arrow.classList.add('ti-angle-double-right');
    }
  }

  panelHeading.addEventListener('click', togglePanelPolicy);
});


//Click drop down policy PAGE DETAIL
const panelHeadings = document.querySelectorAll('.panel-heading');

panelHeadings.forEach(panelHeading => {
  const arrow = panelHeading.querySelector('.arrow1');
  const panelPolicyTitle = panelHeading.querySelector('.panel-policy-return-title, .panel-policy-ship-title, .panel-policy-payment-title, .panel-policy-info-title');

  panelHeading.addEventListener('click', function() {
    if (panelPolicyTitle.style.display !== 'block') {
      panelPolicyTitle.style.display = 'block'
      arrow.classList.remove('ti-angle-right');
      arrow.classList.add('ti-angle-down');
    } else {
      panelPolicyTitle.style.display = 'none';
      arrow.classList.remove('ti-angle-down');
      arrow.classList.add('ti-angle-right');
    }
  });
});