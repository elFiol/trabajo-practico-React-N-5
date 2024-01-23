import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import ListaTareas from './ListaTareas';

const FormularioTarea = () => {
    const [tarea, setTarea] = useState('');
    const [tareas, setTareas] = useState([]);

    const handlerSubmit = (e) => {
        e.preventDefault()
        setTareas([...tareas, { id: tareas.length, nombre: tarea }])
        setTarea("")
    }
    const borrarTarea = (id) => {
        const tareasFiltradas = tareas.filter((tarea) => tarea.id !== id)
        setTareas(tareasFiltradas);
    }
    return (
        <section>
            <Form onSubmit={handlerSubmit}>
                <Form.Group className="mb-3 d-flex" controlId="exampleForm.ControlInput1">
                    <Form.Control type="text" placeholder="Ej: Tarea 1" minLength={3} maxLength={50} onChange={(e) => setTarea(e.target.value)} value={tarea} required />
                    <Button variant='dark' className='ms-2' type='submit'>Agregar</Button>
                </Form.Group>
            </Form>
            <ListaTareas tareas={tareas} borrarTarea={borrarTarea}></ListaTareas>
        </section>
    );
};

export default FormularioTarea;
