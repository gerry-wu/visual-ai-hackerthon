import Page from './Page'

export class LoginPage extends Page {
  get logo() {
    return $('.logo-w')
  }
  get heading() {
    return $('.auth-header')
  }
  get usernameLabel() {
    return $('label=Username')
  }
  get username() {
    return $('#username')
  }
  get usernameIcon() {
    return $('.os-icon-user-male-circle')
  }
  get passwordLabel() {
    // return $('label=Password')
    return $('label=Pwd') // label has been changed to Pwd in app V2
  }
  get password() {
    return $('#password')
  }
  get passwordIcon() {
    return $('.os-icon-fingerprint')
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
    return $('img[src="img/social-icons/twitter.png"]')
  }
  get facebookAnchor() {
    return $('img[src="img/social-icons/facebook.png"]')
  }
  get linkedinAnchor() {
    return $('img[src="img/social-icons/linkedin.png"]')
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
