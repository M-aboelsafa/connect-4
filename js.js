var red = 'r';
var yellow = 'y';
var current = red;
var gameOver = false;
var board;
var rows = 6;
var columns = 7;
var currColumns = [5,5,5,5,5,5,5]; //keeps track of which row each column is at.

window.onload = function() {
    setGame();
}

function setGame() {
    board = [];
    for (let r = 0; r < rows; r++) {
        let row = [];
        for (let c = 0; c < columns; c++) {
            // JS
            row.push(' ');
            // HTML
            let tile = document.createElement("div");
            tile.id = r.toString() + "-" + c.toString();
            tile.classList.add("tile");
            tile.addEventListener("click", setPiece);
            document.getElementById("board").append(tile);
        }
        board.push(row);
    } 
}
function setPiece(){
    if(gameOver)
        return ;
    let coords =this.id.split("-");
    let r = parseInt(coords[0]);
    let c = parseInt(coords[1]);
    r = currColumns[c];
    board[r][c] = current; //update JS board
    console.log(r+" " +c +" "+currColumns[c],+" "+this);
    let tile =document.getElementById(r.toString() + "-" + c.toString());    
   // let tile = this;    
   // let tile = "5-2";    
    if(current == red){
        tile.classList.add("red-piece");
        current = yellow;
    }else{
        tile.classList.add("yellow-piece");
        current = red;
    }
    currColumns[c]--;
   if(checkWinner(r,c ,current))
   {
        if(current ==  red)
            document.getElementById("winnery").innerHTML = "Yellow";
        else 
            document.getElementById("winnerr").innerHTML = "Red";
   }
}

function checkWinner(r,c ,kk )
{
    var count  = 0;
    if(kk ==  red)
        kk= yellow;
    else kk= red;
    for(i = 5 ; i >= 0 ;i--  )
    {
        console.log(board[i][c] +" " +i+" "+c + " " + count);
        if(board[i][c] == kk){
            count++;
            if(count >= 4)
            {
                gameOver = true;
                return true;
            }
        }
        else
            count=0;
    }
    count=0;
    for(i = 6 ; i >= 0 ;i--  )
    {
        console.log(board[r][i] +" " +r+" "+i + " "+count);

        if(board[r][i] == kk)
        {    count++;
            if(count >= 4)
            {
                gameOver = true;
                return true;
            }
        }
        else
            count = 0;
    }
    count = 0;
    i=r;
    j=c;
    while(i<6 && j<7){
        if(board[i][j]==kk)
        {
         count++;
        console.log(board[i][j] +" zzz " +i+" "+j + " " + count);
        i++;
        j++;
        }else 
            break;
   }
    if(count >= 4)
    {
        gameOver = true;
        return true;
    }
    i = r ;
    j = c;
    count--;
    while( i>=0 && j>=0){
        if(board[i][j]==kk)
        {
         count++;
        console.log(board[i][j] +" zzz " +i+" "+j + " " + count);
        i--;
        j--;
        }else 
        break;
    }
    if(count >= 4)
    {
        gameOver = true;
        return true;
    }

    i=r;
    j=c;
    count=0;

    while( i >= 0 && j < 7){
        if(board[i][j]==kk)
        {
         count++;
        console.log(board[i][j] +" vv " +i+" "+j + " " + count);
        i--;
        j++;
         }else 
            break;
    }
    i=r;
    j=c;
    if(count >= 4)
    {
        gameOver = true;
        return true;
    }
    count--;

    while(i < 6 && j >= 0){
       if(board[i][j]==kk)
       {
        count++;
        console.log(board[i][j] +" vv " +i+" "+j + " " + count);
        i++;
        j--;
       }else 
            break;
    }
    if(count >= 4)
    {
        gameOver = true;
        return true;
    }
    


}