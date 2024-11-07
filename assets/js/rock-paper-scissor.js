let initTypes=['rock','paper','scissor'];
let types=document.querySelectorAll('img');
for(let type of types)
    type.addEventListener('click',function(e){
        let typeName= type.getAttribute('data-type');
        let randomType=initTypes[Math.floor(Math.random()*3)];
        let rockPaperScissorArea=document.getElementById("rock-paper-scissor-game");
        let firstImage=document.createElement('img');
        let img1=document.createElement('img');
        switch(typeName)
            {
                case 'paper':
                firstImage.setAttribute("src",'assets/images/Paper.png');
                firstImage.setAttribute("alt",'Paper'); 
                firstImage.setAttribute("id","paper");                    
                    break;
                case 'rock':
                firstImage.setAttribute("src",'assets/images/Rock.png');
                firstImage.setAttribute("alt",'Rock');
                firstImage.setAttribute("id","rock")                       
                    break;
                case 'scissor':
                firstImage.setAttribute("src",'assets/images/Scissor.png');
                firstImage.setAttribute("alt",'Scissor.png');
                firstImage.setAttribute("id","scissor");                       
                    break;
            }
            switch(randomType)
            {
                case 'paper':
                    img1.setAttribute("src",'assets/images/Paper.png');
                    img1.setAttribute("alt",'Paper');
                    img1.setAttribute("id","paper1");                       
                    break;                        

                case 'rock':
                    img1.setAttribute("src",'assets/images/Rock.png');
                    img1.setAttribute("alt",'Rock');
                    img1.setAttribute("id","rock1");                       
                    break;

                case 'scissor':
                    img1.setAttribute("src",'assets/images/Scissor.png');
                    img1.setAttribute("alt",'Scissor.png');
                    img1.setAttribute("id","scissor1");                       
                    break;
            }


        rockPaperScissorArea.innerHTML='';
        rockPaperScissorArea.appendChild(firstImage);
        rockPaperScissorArea.appendChild(img1);


        if( randomType=='rock' &&typeName=='paper')
        {
            let wins=parseInt(document.getElementById('won').textContent);
            document.getElementById('won').textContent=++wins;
        }
        if( randomType=='rock' &&typeName=='scissor')
        {
            let losts=parseInt(document.getElementById('lost').textContent);
            document.getElementById('lost').textContent=++losts;
        }
        if( randomType=='rock' &&typeName=='rock')
        {
            console.log(`random type ${randomType} , your type ${typeName} , even`);
        }


        if( randomType=='paper' &&typeName=='rock')
        {
            let losts=parseInt(document.getElementById('lost').textContent);
            document.getElementById('lost').textContent=++losts;
        }
        if( randomType=='paper' &&typeName=='scissor')
        {
            let wins=parseInt(document.getElementById('won').textContent);
            document.getElementById('won').textContent=++wins;
        }
        if( randomType=='paper' &&typeName=='paper')
        {
            console.log(`random type ${randomType} , your type ${typeName} , even`);
        }            


        if( randomType=='scissor' &&typeName=='rock')
        {
            let wins=parseInt(document.getElementById('won').textContent);
            document.getElementById('won').textContent=++wins;
        }                
        if( randomType=='scissor' &&typeName=='scissor')
        {
            console.log(`random type ${randomType} , your type ${typeName} , even`);
        }
        if( randomType=='scissor' &&typeName=='paper')
        {                    
            let losts=parseInt(document.getElementById('lost').textContent);
            document.getElementById('lost').textContent=++losts;
        }
    })