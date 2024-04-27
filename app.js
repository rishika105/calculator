const btns = document.querySelectorAll(".buttons button");
const display = document.querySelector('.text input');
const operators = document.querySelectorAll('#operator');


const buttonClick = (event) => {
    const value = event.target.value;

    if(value=== 'AC'){
        display.value = "";
    }

    else if(value=== "DE"){
        display.value = display.value.slice(0, -1);
    }

    else if( value === '/' || value === '*' || value === '+' || value === '-' || value === '**'){
        display.value += `${value}`;
        disableOperators();
       
    }

    else if (value === '='){
        display.value = eval(display.value)
    }
    
    else{
        display.value += value;
        enableOperators();
    }
};


const disableOperators= () =>{
        for(let operator of operators){
           operator.disabled = true; 
        }
        
};
        

const enableOperators= () =>{
    for(let operator of operators){
       operator.disabled = false;
       
    }
  
};

btns.forEach(btn => {
    btn.addEventListener("click", buttonClick);
});




