import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";
import { getDatabase, ref, set, get } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-database.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB5iAUnK_5AP7ijrcQvlRfvCSfXrH9n6Ak",
    authDomain: "index-16f53.firebaseapp.com",
    projectId: "index-16f53",
    storageBucket: "index-16f53.firebasestorage.app",
    messagingSenderId: "171804052014",
    appId: "1:171804052014:web:c38d9d50835d551cafadbf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

// Check if user is authenticated and userId is in localStorage
let userId = localStorage.getItem('userid');
if (!userId) {
    console.error('User ID not found in localStorage. Redirecting to login page.');
    window.location.href = "login.html"; // Redirect to login page
}

// Firebase Auth State Listener
onAuthStateChanged(auth, (user) => {
    if (user) {
        userId = user.uid; // Update userId with the authenticated user's UID
        localStorage.setItem('userid', userId); // Store userId in localStorage
        fetchCourses().then((courses) => {
            displayCourses(courses, userId);
        });
    } else {
        console.error('User is not authenticated. Redirecting to login page.');
        window.location.href = "login.html"; // Redirect to login page if user is not signed in
    }
});

// Fetch courses from the database
const fetchCourses = async (selectedCategory = null) => {
    try {
        const coursesSnapshot = await get(ref(database, "admin/courses"));
        if (!coursesSnapshot.exists()) return [];

        const coursesData = coursesSnapshot.val();
        const allCourses = [];

        // Loop through categories
        Object.keys(coursesData).forEach((category) => {
            if (!selectedCategory || selectedCategory === category) {
                const categoryCourses = coursesData[category];
                Object.values(categoryCourses).forEach((course) => {
                    const courseId = course.id || `${category}-${course.title}`;
                    allCourses.push({ ...course, type: course.type || "free", id: courseId, category });
                });
            }
        });

        console.log("Courses retrieved successfully:", allCourses);
        return allCourses;
    } catch (error) {
        console.error("Error fetching courses:", error);
        return [];
    }
};
let itButton = document.getElementById("it");
let aiButton = document.getElementById("dg");
let dsButton = document.getElementById("ds");
let coursesContainer = document.querySelector(".container");

itButton.addEventListener("click", () => {
    console.log("Fetching and displaying IT courses...");
    fetchCourses("It").then(courses => {
        coursesContainer.style.display = "block";
        console.log("IT Courses Data:", courses);
        displayCourses(courses, userId, "It");
    });
});

aiButton.addEventListener("click", () => {
    console.log("Fetching and displaying AI courses...");
    fetchCourses("Designing").then(courses => {
        coursesContainer.style.display = "block";
        console.log("AI Courses Data:", courses);
        displayCourses(courses, userId, "AI");
    });
});

dsButton.addEventListener("click", () => {
    console.log("Fetching and displaying Data Science courses...");
    fetchCourses("DataScience").then(courses => {
        coursesContainer.style.display = "block";
        console.log("Data Science Courses Data:", courses);
        displayCourses(courses, userId, "DataScience");
    });
});
// Display courses in the UI
const displayCourses = (courses, categoryName) => {
    const coursesContainer = document.getElementById("courses-container");
    coursesContainer.innerHTML = "";

    if (courses.length === 0) {
        coursesContainer.innerHTML = `<p>No courses available for ${categoryName} category.</p>`;
        return;
    }

    courses.forEach((course) => {
        const courseElement = document.createElement("div");
        courseElement.className = "col-md-4 mb-4 course-card";

        let imageUrl = course.image;
        if (imageUrl && imageUrl.startsWith("hhttps")) {
            imageUrl = imageUrl.replace("hhttps", "https");
        }

        const isPremium = course.type === "premium";
        const courseId = course.id;

        courseElement.innerHTML = `
            <div class="card h-100">
                <div class="image-container">
                    <img src="${imageUrl}" class="card-img-top img-fluid course-image" alt="${course.title}">
                </div>
                <div class="card-body">
                    <h5 class="card-title">Title: ${course.title}</h5>
                    <p class="card-text">Description: ${course.description}</p>
                    <p class="card-price">Price: ${course.price || (isPremium ? 'Contact for Price' : 'Free')}</p>
                    <div class="btn-container">
                        <button class="btn btn-secondary mt-2 play-all" data-course-id="${courseId}">Play All</button>
                        <button class="btn btn-primary enroll ${isPremium ? 'premium-enroll' : ''}" data-course-id="${courseId}" style="${isPremium ? 'background-color: orange; border-color: orange;' : ''}">
                            ${isPremium ? 'Enroll (Premium)' : 'Enroll'}
                        </button>
                    </div>
                </div>
            </div>
        `;

        coursesContainer.appendChild(courseElement);
    });

    // Event listeners for play all buttons
    document.querySelectorAll('.play-all').forEach(button => {
        button.addEventListener('click', async () => {
            const courseId = Number(button.dataset.courseId);
            await navigateToSingleCourse(courseId); // Navigate to the single course page
        });
    });

    // Event listeners for enroll buttons
    document.querySelectorAll('.enroll').forEach(button => {
        button.addEventListener('click', async () => {
            const courseId = Number(button.dataset.courseId);
            const course = courses.find(c => c.id === courseId);

            if (course) {
                await handleEnrollment(course);
            } else {
                console.error("Course not found for ID:", courseId);
                Swal.fire('Error!', 'Course not found.', 'error');
            }
        });
    });
};

// Navigate to the single course page
const navigateToSingleCourse = async (courseId) => {
    try {
        // Fetch the course details from the database
        const coursesSnapshot = await get(ref(database, "admin/courses"));
        if (!coursesSnapshot.exists()) {
            console.error("No courses found in the database.");
            return;
        }

        const coursesData = coursesSnapshot.val();
        let courseTitle = '';
        let courseCategory = '';

        // Loop through categories to find the course
        Object.keys(coursesData).forEach((category) => {
            const categoryCourses = coursesData[category];
            Object.values(categoryCourses).forEach((course) => {
                if (course.id === courseId) {
                    courseTitle = course.title;
                    courseCategory = category;
                }
            });
        });

        if (courseTitle) {
            // Store course details in local storage
            localStorage.setItem('courseId', courseId);
            localStorage.setItem('courseTitle', courseTitle);
            localStorage.setItem('courseCategory', courseCategory);

            // Navigate to the single course page
            window.location.href = `SingleCourse.html?id=${courseId}`;
        } else {
            console.error("Course not found for ID:", courseId);
            Swal.fire('Error!', 'Course not found.', 'error');
        }
    } catch (error) {
        console.error("Error fetching course details:", error);
        Swal.fire({
            icon: 'error',
            title: 'Error!',
            text: 'An error occurred while fetching course details. Please try again later.',
            confirmButtonText: 'OK'
        });
    }
};

// Logout functionality
let logout = document.getElementById("Logout");
if (logout) {
    logout.addEventListener("click", () => {
        localStorage.removeItem('userid'); // Clear userId from localStorage
        window.location.href = "index.html"; // Redirect to the home page
    });
}