import React from 'react'
import Card from '../Components/Card'
import EventData from '../Components/EventData'

function Events() {
    return (
    <div id="header" className="my-3" id="EventContainer">
    <h1 className="text-center" >Our Events</h1>
    <div className="container-fluid mb-5 mt-6 head1">
        <div className="row">
            <div className="col-10 mx-auto">
                <div className="row gy-5">
                    {
                        EventData.map((val,index)=>{
                            return <Card key={index}
                             imgsrc={val.imgsrc}
                             title={val.title}
                             poptitle={val.poptitle}
                             poptext={val.poptext}
                             text={val.text}
                             link={val.link}
                             />
                        })
                    }
                </div>
        </div>
        </div>
        </div>
        </div>
    )
}

export default Events
