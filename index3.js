document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let fullname = document.getElementById("fullname").value.trim();
    let nameParts = fullname.split(" ");
    document.getElementById("firstname").value = nameParts[0] || "";
    document.getElementById("middlename").value = nameParts.length > 2 ? nameParts[1] : "";
    document.getElementById("lastname").value = nameParts[nameParts.length - 1] || "";

    let aadhaar = document.getElementById("aadhaar").value.trim();
    if (!/^\d{12}$/.test(aadhaar)) {
        document.getElementById("aadhaarError").innerText = "Aadhaar number must be 12 digits.";
        return;
    } else {
        document.getElementById("aadhaarError").innerText = "";
    }

    let pan = document.getElementById("pan").value.trim();
    if (!/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(pan)) {
        document.getElementById("panError").innerText = "Invalid PAN card format.";
        return;
    } else {
        document.getElementById("panError").innerText = "";
    }

    let mobile = document.getElementById("mobile").value.trim();
    if (!/^\d{10}$/.test(mobile)) {
        document.getElementById("mobileError").innerText = "Mobile number must be 10 digits.";
        return;
    } else {
        document.getElementById("mobileError").innerText = "";
    }

    let dob = document.getElementById("dob").value;
    if (!dob) {
        document.getElementById("dobError").innerText = "Please enter a valid date of birth.";
        return;
    } else {
        document.getElementById("dobError").innerText = "";
    }

    let marksInput = document.getElementById("marks").value.trim();
    let marksArray = marksInput.split(",").map(Number).filter(n => !isNaN(n));
    if (marksArray.length !== 6) {
        document.getElementById("marksError").innerText = "Enter exactly six marks separated by commas.";
        return;
    } else {
        document.getElementById("marksError").innerText = "";
    }

    marksArray.sort((a, b) => b - a);
    let bestFive = marksArray.slice(0, 5);
    let percentage = bestFive.reduce((sum, val) => sum + val, 0) / 5;
    document.getElementById("percentage").value = percentage.toFixed(2) + "%";
});
