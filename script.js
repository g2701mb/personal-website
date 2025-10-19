document.getElementById('contact-form').addEventListener('submit', function() {
    const status = document.getElementById("status");
    status.innerText = "Mengirim pesan... Harap tunggu.";

    // Setelah form disubmit ke FormSubmit, browser akan berpindah halaman sukses
    // jadi script ini hanya untuk memberi notifikasi sementara sebelum redirect
});
