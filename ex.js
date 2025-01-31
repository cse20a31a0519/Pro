import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-database.js";
import * as Swal from 'https://cdn.jsdelivr.net/npm/sweetalert2@11/dist/sweetalert2.all.min.js';



const firebaseConfig = {
    apiKey: "AIzaSyB5iAUnK_5AP7ijrcQvlRfvCSfXrH9n6Ak",
    authDomain: "index-16f53.firebaseapp.com",
    projectId: "index-16f53",
    storageBucket: "index-16f53.firebasestorage.app",
    messagingSenderId: "171804052014",
    appId: "1:171804052014:web:c38d9d50835d551cafadbf"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);


