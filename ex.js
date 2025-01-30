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

const fetchCourses = async () => {
    try {
        const freeCoursesSnapshot = await get(ref(database, "admin/courses/free"));
        const premiumCoursesSnapshot = await get(ref(database, "admin/courses/premium"));

        const freeCourses = freeCoursesSnapshot.exists() ? Object.values(freeCoursesSnapshot.val()) : [];
        const premiumCourses = premiumCoursesSnapshot.exists() ? Object.values(premiumCoursesSnapshot.val()) : [];

        // Randomly shuffle the courses
        const allCourses = [...freeCourses, ...premiumCourses].sort(() => Math.random() - 0.5);

        console.log("Courses retrieved successfully:", allCourses);
        return allCourses;
    } catch (error) {
        console.error("Error fetching courses:", error);
        return [];
    }
};

// Enroll user in the course
const enrollCourse = (course, userId) => {
    const userCoursesRef = ref(database, 'users/' + userId + '/enrolledCourses');
    
    // Add course to user's enrolled courses in Firebase
    set(userCoursesRef, {
        ...course
    })
    .then(() => {
        Swal.fire('Success!', 'You have successfully enrolled!', 'success');
    })
    .catch((error) => {
        Swal.fire('Error!', 'There was an error enrolling in the course.', 'error');
    });
};

// Display courses
const displayCourses = (courses, userId) => {
    const coursesContainer = document.getElementById("courses-container");
    coursesContainer.innerHTML = "";

    courses.forEach((course) => {
        const courseElement = document.createElement("div");
        courseElement.className = "course";
        courseElement.innerHTML = `
        <div class="col-md-4 mb-4">
            <div class="card h-100">
                <img src="${course.image}" class="card-img-top img-fluid" alt="${course.title}" style="max-height: 200px; object-fit: cover;">
                <div class="card-body">
                    <h5 class="card-title">${course.title}</h5>
                    <p class="card-text">${course.description}</p>
                    <button class="btn btn-secondary mt-2" onclick="navigateToSingleCourse('${course.id}')">Play All</button>
                    <button class="btn btn-primary mt-2 enroll-btn" data-id="${course.id}" data-type="${course.type}" data-user="${userId}">Enroll</button>

                </div>
            </div>
        </div>
    `;
        coursesContainer.appendChild(courseElement);
    });
};

// Handle course enrollment
const handleEnrollment = (courseId, courseType, userId) => {
    if (courseType === 'premium') {
        Swal.fire({
            title: 'Confirm Payment',
            text: "This is a premium course. Please complete the payment to enroll.",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Go to Payment',
            cancelButtonText: 'Cancel'
        }).then((result) => {
            if (result.isConfirmed) {
                // Redirect to payment page
                window.location.href = 'payment.html';
            }
        });
    } else {
        // Enroll in free course
        const freeCourse = { id: courseId, title: "Free Course" };
        enrollCourse(freeCourse, userId);
    }
};

// Fetch and display courses
fetchCourses().then((courses) => {
    const userId = "user123"; // You should dynamically get the user ID (e.g., from Firebase Authentication)
    displayCourses(courses, userId);
});
