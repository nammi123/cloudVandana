function submitForm() {
    // Perform form validation here
    var firstName = document.getElementById("fname").value;
    var lastName = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var dob = document.getElementById("dob").value;
    var country = document.getElementById("country").value;
    const genderElements = document.getElementsByName('gender');
            const gender = [];
            for (const element of genderElements) {
                if (element.checked) {
                    gender.push(element.value);
                }
            }
    var profession = document.getElementById("profession").value;
    var mobile = document.getElementById("mobile").value;

    if (!firstName || !lastName || !dateOfBirth || !country || gender.length === 0 || !profession || !email || !mobileNumber) {
        alert("All fields are required.");
        return;
    }

    // Display the values in a popup
    var popupContent = `
        First Name: ${firstName}
        Last Name: ${lastName}
        Date of Birth: ${dob}
        Country: ${country}
        Gender: ${gender}
        Profession: ${profession}
        Email: ${email}
        Mobile Number: ${mobile}
    `;

    document.getElementById("popupContent").innerText = popupContent;
    document.getElementById("popup").style.display = "none";
}

function resetForm() {
    document.getElementById("form").reset();
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
    resetForm();
}