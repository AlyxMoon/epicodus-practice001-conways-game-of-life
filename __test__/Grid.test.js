import Cell from '../src/lib/Cell.class.js'
import Grid from '../src/lib/Grid.class.js'

describe('class Grid', () => {
  it('starts with 6x6 grid', () => {
    const grid = new Grid()

    expect(grid.cells.length).toEqual(6)

    for (let i = 0; i < grid.cells.length; i++) {
      expect(grid.cells[i].length).toEqual(6)
    }
  })

  it('starts with cells initialized (alive by default)', () => {
    const grid = new Grid()

    for (let row = 0; row < grid.cells.length; row++) {
      for (let col = 0; col < grid.cells[row].length; col++) {
        expect(grid.cells[row][col] instanceof Cell).toEqual(true)
        expect(grid.cells[row][col].alive).toEqual(true)
      }
    }
  })

  it('if flag is set, starts with cells initialized and dead', () => {
    const startWithCellsAlive = false 
    const grid = new Grid(startWithCellsAlive)

    for (let row = 0; row < grid.cells.length; row++) {
      for (let col = 0; col < grid.cells[row].length; col++) {
        expect(grid.cells[row][col].alive).toEqual(false)
      }
    }
  })

  describe('function getNeighboringCells()', () => {
    const aliveCell = new Cell(true)
    const deadCell = new Cell(false)

    it('should get neighboring cells', () => {
      const grid = new Grid(false)

      const [row, col] = [1, 1]

      grid.cells[row - 1][col].alive = true
      grid.cells[row - 1][col - 1].alive = true
      grid.cells[row + 1][col + 1].alive = true

      const neighboringCells = grid.getNeighboringCells(row, col)
      expect(neighboringCells).toEqual([
        aliveCell, 
        aliveCell, 
        deadCell, 
        deadCell, 
        deadCell, 
        deadCell, 
        deadCell, 
        aliveCell,
      ])
    })

    it('should get neighboring cells when in top left corner', () => {
      const grid = new Grid(false)

      const [row, col] = [0, 0]
      grid.cells[1][0].alive = true

      const neighboringCells = grid.getNeighboringCells(row, col)
      expect(neighboringCells).toEqual([
        deadCell, 
        aliveCell, 
        deadCell,
      ])
    })

    it('should get neighboring cells when in the bottom right corner', () => {
      const grid = new Grid(false)

      const [row, col] = [5, 5]
      grid.cells[5][4].alive = true

      const neighboringCells = grid.getNeighboringCells(row, col)
      expect(neighboringCells).toEqual([
        deadCell, 
        deadCell,
        aliveCell, 
      ])
    })
  })

  describe('function getCountAliveNeighborCells', () => {
    it('should properly count nearby alive cells', () => {
      const grid = new Grid(false)

      const [row, col] = [1, 1]
      grid.cells[row - 1][col].alive = true
      grid.cells[row - 1][col - 1].alive = true
      grid.cells[row + 1][col + 1].alive = true

      expect(grid.getCountAliveNeighborCells(row, col)).toEqual(3)
    })
  })

  describe('function checkStatusOfCell()', () => {
    it('when all of a cells neighbors are dead, it will be dead', () => {
      const grid = new Grid(false)

      const [row, col] = [1, 1]
      const cellStatus = grid.checkStatusOfCell(row, col)
      expect(cellStatus).toEqual(false)
    })

    it('when a dead cell has three live neighbors, it will become alive', () => {
      const grid = new Grid(false)
      const [row, col] = [1, 1]

      grid.cells[row - 1][col].alive = true
      grid.cells[row - 1][col - 1].alive = true
      grid.cells[row + 1][col + 1].alive = true
      const cellStatus = grid.checkStatusOfCell(row, col)
      expect(cellStatus).toEqual(true)
    })
  })
})