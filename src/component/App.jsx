const exp = require('../assets/data/buttonData.json').buttonData; 
import Button from "./button.jsx";


function App() {

  return (
    <>
      <div id='KEYBOARD'>
        <div className="upper">
          {
            exp[0].one.map((value)=>{
              return <Button>{value.buttonName}</Button>
            })
          }
        </div>
      </div>
    </>
  )
  
}

export default App;