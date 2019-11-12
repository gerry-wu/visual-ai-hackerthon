import LoginPage from '../pages/login.page'
import DashboardPage from '../pages/dashboard.page'
import ChartPage from '../pages/chart.page'

describe('UI Elements Test: ', () => {
  it('All elements should existed', () => {
    LoginPage.open()
    browser.takeSnapshot('login page')
  })
})

describe('Data-driven Test', () => {
  const invalidLoginData = [
    {
      testCase: 'should show error when login without username and password',
      username: '',
      password: ''
    },
    {
      testCase: 'should show error when login without password',
      username: 'my name',
      password: ''
    },
    {
      testCase: 'should show error when login without username',
      username: '',
      password: 'testPassword'
    },
  ]

  before(() => {
    LoginPage.open()
  })

  invalidLoginData.map(({ testCase, username, password, error }) => {
    it(testCase, () => {
      LoginPage.login(username, password)
      browser.takeSnapshot(`Invalid login with username: "${username}" and password: "${password}"`)
    })
  })

  it('should login successfully with username and password', () => {
    LoginPage.loginWithValidCredential()
    browser.takeSnapshot('redirect to dashboard when login succeeds')
  })
})

describe('Table Sort Test', () => {
  it('should sort in ascending order', () => {
    LoginPage.open()
    LoginPage.loginWithValidCredential()
    browser.takeSnapshot('dashboard - table default view')
    DashboardPage.amountHeader.click()
    browser.takeSnapshot('dashboard - table sorted by amount')
  })
})

// CAN'T verify data in the canvas in a triditional way
describe('Canvas Chart Test', () => {
  it('should display the bar chart comparing the expenses for the year 2017 and 2018', () => {
    LoginPage.open()
    LoginPage.loginWithValidCredential()
    DashboardPage.clickCompareExpense()
    browser.takeSnapshot('chart - default view')
    ChartPage.clickAddDataButton()
    browser.takeSnapshot('chart - data added')
  })
})

describe('Dynamic Content Test', () => {
  it('should display Ads after login when login URL is with showAd flag', () => {
    LoginPage.open('showAd=true')
    expect(browser.getUrl()).to.include('?showAd=true')
    LoginPage.loginWithValidCredential()
    browser.takeSnapshot('dashboard - login with ad')
  })
})
