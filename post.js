// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
// import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
// import { getDatabase, ref, set, get, push } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

// const firebaseConfig = {
//     apiKey: "AIzaSyB5iAUnK_5AP7ijrcQvlRfvCSfXrH9n6Ak",
//     authDomain: "index-16f53.firebaseapp.com",
//     projectId: "index-16f53",
//     storageBucket: "index-16f53.firebasestorage.app",
//     messagingSenderId: "171804052014",
//     appId: "1:171804052014:web:c38d9d50835d551cafadbf"
//   };


// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const database = getDatabase(app);

// function navigateToSingleCourse(courseId) {
//     window.location.href = `SingleCourse.html?id=${courseId}`;
// }

// function navigateToPayment(courseId) {
//     window.location.href = `./payment.html?courseId=${courseId}`;
// }

// const storePayment = (course, userId) => {
//     const userPaymentsRef = ref(database, `users/${userId}/payments`);
    
//     get(userPaymentsRef).then((snapshot) => {
//         let payments = snapshot.val() || [];
        
//         if (!payments.some(payment => payment.id === course.id)) {
//             payments.push(course);
//             set(userPaymentsRef, payments)
//                 .then(() => {
//                     Swal.fire('Success!', 'Payment recorded successfully!', 'success');
//                     enrollCourse(course, userId);
//                 })
//                 .catch(() => {
//                     Swal.fire('Error!', 'Payment could not be recorded.', 'error');
//                 });
//         } else {
//             Swal.fire('Info', 'Payment already exists for this course.', 'info');
//         }
//     });
// };

// const enrollCourse = (course, userId) => {
//     const userCoursesRef = ref(database, `users/${userId}/enrolledCourses`);
    
//     get(userCoursesRef).then((snapshot) => {
//         let enrolledCourses = snapshot.val() || [];
        
//         if (!enrolledCourses.some(enrolledCourse => enrolledCourse.id === course.id)) {
//             enrolledCourses.push(course);
//             set(userCoursesRef, enrolledCourses)
//                 .then(() => {
//                     Swal.fire('Success!', 'You have successfully enrolled!', 'success');
//                 })
//                 .catch(() => {
//                     Swal.fire('Error!', 'Enrollment failed.', 'error');
//                 });
//         } else {
//             Swal.fire('Info', 'You are already enrolled in this course.', 'info');
//         }
//     });
// };

// const handleEnrollment = (course, userId) => {
//     if (course.type === "premium") {
//         Swal.fire({
//             title: 'Confirm Payment',
//             text: "This is a premium course. Complete the payment to enroll.",
//             icon: 'warning',
//             showCancelButton: true,
//             confirmButtonText: 'Pay Now',
//             cancelButtonText: 'Cancel'
//         }).then((result) => {
//             if (result.isConfirmed) {
//                 storePayment(course, userId);
//             }
//         });
//     } else {
//         enrollCourse(course, userId);
//     }
// };

// onAuthStateChanged(auth, (user) => {
//     if (user) {
//         const userId = user.uid;
//         fetchCourses().then((courses) => {
//             displayCourses(courses, userId);
//         });
//     } else {
//         console.log("No user signed in.");
//         window.location.href = "login.html";
//     }
// });

// const fetchCourses = async () => {
//     try {
//         const coursesSnapshot = await get(ref(database, "admin/courses"));
//         if (!coursesSnapshot.exists()) return [];
        
//         const coursesData = coursesSnapshot.val();
//         const allCourses = [];
        
//         Object.keys(coursesData).forEach((category) => {
//             Object.values(coursesData[category]).forEach((course) => {
//                 allCourses.push({ ...course, type: course.type || "free" });
//             });
//         });
//         return allCourses;
//     } catch (error) {
//         console.error("Error fetching courses:", error);
//         return [];
//     }
// };


// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
// import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
// import { getDatabase, ref, set, get, push } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";
//  const firebaseConfig = {
//         apiKey: "AIzaSyB5iAUnK_5AP7ijrcQvlRfvCSfXrH9n6Ak",
//         authDomain: "index-16f53.firebaseapp.com",
//         projectId: "index-16f53",
//         storageBucket: "index-16f53.firebasestorage.app",
//         messagingSenderId: "171804052014",
//         appId: "1:171804052014:web:c38d9d50835d551cafadbf"
//       };


// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const database = getDatabase(app);

// // Function to handle navigation (now correctly scoped)
// function navigateToSingleCourse(courseId) {
//     window.location.href = `SingleCourse.html?id=${courseId}`;
// }

// function navigateToPayment(courseId) {
//     window.location.href = `./payment.html?courseId=${courseId}`;
// }

// function playVideo(videoUrl, course, userId) { // Add userId as a parameter
//         Swal.fire({
//             title: 'Are you sure?',
//             text: "You are about to play this video",
//             icon: 'warning',
//             showCancelButton: true,
//             confirmButtonColor: '#3085d6',
//             cancelButtonColor: '#d33',
//             confirmButtonText: 'Yes, play it!'
//         }).then((result) => {
//             if (result.isConfirmed) {
//                 enrollCourse(course, userId); // Enroll the user before playing the video
//                 const videoElement = document.createElement('video');
//                 videoElement.setAttribute('controls', 'controls');
//                 videoElement.setAttribute('autoplay', 'true');
//                 videoElement.innerHTML = `<source src="${videoUrl}" type="video/mp4">Your browser does not support the video tag.`;
    
//                 const videoContainer = document.createElement('div');
//                 videoContainer.className = 'video-player-container';
//                 videoContainer.appendChild(videoElement);
    
//                 const closeButton = document.createElement('button');
//                 closeButton.innerText = 'Close';
//                 closeButton.className = 'btn btn-danger mt-2';
//                 closeButton.onclick = () => document.body.removeChild(videoContainer);
//                 videoContainer.appendChild(closeButton);
    
//                 document.body.appendChild(videoContainer);
//             }
//         })
//     }


//     const displayCourses = (courses, userId) => {
//         const coursesContainer = document.getElementById("courses-container");
//         coursesContainer.innerHTML = "";
    
//         courses.forEach((course) => {
//             const courseElement = document.createElement("div");
//             courseElement.className = "col-md-4 mb-4";
    
//             // Declare imageUrl HERE, inside the loop, and assign it the value:
//             let imageUrl = course.image;  // Correct placement
    
//             if (imageUrl && imageUrl.startsWith("hhttps")) {
//                 imageUrl = imageUrl.replace("hhttps", "https");
//             }
    
//             const isPremium = course.type === "premium";
    
//             courseElement.innerHTML = `
//                 <div class="card h-100">
//                     <img src="${imageUrl}" class="card-img-top img-fluid" alt="${course.title}">
//                     <div class="card-body">
//                         <h5 class="card-title">${course.title}</h5>
//                         <p class="card-text">${course.description}</p>
//                         <div class="btn-container">
//                             ${isPremium ? `
//                                 <button class="btn btn-primary play-premium" data-course-id="${course.id}">Play Video (Premium)</button>
//                             ` : course.video ? `
//                                 <button class="btn btn-primary play-free" data-course-id="${course.id}">Play Video (Free)</button>
//                             ` : ''}
//                             <button class="btn btn-secondary mt-2 play-all" data-course-id="${course.id}">Play All</button>
//                             <button class="btn btn-primary enroll" data-course-id="${course.id}">Enroll</button>
//                         </div>
//                     </div>
//                 </div>
//             `;
//             coursesContainer.appendChild(courseElement);
//         });
    
//     };
// // const displayCourses = (courses, userId) => {
// //     const coursesContainer = document.getElementById("courses-container");
// //     coursesContainer.innerHTML = ""; // Clear previous courses

// //     courses.forEach((course) => {
// //         const courseElement = document.createElement("div");
// //         courseElement.className = "col-md-4 mb-4";

// //         // ... (Your logic to get imageUrl and isPremium - same as before)

// //         courseElement.innerHTML = `
// //             <div class="card h-100">
// //                 <img src="${imageUrl}" class="card-img-top img-fluid" alt="${course.title}">
// //                 <div class="card-body">
// //                     <h5 class="card-title">${course.title}</h5>
// //                     <p class="card-text">${course.description}</p>
// //                     <div class="btn-container">
// //                     ${isPremium ? `
// //                         <button class="btn btn-primary play-premium" data-course-id="${course.id}">Play Video (Premium)</button>
// //                     ` : course.video ? `
// //                         <button class="btn btn-primary play-free" data-course-id="${course.id}">Play Video (Free)</button>
// //                     ` : ''}
// //                     <button class="btn btn-secondary mt-2 play-all" data-course-id="${course.id}">Play All</button>
// //                     <button class="btn btn-primary enroll" data-course-id="${course.id}">Enroll</button>
// //                     </div>
// //                 </div>
// //             </div>
// //         `;
// //         coursesContainer.appendChild(courseElement);
// //     });

