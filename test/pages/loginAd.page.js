import { LoginPage } from './login.page'

class LoginAdPage extends LoginPage {
  open() {
    browser.url('/hackathon.html?showAd=true')
  }
}

export default new LoginAdPage()
