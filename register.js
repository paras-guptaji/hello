document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("registerForm")
    const nameInput = document.getElementById("name")
    const phoneInput = document.getElementById("phone")
    const emailInput = document.getElementById("email")
    const addressInput = document.getElementById("address")
    const userTypeInput = document.getElementById("userType")
    const passwordInput = document.getElementById("password")
    const confirmPasswordInput = document.getElementById("confirmPassword")
  
    class AuthService {
      register(userData) {
        console.log("User registered:", userData)
        localStorage.setItem("user", JSON.stringify(userData))
      }
    }
    const authService = window.authService || new AuthService()
  
    function validateForm() {
      let isValid = true
  
      clearAllErrors()
  
      if (nameInput.value.trim() === "") {
        showError("nameError", "Name is required")
        isValid = false
      }
  
      const phoneRegex = /^\d{10}$/
      if (!phoneRegex.test(phoneInput.value)) {
        showError("phoneError", "Please enter a 10-digit phone number")
        isValid = false
      }
  
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(emailInput.value)) {
        showError("emailError", "Please enter a valid email address")
        isValid = false
      }
  
      if (addressInput.value.trim() === "") {
        showError("addressError", "Address is required")
        isValid = false
      }
  
      if (userTypeInput.value === "") {
        showError("userTypeError", "Please select your user type")
        isValid = false
      }
  
      if (passwordInput.value.length < 6) {
        showError("passwordError", "Password should be at least 6 characters long")
        isValid = false
      }
  
      if (confirmPasswordInput.value !== passwordInput.value) {
        showError("confirmPasswordError", "Passwords do not match")
        isValid = false
      }
  
      return isValid
    }
  
    form.addEventListener("submit", (e) => {
      e.preventDefault()
  
      if (validateForm()) {
        try {
          const userData = {
            name: nameInput.value.trim(),
            phone: phoneInput.value.trim(),
            email: emailInput.value.trim(),
            address: addressInput.value.trim(),
            userType: userTypeInput.value,
            password: passwordInput.value,
            createdAt: new Date().toISOString(),
          }
  
  
          authService.register(userData)

          showAlert("Account created successfully! Redirecting to login...", "success")
  
          setTimeout(() => {
            window.location.href = "login.html"
          }, 2000)
        } catch (error) {
          showAlert(error.message, "error")
        }
      }
    })
  
    function showError(elementId, message) {
      let errorElement = document.getElementById(elementId)
      if (!errorElement) {
        errorElement = document.createElement("div")
        errorElement.id = elementId
        errorElement.className = "error-message"
  
        const relatedInput = document.getElementById(elementId.replace("Error", ""))
        if (relatedInput && relatedInput.parentNode) {
          relatedInput.parentNode.appendChild(errorElement)
        } else {
          form.appendChild(errorElement)
        }
      }
  
      errorElement.textContent = message
      errorElement.style.color = "red"
      errorElement.style.fontSize = "12px"
      errorElement.style.marginTop = "5px"
    }
  
    function clearError(elementId) {
      const errorElement = document.getElementById(elementId)
      if (errorElement) {
        errorElement.textContent = ""
      }
    }
  
    function clearAllErrors() {
      const errorElements = document.querySelectorAll(".error-message")
      errorElements.forEach((element) => {
        element.textContent = ""
      })
    }
  
    function showAlert(message, type) {
      const alertBox = document.createElement("div")
      alertBox.className = `alert alert-${type}`
      alertBox.textContent = message
      alertBox.style.position = "fixed"
      alertBox.style.top = "20px"
      alertBox.style.left = "50%"
      alertBox.style.transform = "translateX(-50%)"
      alertBox.style.padding = "15px 20px"
      alertBox.style.borderRadius = "5px"
      alertBox.style.zIndex = "1000"
  
      if (type === "success") {
        alertBox.style.backgroundColor = "#d4edda"
        alertBox.style.color = "#155724"
        alertBox.style.border = "1px solid #c3e6cb"
      } else {
        alertBox.style.backgroundColor = "#f8d7da"
        alertBox.style.color = "#721c24"
        alertBox.style.border = "1px solid #f5c6cb"
      }
  
      document.body.appendChild(alertBox)
  
      setTimeout(() => {
        alertBox.remove()
      }, 3000)
    }
  })
  
  