// //     // Add event listeners AFTER the elements are added to the DOM
// //     const premiumButtons = document.querySelectorAll('.play-premium');
// //     premiumButtons.forEach(button => {
// //         button.addEventListener('click', () => {
// //             const courseId = button.dataset.courseId;
// //             navigateToPayment(courseId);
// //         });
// //     });

// //     const freeButtons = document.querySelectorAll('.play-free');
// //     freeButtons.forEach(button => {
// //         button.addEventListener('click', () => {
// //             const courseId = button.dataset.courseId;
// //             // ... (your logic to play the free video)
// //         });
// //     });

// //     const playAllButtons = document.querySelectorAll('.play-all');
// //     playAllButtons.forEach(button => {
// //         button.addEventListener('click', () => {
// //             const courseId = button.dataset.courseId;
// //             navigateToSingleCourse(courseId);
// //         });
// //     });

// //     const enrollButtons = document.querySelectorAll('.enroll');
// //     enrollButtons.forEach(button => {
// //         button.addEventListener('click', () => {
// //             const courseId = button.dataset.courseId;
// //             const course = courses.find(c => c.id === courseId); // Find the course object
// //             handleEnrollment(course, userId);
// //         });
// //     });
// // };

//  onAuthStateChanged(auth, (user) => {
//         if (user) {
//             const userId = user.uid;
//             fetchCourses().then((courses) => {
//                 displayCourses(courses, userId);
//             });
//         } else {
//             console.log("No user is signed in.");
//             window.location.href = "login.html";
//         }
//     });
    
//     const fetchCourses = async () => {
//         try {
//             const coursesSnapshot = await get(ref(database, "admin/courses"));
//             if (!coursesSnapshot.exists()) return [];
    
//             const coursesData = coursesSnapshot.val();
//             const allCourses = [];
    
//             Object.keys(coursesData).forEach((category) => {
//                 Object.values(coursesData[category]).forEach((course) => {
//                     allCourses.push({ ...course, type: course.type || "free" });
//                 });
//             });
    
//             console.log("Courses retrieved successfully:", allCourses);
//             return allCourses;
//         } catch (error) {
//             console.error("Error fetching courses:", error);
//             return [];
//         }
//     };
   
// const enrollCourse = (course, userId) => {
//     const userCoursesRef = ref(database, `users/${userId}/enrolledCourses`);

//     get(userCoursesRef).then((snapshot) => {
//         let enrolledCourses = snapshot.val() || [];

//         if (!enrolledCourses.some(enrolledCourse => enrolledCourse.id === course.id)) {
//             enrolledCourses.push(course);

//             set(userCoursesRef, enrolledCourses)
//                 .then(() => {
//                     Swal.fire('Success!', 'You have successfully enrolled!', 'success');
//                     const enrollButton = document.querySelector(`button[data-course-id="${course.id}"]`);
//                     if (enrollButton) {
//                         enrollButton.disabled = true;
//                         enrollButton.innerText = "Enrolled";
//                     }
//                 })
//                 .catch((error) => {
//                     Swal.fire('Error!', 'There was an error enrolling in the course.', 'error');
//                 });
//         } else {
//             Swal.fire('Info', 'You are already enrolled in this course.', 'info');
//         }
//     });
// };
//     const handleEnrollment = (course, userId) => {
//         if (course.type === "premium") {
//             Swal.fire({
//                 title: 'Confirm Payment',
//                 text: "This is a premium course. Please complete the payment to enroll.",
//                 icon: 'warning',
//                 showCancelButton: true,
//                 confirmButtonText: 'Go to Payment',
//                 cancelButtonText: 'Cancel'
//             }).then((result) => {
//                 if (result.isConfirmed) {
//                     // No need to store courseId in localStorage anymore.
//                     window.location.href = 'payment.html?courseId=' + course.id; // Pass courseId as query parameter
//                 }
//             });
//         } else {
//             enrollCourse(course, userId);
//         }
//     };



// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
// import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
// import { getDatabase, ref, set, get } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

// const firebaseConfig = {
//     apiKey: "AIzaSyB5iAUnK_5AP7ijrcQvlRfvCSfXrH9n6Ak",
//     authDomain: "index-16f53.firebaseapp.com",
//     databaseURL: "https://index-16f53-default-rtdb.firebaseio.com",
//     projectId: "index-16f53",
//     storageBucket: "index-16f53.appspot.com",
//     messagingSenderId: "171804052014",
//     appId: "1:171804052014:web:c38d9d50835d551cafadbf"
// };

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const database = getDatabase(app);

// // Function to navigate to the single course page
// function navigateToSingleCourse(courseId) {
//     window.location.href = `SingleCourse.html?id=${courseId}`;
// }

// // Function to navigate to the payment page
// function navigateToPayment(courseId) {
//     window.location.href = `./payment.html?courseId=${courseId}`;
// }

// // Function to handle enrollment
// const handleEnrollment = (course, userId) => {
//     if (!course || !course.type) {
//         console.error("Course object is undefined or missing type property.");
//         Swal.fire('Error!', 'Invalid course data.', 'error');
//         return;
//     }

//     if (course.type === "premium") {
//         Swal.fire({
//             title: 'Confirm Payment',
//             text: "This is a premium course. Please complete the payment to enroll.",
//             icon: 'warning',
//             showCancelButton: true,
//             confirmButtonText: 'Go to Payment',
//             cancelButtonText: 'Cancel'
//         }).then((result) => {
//             if (result.isConfirmed) {
//                 navigateToPayment(course.id); // Redirect to payment page
//             }
//         });
//     } else {
//         enrollCourse(course, userId); // Enroll in free course
//     }
// };

// // Function to enroll the user in a course
// const enrollCourse = (course, userId) => {
//     const userCoursesRef = ref(database, `users/${userId}/enrolledCourses`);

//     get(userCoursesRef).then((snapshot) => {
//         let enrolledCourses = snapshot.val() || [];

//         // Check if the user is already enrolled in the course
//         if (!enrolledCourses.some(enrolledCourse => enrolledCourse.id === course.id)) {
//             enrolledCourses.push(course);

//             set(userCoursesRef, enrolledCourses)
//                 .then(() => {
//                     Swal.fire('Success!', 'You have successfully enrolled!', 'success');
//                     enablePlayAllButton(course.id); // Enable "Play All" button
//                 })
//                 .catch((error) => {
//                     Swal.fire('Error!', 'There was an error enrolling in the course.', 'error');
//                 });
//         } else {
//             Swal.fire('Info', 'You are already enrolled in this course.', 'info');
//             enablePlayAllButton(course.id); // Enable "Play All" button if already enrolled
//         }
//     });
// };

// // Function to enable the "Play All" button
// const enablePlayAllButton = (courseId) => {
//     const playAllButton = document.querySelector(`button.play-all[data-course-id="${courseId}"]`);
//     if (playAllButton) {
//         playAllButton.disabled = false;
//         playAllButton.innerText = "Play All";
//     }
// };

// // Function to display courses
// const displayCourses = (courses, userId) => {
//     const coursesContainer = document.getElementById("courses-container");
//     coursesContainer.innerHTML = "";

//     courses.forEach((course) => {
//         const courseElement = document.createElement("div");
//         courseElement.className = "col-md-4 mb-4 course-card";

//         let imageUrl = course.image;
//         if (imageUrl && imageUrl.startsWith("hhttps")) {
//             imageUrl = imageUrl.replace("hhttps", "https");
//         }

//         const isPremium = course.type === "premium";

//         courseElement.innerHTML = `
//             <div class="card h-100">
//                 <img src="${imageUrl}" class="card-img-top img-fluid" alt="${course.title}">
//                 <div class="card-body">
//                     <h5 class="card-title">${course.title}</h5>
//                     <p class="card-text">${course.description}</p>
//                     <div class="btn-container">
//                         <button class="btn btn-secondary mt-2 play-all" data-course-id="${course.id}" ${isPremium ? 'disabled' : ''}>Play All</button>
//                         <button class="btn btn-primary enroll" data-course-id="${course.id}">Enroll</button>
//                     </div>
//                 </div>
//             </div>
//         `;
//         coursesContainer.appendChild(courseElement);
//     });

