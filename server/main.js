//USE ELASTIC SEARCH TO OPTOMIZE
//mongo DB of entire dictionary

const board = module.exports.defaultBoard = [
  [
      { val: '', bonus: '' },
      { val: '', bonus: '' },
      { val: '', bonus: '' },
      { val: '', bonus: 'TW' },
      { val: '', bonus: '' },
      { val: '', bonus: '' },
      { val: '', bonus: 'TL' },
      { val: '', bonus: '' },
      { val: '', bonus: 'TL' },
      { val: '', bonus: '' },
      { val: '', bonus: '' },
      { val: '', bonus: 'TW' },
      { val: '', bonus: '' },
      { val: '', bonus: '' },
      { val: '', bonus: '' } 
  ],
  [ 
      { val: '', bonus: '' },
      { val: '', bonus: '' },
      { val: '', bonus: 'DL' },
      { val: '', bonus: '' },
      { val: '', bonus: '' },
      { val: '', bonus: 'DW' },
      { val: '', bonus: '' },
      { val: '', bonus: '' },
      { val: '', bonus: '' },
      { val: '', bonus: 'DW' },
      { val: '', bonus: '' },
      { val: '', bonus: '' },
      { val: '', bonus: 'DL' },
      { val: '', bonus: '' },
      { val: '', bonus: '' } 
  ],
  [ 
      { val: '', bonus: '' },
      { val: '', bonus: 'DL' },
      { val: '', bonus: '' },
      { val: '', bonus: '' },
      { val: '', bonus: 'DL' },
      { val: '', bonus: '' },
      { val: '', bonus: '' },
      { val: '', bonus: '' },
      { val: '', bonus: '' },
      { val: '', bonus: '' },
      { val: '', bonus: 'DL' },
      { val: '', bonus: '' },
      { val: '', bonus: '' },
      { val: '', bonus: 'DL' },
      { val: '', bonus: '' } 
  ],
  [ 
      { val: '', bonus: 'TW' },
      { val: '', bonus: '' },
      { val: '', bonus: '' },
      { val: '', bonus: 'TL' },
      { val: '', bonus: '' },
      { val: '', bonus: '' },
      { val: '', bonus: '' },
      { val: '', bonus: 'DW' },
      { val: '', bonus: '' },
      { val: '', bonus: '' },
      { val: '', bonus: '' },
      { val: '', bonus: 'TL' },
      { val: '', bonus: '' },
      { val: '', bonus: '' },
      { val: '', bonus: 'TW' } 
  ],
  [ 
      { val: '', bonus: '' },
      { val: '', bonus: '' },
      { val: '', bonus: 'DL' },
      { val: '', bonus: '' },
      { val: '', bonus: '' },
      { val: '', bonus: '' },
      { val: '', bonus: 'DL' },
      { val: '', bonus: '' },
      { val: '', bonus: 'DL' },
      { val: '', bonus: '' },
      { val: '', bonus: '' },
      { val: '', bonus: '' },
      { val: '', bonus: 'DL' },
      { val: '', bonus: '' },
      { val: '', bonus: '' } 
  ],
  [ 
      { val: '', bonus: '' },
      { val: '', bonus: 'DW' },
      { val: '', bonus: '' },
      { val: '', bonus: '' },
      { val: '', bonus: '' },
      { val: '', bonus: 'TL' },
      { val: '', bonus: '' },
      { val: '', bonus: '' },
      { val: '', bonus: '' },
      { val: '', bonus: 'TL' },
      { val: '', bonus: '' },
      { val: '', bonus: '' },
      { val: '', bonus: '' },
      { val: '', bonus: 'DW' },
      { val: '', bonus: '' } 
  ],
  [
      { val: '', bonus: 'TL' },
      { val: '', bonus: '' },
      { val: '', bonus: '' },
      { val: '', bonus: '' },
      { val: '', bonus: 'DL' },
      { val: '', bonus: '' },
      { val: '', bonus: '' },
      { val: '', bonus: '' },
      { val: '', bonus: '' },
      { val: '', bonus: '' },
      { val: '', bonus: 'DL' },
      { val: '', bonus: '' },
      { val: '', bonus: '' },
      { val: '', bonus: '' },
      { val: '', bonus: 'TL' }
   ],
   [ 
      { val: '', bonus: '' },
      { val: '', bonus: '' },
      { val: '', bonus: '' },
      { val: '', bonus: 'DW' },
      { val: '', bonus: '' },
      { val: '', bonus: '' },
      { val: '', bonus: '' },
      { val: '', bonus: '' },
      { val: '', bonus: '' },
      { val: '', bonus: '' },
      { val: '', bonus: '' },
      { val: '', bonus: 'DW' },
      { val: '', bonus: '' },
      { val: '', bonus: '' },
      { val: '', bonus: '' } 
  ],
  [ 
      { val: '', bonus: 'TL' },
      { val: '', bonus: '' },
      { val: '', bonus: '' },
      { val: '', bonus: '' },
      { val: '', bonus: 'DL' },
      { val: '', bonus: '' },
      { val: '', bonus: '' },
      { val: '', bonus: '' },
      { val: '', bonus: '' },
      { val: '', bonus: '' },
      { val: '', bonus: 'DL' },
      { val: '', bonus: '' },
      { val: '', bonus: '' },
      { val: '', bonus: '' },
      { val: '', bonus: 'TL' } 
  ],
  [ 
      { val: '', bonus: '' },
      { val: '', bonus: 'DW' },
      { val: '', bonus: '' },
      { val: '', bonus: '' },
      { val: '', bonus: '' },
      { val: '', bonus: 'TL' },
      { val: '', bonus: '' },
      { val: '', bonus: '' },
      { val: '', bonus: '' },
      { val: '', bonus: 'TL' },
      { val: '', bonus: '' },
      { val: '', bonus: '' },
      { val: '', bonus: '' },
      { val: '', bonus: 'DW' },
      { val: '', bonus: '' } 
  ],
  [ 
      { val: '', bonus: '' },
      { val: '', bonus: '' },
      { val: '', bonus: 'DL' },
      { val: '', bonus: '' },
      { val: '', bonus: '' },
      { val: '', bonus: '' },
      { val: '', bonus: 'DL' },
      { val: '', bonus: '' },
      { val: '', bonus: 'DL' },
      { val: '', bonus: '' },
      { val: '', bonus: '' },
      { val: '', bonus: '' },
      { val: '', bonus: 'DL' },
      { val: '', bonus: '' },
      { val: '', bonus: '' } 
  ],
  [ 
      { val: '', bonus: 'TW' },
      { val: '', bonus: '' },
      { val: '', bonus: '' },
      { val: '', bonus: 'TL' },
      { val: '', bonus: '' },
      { val: '', bonus: '' },
      { val: '', bonus: '' },
      { val: '', bonus: 'DW' },
      { val: '', bonus: '' },
      { val: '', bonus: '' },
      { val: '', bonus: '' },
      { val: '', bonus: 'TL' },
      { val: '', bonus: '' },
      { val: '', bonus: '' },
      { val: '', bonus: 'TW' } 
  ],
  [ 
      { val: '', bonus: '' },
      { val: '', bonus: 'DL' },
      { val: '', bonus: '' },
      { val: '', bonus: '' },
      { val: '', bonus: 'DL' },
      { val: '', bonus: '' },
      { val: '', bonus: '' },
      { val: '', bonus: '' },
      { val: '', bonus: '' },
      { val: '', bonus: '' },
      { val: '', bonus: 'DL' },
      { val: '', bonus: '' },
      { val: '', bonus: '' },
      { val: '', bonus: 'DL' },
      { val: '', bonus: '' }
  ],
  [ 
      { val: '', bonus: '' },
      { val: '', bonus: '' },
      { val: '', bonus: 'DL' },
      { val: '', bonus: '' },
      { val: '', bonus: '' },
      { val: '', bonus: 'DW' },
      { val: '', bonus: '' },
      { val: '', bonus: '' },
      { val: '', bonus: '' },
      { val: '', bonus: 'DW' },
      { val: '', bonus: '' },
      { val: '', bonus: '' },
      { val: '', bonus: 'DL' },
      { val: '', bonus: '' },
      { val: '', bonus: '' }
   ],
   [ 
      { val: '', bonus: '' },
      { val: '', bonus: '' },
      { val: '', bonus: '' },
      { val: '', bonus: 'TW' },
      { val: '', bonus: '' },
      { val: '', bonus: '' },
      { val: '', bonus: 'TL' },
      { val: '', bonus: '' },
      { val: '', bonus: 'TL' },
      { val: '', bonus: '' },
      { val: '', bonus: '' },
      { val: '', bonus: 'TW' },
      { val: '', bonus: '' },
      { val: '', bonus: '' },
      { val: '', bonus: '' } 
    ]
];

