const board = [
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

let currentTile = [0,0];


function parseBoard (board, lettersArray){
    //itearate over entire board while:
      //keep track of highest total value
      //keep track of location and value of each tile that comprises highest total
}


function iterateBoard (){
    for(let i = 0; i < board.length; i++){
      for(let j = 0; j < board.length; j++){
        const currentTile = board[i,j];
        const surroundingTiles = {up: false, down: false, left: false, right: false};

        if(!currentTile["val"]){ //if the tile is empty
          const surroundingTiles = checkInitialSurroundingTiles(i, j);
          //check if the current tile has a tile with a value in the tile left,right,top,down tile

        }
        //keep track of both right and left are taken or both top and down are taken
      }
    }
    //check if the current tile has a tile with a value in the tile left,right,top,down tile
    //keep track of both right and left are taken or both top and down are taken
    //if there is a value in that tile then we iterate through lettersArray to determine if ANY letters can be valid with the letters that already exist on both sides of the letter
    //if they can, then go to the next spot in the line. 
    //if that spot is already taken, then skip it
}

function checkInitialSurroundingTiles(columnIdx,rowIdx){
  const surroundingTiles = {horizontal: {val: false, firstLetter: true}, vertical: {val: false, firstLetter: true}};

  if(board[i + 1, j]) {
    surroundingTiles.vertical.val = true;
  }
  if(board[i - 1, j]) {
    surroundingTiles.vertical.val = true;
    surroundingTiles.vertical.firstLetter = false;
  }
  if(board[i, j + 1]) {
    surroundingTiles.horizontal.val = true;
  }
  if(board[i, j - 1]) {
    surroundingTiles.horizontal.val = true;
    surroundingTiles.vertical.firstLetter = false;
  }

  return surroundingTiles;
}





