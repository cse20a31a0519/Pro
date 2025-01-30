document.getElementById("payButton").addEventListener("click", async () => {
    const userId = localStorage.getItem("userId");
    if (!userId) {
        Swal.fire("Error", "Please log in to continue!", "error");
        return;
    }

    const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked');
    if (!paymentMethod) {
        Swal.fire("Error", "Please select a payment method!", "error");
        return;
    }

    Swal.fire({
        title: "Processing Payment...",
        text: "Please wait...",
        allowOutsideClick: false,
        didOpen: () => {
            Swal.showLoading();
        }
    });

    setTimeout(async () => {
        const paymentData = {
            courseId: courseId,
            courseName: courseTitle,
            price: coursePrice,
            date: new Date().toISOString(),
            paymentMethod: paymentMethod.value
        };

        // Store new payment in Firebase under the user's payments
        const userPaymentsRef = ref(database, `users/${userId}/payments`);
        await push(userPaymentsRef, paymentData);

        // Store in LocalStorage (for quick verification)
        localStorage.setItem(`payment_${courseId}`, JSON.stringify(paymentData));

        Swal.fire("Success", "Payment successful! Redirecting...", "success").then(() => {
            window.location.href = `/course.html?courseId=${courseId}`;
        });
    }, 2000);
});
