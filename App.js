import React from "react"
import Navbar from "./components/Navbar"
import Destination from "./components/Destination"
import data from "./data.js"


function App(){
    const travelPoint = data.map(item => {
        
        return (
            <Destination 
            key={item.id}
                {...item}/>
         )
        
    })
    
     return (
        <div className="container">
            <Navbar/>
            {travelPoint}
            
        </div>
    )
    
}

export default App