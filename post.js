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


// const enrollCourse = (course, userId) => {
//     console.log("Enrolling course:", course.title, "with ID:", course.id, "for user ID:", userId);

//     const userCoursesRef = ref(database, `users/${userId}/enrolledCourses`);

//     get(userCoursesRef).then((snapshot) => {
//         let enrolledCourses = snapshot.val() || [];

//         if (!enrolledCourses.some(enrolledCourse => enrolledCourse.id === course.id)) {
//             Swal.fire({ // Prompt for email and phone number
//                 title: `Enroll in ${course.title}`,
//                 html: `
//                     <input id="swal-input-email" class="swal2-input" placeholder="Email">
//                     <input id="swal-input-phone" class="swal2-input" placeholder="Phone Number">
//                 `,
//                 focusConfirm: false,
//                 preConfirm: () => {
//                     const email = document.getElementById('swal-input-email').value;
//                     const phone = document.getElementById('swal-input-phone').value;
//                     if (!email || !phone) {
//                         Swal.showValidationMessage(`Please enter both email and phone number`);
//                     }
//                     return { email: email, phone: phone };
//                 }
//             }).then((result) => {
//                 if (result.isConfirmed) {
//                     const { email, phone } = result.value;  // Get entered data
//                     course.email = email; // Add email and phone to course object
//                     course.phone = phone;

//                     enrolledCourses.push(course);

//                     set(userCoursesRef, enrolledCourses)
//                         .then(() => {
//                             Swal.fire('Thank you!', 'You have successfully enrolled!', 'success');
//                             navigateToSingleCourse(course.id); // Navigate immediately after successful enrollment
//                         })
//                         .catch((error) => {
//                             console.error("Error enrolling:", error);
//                             Swal.fire('Error!', 'There was an error enrolling in the course.', 'error');
//                         });
//                 }
//             });


//         } else {
//             Swal.fire('Info', 'You are already enrolled in this course.', 'info');
//             navigateToSingleCourse(course.id); // Navigate immediately if already enrolled
//         }
//     });
// };

