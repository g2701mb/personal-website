// Script sederhana untuk form
document.getElementById('contact-form').addEventListener('submit', function(e){
    e.preventDefault();
    alert("Terima kasih! Pesan Anda telah dikirim.");
    this.reset();
});
