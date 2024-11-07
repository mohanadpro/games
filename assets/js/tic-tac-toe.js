let takenTiles = [false, false, false, false, false, false, false, false, false];
let takenType = [['', '', ''], ['', '', ''], ['', '', '']];
let xCurrentPlayer = true;
let j = 0;
let tiles = Array.from(document.querySelectorAll('.tile'));
document.getElementById('reset').addEventListener('click', function () {
    tiles.forEach((tile, index) => {
        tile.innerHTML = '';
        j = 0;
    });
    takenTiles=[false, false, false, false, false, false, false, false, false];
    takenType=[['', '', ''], ['', '', ''], ['', '', '']];
    xCurrentPlayer = true;
    document.getElementById("message").innerText='';
})
tiles.forEach((tile, index) => {
    tile.addEventListener('click', function (e) {
        if (takenTiles[index] != true) {
            let i = Math.floor(index / 3);
            if(index<3)
            {
                j=index;
            }
            else
            if(index<6)
            {
                j=index-3;
            }
            else
            {
                j=index-6;
            }
            this.innerText = xCurrentPlayer ? 'X' : 'O';
            this.style.color = xCurrentPlayer ? 'blue' : 'red';
            takenTiles[index] = true;
            takenType[i][j] = xCurrentPlayer ? 'X' : 'O';
            xCurrentPlayer = !xCurrentPlayer;
            j++;
            checkIfWon();
        }
    })
});

let checkIfWon = () => {
    let isWonInColumn=checkIfWonByColumn();
    if(isWonInColumn)
        {
            document.getElementById("message").innerText='Congratulation you have won';
        }
    else
    {
        let isWonInRow=checkIfWonInRows();
        if(isWonInRow)
        {
            document.getElementById("message").innerText='Congratulation you have won';
        }
        else
        {
            let isWonDiagonal=checkIfWonDiagonal();
            if(isWonDiagonal)
            document.getElementById("message").innerText='Congratulation you have won';  
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
    let whoIsTheWinner='';
    for (let i = 0; i < 3; i++) {
        isEqual= false;
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
    while(col<3)
    {
        isEqual=false;
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
        if(isEqual)
        {
            
            break;
        }
        col++;
    }
    return isEqual;
}