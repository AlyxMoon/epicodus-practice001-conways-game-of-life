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
}
