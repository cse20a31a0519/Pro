import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getAuth, onAuthStateChanged  } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";
import {getDatabase, ref, get, set, push } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-database.js";

// // Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyB5iAUnK_5AP7ijrcQvlRfvCSfXrH9n6Ak",
//     authDomain: "index-16f53.firebaseapp.com",
//     projectId: "index-16f53",
//     storageBucket: "index-16f53.firebasestorage.app",
//     messagingSenderId: "171804052014",
//     appId: "1:171804052014:web:c38d9d50835d551cafadbf"
// };
// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const database = getDatabase(app);

// // Get course title and category from local storage
// // const courseTitle = localStorage.getItem('courseTitle');
// // console.log(courseTitle)
// // const courseCategory = localStorage.getItem('courseCategory');
// // console.log(courseCategory)

// document.getElementById('course-title').innerText = courseTitle;
// // Get course title and category from local storage
// const courseTitle = localStorage.getItem('courseTitle');
// const courseCategory = localStorage.getItem('courseCategory');

// document.getElementById('course-title').innerText = courseTitle;

// // Fetch video links for 10 videos from Firebase
// const videoContainer = document.getElementById('video-container');

// async function fetchVideos() {
//     const videoLinks = [];
    
//     for (let i = 1; i <= 10; i++) {  // Assuming there are 10 videos
//         const snapshot = await database.ref(`/admin/courses/${courseCategory}/${i}/video_links/`).once('value');
//         const videos = snapshot.val();
        
//         if (videos) {
//             Object.values(videos).forEach(video => {
//                 videoLinks.push({
//                     title: video.title,
//                     link: video.link
//                 });
//             });
//         }
//     }

//     if (videoLinks.length > 0) {
//         loadVideo(videoLinks[0].link); // Load first video by default
//         displayVideos(videoLinks);
//     }
// }

// function displayVideos(videoLinks) {
//     videoContainer.innerHTML = '';

//     videoLinks.forEach((video, index) => {
//         const videoElement = document.createElement('div');
//         videoElement.classList.add('video-item');

//         videoElement.innerHTML = `
//             <h3>${video.title}</h3>
//             <button onclick="loadVideo('${video.link}')">Start</button>
//             <button onclick="stopVideo()">Stop</button>
//             <button onclick="addToWatchLater('${video.link}', '${video.title}')">Watch Later</button>
//             <button onclick="downloadVideo('${video.link}')">Download</button>
//         `;

//         videoContainer.appendChild(videoElement);
//     });
// }

// function loadVideo(videoLink) {
//     const videoPlayer = document.getElementById('video-player');
//     const videoSource = document.getElementById('video-source');
//     videoSource.src = videoLink;
//     videoPlayer.load();
//     videoPlayer.play();
// }

// function stopVideo() {
//     const videoPlayer = document.getElementById('video-player');
//     videoPlayer.pause();
// }

// function addToWatchLater(videoLink, videoTitle) {
//     const userId = localStorage.getItem('userId');
//     const userName = localStorage.getItem('userName');

//     database.ref(`watchLater/${userId}`).push({
//         userName: userName,
//         courseTitle: courseTitle,
//         videoTitle: videoTitle,
//         videoLink: videoLink
//     }).then(() => {
//         alert('Added to Watch Later!');
//     });
// }

// function downloadVideo(videoLink) {
//     const link = document.createElement('a');
//     link.href = videoLink;
//     link.download = 'video.mp4';
//     link.click();
// }

// // Fetch videos when the page loads
// fetchVideos();


// // Fetch video links from Firebase
// database.ref(`courses/${courseCategory}/${courseTitle}`).once('value').then(snapshot => {
//     const videos = snapshot.val();
//     if (videos) {
//         const videoLinks = Object.values(videos);
//         loadVideo(videoLinks[0]); 
//         document.getElementById('start-btn').addEventListener('click', () => startVideo(videoLinks));
//         document.getElementById('stop-btn').addEventListener('click', stopVideo);
//         document.getElementById('watch-later-btn').addEventListener('click', () => addToWatchLater(videoLinks[0]));
//         document.getElementById('download-btn').addEventListener('click', () => downloadVideo(videoLinks[0]));
//         document.getElementById('complete-btn').addEventListener('click', updateProgress);
//         document.getElementById('generate-certificate-btn').addEventListener('click', generateCertificate);
//     }
// });

// function loadVideo(videoLink) {
//     const videoPlayer = document.getElementById('video-player');
//     const videoSource = document.getElementById('video-source');
//     videoSource.src = videoLink;
//     videoPlayer.load();
// }

// function startVideo(videoLinks) {
//     const videoPlayer = document.getElementById('video-player');
//     videoPlayer.play();
// }

// function stopVideo() {
//     const videoPlayer = document.getElementById('video-player');
//     videoPlayer.pause();
// }

// function addToWatchLater(videoLink) {
//     const userId = localStorage.getItem('userId');
//     const userName = localStorage.getItem('userName');
//     const videoTitle = document.getElementById('course-title').innerText;