//     // Add event listeners for enrollment buttons
//     document.querySelectorAll('.enroll').forEach(button => {
//         button.addEventListener('click', () => {
//             const courseId = button.dataset.courseId;
//             const course = courses.find(c => c.id === courseId);
//             if (course) {
//                 handleEnrollment(course, userId);
//             } else {
//                 console.error("Course not found for ID:", courseId);
//                 Swal.fire('Error!', 'Course not found.', 'error');
//             }
//         });
//     });

//     // Add event listeners for "Play All" buttons
//     document.querySelectorAll('.play-all').forEach(button => {
//         button.addEventListener('click', () => {
//             const courseId = button.dataset.courseId;
//             navigateToSingleCourse(courseId);
//         });
//     });
// };

// // Fetch courses and display them
// onAuthStateChanged(auth, (user) => {
//     if (user) {
//         const userId = user.uid;
//         fetchCourses().then((courses) => {
//             displayCourses(courses, userId);
//         });
//     } else {
//         window.location.href = "login.html"; // Redirect to login page if user is not signed in
//     }
// });

// // Function to fetch courses from Firebase
// const fetchCourses = async () => {
//     try {
//         const coursesSnapshot = await get(ref(database, "admin/courses"));
//         if (!coursesSnapshot.exists()) return [];

//         const coursesData = coursesSnapshot.val();
//         const allCourses = [];

//         // Iterate through categories (DataScience, Designing, IT, etc.)
//         Object.keys(coursesData).forEach((category) => {
//             // Iterate through courses in each category
//             Object.values(coursesData[category]).forEach((course) => {
//                 allCourses.push({ ...course, type: course.type || "free" });
//             });
//         });

//         console.log("Courses retrieved successfully:", allCourses);
//         return allCourses;
//     } catch (error) {
//         console.error("Error fetching courses:", error);
//         return [];
//     }
// };

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getDatabase, ref, set, get } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyB5iAUnK_5AP7ijrcQvlRfvCSfXrH9n6Ak",
    authDomain: "index-16f53.firebaseapp.com",
    databaseURL: "https://index-16f53-default-rtdb.firebaseio.com",
    projectId: "index-16f53",
    storageBucket: "index-16f53.appspot.com",
    messagingSenderId: "171804052014",
    appId: "1:171804052014:web:c38d9d50835d551cafadbf"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

// Function to navigate to the single course page
function navigateToSingleCourse(courseId) {
    window.location.href = `SingleCourse.html?id=${courseId}`;
}

// Function to navigate to the payment page
function navigateToPayment(courseId) {
    window.location.href = `./payment.html?courseId=${courseId}`;
}

// Function to handle enrollment
// const handleEnrollment = (course, userId) => {
//     if (!course || !course.type) {
//         console.error("Course object is undefined or missing type property.");
//         Swal.fire('Error!', 'Invalid course data.', 'error');
//         return;
//     }

//     if (course.type === "premium") {
//         Swal.fire({
//             title: 'Confirm Payment',
//             text: "This is a premium course. Please complete the payment to enroll.",
//             icon: 'warning',
//             showCancelButton: true,
//             confirmButtonText: 'Go to Payment',
//             cancelButtonText: 'Cancel'
//         }).then((result) => {
//             if (result.isConfirmed) {
//                 navigateToPayment(course.id); // Redirect to payment page
//             }
//         });
//     } else {
//         enrollCourse(course, userId); // Enroll in free course
//     }
// };

// // Function to enroll the user in a course
// const enrollCourse = (course, userId) => {
//     const userCoursesRef = ref(database, `users/${userId}/enrolledCourses`);

//     get(userCoursesRef).then((snapshot) => {
//         let enrolledCourses = snapshot.val() || [];

//         // Check if the user is already enrolled in the course
//         if (!enrolledCourses.some(enrolledCourse => enrolledCourse.id === course.id)) {
//             enrolledCourses.push(course);

