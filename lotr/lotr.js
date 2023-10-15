document.addEventListener('DOMContentLoaded', function () {
    const passwordInput = document.getElementById('password');
    const submitButton = document.getElementById('submit');
    const correctPassword = 'mellon'; // Replace 'yourpassword' with the correct password

    submitButton.addEventListener('click', function () {
        const enteredPassword = passwordInput.value;
        
        if (enteredPassword === correctPassword) {
           
            // Redirect to a new page (e.g., 'newpage.html') when the correct password is entered
            window.location.href = 'newlotr.html';
        }
    });
});
