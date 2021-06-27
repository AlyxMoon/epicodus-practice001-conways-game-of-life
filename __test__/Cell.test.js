import Cell from '../src/lib/Cell.class.js'

describe('class Cell', () => {
  it('should start alive by default', () => {
    const cell = new Cell()
    expect(cell.alive).toEqual(true)
  })

  it('should be able to change whether the cell is alive or not on creation', () => {
    const cell = new Cell(false)
    expect(cell.alive).toEqual(false)
  })
})
