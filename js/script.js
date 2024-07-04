
var slideshows = document.querySelectorAll('[data-component="slideshow"]');
slideshows.forEach(initSlideShow);

function initSlideShow(slideshow) {

	var slides = document.querySelectorAll(`#${slideshow.id} [role="list"] .slide`);

	var index = 0, time = 3000;
	slides[index].classList.add('active');

	setInterval( () => {
		slides[index].classList.remove('active');
		
		index++;
		if (index === slides.length) index = 0;

		slides[index].classList.add('active');

	}, time);
}


document.addEventListener('DOMContentLoaded', (event) => {
    const form = document.getElementById('messageForm');
    const currentTime = document.getElementById('currentTime');
    const displayNama = document.getElementById('displayNama');
    const displayTanggalLahir = document.getElementById('displayTanggalLahir');
    const displayJenisKelamin = document.getElementById('displayJenisKelamin');
    const displayPesan = document.getElementById('displayPesan');

    // Display current time
    function updateTime() {
        const now = new Date();
        currentTime.textContent = now.toString();
    }
    updateTime();
    setInterval(updateTime, 1000);

    // Handle form 
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const formData = new FormData(form);
        displayNama.textContent = formData.get('nama');
        displayTanggalLahir.textContent = formData.get('tanggal_lahir');
        displayJenisKelamin.textContent = formData.get('jenis_kelamin');
        displayPesan.textContent = formData.get('pesan');
    });
});

