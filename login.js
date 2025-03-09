document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm")
    const emailInput = document.getElementById("email")
    const passwordInput = document.getElementById("password")
  
   
    const authService = new AuthService()
  
    const currentUser = authService.getCurrentUser()
    if (currentUser) {
      redirectBasedOnUserType(currentUser)
    }
  
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault()
  
      const email = emailInput.value.trim()
      const password = passwordInput.value.trim()
  
      if (!email || !password) {
        showError("loginError", "Please enter both email and password")
        return
      }
  
      try {
        
        const user = authService.login(email, password)
  
        if (user) {
          showAlert("Login successful! Redirecting...", "success")
  
      
          setTimeout(() => {
            redirectBasedOnUserType(user)
          }, 1500)
        } else {
          showError("loginError", "Invalid email or password. Please try again.")
        }
      } catch (error) {
        showError("loginError", "An error occurred. Please try again later.")
      }
    })
  
    function redirectBasedOnUserType(user) {
      if (user.userType === "consumer") {
        window.location.href = "market.html"
      } else if (user.userType === "farmer") {
        window.location.href = "farmer.html"
      } else {
        window.location.href = "index.html"
      }
    }
  
    function showError(elementId, message) {
      let errorElement = document.getElementById(elementId)
      if (!errorElement) {
        errorElement = document.createElement("div")
        errorElement.id = elementId
        errorElement.className = "error-message"
        loginForm.appendChild(errorElement)
      }
  
      errorElement.textContent = message
      errorElement.style.color = "red"
      errorElement.style.marginTop = "10px"
      errorElement.style.textAlign = "center"
    }
  
    function clearError(elementId) {
      const errorElement = document.getElementById(elementId)
      if (errorElement) {
        errorElement.textContent = ""
      }
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
  
  