//             set(userCoursesRef, enrolledCourses)
//                 .then(() => {
//                     Swal.fire('Success!', 'You have successfully enrolled!', 'success');
//                     enablePlayAllButton(course.id); // Enable "Play All" button
//                 })
//                 .catch((error) => {
//                     Swal.fire('Error!', 'There was an error enrolling in the course.', 'error');
//                 });
//         } else {
//             Swal.fire('Info', 'You are already enrolled in this course.', 'info');
//             enablePlayAllButton(course.id); // Enable "Play All" button if already enrolled
//         }
//     });
// };

// Function to enable the "Play All" button
// const enablePlayAllButton = (courseId) => {
//     const playAllButton = document.querySelector(`button.play-all[data-course-id="${courseId}"]`);
//     if (playAllButton) {
//         playAllButton.disabled = false;
//         playAllButton.innerText = "Play All";
//     }
// };

// Function to display courses
// const displayCourses = (courses, userId) => {
//     const coursesContainer = document.getElementById("courses-container");
//     coursesContainer.innerHTML = "";

//     courses.forEach((course) => {
//         const courseElement = document.createElement("div");
//         courseElement.className = "col-md-4 mb-4 course-card";

//         let imageUrl = course.image;
//         if (imageUrl && imageUrl.startsWith("hhttps")) {
//             imageUrl = imageUrl.replace("hhttps", "https");
//         }

//         const isPremium = course.type === "premium";

//         courseElement.innerHTML = `
//             <div class="card h-100">
//                 <img src="${imageUrl}" class="card-img-top img-fluid" alt="${course.title}">
//                 <div class="card-body">
//                     <h5 class="card-title">${course.title}</h5>
//                     <p class="card-text">${course.description}</p>
//                     <div class="btn-container">
//                         <button class="btn btn-secondary mt-2 play-all" data-course-id="${course.id}" ${isPremium ? 'disabled' : ''}>Play All</button>
//                         <button class="btn btn-primary enroll" data-course-id="${course.id}">Enroll</button>
//                     </div>
//                 </div>
//             </div>
//         `;
//         coursesContainer.appendChild(courseElement);
//     });

//     // Add event listeners for enrollment buttons
//     document.querySelectorAll('.enroll').forEach(button => {
//         button.addEventListener('click', () => {
//             const courseId = button.dataset.courseId;
//             const course = courses.find(c => c.id === courseId);
//             if (course) {
//                 handleEnrollment(course, userId);
//             } else {
//                 console.error("Course not found for ID:", courseId);
//                 Swal.fire('Error!', 'Course not found.', 'error');
//             }
//         });
//     });

//     // Add event listeners for "Play All" buttons
//     document.querySelectorAll('.play-all').forEach(button => {
//         button.addEventListener('click', () => {
//             const courseId = button.dataset.courseId;
//             navigateToSingleCourse(courseId);
//         });
//     });
// };

// Fetch courses and display them
onAuthStateChanged(auth, (user) => {
    if (user) {
        const userId = user.uid;
        fetchCourses().then((courses) => {
            displayCourses(courses, userId);
        });
    } else {
        window.location.href = "login.html"; // Redirect to login page if user is not signed in
    }
});

// Function to fetch courses from Firebase
// const fetchCourses = async () => {
//     try {
//         const coursesSnapshot = await get(ref(database, "admin/courses"));
//         if (!coursesSnapshot.exists()) return [];

//         const coursesData = coursesSnapshot.val();
//         const allCourses = [];

//         // Iterate through categories (DataScience, Designing, IT, etc.)
//         Object.keys(coursesData).forEach((category) => {
//             // Iterate through courses in each category
//             Object.values(coursesData[category]).forEach((course) => {
//                 const courseId = course.id || `${category}-${course.title}`;  // Ensure id is properly assigned
//                 allCourses.push({ ...course, type: course.type || "free", id: courseId });
//             });
//         });

//         console.log("Courses retrieved successfully:", allCourses);
//         return allCourses;
//     } catch (error) {
//         console.error("Error fetching courses:", error);
//         return [];
//     }
// };
// const displayCourses = (courses, userId) => {
//     const coursesContainer = document.getElementById("courses-container");
//     coursesContainer.innerHTML = "";

//     courses.forEach((course) => {
//         const courseElement = document.createElement("div");
//         courseElement.className = "col-md-4 mb-4 course-card";

//         let imageUrl = course.image;
//         if (imageUrl && imageUrl.startsWith("hhttps")) {
//             imageUrl = imageUrl.replace("hhttps", "https");
//         }

