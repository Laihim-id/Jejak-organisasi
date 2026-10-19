// Validasi form login (di sisi browser)
const form = document.getElementById('formLogin');
const emailEl = document.getElementById('email');
const passEl = document.getElementById('password');
const pesan = document.getElementById('pesan');

// Menampilkan alert Bootstrap (jenis: 'danger' = merah, 'success' = hijau)
function tampilPesan(jenis, teks) {
  pesan.innerHTML = '<div class="alert alert-' + jenis + '" role="alert">' + teks + '</div>';
}

// Memberi tanda merah/hijau pada kolom input
function tandai(el, valid) {
  el.classList.toggle('is-valid', valid);
  el.classList.toggle('is-invalid', !valid);
}

form.addEventListener('submit', function (e) {
  e.preventDefault(); // mencegah form diproses/halaman dimuat ulang

  const email = emailEl.value.trim();
  const pass = passEl.value;
  const polaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const errors = [];

  // Validasi email
  if (email === '') {
    errors.push('Email tidak boleh kosong.');
  } else if (!polaEmail.test(email)) {
    errors.push('Format email tidak valid, contoh: nama@email.com.');
  }

  // Validasi password
  if (pass === '') {
    errors.push('Password tidak boleh kosong.');
  } else if (pass.length < 8) {
    errors.push('Password minimal 8 karakter.');
  }

  tandai(emailEl, email !== '' && polaEmail.test(email));
  tandai(passEl, pass.length >= 8);

  if (errors.length > 0) {
    tampilPesan('danger', '<strong>Login belum berhasil:</strong><ul class="mb-0">' +
      errors.map(function (m) { return '<li>' + m + '</li>'; }).join('') + '</ul>');
  } else {
    tampilPesan('success', 'Validasi berhasil. Selamat datang!');
  }
});