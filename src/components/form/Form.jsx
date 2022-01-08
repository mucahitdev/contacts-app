import { useState } from "react";


function Form({addContact,contacts}) {
    const [form, setForm] = useState({fullName:'',phoneNumber:''});

    const onChangeInput = (e)=>{
        setForm({...form,[e.target.name]: e.target.value});
    };

    const onSubmitt = (e)=> {
        e.preventDefault();
        if(form.fullName===''|| form.phoneNumber===''){
            return false
        }
        
        addContact([...contacts ,form])
        console.log(form)
        setForm({fullName:'',phoneNumber:''})
    }
    return (
        <form onSubmit={onSubmitt}>
            <input name='fullName' placeholder='Name?' value={form.fullName} onChange={onChangeInput} /><br/>
            <input name='phoneNumber' placeholder='Number?' value={form.phoneNumber} onChange={onChangeInput} /><br/>
            <button className="btn btn-primary" >Add</button>
        </form>
    )
}

export default Form