//         const isPremium = course.type === "premium";

//         // Use course.id directly from Firebase data
//         const courseId = course.id; // Get the ID from the Firebase data

//         courseElement.innerHTML = `
//             <div class="card h-100">
//                 <img src="${imageUrl}" class="card-img-top img-fluid" alt="${course.title}">
//                 <div class="card-body">
//                     <h5 class="card-title">${course.title}</h5>
//                     <p class="card-text">${course.description}</p>
//                     <div class="btn-container">
//                         <button class="btn btn-secondary mt-2 play-all" data-course-id="${courseId}" ${isPremium ? 'disabled' : ''}>Play All</button>
//                         <button class="btn btn-primary enroll" data-course-id="${courseId}">Enroll</button>
//                     </div>
//                 </div>
//             </div>
//         `;
//         coursesContainer.appendChild(courseElement);
//     });

//     // Add event listeners (same as before)
//     document.querySelectorAll('.enroll').forEach(button => {
//         button.addEventListener('click', () => {
//             const courseId = button.dataset.courseId;
//             const course = courses.find(c => c.id === courseId); // Find the course object

//             if (course) { // Check if the course was found
//                 handleEnrollment(course, userId);
//             } else {
//                 console.error("Course not found for ID:", courseId);
//                 Swal.fire('Error!', 'Course not found.', 'error');
//             }
//         });
//     });

//     document.querySelectorAll('.play-all').forEach(button => {
//         button.addEventListener('click', () => {
//             const courseId = button.dataset.courseId;
//             navigateToSingleCourse(courseId);
//         });
//     });
// };

onAuthStateChanged(auth, (user) => {
    // ... (same as before)
});

const fetchCourses = async () => {
    try {
        const coursesSnapshot = await get(ref(database, "admin/courses"));
        if (!coursesSnapshot.exists()) return [];

        const coursesData = coursesSnapshot.val();
        const allCourses = [];

        Object.keys(coursesData).forEach((category) => {
            Object.values(coursesData[category]).forEach((course) => {
                // Use the ID directly from Firebase, or generate if it's missing
                const courseId = course.id || `${category}-${course.title}`; // Handle missing IDs
                allCourses.push({ ...course, type: course.type || "free", id: courseId });
            });
        });

        console.log("Courses retrieved successfully:", allCourses);
        return allCourses;
    } catch (error) {
        console.error("Error fetching courses:", error);
        return [];
    }
};

const enrollCourse = (course, userId) => {
    console.log("Enrolling course:", course.title, "with ID:", course.id, "for user ID:", userId);

    const userCoursesRef = ref(database, `users/${userId}/enrolledCourses`);

    get(userCoursesRef).then((snapshot) => {
        let enrolledCourses = snapshot.val() || [];

        if (!enrolledCourses.some(enrolledCourse => enrolledCourse.id === course.id)) {
            Swal.fire({ // Prompt for email and phone number
                title: `Enroll in ${course.title}`,
                html: `
                    <input id="swal-input-email" class="swal2-input" placeholder="Email">
                    <input id="swal-input-phone" class="swal2-input" placeholder="Phone Number">
                `,
                focusConfirm: false,
                preConfirm: () => {
                    const email = document.getElementById('swal-input-email').value;
                    const phone = document.getElementById('swal-input-phone').value;
                    if (!email || !phone) {
                        Swal.showValidationMessage(`Please enter both email and phone number`);
                    }
                    return { email: email, phone: phone };
                }
            }).then((result) => {
                if (result.isConfirmed) {
                    const { email, phone } = result.value;  // Get entered data
                    course.email = email; // Add email and phone to course object
                    course.phone = phone;

                    enrolledCourses.push(course);

                    set(userCoursesRef, enrolledCourses)
                        .then(() => {
                            Swal.fire('Thank you!', 'You have successfully enrolled!', 'success');
                            navigateToSingleCourse(course.id); // Navigate immediately after successful enrollment
                        })
                        .catch((error) => {
                            console.error("Error enrolling:", error);
                            Swal.fire('Error!', 'There was an error enrolling in the course.', 'error');
                        });
                }
            });


        } else {
            Swal.fire('Info', 'You are already enrolled in this course.', 'info');
            navigateToSingleCourse(course.id); // Navigate immediately if already enrolled
        }
    });
};
// const enrollCourse = (course, userId) => {
//     const userCoursesRef = ref(database, `users/${userId}/enrolledCourses`);

