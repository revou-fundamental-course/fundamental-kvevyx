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

    // Handle form submission
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const formData = new FormData(form);
        displayNama.textContent = formData.get('nama');
        displayTanggalLahir.textContent = formData.get('tanggal_lahir');
        displayJenisKelamin.textContent = formData.get('jenis_kelamin');
        displayPesan.textContent = formData.get('pesan');
    });
});