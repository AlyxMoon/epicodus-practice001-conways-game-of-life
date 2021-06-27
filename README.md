
### Rough outline

- figure out webpack build step
  - we need to build the index and scripts and styles
  - make sure Jest is setup (and Babel too!)
  - make sure we have linting

- represent grid in the script
- create a grid in the HTML

- handle rules for the game
  - Any live cell with two or three live neighbours survives.
  - Any dead cell with three live neighbours becomes a live cell.
  - All other live cells die in the next generation. Similarly, all other dead cells stay dead.

class Game ()
- variables
  - generation counter
  - grid
  - running
- functions
  - runGeneration:
    - check each rule for each cell, whether alive or dead
    - update generation counter
  - updateHTML:
    - do that

class Grid ()
  - start with 6x6
    - potential to change that later?
  - track all cells

class Cells ()
  - set if alive or dead
  - represent in HTML by showing different color

- UI goals:
  - figure out how to make a grid
  - pick two colors for the cells, and add something to show those colors
  - button to set paused
  - button to do a step
  - generation counter