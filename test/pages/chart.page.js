import Page from './Page'

class ChartPage extends Page {
  get addDataButton() {
    return $('#addDataset')
  }

  clickAddDataButton() {
    this.addDataButton.click()
  }
  open() {
    super.open('/hackathonChart.html')
  }
}

export default new ChartPage()
