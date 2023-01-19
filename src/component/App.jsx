let exp = require('../assets/data/buttonData.json').buttonData; 
import { useContext , useEffect} from 'react';


import Button from "./button.jsx";

function App() {

  switch (process.env.OS) {
    case "Windows_NT":
        exp[5].special[3].bottom[2].key = "alt";
      break;
    case "MacOs_NT":
        exp[5].special[3].bottom[2].key = "options";
      break;
  }

  return (
    <>
      <div id='KEYBOARD'>
        <div className="upper">
          {
            exp[5].special[0].top.map((value,index)=>{
              return <Button property={value} key={index}></Button>
            })
          }
        </div>
        <div className="main">
          <div className="special_left">
            {
              exp[5].special[1].left.map((value,index)=>{
                return <Button property={value} key={index}></Button>
              })
            }
          </div>
          <div className="wrapper">
            <div className="one">
              {
                exp[0].one.map((value,index)=>{
                  return <Button property={value} key={index}></Button>
                })
              }
            </div>
            <div className="two">
              {
                exp[1].two.map((value,index)=>{
                  return <Button property={value} key={index}></Button>
                })
              }
            </div>
            <div className="tree">
              {
                exp[2].tree.map((value,index)=>{
                  return <Button property={value} key={index}></Button>
                })
              }
            </div>
            <div className="four">
              {
                exp[3].four.map((value,index)=>{
                  return <Button property={value} key={index}></Button>
                })
              }
            </div>
            <div className="five">
              {
                exp[4].five.map((value,index)=>{
                  return <Button property={value} key={index}></Button>
                })
              }
            </div>

          </div>
          <div className="special_right">
            {
              exp[5].special[2].right.map((value,index)=>{
                return <Button property={value} key={index}></Button>
              })
            }
          </div>
        </div>
        <div className="down">
            {
              exp[5].special[3].bottom.map((value,index)=>{
                return <Button property={value} key={index}></Button>
              })
            }
        </div>
      </div>
    </>
  )
  
}

export default App;