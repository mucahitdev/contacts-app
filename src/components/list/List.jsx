import {useState} from 'react'

function List({contacts}) {
    const [textFilter, setTextFilter] = useState('');
    const filtered = contacts.filter((item)=>{
        return Object.keys(item).some((key)=>
            item[key]
            .toString()
            .toLowerCase()
            .includes(textFilter.toLocaleLowerCase())
        )
    })
    return (
        <div>
            <input className="form-control mt-4" placeholder='Contacts Filter' value={textFilter} onChange={(e)=>setTextFilter(e.target.value)} />
            <span class="badge bg-primary rounded-pill mt-3" >Gösterilen sonuç: {filtered.length}</span>
            <ul class="list-group mt-5" > 
                {filtered.map((contact,i)=>(
                    <li key={i} class="list-group-item d-flex justify-content-between align-items-center" >
                        {contact.fullName}  
                        <span class="badge bg-primary rounded-pill">{contact.phoneNumber}</span>
                    </li>
                    
                ))}
            </ul>
            
        </div>
    )
}

export default List
