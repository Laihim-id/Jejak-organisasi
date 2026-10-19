// Data organisasi; halaman detail memilih satu item berdasarkan ?id=
const organisasi = [
 {
  "id": 1,
  "slug": "himatekva",
  "nama": "HIMATEKVA",
  "lengkap": "Himpunan Mahasiswa Jurusan Pendidikan Teknologi dan Vokasi",
  "jabatan": "Calon Waketum InsyaAllah",
  "periode": "2026 – 2027",
  "isi": "Himpunan mahasiswa tingkat jurusan di Universitas Sulawesi Barat. Mengadakan kegiatan akademik, pelatihan, dan kebersamaan antarmahasiswa Pendidikan Teknologi dan Vokasi.",
  "logo": "img/logo-himatekva.png",
  "foto": [
  {"src": "img/Dok-Himatekva.jpg", "ket": "PAB HIMATEKVA 2025"}
]
 },
 {
  "id": 2,
  "slug": "bem-fkip",
  "nama": "BEM FKIP",
  "lengkap": "Badan Eksekutif Mahasiswa Fakultas Keguruan dan Ilmu Pendidikan",
  "jabatan": "Anggota Muda",
  "periode": "2026 – 2027",
  "isi": "Lembaga eksekutif mahasiswa tingkat fakultas yang menjalankan program kerja, advokasi, dan kegiatan kemahasiswaan di FKIP Universitas Sulawesi Barat.",
  "logo": "img/logo-bem-fkip.png",
  "foto": [
  {"src": "img/Dok-BEM.jpeg", "ket": "Leadership Training II BEM FKIP 2026"}
]
 },
 {
  "id": 3,
  "slug": "hmi",
  "nama": "HMI Kom. Sospol",
  "lengkap": "Himpunan Mahasiswa Islam Komisariat Sospol Universitas Sulawesi Barat",
  "jabatan": "Kader",
  "periode": "2026 – 2027",
  "isi": "Organisasi kemahasiswaan yang membina kader lewat diskusi, pelatihan, dan kajian keilmuan serta keislaman.",
  "logo": "img/logo-hmi.png",
  "foto": [
  {"src": "img/Dok-HMI.jpg", "ket": "Basic Training LK 1 HMI 2026"}
]
 },
 {
  "id": 4,
  "slug": "pandaraq",
  "nama": "UKM Pandaraq",
  "lengkap": "Unit Kegiatan Mahasiswa Seni Universitas Sulawesi Barat",
  "jabatan": "Anggota Muda",
  "periode": "2026 – 2027",
  "isi": "Unit kegiatan mahasiswa di bidang seni, termasuk fotografi dan karya visual, yang mewadahi minat dan bakat mahasiswa.",
  "logo": "img/logo-pandaraq.png",
  "foto": [
  {"src": "img/Dok-Pandaraq.jpg", "ket": "PAB Parromai X UKM Pandaraq 2026"}
]
 }
];
const id = new URLSearchParams(location.search).get('id') || 1;
const o = organisasi.find(function (x) { return x.id == id; }) || organisasi[0];
document.title = o.nama + ' | Jejak Organisasi';
const foto = o.foto.map(function (f) {
  return '<div class="col-md-6"><figure>' +
    '<img src="' + f.src + '" class="img-fluid rounded" alt="' + f.ket + '">' +
    '<figcaption class="small text-secondary">' + f.ket + '</figcaption>' +
    '</figure></div>';
}).join('');
document.getElementById('detail').innerHTML =
  '<div class="row g-4 align-items-center mb-4"><div class="col-md-3 text-center"><img src="' + o.logo + '" alt="Logo ' + o.nama + '" class="logo-besar"></div>' +
  '<div class="col-md-9"><h1>' + o.nama + '</h1><p class="text-secondary">' + o.lengkap + '</p>' +
  '<p class="mb-1"><i class="bi bi-person-badge"></i> <strong>Jabatan:</strong> ' + o.jabatan + '</p>' +
  '<p><i class="bi bi-calendar-event"></i> <strong>Periode:</strong> ' + o.periode + '</p></div></div>' +
  '<p>' + o.isi + '</p><h2 class="h4 mt-4 mb-3">Dokumentasi</h2><div class="row g-3">' + foto + '</div>';
