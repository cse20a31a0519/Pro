    const urlParams = new URLSearchParams(window.location.search);
    const courseTitle = urlParams.get('courseTitle');
    const courseId = urlParams.get('courseId'); // Get the course ID
    const email = urlParams.get('email');
    const phone = urlParams.get('phone');

    const courseTitleElement = document.getElementById('course-title');
    const coursePriceElement = document.getElementById('course-price');
    const paymentResultElement = document.getElementById('payment-result');
    const payNowButton = document.getElementById('pay-now');

    if (courseTitle) {
        courseTitleElement.textContent = courseTitle;

        // Fetch the course price (replace with your actual logic)
        fetchCoursePrice(courseId) // Pass the course ID to the function
            .then(price => {
                coursePriceElement.textContent = price;
            })
            .catch(error => {
                console.error("Error fetching price:", error);
                coursePriceElement.textContent = "Price not available";
            });
    } else {
        courseTitleElement.textContent = "Course details not found";
        coursePriceElement.textContent = "Price not available";
    }



    payNowButton.addEventListener('click', () => {
        const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked').value;

        // Simulate payment processing (replace with your actual payment gateway integration)
        simulatePayment(paymentMethod)
            .then(result => {
                paymentResultElement.textContent = "Thank you for your payment!";
                paymentResultElement.classList.add("success"); // Add success class
                paymentResultElement.classList.remove("error"); // Remove error class (if any)

                // Optionally disable the Pay Now button after successful payment
                 payNowButton.disabled = true;

                // You can redirect or perform other actions here
                // Example:  setTimeout(() => { window.location.href = "confirmation.html"; }, 3000); // Redirect after 3 seconds
            })
            .catch(error => {
                paymentResultElement.textContent = "Payment failed. Please try again.";
                paymentResultElement.classList.add("error"); // Add error class
                paymentResultElement.classList.remove("success");// Remove success class (if any)
                console.error("Payment error:", error);
            });
    });

    // Placeholder function to fetch the course price (replace with your actual API call)
    async function fetchCoursePrice(courseId) {
        // Replace this with your actual logic to retrieve the price based on the course ID
        // This might involve fetching from a database or an API
        // Example (using a mock price for demonstration):

        // In a real application, you would make an API request here
        // to fetch the price based on the courseId.

        // For now, we'll just return a mock price
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const prices = {
                    "1": 99,
                    "2": 149,
                    "3": 49
                };
                if (prices[courseId]) {
                    resolve(prices[courseId]);
                } else {
                    reject("Price not found");
                }
            }, 500); // Simulate a short delay
        });
    }


    // Placeholder function to simulate payment processing (replace with your actual payment integration)
    function simulatePayment(paymentMethod) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const success = Math.random() < 0.9; // 90% chance of success for testing

                if (success) {
                    resolve(); // Payment successful
                } else {
                    reject("Payment failed"); // Payment failed
                }
            }, 1000); // Simulate a 1-second delay
        });
    }
