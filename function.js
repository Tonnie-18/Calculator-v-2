let display = document.getElementById('display');
display.innerText = display;
display.style.fontSize="200%";
display.style.color = 'black';
display.style.display="flex";
display.style.alignItems="center";
display.style.justifyContent="end";

let buttons = Array.from(document.getElementsByClassName('btn'));
console.log (buttons);

buttons.map (btn =>{
    btn.addEventListener('click', (e)=>{
     switch(e.target.innerText){
        case 'C':
            display.innerText='';
            break;
        case 'DEL':
            if ( display.innerText){
                display.innerText=display.innerText.slice(0,-1);
            }
            break;
            case '=':
                try{
                    display.innerText=eval(display.innerText);
                }catch{
                    display.innerText="Error";
                };
                
                break;
        default:
            display.innerText+=e.target.innerText;
     }
    });
});