//     database.ref(`watchLater/${userId}`).push({
//         userName: userName,
//         courseTitle: courseTitle,
//         videoTitle: videoTitle,
//         videoLink: videoLink
//     }).then(() => {
//         alert('Added to Watch Later!');
//     });
// }

// function downloadVideo(videoLink) {
//     const link = document.createElement('a');
//     link.href = videoLink;
//     link.download = 'video.mp4';
//     link.click();
// }

// function updateProgress() {
//     const progressBar = document.getElementById('progress-bar');
//     let progress = parseInt(progressBar.style.width) || 0;
//     progress += 10;
//     progressBar.style.width = progress + '%';

//     if (progress >= 100) {
//         document.getElementById('generate-certificate-btn').disabled = false;
//     }
// }

// function generateCertificate() {
//     const userId = localStorage.getItem('userId');
//     const userName = localStorage.getItem('userName');

//     database.ref(`certificates/${userId}`).set({
//         userName: userName,
//         courseTitle: courseTitle,
//         status: 'Completed'
//     }).then(() => {
//         alert('Certificate Generated!');
//     });
// }


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
const app = firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// Get course title and category from URL query parameters
const urlParams = new URLSearchParams(window.location.search);
const courseTitle = urlParams.get('courseTitle');
const courseCategory = urlParams.get('courseCategory');

document.addEventListener('DOMContentLoaded', () => {
    // Fetch course details from Firebase
    const courseRef = database.ref(`courses/${courseCategory}/${courseTitle}`);
    courseRef.once('value').then(snapshot => {
        const course = snapshot.val();

        if (course) {
            const courseContainer = document.getElementById('course-detail-container');

            let cardHTML = `
                <div class="card">
                    <img src="${course.image}" class="card-img-top" alt="${courseTitle}" style="max-height: 300px; object-fit: cover;">
                    <div class="card-body">
                        <h5 class="card-title">${courseTitle}</h5>
                        <p class="card-text">${course.description}</p>
                        <h6>Videos</h6>
                        <div class="video-list">
                            ${Object.values(course.video_links).map((video, index) => `
                                <div class="video-item mb-3">
                                    <p>${video.title}</p>
                                    <button class="btn btn-primary" onclick="playVideo('${video.link}', ${index})">Play Video</button>
                                    <button class="btn btn-secondary" onclick="saveToWatchLater('${video.link}')">Watch Later</button>
                                    <button class="btn btn-success" onclick="completeVideo(${index})">Complete Video</button>
                                </div>
                            `).join('')}
                        </div>
                        <h6>Progress</h6>
                        <progress id="progress-bar" value="0" max="100" class="w-100"></progress>
                        <p id="progress-text">0%</p>
                        <button id="generate-certificate" class="btn btn-success" disabled>Generate Certificate</button>
                    </div>
                </div>
            `;

            courseContainer.innerHTML = cardHTML;

            let completedVideos = new Set();
            document.querySelectorAll('.btn-primary').forEach((button, index) => {
                button.addEventListener('click', () => {
                    completedVideos.add(index);
                    const progress = (completedVideos.size / Object.keys(course.video_links).length) * 100;
                    document.getElementById('progress-bar').value = progress;
                    document.getElementById('progress-text').textContent = `${Math.round(progress)}%`;

                    if (completedVideos.size === Object.keys(course.video_links).length) {
                        document.getElementById('generate-certificate').disabled = false;
                    }
                });
            });

            document.getElementById('generate-certificate').addEventListener('click', () => {
                const studentName = "Student Name"; // Replace with actual student name logic
                const certificateUrl = `certificate.html?courseName=${encodeURIComponent(courseTitle)}&studentName=${encodeURIComponent(studentName)}`;
                window.location.href = certificateUrl;
            });
        } else {
            console.error('Course not found');
        }
    }).catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
});

// Function to play a single video
function playVideo(videoUrl, index) {
    const videoContainer = document.createElement('div');
    videoContainer.className = 'video-player-container';
    const iframe = document.createElement('iframe');
    iframe.width = '100%';
    iframe.height = '315';
    iframe.src = `https://www.youtube.com/embed/${new URL(videoUrl).searchParams.get("v")}`;
    iframe.frameBorder = '0';
    iframe.allow = 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture';
    iframe.allowFullscreen = true;

    videoContainer.appendChild(iframe);
    const closeButton = document.createElement('button');
    closeButton.textContent = 'Close';
    closeButton.className = 'btn btn-danger mt-2';
    closeButton.onclick = () => document.body.removeChild(videoContainer);
    videoContainer.appendChild(closeButton);

    document.body.appendChild(videoContainer);
}

// Save to Watch Later
function saveToWatchLater(link) {
    let watchLaterVideos = JSON.parse(localStorage.getItem('watchLaterVideos')) || [];
    watchLaterVideos.push(link);
    localStorage.setItem('watchLaterVideos', JSON.stringify(watchLaterVideos));
    alert('Video added to Watch Later');
}

// Mark video as completed
function completeVideo(index) {
    // Placeholder for completion logic, e.g., updating UI, progress, etc.
    alert(`Video ${index + 1} marked as complete!`);
}