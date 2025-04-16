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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Mendapatkan elemen dari DOM
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

// Array untuk menyimpan tugas
let tasks = [];

// Fungsi untuk menampilkan tugas
function displayTasks() {
    taskList.innerHTML = ''; // Mengosongkan daftar tugas
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.textContent = task.name + (task.completed ? ' (Selesai)' : '');
        li.className = task.completed ? 'completed' : '';
        
        // Tombol untuk menandai tugas selesai
        const completeButton = document.createElement('button');
        completeButton.textContent = 'Selesai';
        completeButton.onclick = () => markTaskAsCompleted(index);
        
        // Tombol untuk menghapus tugas
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Hapus';
        deleteButton.onclick = () => deleteTask(index);
        
        li.appendChild(completeButton);
        li.appendChild(deleteButton);
        taskList.appendChild(li);
    });
}

// Fungsi untuk menambahkan data 
export async function tambahtoDoList (nama, status, prioritas, tanggal) { try {
    const dokRef = await addDoc (collection(db, 'toDoList'), { 
    nama: nama,
    status: status,
    prioritas: prioritas,
    tanggal: tanggal 
    });
    console.log('berhasil menambah toDoList + dokRef.id');
} catch (e) {
    console.log ('gagal menambah toDoList + e');
  }
}
//####################
// Fungsi untuk hapus data
export async function hapustoDoList (docId, nama, status , prioritas, tanggal,) { await updateDoc (doc(db,) "toDoList", docId), {
    tasks[index].completed = true;
    displayTasks(); // Menampilkan tugas
}

// Fungsi untuk ambil data dan untuk diubah 
function deleteTask(index) {
    tasks.splice(index, 1);
    displayTasks(); // Menampilkan tugas
}

// Event listener untuk tombol tambah tugas
addTaskButton.addEventListener('click', addTask);