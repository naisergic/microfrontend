import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import InjectScript from './InjectScript';

const App = () => {
  
  //on componentDid mount we will inject our bundle into the main APP
  useEffect(()=>{
    //if you put a break point here then you will see that 
    // only Product App is rendered at this point neither Product Display not Product Price
    InjectScript("productDisplayBundleScript", "http://localhost:8081/index.bundle.js",true)
    InjectScript("productPriceScript", "http://localhost:8082/index.bundle.js",true)
    // after injecting the above script other two App will be rendered

  },[])
  return (
    <div>
      <h1>React With MicroFront End</h1>
      <h2>Integrating 2 different apps</h2>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
