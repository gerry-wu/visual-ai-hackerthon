import LoginPage from '../pages/login.page'
import DashboardPage from '../pages/dashboard.page'
import ChartPage from '../pages/chart.page'

describe('UI Elements Test: ', () => {
  it('All elements should existed', () => {
    LoginPage.open()
    expect(LoginPage.logo.isExisting()).to.be.true
    expect(LoginPage.heading.getText()).to.include('Login Form')
    expect(LoginPage.usernameLabel.getText()).to.equal('Username')
    expect(LoginPage.username.getAttribute('placeholder')).to.equal('Enter your username')
    expect(LoginPage.usernameIcon.isExisting()).to.be.true
    expect(LoginPage.passwordLabel.getText()).to.equal('Password')
    expect(LoginPage.password.getAttribute('placeholder')).to.equal('Enter your password')
    expect(LoginPage.passwordIcon.isExisting()).to.be.true
    expect(LoginPage.submitBtn.getText()).to.equal('Log In')
    expect(LoginPage.rememberMeCheckboxLabel.getText()).to.equal('Remember Me')
    expect(LoginPage.rememberMeCheckbox.isExisting()).to.be.true
    expect(LoginPage.twitterAnchor.isExisting()).to.be.true
    expect(LoginPage.facebookAnchor.isExisting()).to.be.true
    expect(LoginPage.linkedinAnchor.isExisting()).to.be.true
  })
})

describe('Data-driven Test', () => {
  const invalidLoginData = [
    {
      testCase: 'should show error when login without username and password',
      username: '',
      password: '',
      error: 'Both Username and Password must be present',
    },
    {
      testCase: 'should show error when login without password',
      username: 'my name',
      password: '',
      error: 'Password must be present',
    },
    {
      testCase: 'should show error when login without username',
      username: '',
      password: 'testPassword',
      error: 'Username must be present',
    },
  ]

  before(() => {
    LoginPage.open()
  })

  invalidLoginData.map(({ testCase, username, password, error }) => {
    it(testCase, () => {
      LoginPage.login(username, password)
      expect(LoginPage.alert.getText()).to.include(error)
    })
  })

  it('should login successfully with username and password', () => {
    LoginPage.loginWithValidCredential()
    expect(LoginPage.alert.isExisting()).to.be.false
    expect(browser.getUrl()).to.equal(`${browser.config.baseUrl}/hackathonAppV2.html`)
  })
})

describe('Table Sort Test', () => {
  it('should sort in ascending order', () => {
    LoginPage.open()
    LoginPage.loginWithValidCredential()
    // get the original data on first loaded
    const originalData = DashboardPage.getDataFromTable()
    // expected data when sorting by amount in ascending order
    const expectedData = originalData.sort((a, b) => a.amountValue - b.amountValue)
    // get the new table data after clicking the amount button for sorting
    DashboardPage.sort()
    const sortedData = DashboardPage.getDataFromTable()
    // compare the sortedData and expectedData to verify that the column is in ascending order and that each row’s data stayed in tact after the sorting
    expect(sortedData).to.eql(expectedData)
  })
})

// CAN'T verify data in the canvas in a triditional way
describe('Canvas Chart Test', () => {
  it('should display the bar chart comparing the expenses for the year 2017 and 2018', () => {
    LoginPage.open()
    LoginPage.loginWithValidCredential()
    DashboardPage.CompareExpenseAnchor.click()
    expect(browser.getUrl()).to.include('/hackathonChartV2.html')
    // Expect the data in the bar chart should display correctly,
    ChartPage.addDataButton.click()
    // Expect the data of next year is added to the bar chart
  })
})

describe('Dynamic Content Test', () => {
  it('should display Ads after login when login URL is with showAd flag', () => {
    LoginPage.open('showAd=true')
    expect(browser.getUrl()).to.include('?showAd=true')
    LoginPage.loginWithValidCredential()
    expect(DashboardPage.flashSalesOne.isExisting()).to.be.true
    expect(DashboardPage.flashSalesTwo.isExisting()).to.be.true
  })
})
