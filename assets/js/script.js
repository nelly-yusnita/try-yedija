// ===== SHOW MENU ===== //
const navMenu = document.getElementById('nav-menu'),
		navToggle = document.getElementById('nav-toggle'),
		navClose = document.getElementById('nav-close');

if(navToggle){
	navToggle.addEventListener('click', () =>{
		navMenu.classList.add('show-menu')
	})
}

if(navClose){
	navClose.addEventListener('click', () =>{
		navMenu.classList.remove('show-menu')
	})
}
// ===== end show menu ===== //

// ===== REMOVE MENU MOBILE ===== //
const navLink = document.querySelectorAll('.nav__link');

function linkAction(){
	const navMenu = document.getElementById('nav-menu')

	navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));
// ===== end remove menu mobile ===== //

// ===== SCROLL SECTIONS ACTIVE LINK ===== //
const sections = document.querySelectorAll('section[id]');

function scrollActive(){
	const scrollY = window.pageYOffset

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
				sectionTop = current.offsetTop - 58,
				sectionId = current.getAttribute('id')

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
		}else{
			document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
		}
	})
}
window.addEventListener('scroll', scrollActive);
// ===== end scroll sections active link ===== //

// ===== CHANGE BACKGROUND HEADER ===== //
function scrollHeader(){
	const header = document.getElementById('header')

	if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);
// ===== end change background header ===== //

// ===== HOME SLIDES ===== //
const homeSwiper = new Swiper(".home__slides", {
	spaceBetween: 30,
	effect: "fade",

	autoplay: {
		delay: 4500,
		disableOnInteraction: false,
	},
});
// ===== end home slider ===== //

// ===== TESTIMONIAL ===== //
const testimonialSwiper = new Swiper(".testimoni__container", {
	slidesPerView: 1,
	loop: true,
	grabCursor: true,

	autoplay: {
		delay: 5000,
		disableOnInteraction: false,
	},

	pagination: {
		el: ".swiper-pagination",
		clickable: true,
		dynamicBullets: true,
	},
});
// ===== end testimonial ===== //

// ===== SCROLL UP ===== //
function scrollUp(){
   const scrollUp = document.getElementById('scroll-up');

   if(this.scrollY >= 350) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp);
// ===== end scroll up ===== //

// ===== SCROLL REVEAL ANIMATION ===== //
const sr = ScrollReveal({
   origin: 'top',
   distance: '60px',
   duration: 2500,
   delay: 400,
   // reset: true// animation repeat //
})
sr.reveal(`.banner__container, .section__title, .banner__container-2, .portfolio__title`)
sr.reveal(`.home__data-content, .about__images`, {origin: 'left'})
sr.reveal(`.about__data`, {origin: 'right'})
sr.reveal(`.service__card, .portfolio__image-box, .portfolio__video-box, .contact__content`, {interval: 100})