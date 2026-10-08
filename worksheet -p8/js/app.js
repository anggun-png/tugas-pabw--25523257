const profil = {
  nama: "Anggun Dwi Suryaningrum",
  nim: "25523257",
  peran: "Mahasiswa yang menyukai musik"
};

const lagu = [
  {
    judul: "Silence",
    artis: "Marshmello, Khalid",
    genre: "Dance, Future Trap"
  },
  {
    judul: "Beat It",
    artis: "Michael Jackson",
    genre: "Hard Rock, Dance-Rock, Funk Rock"
  },
  {
    judul: "Loser",
    artis: "Tame Impala",
    genre: "Psychedelic Pop-Funk"
  },
  {
    judul: "So Far So Fake",
    artis: "Pierce The Veil",
    genre: "Pop-Punk"
  }
];

console.log("Data profil:");
console.log(profil);

console.log("Daftar lagu:");
console.table(lagu);


console.log("=== Lembar C: Array Methods ===");

// 1. MAP: mengambil judul semua lagu
const daftarJudul = lagu.map(function (item) {
  return item.judul;
});

console.log("Daftar judul lagu:", daftarJudul);

// 2. FILTER: mencari lagu dengan genre Pop-Punk
const laguPopPunk = lagu.filter(function (item) {
  return item.genre.includes("Pop-Punk");
});

console.log("Lagu bergenre Pop-Punk:", laguPopPunk);

// 3. FIND: mencari lagu berdasarkan judul
const laguPilihan = lagu.find(function (item) {
  return item.judul === "Silence";
});

console.log("Lagu yang ditemukan:", laguPilihan);


function tampilkanLagu() {
  const tabel = document.querySelector("tbody");

  if (!tabel) {
    console.log("Elemen tbody tidak ditemukan.");
    return;
  }

  tabel.innerHTML = lagu.map(function (item) {
    return `
      <tr>
        <td>${item.judul}</td>
        <td>${item.artis}</td>
        <td>${item.genre}</td>
      </tr>
    `;
  }).join("");
}

tampilkanLagu();


function cariLagu(kataKunci) {
  const hasil = lagu.filter(function (item) {
    return (
      item.judul.toLowerCase().includes(kataKunci.toLowerCase()) ||
      item.artis.toLowerCase().includes(kataKunci.toLowerCase()) ||
      item.genre.toLowerCase().includes(kataKunci.toLowerCase())
    );
  });

  console.log("Hasil pencarian:", hasil);
  return hasil;
}

// Contoh pencarian
cariLagu("Pop-Punk");
cariLagu("Michael Jackson");


window.simpanLagu = function(judul, artis, genre) {
    const laguBaru = {
        judul: judul,
        artis: artis,
        genre: genre
    };

    lagu.push(laguBaru);

    console.log("Lagu berhasil disimpan:", laguBaru);
    tampilkanLagu();

    return true;
};


const formLagu = document.querySelector(".form-kolom");

formLagu.addEventListener("submit", function(event) {
    event.preventDefault();

    const judul = document.getElementById("song").value.trim();
    const artis = document.getElementById("artis").value.trim();
    const genre = document.getElementById("genre").value.trim();

    if (judul === "" || artis === "" || genre === "") {
        alert("Semua kolom harus diisi!");
        return;
    }

    simpanLagu(judul, artis, genre);

    formLagu.reset();
});


const profilBaru = {
  nama: "Anggun Dwi Suryaningrum",
  nim: "25523257",
  peran: "Mahasiswa yang menyukai musik",
  keahlian: ["HTML", "CSS", "JavaScript"]
};

const daftarProyek = [
  { judul: "Website Playlist Musik", tahun: 2026, selesai: true },
  { judul: "Fitur Pencarian Lagu", tahun: 2026, selesai: false }
];

console.log("=== Lembar D ===");
console.table(profilBaru.keahlian);
console.table(daftarProyek);

const proyekSelesai = daftarProyek.filter(
  (proyek) => proyek.selesai
);
console.table(proyekSelesai);

const katalog = daftarProyek.find(
  (proyek) => proyek.judul === "Website Playlist Musik"
);
console.log("Hasil pencarian:", katalog);

const judulProyek = daftarProyek.map(
  (proyek) => proyek.judul
);
console.log("Daftar judul:", judulProyek);

