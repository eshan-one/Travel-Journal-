import React from "react"

function Destination(props){
    
    return(
        <main>
            <div className="travel--section">
                <div className="travel--img--container">
                    <img src= {props.imageUrl} className="travel--img"/>
                </div>
                
                
                <div className ="travel--info">
                
                <div className="travel--header">
                    <img src="../assets/map-marker.png" className="map--marker"/>
                    <p className="country">{props.location}</p>
                    <a href={props.googleMapsUrl} target="_blank"  className="navigator">View on Google Maps</a>
                </div>
                    
                    <h1 className="travel--title">{props.title}</h1>
                    <h4 className="travel--duration">{props.startDate} - {props.endDate}</h4>
                    <p className="travel--text">{props.description}</p>
                </div>
            </div>
            <hr/>
        </main>
        
        
    )
}

export default Destination