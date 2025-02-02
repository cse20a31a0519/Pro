// import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
// import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";
// import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-database.js";
// import { get} from "https://www.gstatic.com/firebasejs/11.2.0/firebase-database.js";
// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyB5iAUnK_5AP7ijrcQvlRfvCSfXrH9n6Ak",
//   authDomain: "index-16f53.firebaseapp.com",
//   projectId: "index-16f53",
//   storageBucket: "index-16f53.firebasestorage.app",
//   messagingSenderId: "171804052014",
//   appId: "1:171804052014:web:c38d9d50835d551cafadbf"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const database = getDatabase(app);

// let userId = localStorage.getItem('userid');
// if (!userId) {
//     console.error('User ID not found in localStorage.');
//     window.location.href = "login.html";
//     throw new Error("User ID is required.");
// }

// const courseCategory = localStorage.getItem('courseCategory'); // e.g., "datascience"
// const courseId = localStorage.getItem('courseId'); // e.g., "course1"
// console.log(courseCategory,courseId)

// let completedVideos = 0;
// let totalVideos = 0;
// let videoList = [];

// // Fetch course data from Firebase
// async function fetchCourseData() {
//     const courseRef = ref(database, `admin/courses/categories/${courseCategory}/${courseId}`);
//     const snapshot = await get(courseRef);
//     const courseData = snapshot.val();

//     if (!courseData) {
//         console.error('Course data not found.');
//         return;
//     }

//     document.getElementById('course-title').textContent = courseData.title;
//     videoList = courseData.videos;
//     totalVideos = videoList.length;

//     // Populate video list
//     const videoListContainer = document.querySelector('.video-list');
//     videoList.forEach((video, index) => {
//         const videoItem = document.createElement('div');
//         videoItem.className = 'video-item';
//         videoItem.innerHTML = `
//             <p>${video.title}</p>
//             <button class="btn-success" onclick="startVideo(${index})">Start</button>
//             <button class="btn-download" onclick="downloadVideo('${video.url}')">Download</button>
//         `;
//         videoListContainer.appendChild(videoItem);
//     });

//     // Load the first video by default
//     loadVideo(0);
// }

// fetchCourseData();

// function loadVideo(index) {
//     const videoPlayer = document.getElementById('video-player');
//     const videoSource = document.getElementById('video-source');
//     videoSource.src = videoList[index].url;
//     videoPlayer.load();
//     videoPlayer.play();
//     document.getElementById('video-display').style.display = 'block';
// }

// function startVideo(index) {
//     loadVideo(index);
//     const videoPlayer = document.getElementById('video-player');
//     videoPlayer.onended = function () {
//         completeVideo(index);
//     };
// }

// window.stopVideo = function () {
//     const videoPlayer = document.getElementById('video-player');
//     videoPlayer.pause();
// };

// function downloadVideo(url) {
//     const link = document.createElement('a');
//     link.href = url;
//     link.download = url.split('/').pop();
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
// }

// async function completeVideo(index) {
//     if (completedVideos < totalVideos) {
//         completedVideos++;
//         updateProgress();
//         document.querySelectorAll('.btn-success')[index].disabled = true;

//         // Save progress to Firebase
//         const progressRef = ref(database, `users/${userId}/progress/${courseId}`);
//         await set(progressRef, { completedVideos, totalVideos });
//     }
// }

// function updateProgress() {
//     const progressBar = document.getElementById('progress-bar');
//     const progressText = document.getElementById('progress-text');
//     const progressPercentage = (completedVideos / totalVideos) * 100;

//     progressBar.value = progressPercentage;
//     progressText.textContent = `Progress: ${Math.round(progressPercentage)}%`;

//     // Enable certificate generation if all videos are completed
//     if (completedVideos === totalVideos) {
//         document.getElementById('generate-certificate').disabled = false;
//     }
// }

// async function generateCertificate() {
//     const courseTitle = document.getElementById('course-title').textContent;

//     try {
//         const userCertsRef = ref(database, `users/${userId}/certificates`);
//         const certSnapshot = await get(userCertsRef);
//         const existingCerts = certSnapshot.val() || [];

//         const certExists = existingCerts.some(cert => cert.courseTitle === courseTitle);

