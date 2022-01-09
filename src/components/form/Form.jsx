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
        <form onSubmit={onSubmitt} >
            <div class="mb-3">
                <label for="fullname" class="form-label">Fullname</label>
                <input type="text" name='fullName' value={form.fullName} onChange={onChangeInput} className="form-control" id="fullname" aria-describedby="emailHelp"/>
                <div className="form-text">İster Büyük,İster Küçük harfle kaydedin</div>
            </div>
            <div class="mb-3">
                <label for="number" class="form-label">Phone Number</label>
                <input name='phoneNumber' value={form.phoneNumber} onChange={onChangeInput} class="form-control" id="number"/>
            </div>
            <button className="btn btn-primary">Add</button>
        </form>
    )
}

export default Form
