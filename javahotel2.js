document.addEventListener("DOMContentLoaded", function() {
    // 1. All Elements (Check these IDs carefully with HTML)
    const otpBtn = document.getElementById("otp");
    const verifyOtpBtn = document.getElementById("verifyOtp");
    const submitFormBtn = document.getElementById("submitForm");
    const writeotpInput = document.getElementById("writeotp");
    const roomButtons = document.querySelectorAll(".roomBook");
    const formSection = document.getElementById("form-section");

    let genrate = ""; // Global variable for OTP logic

    // 2. Room Booking Buttons (Click par form dikhane ke liye)
    roomButtons.forEach(function(btn) {
        btn.addEventListener("click", function() {
            formSection.style.display = "block";
            formSection.scrollIntoView({ behavior: "smooth" });
        });
    });

    // 3. OTP Generate Logic
    if(otpBtn) {
        otpBtn.addEventListener("click", function(e) {
            e.preventDefault();
            genrate = Math.floor(100000 + Math.random() * 900000).toString();
            alert("Your OTP is: " + genrate);
        });
    }

    // 4. OTP Verify Logic
    if(verifyOtpBtn) {
        verifyOtpBtn.addEventListener("click", function(e) {
            e.preventDefault();
            if (writeotpInput.value === "") {
                alert("Please Enter OTP");
            } else if (writeotpInput.value === genrate) {
                alert("OTP Matched! ✅");
            } else {
                alert("OTP Not Matched. Try again. ❌");
            }
        });
    }

    // 5. Submit Form Validation
    if(submitFormBtn) {
        submitFormBtn.addEventListener("click", function(e) {
            const name = document.getElementById("name").value.trim();
            const contact = document.getElementById("contact").value.trim();
            const email = document.getElementById("email").value.trim();

            if (name === "" || contact === "" || email === "") {
                e.preventDefault(); 
                alert("Please fill all details");
                return;
            }

            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                e.preventDefault();
                alert("Enter valid email");
                return;
            }

            alert("Details are correct!");
        });
    }
});