//let currentTile = [0,0];


function parseBoard (board, lettersArray){
    //itearate over entire board while:
      //keep track of highest total value
      //keep track of location and value of each tile that comprises highest total
}


function iterateBoard (){
    for(var i = 0; i < board.length; i++){
      for(var j = 0; j < board.length; j++){
        const currentTile = board[i,j];
        const surroundingTiles = {up: false, down: false, left: false, right: false};

        if(!currentTile["val"]){ //if the tile is empty
          const surroundingTiles = checkInitialSurroundingTiles(i, j);
          var initialRowIdx = i;
          if(surroundingTiles.row.val){
            if(!surroundingTiles.row.nothingPreceding){
              var {initialIdx, startWithSeven} = determineInitialRowWordIdx(i,j);
            }
            var initialRowIdx = i - 6 > 0 ? i - 6 : 0;
            //run process from that first idx, run through every permutation 7!, index + 1 then 6! etc
            //check validity of word in each location, if valid, iterate again and determine if the words that are being touched on top or bottom are also valid
            //once done all 7!, 6!... etc move entire idx over by 1 and reproduce until that idx matches the original i IDX;
          }
          var initialColumnIdx = 0;
          if(surroundingTiles.column.val){
            if(!surroundingTiles.column.nothingPreceding){
              initialColumnIdx = determineInitialColumnWordIdx(i,j);
            }
            initialColumnIdx = j - 6 > 0 ? j - 6 : 0;
            //run process from that first idx, run through every permutation 7!, index + 1 then 6! etc
            //check validity of word in each location, if valid, iterate again and determine if the words that are being touched on top or bottom are also valid
            //once done all 7!, 6!... etc move entire idx over by 1 and reproduce until that idx matches the original i IDX;
          }

        }
        //keep track of both right and left are taken or both top and down are taken
      }
    }
    //if there is a value in that tile then we iterate through lettersArray to determine if ANY letters can be valid with the letters that already exist on both sides of the letter
    //if they can, then go to the next spot in the line. 
    //if that spot is already taken, then skip it
}

