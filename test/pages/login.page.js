import Page from './Page'

export class LoginPage extends Page {
  get logo() {
    return $('.logo-w')
  }
  get heading() {
    return $('h4=Logout Form')
  }
  get usernameLabel() {
    return $('label=Username')
  }
  get username() {
    return $('#username')
  }
  get passwordLabel() {
    return $('label=Pwd')
  }
  get password() {
    return $('#password')
  }
  get submitBtn() {
    return $('#log-in')
  }
  get rememberMeCheckbox() {
    return $('.form-check-input')
  }
  get rememberMeCheckboxLabel() {
    return $('.form-check-label')
  }
  get twitterAnchor() {
    return $('span img[src="img/social-icons/twitter.png"]')
  }
  get facebookAnchor() {
    return $('span img[src="img/social-icons/facebook.png"]')
  }
  get linkedinAnchor() {
    return $('a img[src="img/social-icons/linkedin.png"]')
  }
  get alert() {
    return $('.alert-warning')
  }
  open(parameter) {
    parameter ? super.open(`/hackathonV2.html?${parameter}`) : super.open('/hackathonV2.html')
  }

  login(username, password) {
    this.username.setValue(username)
    this.password.setValue(password)
    this.submitBtn.click()
  }

  loginWithValidCredential() {
    this.login('my name', 'testPassword')
  }
}

export default new LoginPage()
