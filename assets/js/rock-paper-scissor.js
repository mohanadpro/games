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
                firstImage = createImage(firstImage,'assets/images/Paper.png','Paper',"paper")                       
                    break;
                case 'rock':
                firstImage = createImage(firstImage,'assets/images/Rock.png','Rock',"rock")                       

                    break;
                case 'scissor':
                firstImage = createImage(firstImage,'assets/images/Scissor.png','Scissor',"scissor")                       

                    break;
            }
            switch(randomType)
            {
                // set all attributes for image that we created before for the random choice from the computer 
                case 'paper':  
                    img1 = createImage(img1,'assets/images/Paper.png','Paper',"paper1")                       
                    break;                        

                case 'rock':
                    img1 = createImage(img1,'assets/images/Rock.png','Rock',"rock1")                       
                    break;

                case 'scissor':
                    img1 = createImage(img1,'assets/images/Scissor.png','Scissor',"scissor1")                       
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
            winActions();
        }
        if( randomType=='rock' &&typeName=='scissor')
        {
            lostActions();
        }
        if( randomType=='rock' &&typeName=='rock')
        {
            drawActions();
        }
        if( randomType=='paper' &&typeName=='rock')
        {
            lostActions();
        }
        if( randomType=='paper' &&typeName=='scissor')
        {
            winActions();
        }
        if( randomType=='paper' &&typeName=='paper')
        {
            drawActions();
        }            
        if( randomType=='scissor' &&typeName=='rock')
        {
            winActions();
        }                
        if( randomType=='scissor' &&typeName=='scissor')
        {
            drawActions();
        }
        if( randomType=='scissor' &&typeName=='paper')
        {                    
            lostActions();
        }
    });

    const createImage=(image,src,alt,id)=>{
        image.setAttribute("src",src);
        image.setAttribute("alt",alt);
        image.setAttribute("id",id);
        return image;
    }
    
    const drawActions = () =>{
        document.getElementById('current-game-result').textContent='Draw';
    };

    const winActions = () =>{
        console.log('Win');
        let wins=parseInt(document.getElementById('won').textContent);
        document.getElementById('current-game-result').textContent='You have won';
        document.getElementById('won').textContent=++wins;
    };
    
    const lostActions = () =>{
        console.log('lost');
        let losts=parseInt(document.getElementById('lost').textContent);
        document.getElementById('current-game-result').textContent='You have lost';
        document.getElementById('lost').textContent=++losts;   
    };