function checkInitialSurroundingTiles(columnIdx,rowIdx){
  const surroundingTiles = {row: {val: false, nothingPreceding: true}, column: {val: false, nothingPreceding: true}};

  if(board[i + 1, j]) {
    surroundingTiles.column.val = true;
  }
  if(board[i - 1, j]) {
    surroundingTiles.column.val = true;
    surroundingTiles.column.nothingPreceding = false;
  }
  if(board[i, j + 1]) {
    surroundingTiles.row.val = true;
  }
  if(board[i, j - 1]) {
    surroundingTiles.row.val = true;
    surroundingTiles.column.nothingPreceding = false;
  }

  return surroundingTiles;
}


module.exports.determineInitialColumnWordIdx = function determineInitialColumnWordIdx(rowIdx, columnIdx. boardToUse = board){
  let tilesToCount = 6;
  for(var k = rowIdx; k >= 0 || tilesToCount === 0; k--){
    if(!board[k,columnIdx]){
      tilesToCount--;
    }
  }
  return {initialIdx: k, startWithSeven: tilesToCount === 0}
}

module.exports.determineInitialRowWordIdx = function determineInitialRowWordIdx(rowIdx, columnIdx){
  let tilesToCount = 6;
  for(var k = columnIdx; k >= 0 || tilesToCount === 0; k--){
    if(!board[rowIdx,k]){
      tilesToCount--;
    }
  }
  return {initialIdx: k, startWithSeven: tilesToCount === 0}
}



