let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
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

