
const ALAMAT = "data/proyek.json";

export async function ambilProyek() {
  try {
    const respons = await fetch(ALAMAT);

    if (!respons.ok) {
      throw new Error("status " + respons.status);
    }

    const data = await respons.json();
    console.log(data);
    return data;
  } catch (galat) {
    console.error("gagal memuat", galat.message);
    throw galat;
  }
}

