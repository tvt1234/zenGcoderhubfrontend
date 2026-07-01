const loadRazorpay = () => {
    return new Promise((resolve) => {
        const script = document.createElement("script");
        script.src = "https://checkout.razorpay.com/v1/checkout.js";
        script.onload = () => resolve(true);
        script.onerror = () => resolve(false);
        document.body.appendChild(script);
    });
};

const PayButton = ({ course, enrollmentId }) => {

    const handlePayment = async () => {
        try {
            // 1. Load SDK
            const isLoaded = await loadRazorpay();
            if (!isLoaded) {
                alert("Razorpay SDK failed");
                return;
            }

            // 2. FIXED PRICE LOGIC (IMPORTANT)
            const price =
                course.salePrice > 0
                    ? course.salePrice
                    : course.originalPrice || course.fee;

            if (!price || price <= 0) {
                alert("Invalid price");
                console.log("COURSE:", course);
                return;
            }

            // 3. Create Order
            const orderRes = await fetch(
                "http://localhost:5000/api/payment/create-order",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        amount: price,
                    }),
                }
            );

            const order = await orderRes.json();
            console.log("ORDER RESPONSE:", order);

            if (!order?.id) {
                alert("Order creation failed");
                return;
            }

            // 4. Razorpay Options
            const options = {
                key: import.meta.env.VITE_RAZORPAY_KEY_ID,
                amount: order.amount, // backend should return paise
                currency: "INR",
                order_id: order.id,

                handler: async function (response) {
                    try {
                        const verifyRes = await fetch(
                            "http://localhost:5000/api/payment/verify-payment",
                            {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json",
                                },
                                body: JSON.stringify({
                                    razorpay_order_id: response.razorpay_order_id,
                                    razorpay_payment_id: response.razorpay_payment_id,
                                    razorpay_signature: response.razorpay_signature,
                                    enrollmentId,
                                }),
                            }
                        );

                        const data = await verifyRes.json();
                        console.log("VERIFY RESPONSE:", data);

                        alert(data.message || "Payment Success 🎉");

                    } catch (err) {
                        console.log("VERIFY ERROR:", err);
                        alert("Payment verification error");
                    }
                },

                theme: {
                    color: "#2563eb",
                },
            };

            const rzp = new window.Razorpay(options);
            rzp.open();

        } catch (err) {
            console.log("PAYMENT ERROR:", err);
            alert("Something went wrong");
        }
    };

    return (
        <button
            onClick={handlePayment}
            style={{
                padding: "10px",
                width: "100%",
                background: "#16a34a",
                color: "white",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
            }}
        >
            Pay Now
        </button>
    );
};

export default PayButton;