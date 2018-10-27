$(document).ready(() =>{
	$('.nav-links').on('mouseenter', (e) =>{
		$(e.currentTarget).addClass('active').on('mouseleave', (e) =>{
			$(e.currentTarget).removeClass('active');
		})

		document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
})
	})
		

		