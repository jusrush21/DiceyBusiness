window.addEventListener('DOMContentLoaded', (event) => {
    console.log('Page Loaded');

    document.addEventListener('DOMContentLoaded', function(){
        var addButton = document.createElement('button');
            addButton.innerText = 'Add Dice';
            addButton.className = 'addButton';
        document.body.appendChild(addButton)
        var rollButton = document.createElement('button');
            rollButton.innerText = 'Roll Dice/Die';
            rollButton.className = 'rollButton';
        document.body.appendChild(rollButton);
        var sumButton = document.createElement('button');
            sumButton.innerText = 'Sum Dice/Die';
            sumButton.className = 'sumButton';
        document.body.appendChild(sumButton);
        
        var Die = function() {    
           this.roll = function() {
               var result = Math.floor(Math.random()*6+1);
               this.value = result;
           }
        }

        addButton.addEventListener('click', function(){
            var diceHolder = document.createElement('div');
                 diceHolder.className = 'diceHolder';
            document.body.appendChild(diceHolder);
            var newDice = new Die()
            newDice.roll()
            diceHolder.innerText = newDice.value;
            $('div').click(function() {
              newDice.roll()
              this.innerText = newDice.value;  
            })
             $('div').dblclick(function() {
             this.remove();
             })
     
     
             })     
         }); 

         
    

    
});