// inital array that contains if the tile is taken or not
// True is taken
// False is not taken 
let takenTiles = [false, false, false, false, false, false, false, false, false];

// Two dimensional array that contains which type is taken X or O
let takenType = [['', '', ''], ['', '', ''], ['', '', '']];

// To change the current player ex: True X next round !True so O
let xCurrentPlayer = true;


let column = 0;


// get all tiles
let tiles = Array.from(document.querySelectorAll('.tile'));


// reset button is clicked
// initial all variables
document.getElementById('reset').addEventListener('click', function () {
    tiles.forEach((tile, index) => {
        tile.innerHTML = '';
        column = 0;
    });
    takenTiles=[false, false, false, false, false, false, false, false, false];
    takenType=[['', '', ''], ['', '', ''], ['', '', '']];
    xCurrentPlayer = true;
    document.getElementById("message").innerText='';
})


// loop on each tile and add click event handler 
tiles.forEach((tile, index) => {
    tile.addEventListener('click', function (e) {

        // check if the tile is not taken before
        if (takenTiles[index] != true && document.getElementById("message").innerText=='') {
            
            // Algorithm to convert number to two dimensional array
            // Tiles are order from 0 to 8 
            // ex: 0 => (0,0) , 1 => (0,1) , 2 => (0,2) 
            // 3 => (1,0) , 4 => (1,1) , 5 => (1,2)  
            // 6 => (2,0) , 7 => (2,1) , 8 => (2,2)  
            let row = Math.floor(index / 3);
            if(index<3)
            {
                column=index;
            }
            else
            if(index<6)
            {
                column=index-3;
            }
            else
            {
                column=index-6;
            }

            // decide which player is the current player
            this.innerText = xCurrentPlayer ? 'X' : 'O';
            this.style.color = xCurrentPlayer ? 'blue' : 'red';

            // take the tile
            takenTiles[index] = true;

            // insert X or Y in the specific index 
            takenType[row][column] = xCurrentPlayer ? 'X' : 'O';
            xCurrentPlayer = !xCurrentPlayer;

            // increase column value for the two dimensional array
            column++;

            // after every click check if the player win
            checkIfWon();
        }
    })
});

let wonMessage= () => {
    // Display the congratulatioin message if a player has won
    document.getElementById("message").innerText='Congratulation you have won';
}

let checkIfWon = () => {
    let isWonInColumn=checkIfWonByColumn();
    
    // check if the player win in any column
    if(isWonInColumn)
        {
            wonMessage()
        }
    else
    {
        // check if the player win in any row
        let isWonInRow=checkIfWonInRows();
        if(isWonInRow)
        {
            wonMessage()
        }
        else
        {
            // check if the player win in any diagonal
            let isWonDiagonal=checkIfWonDiagonal();
            if(isWonDiagonal)
                wonMessage()  
        }
    }
    
}

let checkIfWonDiagonal=()=>{

    if(((takenType[0][0]!='' && takenType[1][1]!='' && takenType[2][2]!='') 
    && (takenType[0][0]==takenType[1][1] && takenType[0][0]==takenType[2][2])) ||
    ((takenType[2][0]!='' && takenType[1][1]!='' && (takenType[0][2]!='') &&
    (takenType[0][2]==takenType[1][1] && takenType[0][2]==takenType[2][0]))))         
        return true;
    else             
        return false;
}

let checkIfWonInRows=()=>{
    let isEqual;

    // loop on each row to check if each column of it has the same type [X or O]
    for (let i = 0; i < 3; i++) {
        isEqual= false;
        // loop on columns in the row to check if all its tiles has the same type
        for (let k = 0; k < 2; k++)
            if ((takenType[i][k]!=''|| takenType[i][k+1]!='') && takenType[i][k] == takenType[i][k + 1])
                {
                    isEqual=true;
                }
                else
                {
                    isEqual=false;
                    break;
                }

        // If this value true so each column from the row has the same type
        // I break the loop because a player has won the game
        if(isEqual==true)
            {
                break;
            }
    }
    return isEqual;
}

let checkIfWonByColumn=()=>{

    let col=0;
    let isEqual;
    // Loop on each column to check if one of them all tiles the same type [X or O]
    while(col<3)
    {
        isEqual=false;
        // Loop on each row in the column to check if they has the same type
        for(let i=0;i<2;i++)
        {
            if((takenType[i][col]!='' || takenType[i+1][col]!='') && takenType[i][col]=== takenType[i+1][col])
            {
                isEqual=true;
            }
            else
            {
                isEqual=false;
                break;
            }
        }

        // If this value true so each row from the column has the same type
        // I break the loop because a player has won the game
        if(isEqual)
        {            
            break;
        }
        col++;
    }
    return isEqual;
}