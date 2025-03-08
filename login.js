document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', async function (e) {
        e.preventDefault();

        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();

        if (!username || !password) {
            showError('usernameError', 'Please fill in both username and password.');
            return;
        }

        try {
            const isAuthenticated = await mockAuth(username, password);
            if (isAuthenticated) {
                showAlert('Login successful! Redirecting...', 'success');
                setTimeout(() => {
                    window.location.href = './Dashboard/farmer.html';
                }, 1500);
            } else {
                showError('loginError', 'Invalid username or password. Please try again.');
            }
        } catch (error) {
            showError('loginError', 'An error occurred. Please try again later.');
        }
    });

  
    async function mockAuth(username, password) {

        return new Promise((resolve) => {
            setTimeout(() => {
                
                const validCredentials = {
                    'privu': 'privu@123',
                   
                };
                
                resolve(validCredentials[username] === password);
            }, 1000);
        });
    }

    function showError(elementId, message) {
        let errorElement = document.getElementById(elementId);
        if (!errorElement) {
            errorElement = document.createElement('div');
            errorElement.id = elementId;
            errorElement.style.color = 'red';
            loginForm.appendChild(errorElement);
        }
        errorElement.textContent = message;
    }

    function clearError(elementId) {
        const errorElement = document.getElementById(elementId);
        if (errorElement) {
            errorElement.textContent = '';
        }
    }


    function showAlert(message, type) {
        const alertBox = document.createElement('div');
        alertBox.className = `alert alert-${type}`;
        alertBox.textContent = message;
        document.body.appendChild(alertBox);

        setTimeout(() => {
            alertBox.remove();
        }, 3000);
    }
});

