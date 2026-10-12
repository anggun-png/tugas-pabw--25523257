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


const formLagu = 
  document.querySelector("#formLagu");
const tombolSimpan = 
  document.querySelector("#tombolSimpan");

const kolomLagu = [
  {
    input: document.querySelector("#song"),
    pesan: document.querySelector("#galat-song"),
    nama: "judul lagu"
  },
  {
    input: document.querySelector("#artis"),
    pesan: document.querySelector("#galat-artis"),
    nama: "artis"
  },
  {
    input: document.querySelector("#genre"),
    pesan: document.querySelector("#galat-genre"),
    nama: "genre"
  }
];

let sudahDikirim = false;

function periksaKolom(kolom, tampilkanGalat = false) {
  const sah = kolom.input.value.trim() !== "";

  if (sah) {
    kolom.input.removeAttribute("aria-invalid");
    kolom.pesan.textContent = "";
    kolom.pesan.classList.remove("tampil");
  } else if (tampilkanGalat) {
    kolom.input.setAttribute("aria-invalid", "true");
    kolom.pesan.textContent =
      "Silakan isi " + kolom.nama + " terlebih dahulu.";
    kolom.pesan.classList.add("tampil");
  }

  return sah;
}

function periksaForm() {
  const semuaSah = kolomLagu.every((kolom) =>
    periksaKolom(kolom, sudahDikirim)
  );

  tombolSimpan.disabled = !semuaSah;
  return semuaSah;
}

kolomLagu.forEach((kolom) => {
  kolom.input.addEventListener("input", () => {
    periksaForm();
  });
});

formLagu.addEventListener("submit", (event) => {
  event.preventDefault();
  sudahDikirim = true;

  const semuaSah = periksaForm();

  if (!semuaSah) {
    const kolomBermasalah = kolomLagu.find(
      (kolom) => kolom.input.value.trim() === ""
    );

    if (kolomBermasalah) {
      kolomBermasalah.input.focus();
    }

    return;
  }

  alert("Form lagu berhasil divalidasi!");
});

periksaForm();
