import { daftarProyek } from "./app.js";

const wadah = document.querySelector("#daftar");
const kosong = document.querySelector("#kosong");
const barisFilter = document.querySelector("#filter");

function buatKartu(proyek) {
  const li = document.createElement("li");
  li.className = "kartu";

  const judul = document.createElement("h3");
  judul.textContent = proyek.judul;

  const tahun = document.createElement("p");
  tahun.textContent = "Tahun: " + proyek.tahun;

  const status = document.createElement("p");
  status.textContent = proyek.selesai
    ? "Status: Selesai"
    : "Status: Dalam Proses";

  li.append(judul, tahun, status);
  return li;
}

function render(daftar) {
  wadah.textContent = "";

  if (daftar.length === 0) {
    kosong.hidden = false;
    return;
  }

  kosong.hidden = true;

  daftar.forEach((proyek) => {
    wadah.append(buatKartu(proyek));
  });
}

function tandaiTombolAktif(tombolAktif) {
  document.querySelectorAll("#filter button").forEach((tombol) => {
    tombol.classList.toggle("aktif", tombol === tombolAktif);
  });
}

barisFilter.addEventListener("click", (event) => {
  const tombol = event.target.closest("button");
  if (!tombol || !barisFilter.contains(tombol)) return;

  const kategori = tombol.dataset.kategori;

  const terpilih = kategori === "kosong"
  ? []
  : daftarProyek.filter(
      (proyek) =>
        kategori === "semua" ||
        proyek.kategori === kategori
    );

  render(terpilih);
  tandaiTombolAktif(tombol);
});

render(daftarProyek);

const tombolSemua = document.querySelector(
  '#filter button[data-kategori="semua"]'
);

if (tombolSemua) {
  tandaiTombolAktif(tombolSemua);
}
