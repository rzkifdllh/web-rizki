// memanggil form dari html dengan unik
var emailInput = document.getElementById("email");
        var resultDiv = document.getElementById("emailChecker");

        emailInput.addEventListener("input", function checkEmail() {
            var email = emailInput.value;
            var isValid = isValidEmail(email);

            if (isValid) {
                resultDiv.innerHTML = "Email valid!";
                resultDiv.style.color = "green";
            } else {
                resultDiv.innerHTML = "Email invalid!";
                resultDiv.style.color = "red";
            }
        });

        // Fungsi untuk memeriksa format email
        function isValidEmail(email) {
            // Regular expression pattern untuk format email
            var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            return emailPattern.test(email);
        }

// memanggil button dengan selector dari html
const tombolKirim = document.querySelector('.tombol-kirim')
const myAlert = document.querySelector('.alertKu')

// memanipulasi object alert
function munculAlert() {
    myAlert.classList.toggle('d-none');
}