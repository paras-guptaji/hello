class AuthService {
    constructor() {
      this.users = JSON.parse(localStorage.getItem("directfarm_users")) || []
    }
  
    register(userData) {
      if (this.users.some((user) => user.email === userData.email)) {
        throw new Error("Email already registered")
      }
  
      this.users.push(userData)
  
      this._saveUsers()
  
      return true
    }
  
    login(email, password) {
      const user = this.users.find((user) => user.email === email && user.password === password)
  
      if (!user) {
        return false
      }
  
      this._setCurrentUser(user)
  
      return user
    }
  
    getCurrentUser() {
      return JSON.parse(localStorage.getItem("directfarm_current_user"))
    }
  
    logout() {
      localStorage.removeItem("directfarm_current_user")
      return true
    }
  
    _saveUsers() {
      localStorage.setItem("directfarm_users", JSON.stringify(this.users))
    }
  
    _setCurrentUser(user) {
      const { password, ...userWithoutPassword } = user
      localStorage.setItem("directfarm_current_user", JSON.stringify(userWithoutPassword))
    }
  }
  window.AuthService = AuthService
  window.authService = new AuthService()
  
  