
var loading = document.getElementById('loadingLogo')
loading.classList.add('display-none')
var all_users
frappe.call({
    method: 'library.www.signup.index.get_values',
    type: 'GET',
        callback: function(r) {
            all_users = r.message
        }
    });
// JavaScript function to check if the email is valid
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
function isStrongPassword(password) {
    if (password.length < 8) {
        return 'Password need at least 8 characters long';
    }
    if (!/[A-Z]/.test(password)) {
        return 'Password will contains at least one uppercase letter';
    }
    if (!/[a-z]/.test(password)) {
        return 'Password will contains at least one lowercase letter';
    }
    if (!/[0-9]/.test(password)) {
        return 'Password will contains at least one digit';
    }
    if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/\-='"]/g.test(password)) {
        return 'Password contains at least one special character';
    }
    return true;
}

function checkPasswordStrength() {
    const passwordInput = document.getElementById("password");
    const passwordStrengthDiv = document.getElementById("password-strength");

    const password = passwordInput.value;
    if (password === "") {
        passwordStrengthDiv.textContent = "";
        return;
    }

    if (isStrongPassword(password) === true) {
        passwordStrengthDiv.textContent = "Password is strong!";
        passwordStrengthDiv.style.color = "green";
    } else {
        let passwordText = isStrongPassword(password)
        passwordStrengthDiv.textContent = passwordText;
        passwordStrengthDiv.style.color = "red";
    }
}
// Handling form submission
document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Fetching user input values
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const termsCheckbox = document.getElementById('termsCheckbox').checked;

    // Checking if the email is valid
    if (!isValidEmail(email)) {
        frappe.msgprint('Please enter a valid email address.');
        return;
    }

    // Checking if passwords match
    if (password !== confirmPassword) {
        frappe.msgprint('Passwords do not match. Please re-enter your password.');
        return;
    }

    if (isStrongPassword(password) !== true) {
        frappe.msgprint('Please make your password to strong.');
        return;
    }

    for (let eachMail of all_users){
        if (eachMail.name === email){
            frappe.msgprint('This email address already existed.');
            return;
        }
    }

    const mobileInput = 91 + document.getElementById('mobile').value;

        const mobilePattern = /^\91\d{10}$/;

        if (! mobilePattern.test(mobileInput)) {
            frappe.msgprint('Not invalid Mobile number.');
            return ;
        } 

        loading.classList.remove('display-none')
        document.getElementById('signupForm').classList.add('display-none')
    frappe.call({
        method: "library.www.signup.index.create_user", //dotted path to server method
        args: {'full_name': fullName, 'email': email,'role': 'Customer', 'password': password , 'mobile':mobileInput},
            callback: function(r) {
                loading.classList.add('display-none')
                console.log(r)
                window.location.href = "/login";
            }
        });
    
});