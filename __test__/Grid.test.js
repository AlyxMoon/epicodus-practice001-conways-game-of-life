import { expect, it } from '@jest/globals'
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

  // describe('function checkStatusOfCell()', () => {
  //   it('when all of a cells neighbors are dead, it will be dead', () => {
  //     const grid = new Grid()

  //     const [row, col] = [1, 1]
  //     const cellStatus = grid.checkStatusOfCell(row, col)
  //     expect(cellStatus).toEqual(false)
  //   })
  // })
})