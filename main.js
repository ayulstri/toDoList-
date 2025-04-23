import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  getDoc,
  deleteDoc,
  doc,
  query,
  orderBy,
  updateDoc
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";


const firebaseConfig = {
  apiKey: "AIzaSyASPpFm467k79sDkVFWWseRou7h8_e2XLY",
  authDomain: "insan-cemerlang-e3a49.firebaseapp.com",
  projectId: "insan-cemerlang-e3a49",
  storageBucket: "insan-cemerlang-e3a49.firebasestorage.app",
  messagingSenderId: "1633123066",
  appId: "1:1633123066:web:77ee69dcef30d9b5ee6743",
  measurementId: "G-WR2W88N8M3"
};

// Inisialisasi Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
//fungsi untuk menampilkan data dari data base
export async function ambilDaftarkasir() {
  const refDokumen = collection(db, "kasir");
  const kueri = query(refDokumen, orderBy("nama"));
  const cuplikanKueri = await getDocs(kueri);

  let hasil = [];
  cuplikanKueri.forEach((dok) => {
    hasil.push({
      id: dok.id,
      nama: dok.data().nama,
      harga: dok.data().harga,
    });
  });



  return hasil;
}
//################$#######

export function formatAngka(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
//fungsi untuk menambahkan data
export async function tambahkasir(nama, harga,) {
  try {
    const dokRef = await addDoc(collection(db, 'kasir'), {
      nama: nama,
      status: status,
      prioritas: prioritas 
      tanggal: tanggal
    });
    console.log('berhasil menembah kasir ' + dokRef.id);
  } catch (e) {
    console.log('gagal menambah kasir ' + e);
  }
}
//#####################
//fungsi untuk hapus data
export async function hapuskasir(docId) {
  await deleteDoc(doc(db, "kasir", docId));
}
//fungsi untuk ubah data
export async function ubahkasir(docId, nama, harga,) {
  await updateDoc(doc(db, "kasir", docId), {
    nama: nama,
    status: status,
    prioritas: prioritas,
    tanggal: tanggal,
  });
}
//fungsi untuk ambil data dan untuk diubah
export async function ambilkasir(docId) {
  const docRef = await doc(db, "kasir", docId);
  const docSnap = await getDoc(docRef);

  return await docSnap.data();
}