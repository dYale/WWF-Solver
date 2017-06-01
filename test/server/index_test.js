const request = require('supertest')
const main = require(__server + '/main.js')

const emptyBoard = main.defaultBoard;

describe("Horizontal Finder", function() {


  it("Should identify 0 idx as area to start searching", function() {
    var populatedBoard = createPopulatedBoard();
    console.log(main.determineInitialColumnWordIdx(1, 2));
  })
})


function createPopulatedBoard () {
  const populatedBoard = emptyBoard;
  console.log(emptyBoard);
  console.log(populatedBoard);
  populatedBoard[0][1].val = "d";
  populatedBoard[0][2].val = "r";
  populatedBoard[0][3].val = "i";
  populatedBoard[0][4].val = "v";
  populatedBoard[0][5].val = "e";
  populatedBoard[0][6].val = "r";
  populatedBoard[0][7].val = "s";


  populatedBoard[1][1].val = "o";
  populatedBoard[2][1].val = "r";  //[[ ],[d],[r],[i],[v],[e],[r],[s]]
  populatedBoard[3][1].val = "k";  //[[ ],[o],[ ],[ ],[a],[ ],[ ],[t]]
                                   //[[a],[r],[o],[u],[n],[d],[ ],[a]]
                                   //[[ ],[k],[ ],[ ],[s],[ ],[ ],[r]]
  populatedBoard[1][4].val = "a";
  populatedBoard[2][4].val = "n";
  populatedBoard[3][4].val = "s";


  populatedBoard[2][0].val = "a";
  populatedBoard[2][1].val = "r";
  populatedBoard[2][2].val = "o";
  populatedBoard[2][3].val = "u";
  populatedBoard[2][4].val = "n";
  populatedBoard[2][5].val = "d";

  populatedBoard[1][7].val = "t";
  populatedBoard[2][7].val = "a";
  populatedBoard[3][7].val = "r";
  console.log(populatedBoard);
  return populatedBoard;
}