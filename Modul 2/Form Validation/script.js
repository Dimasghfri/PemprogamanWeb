document.getElementById('registrationForm').addEventListener('submit', function(event) {
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var address = document.getElementById('address').value.trim();

    if (name === "" || email === "" || address === "") {
        event.preventDefault();
        alert("Semua data harus diisi.");
    }
});