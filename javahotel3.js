document.addEventListener("DOMContentLoaded", function() {
    let submitForm = document.getElementById("submitForm");

    // Agar HTML mein button ki id 'submitForm' nahi hai, toh ye line use karein:
    if(!submitForm) submitForm = document.querySelector("button[type='submit']");

    submitForm.addEventListener("submit", function(e) {
        e.preventDefault();

        // 1. Inputs ko sahi variables mein store karna (Hyphen '-' nahi use karna)
        const username = document.getElementById("username").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const email = document.getElementById("email").value.trim();
        const totalrooms = document.getElementById("totalrooms").value.trim();
        const roomType = document.getElementById("roomType").value.trim();
        const checkin = document.getElementById("checkin").value.trim();
        const checkout = document.getElementById("checkout").value.trim();
        const totalbills = document.getElementById("totalbill").value.trim();

        // 2. Email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert("Enter valid email");
            return;
        }

        // 3. Contact validation (phone variable use kiya hai)
        const contactPattern = /^[0-9]{10}$/;
        if (!contactPattern.test(phone)) {
            alert("Enter valid 10 digit number");
            return;
        }

        // 4. Final Empty Check (Sabhi names upar wale variables se match hone chahiye)
        if (username === "" || phone === "" || email === "" || totalrooms === "" || roomType=="" || checkin === "" || checkout === "" || totalbills === "") {
            alert("Fill all details");
        } else {
            alert("Detail is correct");
            // Yahan aap form submit kar sakte hain agar validation sahi hai
            // e.target.closest("form").submit();
        }
    });
});