//         if (certExists) {
//             Swal.fire({
//                 icon: 'info',
//                 title: 'Already Generated',
//                 text: `You have already generated a certificate for ${courseTitle}.`,
//                 confirmButtonText: 'OK',
//                 showCloseButton: true
//             });
//             return;
//         }

//         const certificateData = {
//             courseTitle: courseTitle,
//             generatedOn: new Date().toISOString(),
//         };

//         existingCerts.push(certificateData);
//         await set(userCertsRef, existingCerts);

//         Swal.fire({
//             icon: 'success',
//             title: 'Certificate Generated!',
//             text: `Your certificate for ${courseTitle} has been generated.`,
//             confirmButtonText: 'OK',
//             showCloseButton: true
//         }).then(() => {
//             // Redirect to certificate.html
//             window.location.href = `certificate.html?course=${encodeURIComponent(courseTitle)}`;
//         });

//     } catch (error) {
//         console.error("Error generating certificate:", error);
//         Swal.fire({
//             icon: 'error',
//             title: 'Error',
//             text: 'There was an error generating the certificate. Please try again later.',
//             confirmButtonText: 'OK',
//             showCloseButton: true
//         });
//     }
// }

// window.generateCertificate = generateCertificate;
// // document.addEventListener('DOMContentLoaded', function () {
// //     let totalVideos = 10;
// //     let completedVideos = 0;
// //     const progressBar = document.querySelector('progress');
// //     const generateCertificateBtn = document.getElementById('generate-certificate');
// //     const videoItems = document.querySelectorAll('.video-item');
// //     const videoDisplay = document.getElementById('video-display'); // Video display div

// //     // Update the global progress bar
// //     function updateProgressBar() {
// //         let progress = (completedVideos / totalVideos) * 100;
// //         progressBar.value = progress;

// //         // Enable the certificate button when 100% progress is reached
// //         if (progress === 100) {
// //             generateCertificateBtn.disabled = false;
// //         }
// //     }

// //     // Mark a video as completed
// //     function markVideoAsCompleted(videoIndex) {
// //         completedVideos++;
// //         videoItems[videoIndex].classList.add('active');
// //         videoItems[videoIndex].querySelector('.btn-success').textContent = 'Completed';
// //         videoItems[videoIndex].querySelector('.btn-success').disabled = true; // Disable the Complete button
// //         updateProgressBar();
// //     }

// //     // Add event listeners to each video
// //     videoItems.forEach((item, index) => {
// //         const videoUrl = item.querySelector('.video-url a');

// //         // When the video URL is clicked, display the video in the video display div
// //         videoUrl.addEventListener('click', function (event) {
// //             event.preventDefault(); // Prevent default link behavior
// //             videoDisplay.style.display = 'block'; // Show the video display div
// //             videoDisplay.innerHTML = `<iframe width="100%" height="100%" src="https://www.example.com/video${index+1}" frameborder="0" allowfullscreen></iframe>`;
// //         });

// //         // Complete button click
// //         item.querySelector('.btn-success').addEventListener('click', function () {
// //             markVideoAsCompleted(index);
// //         });

// //         // Watch Later button click
// //         item.querySelector('.btn-secondary').addEventListener('click', function () {
// //             alert(`You chose to watch Video ${index+1} later.`);
// //         });
// //     });

// //     // Enable Certificate generation after all videos are completed
// //     generateCertificateBtn.addEventListener('click', function () {
// //         alert('Certificate Generated!');
// //     });
// // });






import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";
import { getDatabase, ref, get, set } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-database.js";

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

let userId = localStorage.getItem('userid');
if (!userId) {
    console.error('User ID not found in localStorage.');
    window.location.href = "login.html";
    throw new Error("User ID is required.");
}

const courseId = localStorage.getItem('courseId'); // e.g., "course1"
let courseCategory = localStorage.getItem('courseCategory'); // e.g., "DataScience"

let completedVideos = 0;
let totalVideos = 0;
let videoList = [];

