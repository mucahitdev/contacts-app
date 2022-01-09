import { useState,useEffect } from "react"

import Form from "./form/Form"
import List from "./list/List"

function Contacts() {
    const [contacts, setContacts] = useState([
        {
            fullName:'Mücahit Kökdemir',
            phoneNumber:'5558932329'
        },
        {
            fullName:'Emin Salmağcı',
            phoneNumber:'23423252525'
        },{
            fullName:'Tayfun Salağcı',
            phoneNumber:'34635745746'
        },
    ])
    useEffect(() => {
        console.log(contacts)
    }, [contacts])
    return (
        <div className="container overflow-hidden">
            <div className="row">
                <div className="col-4">
                    <Form addContact={setContacts} contacts={contacts}/>
                </div>
                <div className="col-8">
                    <List contacts={contacts} />
                </div>
            </div>
        </div>
    )
}

export default Contacts
