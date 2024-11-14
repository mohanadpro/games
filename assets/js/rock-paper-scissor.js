// List of all choices for the games 
let initTypes=['rock','paper','scissor'];

// Get all images to add click event listener
let types=document.querySelectorAll('img');

// loop on each type and add click event listener
for(let type of types)
    type.addEventListener('click',function(e){
        // get type name from the clicked image (rock, paper or scissor)
        let typeName= type.getAttribute('data-type');

        // get a random choice from the array (rock, paper or scissor)
        let randomType=initTypes[Math.floor(Math.random()*3)];

        // the place where the played images are inserted
        let rockPaperScissorArea=document.getElementById("rock-paper-scissor-game");

        // create the first image which is player from the user
        let firstImage=document.createElement('img');

        // create the second image which is a random choice form the computer
        let img1=document.createElement('img');
        
        switch(typeName)
            {
                // set all attributes for image that we created before for the user choice 
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
                // set all attributes for image that we created before for the random choice from the computer 
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


        // initial the previous play
        rockPaperScissorArea.innerHTML='';

        // append our two created images
        rockPaperScissorArea.appendChild(firstImage);
        rockPaperScissorArea.appendChild(img1);


        // compare the choised type from the user with the random type from the computer 
        // and either increase the wins numbers or increase the losts numbers
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