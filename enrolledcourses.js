import { auth, database } from './index.js';
import { ref, get, child } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";

async function loadEnrolledCourses(userId) {
    try {
        const dbRef = ref(database);
        const userSnapshot = await get(child(dbRef, `users/${userId}`)); // Assuming user data is stored under "users/"

        if (userSnapshot.exists()) {
            const userData = userSnapshot.val();
            if (userData.enrolledCourses) {
                const coursesContainer = document.getElementById("courses-container");
                coursesContainer.innerHTML = ""; // Clear previous content

                userData.enrolledCourses.forEach((course, index) => {
                    // Create course card
                    const courseElement = document.createElement("div");
                    courseElement.classList.add("col-md-4", "mb-4");

                    courseElement.innerHTML = `
                        <div class="card h-100">
                            <div class="card-body">
                                <h5 class="card-title"><strong>Title:</strong> ${course.title}</h5>
                                <p class="card-text"><strong>Category:</strong> ${course.category}</p>
                                <p class="card-text"><strong>Type:</strong> ${course.type}</p>
                                <p class="card-text"><strong>Price:</strong> $${course.price}</p>
                                <p class="card-text"><strong>Enrolled On:</strong> ${new Date(course.enrolledOn).toLocaleDateString()}</p>
                            </div>
                        </div>
                    `;

                    coursesContainer.appendChild(courseElement);
                });
            } else {
                console.log("No enrolled courses found for this user.");
                document.getElementById("courses-container").innerHTML = "<p>No enrolled courses found.</p>";
            }
        } else {
            console.log("User not found in the database.");
        }
    } catch (error) {
        console.error("Error fetching enrolled courses:", error);
    }
}

// async function loadEnrolledCourses(userId) {
//     try {
//         const dbRef = ref(database);
//         const userSnapshot = await get(child(dbRef, `users/${userId}`)); // Assuming user data is stored under "users/"

//         if (userSnapshot.exists()) {
//             const userData = userSnapshot.val();
//             if (userData.enrolledCourses) {
//                 const coursesContainer = document.getElementById("courses-container");
//                 coursesContainer.innerHTML = ""; // Clear previous content

//                 userData.enrolledCourses.forEach((course, index) => {
//                     // Sample course data (Modify based on your actual database structure) // Replace with actual image field
                    
//                     const courseElement = document.createElement("div");
//                     courseElement.classList.add("col-md-4", "mb-4");

//                     courseElement.innerHTML = `
//                         <div class="card h-100">
//                             <div class="card-body">
//                                 <h5 class="card-title">Title: ${course.title}</h5>
//                                 <p class="card-text">Description: ${course.description}</p>
//                             </div>
//                         </div>
//                     `;

//                     coursesContainer.appendChild(courseElement);
//                 });
//             } else {
//                 console.log("No enrolled courses found for this user.");
//             }
//         } else {
//             console.log("User not found in the database.");
//         }
//     } catch (error) {
//         console.error("Error fetching enrolled courses:", error);
//     }
// }

// Auth state listener
auth.onAuthStateChanged(user => {
    if (user) {
        console.log("User ID:", user.uid);
        loadEnrolledCourses(user.uid);
    } else {
        console.log("No user is logged in.");
    }
});



// Logout functionality
document.getElementById('Logout').addEventListener('click', async () => {
    await auth.signOut();
    window.location.href("index.html");
});
