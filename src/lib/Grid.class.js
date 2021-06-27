import Cell from './Cell.class.js'

export default class Grid {
  constructor (startWithCellsAlive = true) {
    this.cells = []

    this.createGrid(startWithCellsAlive)
  }

  createGrid (startWithCellsAlive) {
    const rowCount = 6
    const colCount = 6

    for (let i = 0; i < rowCount; i++) {
      const row = []

      for (let j = 0; j < colCount; j++) {
        row.push(new Cell(startWithCellsAlive))
      }

      this.cells.push(row)
    }
  }
  
  getNeighboringCells (row, col) {
    const cells = []


    for (let iRow = row - 1; iRow <= row + 1; iRow++) {
      for (let iCol = col - 1; iCol <= col + 1; iCol++) {
        if (
          iRow < 0 || 
          iCol < 0 ||
          iRow >= this.cells.length ||
          iCol >= this.cells[iRow].length
        ) continue

        if (!(iRow === row && iCol === col)) {
          cells.push(this.cells[iRow][iCol])
        }
      }
    }

    return cells
  }

  checkStatusOfCell (row, col) {
    // need to grab every neighboring cell
    // check that exactly three are alive
    // and that current cell is dead
    // then return true

    // const neighboringCells = this.getNeighboringCells(row, col)
    

    // if (false) {
    //   return true
    // }

    return false
  }
}
