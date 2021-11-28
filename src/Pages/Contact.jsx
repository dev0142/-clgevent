import React from 'react'
import ContactData from '../Components/ContactData'
import ContactCard from '../Components/ContactCard'

function Contact() {
    return (
        <div className="my-4" id="ContactContainer">
    <h1 className="text-center head">Event Coordinators</h1>
    <div className="container-fluid mb-5 text-center">
        <div className="row">
            <div className="col-10 mx-auto">
                <div className="row gy-5">
                    {
                        ContactData.map((val,index)=>{
                            return <ContactCard key={index}
                             imgsrc={val.imgsrc}
                             title={val.title}
                             number={val.number}
                             linkenIn={val.linkenIn}
                             name={val.name}
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

export default Contact
