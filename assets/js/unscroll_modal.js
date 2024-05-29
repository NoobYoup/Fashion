//Hide modal menu when click item
const nav = document.querySelectorAll(".element-translate")
const menu = document.querySelector(".modal-menu");
const menulist = document.querySelector(".menu-mobile")
const overlayMenu = document.querySelector(".overlay-menu");
const overlayLogin = document.querySelector(".overlay-login");
const overlayCart = document.querySelector(".overlay-cart");
const overlayNotification = document.querySelector(".overlay-notification");
const overlayHistory = document.querySelector(".overlay-history");
const overlayVoucher = document.querySelector(".overlay-voucher");
menulist?.addEventListener("click", (e) => {
  menu.classList.remove("active")
  overlay.classList.remove("active")
})
nav?.forEach(item =>
  item?.addEventListener("click", (e) => {
    menu.classList.toggle("active")
    overlay.classList.toggle("active");
  })
)

//Un-scroll modal menu
const menuButton = document.querySelector('.menu-mobile');
const modalMenu = document.querySelector('.modal-menu');
const closeButtonMenu = document.querySelector('.modal-menu .modal-close-menu');
const body = document.body;

menuButton.addEventListener('click', () => {
  modalMenu.classList.add('show');
  body.style.overflow = 'hidden';
});

closeButtonMenu.addEventListener('click', () => {
  modalMenu.classList.remove('show');
  body.style.overflow = 'auto';
});

overlayMenu.addEventListener('click', () => {
  body.style.overflow = 'auto';
});

// modalMenu.addEventListener('click', (event) => {
//   if (event.target === modalMenu) {
//     modalMenu.classList.remove('show');
//     body.style.overflow = 'auto';
//   }
// });

//Un-scroll modal login
const loginButton = document.querySelector('.user-mobile');
const modalLogin = document.querySelector('.modal-login');
const closeButtonLogin = document.querySelector('.modal-login .modal-close-login');

loginButton.addEventListener('click', () => {
  modalLogin.classList.add('show');
  body.style.overflow = 'hidden';
});

closeButtonLogin.addEventListener('click', () => {
  modalLogin.classList.remove('show');
  body.style.overflow = 'auto';
});

overlayLogin.addEventListener('click', () => {
  body.style.overflow = 'auto';
});

//Un-scroll modal cart
const cartButton = document.querySelector('.cart-mobile');
const modalCart = document.querySelector('.modal-cart');
const closeButtonCart = document.querySelector('.modal-cart .modal-close-cart');

cartButton.addEventListener('click', () => {
  modalCart.classList.add('show');
  body.style.overflow = 'hidden';
});

closeButtonCart?.addEventListener('click', () => {
  modalCart.classList.remove('show');
  body.style.overflow = 'auto';
});

overlayCart.addEventListener('click', () => {
  body.style.overflow = 'auto';
});

//Un-scroll modal login Circle
const loginButtonCircle = document.querySelector('.user-icon');

loginButtonCircle?.addEventListener('click', () => {
  modalLogin.classList.add('show');
  body.style.overflow = 'hidden';
});

//Un-scroll modal cart Circle
const cartButtonCircle = document.querySelector('.cart-icon');

cartButtonCircle?.addEventListener('click', () => {
  modalCart.classList.add('show');
  body.style.overflow = 'hidden';
});


//Un-scroll modal notification Circle
const notificationButton = document.querySelector('.bell-icon');
const modalNotification = document.querySelector('.modal-notification');
const closeButtonNotification = document.querySelector('.modal-notification .modal-close-notification');

notificationButton?.addEventListener('click', () => {
  modalNotification.classList.add('show');
  body.style.overflow = 'hidden';
});

closeButtonNotification?.addEventListener('click', () => {
  modalNotification.classList.remove('show');
  body.style.overflow = 'auto';
});

overlayNotification?.addEventListener('click', () => {
  body.style.overflow = 'auto';
});

//Un-scroll modal history Circle
const historyButton = document.querySelector('.bag-icon');
const modalHistory = document.querySelector('.modal-history');
const closeButtonHistory = document.querySelector('.modal-history .modal-close-history');

historyButton?.addEventListener('click', () => {
  modalHistory.classList.add('show');
  body.style.overflow = 'hidden';
});

closeButtonHistory?.addEventListener('click', () => {
  modalHistory.classList.remove('show');
  body.style.overflow = 'auto';
});

overlayHistory?.addEventListener('click', () => {
  body.style.overflow = 'auto';
});


//Un-scroll modal voucher Circle
const voucherButton = document.querySelector('.ticket-icon');
const modalVoucher = document.querySelector('.modal-voucher');
const closeButtonVoucher = document.querySelector('.modal-voucher .modal-close-voucher');

voucherButton?.addEventListener('click', () => {
  modalVoucher.classList.add('show');
  body.style.overflow = 'hidden';
});

closeButtonVoucher?.addEventListener('click', () => {
  modalVoucher.classList.remove('show');
  body.style.overflow = 'auto';
});

overlayVoucher?.addEventListener('click', () => {
  body.style.overflow = 'auto';
});


//Un-scroll modal cart page Buy
const cartButtonBuy = document.querySelector('.cart-buy-section');

cartButtonBuy?.addEventListener('click', () => {
  modalCart.classList.add('show');
  body.style.overflow = 'hidden';
});


//Un-scroll modal login page Buy
const loginButtonBuy = document.querySelector('.login-buy-section');

loginButtonBuy?.addEventListener('click', () => {
  modalLogin.classList.add('show');
  body.style.overflow = 'hidden';
});