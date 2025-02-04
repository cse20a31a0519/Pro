

import { auth, database } from './index.js';
import { ref, get, child } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";

async function loadPaymentDetails(userId) {
    try {
        const dbRef = ref(database);
        const userSnapshot = await get(child(dbRef, `users/${userId}`)); // Fetching user data

        if (userSnapshot.exists()) {
            const userData = userSnapshot.val();
            if (userData.payments) {
                const paymentsContainer = document.getElementById("payments-container");
                paymentsContainer.innerHTML = ""; // Clear previous content

                Object.keys(userData.payments).forEach((paymentKey) => {
                    const payment = userData.payments[paymentKey];

                    const paymentElement = document.createElement("div");
                    paymentElement.classList.add("col-md-4", "mb-4");

                    paymentElement.innerHTML = `
                        <div class="card h-100">
                            <div class="card-body">
                                <h5 class="card-title">Course: ${payment.courseTitle}</h5>
                                <p class="card-text">Payment Method: ${payment.paymentDetails.paymentMethod}</p>
                                <p class="card-text">Price: $${payment.paymentDetails.price}</p>
                                <p class="card-text">Date: ${new Date(payment.date).toLocaleString()}</p>
                            </div>
                        </div>
                    `;

                    paymentsContainer.appendChild(paymentElement);
                });
            } else {
                console.log("No payment details found for this user.");
            }
        } else {
            console.log("User not found in the database.");
        }
    } catch (error) {
        console.error("Error fetching payment details:", error);
    }
}


// Auth state listener
auth.onAuthStateChanged(user => {
    if (user) {
        console.log("User ID:", user.uid);
        loadPaymentDetails(user.uid); // Load the payment details after user is authenticated
    } else {
        console.log("No user is logged in.");
    }
});
// import { auth, database } from './index.js';
// import { ref, get, child } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";


// // Auth state listener
// auth.onAuthStateChanged(user => {
//     if (user) {
//         console.log("User ID:", user.uid);
//         loadPaymentDetails(user.uid);
//     } else {
//         console.log("No user is logged in.");
//     }
// });


// Logout functionality
document.getElementById('Logout').addEventListener('click', async () => {
    await auth.signOut();
    window.location.href("index.html");
});
