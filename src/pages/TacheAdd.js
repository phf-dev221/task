import React, { useState } from 'react';
import { useNavigate} from 'react-router-dom';
import { crud } from '../services/crud';

const TacheAdd = () => {

    const [inputs, setinputs] = useState([])
    const navigate = useNavigate()
    let id =1

    const change = (e)=> {
        setinputs({
            ...inputs,[e.target.name]:e.target.value
        })
    }

    const submit = (e)=> {
        console.log(inputs)
        e.preventDefault()
        crud.store(inputs)
        .then(res=>{
            console.log(inputs)
            navigate('/')
        })
        .catch(err=>console.log(err))
    }

    return (
        <div className='tacheAdd'>
            ajout de taches
            <div style={{ width: '350px', height: '300px', margin: 'auto ' }}>
                
                <form style={{ display: 'flex', flexDirection: 'column', maxWidth: '300px', margin: '0 auto' }} onSubmit={submit}>
                    <input style={{ marginBottom: '10px', padding: '8px', fontSize: '16px' }} type="text" name='title' placeholder='Nom de la tâche' value={inputs.title} onChange={change} />
                    <input style={{ marginBottom: '10px', padding: '8px', fontSize: '16px' }} type="text" name='content' placeholder='Description de la tâche' value={inputs.content} onChange={change}  />
                    <input style={{ marginBottom: '10px', padding: '8px', fontSize: '16px' }} type="date" name='endDate' value={inputs.endDate} onChange={change}  />
                    <input  type="number" name='user_id' value={inputs.user_id} onChange={change}  />
                    <select style={{ marginBottom: '10px', padding: '8px', fontSize: '16px' }} name='status' value={inputs.status} onChange={change}  >
                        <option value='done'>Done</option>
                        <option value='doing'>Doing</option>
                        <option value='to_do'>To Do</option>
                    </select>
                    <button style={{ padding: '8px 16px', fontSize: '16px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Ajouter</button>
                </form>


            </div>
        </div>
    );
};

export default TacheAdd;