//     get(userCoursesRef).then((snapshot) => {
//         let enrolledCourses = snapshot.val() || [];

//         if (!enrolledCourses.some(enrolledCourse => enrolledCourse.id === course.id)) {
//             enrolledCourses.push(course);

//             set(userCoursesRef, enrolledCourses)
//                 .then(() => {
//                     Swal.fire('Success!', 'You have successfully enrolled!', 'success');
//                     enablePlayAllButton(course.id); // Enable "Play All" button after successful enrollment
//                 })
//                 .catch((error) => {
//                     Swal.fire('Error!', 'There was an error enrolling in the course.', 'error');
//                 });
//         } else {
//             Swal.fire('Info', 'You are already enrolled in this course.', 'info');
//             enablePlayAllButton(course.id); // Enable "Play All" button if already enrolled
//         }
//     });
// };

const handleEnrollment = (course, userId) => {
    if (!course || !course.type || !course.id) { // Check for missing course properties
        console.error("Course object is invalid:", course);
        Swal.fire('Error!', 'Invalid course data.', 'error');
        return;
    }

    if (course.type === "premium") {
        Swal.fire({
            title: 'Confirm Payment',
            text: "This is a premium course. Please complete the payment to enroll.",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Go to Payment',
            cancelButtonText: 'Cancel'
        }).then((result) => {
            if (result.isConfirmed) {
                navigateToPayment(course.id); // Redirect to payment page
            }
        });
    } else {
        enrollCourse(course, userId); // Enroll in free course
    }
};


const displayCourses = (courses, userId) => {
    const coursesContainer = document.getElementById("courses-container");
    coursesContainer.innerHTML = "";

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
                <img src="${imageUrl}" class="card-img-top img-fluid" alt="${course.title}">
                <div class="card-body">
                    <h5 class="card-title">${course.title}</h5>
                    <p class="card-text">${course.description}</p>
                    <div class="btn-container">
                        <button class="btn btn-secondary mt-2 play-all" data-course-id="${courseId}" ${isPremium ? 'disabled' : ''}>Play All</button>
                        <button class="btn btn-primary enroll ${isPremium ? 'premium-enroll' : ''}" data-course-id="${courseId}" style="${isPremium ? 'background-color: orange; border-color: orange;' : ''}">
                            ${isPremium ? 'Enroll (Premium)' : 'Enroll'}
                        </button>
                    </div>
                </div>
            </div>
        `;
        coursesContainer.appendChild(courseElement);
    });

    // Event listeners (after the cards are added to the DOM)
    document.querySelectorAll('.enroll').forEach(button => {
        button.addEventListener('click', () => {
            const courseId = Number(button.dataset.courseId);
            const course = courses.find(c => c.id === courseId);

            if (course) {
                handleEnrollment(course, userId);
            } else {
                console.error("Course not found for ID:", courseId);
                Swal.fire('Error!', 'Course not found.', 'error');
            }
        });
    });

    document.querySelectorAll('.play-all').forEach(button => {
        button.addEventListener('click', () => {
            const courseId = Number(button.dataset.courseId);
            const course = courses.find(c => c.id === courseId);

            if (course) {
                const userCoursesRef = ref(database, `users/${userId}/enrolledCourses`);

                get(userCoursesRef).then((snapshot) => {
                    const enrolledCourses = snapshot.val() || [];
                    const isEnrolled = enrolledCourses.some(enrolledCourse => enrolledCourse.id === course.id);

                    if (isEnrolled) {
                        navigateToSingleCourse(courseId);
                    } else {
                        Swal.fire('Info', 'Please enroll in the course first.');
                    }
                }).catch(error => {
                    console.error("Error fetching enrolled courses:", error);
                    Swal.fire('Error!', 'An error occurred. Please try again later.', 'error');
                });
            } else {
                console.error("Course not found for ID:", courseId);
                Swal.fire('Error!', 'Course not found.', 'error');
            }
        });
    });
};



const enablePlayAllButton = (courseId) => {
    const playAllButton = document.querySelector(`.play-all[data-course-id="${courseId}"]`);
    if (playAllButton) {
        playAllButton.disabled = false;
    }
};