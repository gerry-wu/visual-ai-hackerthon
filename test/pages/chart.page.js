import Page from './Page'

class ChartPage extends Page {
  get addDataButton() {
    return $('#addDataset')
  }

  open() {
    super.open('/hackathonChartV2.html')
  }
}

export default new ChartPage()