// const handleEnrollment = (course, userId) => {
//     if (!course || !course.type || !course.id) { // Check for missing course properties
//         console.error("Course object is invalid:", course);
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
const fetchCourses = async (selectedCategory = null) => {
    try {
        const coursesSnapshot = await get(ref(database, "admin/courses"));
        
        if (!coursesSnapshot.exists()) return [];

        const coursesData = coursesSnapshot.val();
        console.log("Full courses data:", coursesData);  // Full data structure

        const allCourses = [];

        // Loop through categories
        Object.keys(coursesData).forEach((category) => {
            console.log("Category:", category); // Log each category name

            if (!selectedCategory || selectedCategory === category) {
                const categoryCourses = coursesData[category];
                console.log("Category Courses:", categoryCourses);  // Log courses in each category

                Object.values(categoryCourses).forEach((course) => {
                    console.log("Course data:", course);  // Log each course's data

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

const displayCourses = (courses, userId, categoryName) => {
    const coursesContainer = document.getElementById("courses-container");
    coursesContainer.innerHTML = ""; // Clear the container

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
        <div class="image-container">  <img src="${imageUrl}" class="card-img-top img-fluid course-image" alt="${course.title}">
        </div>
        <div class="card-body">
            <h5 class="card-title">Title:${course.title}</h5>
            <p class="card-text">Description:${course.description}</p>
            <p class="card-price">Price:${course.price || (isPremium ? 'Contact for Price' : 'Free')}</p>  <div class="btn-container">
                <button class="btn btn-secondary mt-2 play-all" data-course-id="${courseId}" ${isPremium ? 'disabled' : ''}>Play All</button>
                <button class="btn btn-primary enroll ${isPremium ? 'premium-enroll' : ''}" data-course-id="${courseId}" style="${isPremium ? 'background-color: orange; border-color: orange;' : ''}">
                    ${isPremium ? 'Enroll (Premium)' : 'Enroll'}
                </button>
            </div>
        </div>
    </div>
`;

        // const isPremium = course.type === "premium";
        // const courseId = course.id;

        // courseElement.innerHTML = `
        //     <div class="card h-100">
        //         <img src="${imageUrl}" class="card-img-top img-fluid" alt="${course.title}">
        //         <div class="card-body">
        //             <h5 class="card-title">Title:${course.title}</h5>
        //             <p class="card-text">Description${course.description}</p>
        //             <p class="card-price">Price:${course.price}</p>
        //             <div class="btn-container">
        //                 <button class="btn btn-secondary mt-2 play-all" data-course-id="${courseId}" ${isPremium ? 'disabled' : ''}>Play All</button>
        //                 <button class="btn btn-primary enroll ${isPremium ? 'premium-enroll' : ''}" data-course-id="${courseId}" style="${isPremium ? 'background-color: orange; border-color: orange;' : ''}">
        //                     ${isPremium ? 'Enroll (Premium)' : 'Enroll'}
        //                 </button>
        //             </div>
        //         </div>
        //     </div>
        // `;
        coursesContainer.appendChild(courseElement);
    });

    // Event listeners for enroll and play all buttons
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

let userId = localStorage.getItem('userid');
if (!userId) {
    console.error('User ID not found in localStorage.');
}

// const enablePlayAllButton = (courseId) => {
//     const playAllButton = document.querySelector(`.play-all[data-course-id="${courseId}"]`);
//     if (playAllButton) {
//         playAllButton.disabled = false;
//     }
// };


// Enrolled courses
const enrollCourse = async (course, userId) => {
    console.log("Enrolling course:", course.title, "with ID:", course.id, "for user ID:", userId);

    const userCoursesRef = ref(database, `users/${userId}/enrolledCourses`);

    try {
        const snapshot = await get(userCoursesRef);
        let enrolledCourses = snapshot.val() || [];

        const isAlreadyEnrolled = enrolledCourses.some(enrolledCourse => enrolledCourse.title === course.title);

        if (isAlreadyEnrolled) {
            await Swal.fire({
                icon: 'info',
                title: 'Info',
                text: 'You are already enrolled in this course.',
                confirmButtonText: 'OK' // Customize confirm button text
            });
            navigateToSingleCourse(course.id);
            return;
        }

        const { value: userDetails } = await Swal.fire({
            title: `Enroll in ${course.title}`,
            html: `
                <p>You are enrolling in: <strong>${course.title}</strong></p>
                <input id="swal-input-email" class="swal2-input" placeholder="Email">
                <input id="swal-input-phone" class="swal2-input" placeholder="Phone Number">
                <label style="display: block; margin-top: 10px;">
                    <input type="checkbox" id="swal-input-confirm" class="swal2-checkbox">
                    I confirm that I want to enroll in this course.
                </label>
            `,
            showCloseButton: true, // Add close button
            focusConfirm: false,
            preConfirm: () => {
                const email = document.getElementById('swal-input-email').value;
                const phone = document.getElementById('swal-input-phone').value;
                const isConfirmed = document.getElementById('swal-input-confirm').checked;

                if (!email || !phone) {
                    Swal.showValidationMessage(`Please enter both email and phone number`);
                    return false;
                }

                if (!isConfirmed) {
                    Swal.showValidationMessage(`Please confirm your enrollment`);
                    return false;
                }

                return { email, phone };
            }
        });

        if (userDetails) {
            const newEnrolledCourse = {
                ...course,
                email: userDetails.email,
                phone: userDetails.phone,
            };

            enrolledCourses.push(newEnrolledCourse);
            await set(userCoursesRef, enrolledCourses);

            await Swal.fire({
                icon: 'success',
                title: 'Thank you!',
                text: 'You have successfully enrolled!',
                confirmButtonText: 'OK'
            });

            // if (course.isPremium) {
            //     window.location.href = `payment.html?courseTitle=${encodeURIComponent(course.title)}&courseId=${course.id}&email=${encodeURIComponent(newEnrolledCourse.email)}&phone=${encodeURIComponent(newEnrolledCourse.phone)}`;
            // } else {
            //     navigateToSingleCourse(course.id);
            // }
        }
    } catch (error) {
        console.error("Error enrolling:", error);
        await Swal.fire({
            icon: 'error',
            title: 'Error!',
            text: 'There was an error enrolling in the course.',
            confirmButtonText: 'OK'
        });
    }
};

const showPaymentModule = async (course, userId) => {
    const { value: paymentMethod } = await Swal.fire({
        title: `Payment for `,
        title:`${course.title}`,
        text: `Price: $${course.price}`,
        input: 'select',
        inputOptions: {
            'upi': 'UPI',
            'creditCard': 'Credit Card'
        },
        inputPlaceholder: 'Select a payment method',
        showCancelButton: true,
        inputValidator: (value) => {
            if (!value) {
                return 'You need to select a payment method!';
            }
        }
    });

    if (paymentMethod) {
        if (paymentMethod === 'upi') {
            await handleUPIPayment(course, userId);
        } else if (paymentMethod === 'creditCard') {
            await handleCreditCardPayment(course, userId);
        }
    }
};

const handleUPIPayment = async (course, userId) => {
    const { value: formValues } = await Swal.fire({
        title: `UPI Payment for ${course.title}`,
        text: `Price: $${course.price}`,
        html:
            `<img src="path_to_qr_code_image.png" alt="QR Code" style="width: 200px; height: 200px; margin-bottom: 20px;">
             <input id="swal-input-upi" class="swal2-input" placeholder="Enter UPI ID">
             <label style="display: block; margin-top: 10px;">
                 <input type="checkbox" id="swal-input-confirm" class="swal2-checkbox">
                 I confirm that I want to proceed with the payment.
             </label>`,
        focusConfirm: false,
        preConfirm: () => {
            const upiId = document.getElementById('swal-input-upi').value;
            const isConfirmed = document.getElementById('swal-input-confirm').checked;

            if (!upiId) {
                Swal.showValidationMessage(`Please enter your UPI ID`);
                return false;
            }

            if (!isConfirmed) {
                Swal.showValidationMessage(`Please confirm your payment`);
                return false;
            }

            return { upiId };
        },
        showCancelButton: true,
        cancelButtonText: 'Cancel',
        didOpen: () => {
            Swal.getCancelButton().addEventListener('click', () => {
                Swal.fire({
                    title: 'Are you sure?',
                    text: "You want to cancel the transaction?",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonText: 'Yes, cancel it!',
                    cancelButtonText: 'No, continue'
                }).then((result) => {
                    if (result.isConfirmed) {
                        Swal.close();
                    }
                });
            });
        }
    });

    if (formValues) {
        await completePayment(course, userId, 'upi', formValues);
    }
};

const handleCreditCardPayment = async (course, userId) => {
    const { value: formValues } = await Swal.fire({
        title: `Credit Card Payment for ${course.title}`,
        text: `Price: $${course.price}`,
        html:
            `<input id="swal-input-card" class="swal2-input" placeholder="Card Number">
             <input id="swal-input-expiry" class="swal2-input" placeholder="Expiry Date">
             <input id="swal-input-cvv" class="swal2-input" placeholder="CVV">
             <label style="display: block; margin-top: 10px;">
                 <input type="checkbox" id="swal-input-confirm" class="swal2-checkbox">
                 I confirm that I want to proceed with the payment.
             </label>`,
        focusConfirm: false,
        preConfirm: () => {
            const cardNumber = document.getElementById('swal-input-card').value;
            const expiryDate = document.getElementById('swal-input-expiry').value;
            const cvv = document.getElementById('swal-input-cvv').value;
            const isConfirmed = document.getElementById('swal-input-confirm').checked;

            if (!cardNumber || !expiryDate || !cvv) {
                Swal.showValidationMessage(`Please fill in all card details`);
                return false;
            }

            if (!isConfirmed) {
                Swal.showValidationMessage(`Please confirm your payment`);
                return false;
            }

            return { cardNumber, expiryDate, cvv };
        },
        showCancelButton: true,
        cancelButtonText: 'Cancel',
        didOpen: () => {
            Swal.getCancelButton().addEventListener('click', () => {
                Swal.fire({
                    title: 'Are you sure?',
                    text: "You want to cancel the transaction?",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonText: 'Yes, cancel it!',
                    cancelButtonText: 'No, continue'
                }).then((result) => {
                    if (result.isConfirmed) {
                        Swal.close();
                    }
                });
            });
        }
    });

    if (formValues) {
        await completePayment(course, userId, 'creditCard', formValues);
    }
};

const completePayment = async (course, userId, paymentMethod, paymentDetails) => {
    try {
        const payment = {
            courseId: course.id,
            courseTitle: course.title,
            price: course.price,
            paymentMethod,
            paymentDetails,
            date: new Date().toISOString()
        };

        const userPaymentsRef = ref(database, `users/${userId}/payments`);
        const snapshot = await get(userPaymentsRef);
        const payments = snapshot.val() || [];
        payments.push(payment);
        await set(userPaymentsRef, payments);

        await Swal.fire({
            icon: 'success',
            title: 'Payment Successful!',
            text: 'Your payment has been processed successfully.',
            confirmButtonText: 'OK'
        });

        await enrollCourse(course, userId);

        // Enable the "Play All" button after successful payment
        enablePlayAllButton(course.id);
    } catch (error) {
        console.error("Error processing payment:", error);
        await Swal.fire({
            icon: 'error',
            title: 'Error!',
            text: 'There was an error processing your payment.',
            confirmButtonText: 'OK'
        });
    }
};

const enablePlayAllButton = (courseId) => {
    const playAllButton = document.querySelector(`.play-all[data-course-id="${courseId}"]`);
    if (playAllButton) {
        playAllButton.disabled = false;
    }
};
// const showPaymentModule = async (course, userId) => {
//     const { value: paymentMethod } = await Swal.fire({
//         title: 'Select Payment Method',
//         input: 'select',
//         inputOptions: {
//             'upi': 'UPI',
//             'creditCard': 'Credit Card'
//         },
//         inputPlaceholder: 'Select a payment method',
//         showCancelButton: true,
//         inputValidator: (value) => {
//             if (!value) {
//                 return 'You need to select a payment method!';
//             }
//         }
//     });

//     if (paymentMethod) {
//         if (paymentMethod === 'upi') {
//             await handleUPIPayment(course, userId);
//         } else if (paymentMethod === 'creditCard') {
//             await handleCreditCardPayment(course, userId);
//         }
//     }
// };

// const handleUPIPayment = async (course, userId) => {
//     const { value: formValues } = await Swal.fire({
//         title: 'UPI Payment',
//         html:
//             `<img src="path_to_qr_code_image.png" alt="QR Code" style="width: 200px; height: 200px; margin-bottom: 20px;">
//              <input id="swal-input-upi" class="swal2-input" placeholder="Enter UPI ID">
//              <label style="display: block; margin-top: 10px;">
//                  <input type="checkbox" id="swal-input-confirm" class="swal2-checkbox">
//                  I confirm that I want to proceed with the payment.
//              </label>`,
//         focusConfirm: false,
//         preConfirm: () => {
//             const upiId = document.getElementById('swal-input-upi').value;
//             const isConfirmed = document.getElementById('swal-input-confirm').checked;

//             if (!upiId) {
//                 Swal.showValidationMessage(`Please enter your UPI ID`);
//                 return false;
//             }

//             if (!isConfirmed) {
//                 Swal.showValidationMessage(`Please confirm your payment`);
//                 return false;
//             }

//             return { upiId };
//         },
//         showCancelButton: true,
//         cancelButtonText: 'Cancel',
//         didOpen: () => {
//             Swal.getCancelButton().addEventListener('click', () => {
//                 Swal.fire({
//                     title: 'Are you sure?',
//                     text: "You want to cancel the transaction?",
//                     icon: 'warning',
//                     showCancelButton: true,
//                     confirmButtonText: 'Yes, cancel it!',
//                     cancelButtonText: 'No, continue'
//                 }).then((result) => {
//                     if (result.isConfirmed) {
//                         Swal.close();
//                     }
//                 });
//             });
//         }
//     });

//     if (formValues) {
//         await completePayment(course, userId, 'upi', formValues);
//     }
// };

// const handleCreditCardPayment = async (course, userId) => {
//     const { value: formValues } = await Swal.fire({
//         title: 'Credit Card Payment',
//         html:
//             `<input id="swal-input-card" class="swal2-input" placeholder="Card Number">
//              <input id="swal-input-expiry" class="swal2-input" placeholder="Expiry Date">
//              <input id="swal-input-cvv" class="swal2-input" placeholder="CVV">
//              <label style="display: block; margin-top: 10px;">
//                  <input type="checkbox" id="swal-input-confirm" class="swal2-checkbox">
//                  I confirm that I want to proceed with the payment.
//              </label>`,
//         focusConfirm: false,
//         preConfirm: () => {
//             const cardNumber = document.getElementById('swal-input-card').value;
//             const expiryDate = document.getElementById('swal-input-expiry').value;
//             const cvv = document.getElementById('swal-input-cvv').value;
//             const isConfirmed = document.getElementById('swal-input-confirm').checked;

//             if (!cardNumber || !expiryDate || !cvv) {
//                 Swal.showValidationMessage(`Please fill in all card details`);
//                 return false;
//             }

//             if (!isConfirmed) {
//                 Swal.showValidationMessage(`Please confirm your payment`);
//                 return false;
//             }

//             return { cardNumber, expiryDate, cvv };
//         },
//         showCancelButton: true,
//         cancelButtonText: 'Cancel',
//         didOpen: () => {
//             Swal.getCancelButton().addEventListener('click', () => {
//                 Swal.fire({
//                     title: 'Are you sure?',
//                     text: "You want to cancel the transaction?",
//                     icon: 'warning',
//                     showCancelButton: true,
//                     confirmButtonText: 'Yes, cancel it!',
//                     cancelButtonText: 'No, continue'
//                 }).then((result) => {
//                     if (result.isConfirmed) {
//                         Swal.close();
//                     }
//                 });
//             });
//         }
//     });

//     if (formValues) {
//         await completePayment(course, userId, 'creditCard', formValues);
//     }
// };

// const completePayment = async (course, userId, paymentMethod, paymentDetails) => {
//     try {
//         const payment = {
//             courseId: course.id,
//             courseTitle: course.title,
//             price: course.price,
//             paymentMethod,
//             paymentDetails,
//             date: new Date().toISOString()
//         };

//         const userPaymentsRef = ref(database, `users/${userId}/payments`);
//         const snapshot = await get(userPaymentsRef);
//         const payments = snapshot.val() || [];
//         payments.push(payment);
//         await set(userPaymentsRef, payments);

//         await Swal.fire({
//             icon: 'success',
//             title: 'Payment Successful!',
//             text: 'Your payment has been processed successfully.',
//             confirmButtonText: 'OK'
//         });

//         await enrollCourse(course, userId);
//     } catch (error) {
//         console.error("Error processing payment:", error);
//         await Swal.fire({
//             icon: 'error',
//             title: 'Error!',
//             text: 'There was an error processing your payment.',
//             confirmButtonText: 'OK'
//         });
//     }
// };

const handleEnrollment = (course, userId) => {
    if (!course || !course.type || !course.id) {
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
                showPaymentModule(course, userId); // Show payment module
            }
        });
    } else {
        enrollCourse(course, userId); // Enroll in free course
    }
};

// const handleEnrollment = (course, userId) => {
//     if (!course || !course.type || !course.id) {
//         console.error("Course object is invalid:", course);
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