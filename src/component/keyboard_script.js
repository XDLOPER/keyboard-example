class KEYBOARD{
    constructor(){
        
    }
    keyboardOnClick = () =>{
        document.addEventListener('keydown',(event)=>{
            let lowerKey = event.key.toLowerCase();
            console.log(lowerKey)

            // take key and merge key-id
            const element = document.getElementById(lowerKey)
            element.style.cssText = `background:rgb(110, 110, 110)`;
            

        });
        document.addEventListener('keyup',(event)=>{
            let lowerKey = event.key.toLowerCase();

            // take key and merge key-id
            const element = document.getElementById(lowerKey)
            element.style.cssText = " background:#eee;";
            

        }); 
    }
    buttonOnClick = (e,key)=> {
        console.log(key)
    }
}




export {KEYBOARD};