// Fetch course data from Firebase
async function fetchCourseData() {
    // Retrieve courseId and courseCategory from local storage
    const courseId = localStorage.getItem('courseId');
    const courseCategory = localStorage.getItem('courseCategory');

    if (!courseId || !courseCategory) {
        console.error('Course ID or Category not found in localStorage.');
        return;
    }

    // Fetch the course data using the courseCategory and courseId
    const courseRef = ref(database, `admin/courses/${courseCategory}/${courseId}`);
    const snapshot = await get(courseRef);
    const courseData = snapshot.val();

    if (!courseData) {
        console.error('Course data not found.');
        return;
    }

    // Update the course title in the UI
    document.getElementById('course-title').textContent = courseData.title;

    // Populate the video list
    videoList = courseData.video;
    totalVideos = videoList.length;

    const videoListContainer = document.querySelector('.video-list');
    videoListContainer.innerHTML = ''; // Clear any existing video items

    videoList.forEach((video, index) => {
        const videoItem = document.createElement('div');
        videoItem.className = 'video-item';
        videoItem.innerHTML = `
            <p>${video.title}</p>
            <button class="btn-success" onclick="startVideo(${index})">Start</button>
            <button class="btn-download" onclick="downloadVideo('${video.url}')">Download</button>
        `;
        videoListContainer.appendChild(videoItem);
    });

    // Load the first video by default
    loadVideo(0);
}

fetchCourseData();

fetchCourseData();

function loadVideo(index) {
    const videoPlayer = document.getElementById('video-player');
    const videoSource = document.getElementById('video-source');
    videoSource.src = videoList[index].url;
    videoPlayer.load();
    videoPlayer.play();
    document.getElementById('video-display').style.display = 'block';
}

function startVideo(index) {
    loadVideo(index);
    const videoPlayer = document.getElementById('video-player');
    videoPlayer.onended = function () {
        completeVideo(index);
    };
}

window.stopVideo = function () {
    const videoPlayer = document.getElementById('video-player');
    videoPlayer.pause();
};

function downloadVideo(url) {
    const link = document.createElement('a');
    link.href = url;
    link.download = url.split('/').pop();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

async function completeVideo(index) {
    if (completedVideos < totalVideos) {
        completedVideos++;
        updateProgress();
        document.querySelectorAll('.btn-success')[index].disabled = true;

        // Save progress to Firebase
        const progressRef = ref(database, `users/${userId}/progress/${courseId}`);
        await set(progressRef, { completedVideos, totalVideos });
    }
}

function updateProgress() {
    const progressBar = document.getElementById('progress-bar');
    const progressText = document.getElementById('progress-text');
    const progressPercentage = (completedVideos / totalVideos) * 100;

    progressBar.value = progressPercentage;
    progressText.textContent = `Progress: ${Math.round(progressPercentage)}%`;

    // Enable certificate generation if all videos are completed
    if (completedVideos === totalVideos) {
        document.getElementById('generate-certificate').disabled = false;
    }
}

async function generateCertificate() {
    const courseTitle = document.getElementById('course-title').textContent;

    try {
        const userCertsRef = ref(database, `users/${userId}/certificates`);
        const certSnapshot = await get(userCertsRef);
        const existingCerts = certSnapshot.val() || [];

        const certExists = existingCerts.some(cert => cert.courseTitle === courseTitle);

        if (certExists) {
            Swal.fire({
                icon: 'info',
                title: 'Already Generated',
                text: `You have already generated a certificate for ${courseTitle}.`,
                confirmButtonText: 'OK',
                showCloseButton: true
            });
            return;
        }

        const certificateData = {
            courseTitle: courseTitle,
            generatedOn: new Date().toISOString(),
        };

        existingCerts.push(certificateData);
        await set(userCertsRef, existingCerts);

        Swal.fire({
            icon: 'success',
            title: 'Certificate Generated!',
            text: `Your certificate for ${courseTitle} has been generated.`,
            confirmButtonText: 'OK',
            showCloseButton: true
        }).then(() => {
            // Redirect to certificate.html
            window.location.href = `certificate.html?course=${encodeURIComponent(courseTitle)}`;
        });

    } catch (error) {
        console.error("Error generating certificate:", error);
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'There was an error generating the certificate. Please try again later.',
            confirmButtonText: 'OK',
            showCloseButton: true
        });
    }
}

window.generateCertificate = generateCertificate;