import React, { useEffect, useState, useRef } from 'react';
import { crud } from '../services/crud';
import { Link } from 'react-router-dom';

const Tache = () => {

    const blockEffect = useRef(false)
    const [tasks, setTask] = useState([])

    useEffect(() => {
        if (blockEffect.current === false) {
            crud.index()
                .then(res => {
                    setTask(res.data.tasks)
                    console.log(res.data.tasks)
                })
                .catch(err => console.log(err))
        }
        return () => blockEffect.current = true
    }, [])
    // const destroy = (id) => {
    //     cocktailService.destroy(id)
    //         .then(
    //             setPosts((current) => current.filter(task => task.id !== id))
    //         )
    //         .catch(err => console.log(err))
    // }


    return (
        <div className='Cocktail'>
            Taches index
            <table>
                <thead>
                    <tr>
                        <th>Numero</th>
                        <th>Libelle</th>
                        &nbsp;
                        <th>Contenu</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tasks.map(task => (

                            <tr key={task.id}>
                                <td> {task.id}</td>
                                <td>{task.title}</td>
                                &nbsp;
                                <td>{task.content}</td>
                                &nbsp;
                                <td>{task.endDate}</td>

                                <td>

                                    <span type='submit' className='buttone'>Update</span>
                                    <span type='submit' className='button'>Delete</span>

                                </td>
                            </tr>

                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Tache;