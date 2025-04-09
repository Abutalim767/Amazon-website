// <*--NewCode--*>
// Cart Data Load करो (अगर पहले से कुछ हो तो)
let cart = JSON.parse(localStorage.getItem("cart")) || [];
updateCartCount();

// "Add to Cart" Function
function addToCart(productName, price) {
    // Cart में नया प्रोडक्ट Add करो
    cart.push({ name: productName, price: price });

    // Local Storage में Save करो
    localStorage.setItem("cart", JSON.stringify(cart));

    // Cart Count Update करो
    updateCartCount();

    // Confirmation Message दो
    alert(productName + " added to cart!");
}

// Cart Count Update करने का Function
function updateCartCount() {
    document.getElementById("cart-count").innerText = cart.length;
}

// Page Load होने पर Cart Count Restore करो
window.onload = function () {
    updateCartCount();
};

// *Razorpay Payment Gateway Function*
function startPayment(productName, price) {
    var options = {
        "key": "YOUR_RAZORPAY_KEY_ID", // Razorpay Key ID (Dashboard से लें)
        "amount": price * 100, // Price को पैसे में बदलें (₹500 → 50000 पैसे)
        "currency": "INR",
        "name": "My Online Store",
        "description": "Purchase: " + productName,
        "image": "https://yourwebsite.com/logo.png",
        "handler": function (response){
            alert("Payment Successful! Payment ID: " + response.razorpay_payment_id);
        },
        "prefill": {
            "name": "User Name",
            "email": "user@example.com",
            "contact": "9876543210"
        },
        "theme": {
            "color": "#3399cc"
        }
    };

    var rzp1 = new Razorpay(options);
    rzp1.open();
}