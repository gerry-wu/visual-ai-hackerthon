import Page from './Page'

class DashboardPage extends Page {
  get amountHeader() {
    return $('th=Amount')
  }

  get CompareExpenseAnchor() {
    return $('=Compare Expenses')
  }

  get flashSalesOne() {
    return $('#flashSale img')
  }

  get flashSalesTwo() {
    return $('#flashSale2 img')
  }

  open() {
    super.open('/hackathonAppV2.html')
  }

  sort() {
    this.amountHeader.click()
  }

  getTableRows() {
    let rows = $$('tr')
    rows.shift() // remove table header
    return rows // only return rows in table body
  }

  getTableHeader() {
    const header = $$('thead th')
    return header.map(th => th.getText().toLowerCase())
  }

  getDataFromTable() {
    const header = this.getTableHeader()
    return this.getTableRows().map(row => {
      const rowData = row
        .$$('td')
        .reduce((accu, curr, tdIndex) => ({ ...accu, [header[tdIndex]]: curr.getText() }), {})

      const rowDataWithAmountValue = {
        ...rowData,
        amountValue: Number(
          rowData.amount.substring(0, rowData.amount.length - 3).replace(/[,\s]/g, '')
        ),
      }
      return rowDataWithAmountValue
    })
  }
}

export default new DashboardPage()
