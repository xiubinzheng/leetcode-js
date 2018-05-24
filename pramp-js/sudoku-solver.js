//https://www.linkedin.com/in/koalvin/
//https://www.linkedin.com/in/benjamin-zheng-784bb957/



let test = 
[
    [".",".",".","7",".",".","3",".","1"],
    ["3",".",".","9",".",".",".",".","."],
    [".","4",".","3","1",".","2",".","."],
    [".","6",".","4",".",".","5",".","."],
    [".",".",".",".",".",".",".",".","."],
    [".",".","1",".",".","8",".","4","."],
    [".",".","6",".","2","1",".","5","."],
    [".",".",".",".",".","9",".",".","8"],
    ["8",".","5",".",".","4",".",".","."]
]
;

let test2 =
[[".","8","9",".","4",".","6",".","5"],
[".","7",".",".",".","8",".","4","1"],
["5","6",".","9",".",".",".",".","8"],
[".",".",".","7",".","5",".","9","."],
[".","9",".","4",".","1",".","5","."],
[".","3",".","9",".","6",".","1","."],
["8",".",".",".",".",".",".",".","7"],
[".","2",".","8",".",".",".","6","."],
[".",".","6",".","7",".",".","8","."]];
function getcandidates(board,row,col){
    let candidates = [];
    for(let i=1;i<=board.length;i++)
    {
        let collision = false;
      for(let j=0;j<board[0].length;j++)
      {
        if(board[row][j]===String(i)||
        board[j][col]=== String(i) || 
        board[(row-row%3)+Math.floor(j/3)][(col-col%3)+i%3] === String(i)) 
        {
          collision = true;
          break;
        }
      }
      if(!collision){
          candidates.push(String(i));
        }
    }
    return candidates;
  }
  
  function sudokuSolve(board) {
    let row = -1;
    let col = -1;
    let candidates = null;
    
    for(let i=0;i<board.length;i++)
      {
        for(let j=0;j<board[0].length;j++){
          if(board[i][j]==='.')
          {
            let newcandidates = getcandidates(board,row,col);
            if(candidates == null || newCandidates.size()<candidates.size())
            {
              candidates = newCandidates;
              row = i;
              col = j;
            }
          }
        }
      }
    
    if(candidates == null){
      return true;
    }
    
    for (let i=0;i<candiates.length;i++){
      board[row][col]= candiates[i];
      if(sudokuSolve(board))
          return true;
      board[row][col]='.';
    }
    return false;
  }
              
  console.log(sudokuSolve(test));


  
  /*
   
  [
  [".",".",".","7",".",".","3",".","1"],
  ["3",".",".","9",".",".",".",".","."],
  [".","4",".","3","1",".","2",".","."],
  [".","6",".","4",".",".","5",".","."],
  [".",".",".",".",".",".",".",".","."],
  [".",".","1",".",".","8",".","4","."],
  [".",".","6",".","2","1",".","5","."],
  [".",".",".",".",".","9",".",".","8"],
  ["8",".","5",".",".","4",".",".","."]
  ]
  
  [5 4 3
   2 6 1
   9 8 7]
   
   [5 1 2
    2 5 1
    1 2 5]
  when to return false is when board[i][j] == board[][] return false
  fn sudokuSolve(board):
    linearly scan the rows
      linear scan the cols
          if board[i][j]==='.'
              recursivesly search around its corners and diagaonally
                pop of the candiates as i go
             
  */
  
  
  /*
  In sudoku, the objective is to fill a 9x9 board 
  with digits so that each column, each row, and 
  each of the nine 3x3 sub-boards that compose 
  the board contains all of the digits from 1 to 9.
  The board setter provides a partially completed board, 
  which for a well-posed board has a unique solution.
  As explained above, for this problem, 
  it suffices to calculate whether a given sudoku board has a solution.
  No need to return the actual numbers that make up a solution.
  
  
  A sudoku board is represented as a two-dimensional 9x9 
  array of the characters ‘1’,‘2’,…,‘9’ and the '.' character, 
  which represents a blank space. 
  
  In every row of the array,
  all characters ‘1’,‘2’,…,‘9’ appear exactly once.
  In every column of the array, 
  all characters ‘1’,‘2’,…,‘9’ appear exactly once.
  In every 3x3 sub-board that is illustrated below, 
  all characters ‘1’,‘2’,…,‘9’ appear exactly once.
  
  */


