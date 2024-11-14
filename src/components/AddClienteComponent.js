import React, { useState, useEffect } from 'react';
import ClienteService from '../services/ClienteService';
import { useNavigate, useParams } from 'react-router';
import { Link } from 'react-router-dom';

export const AddClienteComponent = () => {

    const [nombre, setNombre] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const { id } = useParams();

    const saveOrUpdateCliente = (e) =>{
        e.preventDefault();
        const cliente ={nombre,apellidos,email};

        if(id){
            ClienteService.updateCliente(id,cliente).then((response)=>{
                console.log(cliente);
                navigate('/clientes');
            }).catch(error=>{
                console.log(error)
            })
        }
        else{
            ClienteService.createCliente(cliente).then((response)=>{
                console.log(cliente);
                navigate('/clientes');
            }).catch(error=>{
                console.log(error)
            })
        }
    }

    useEffect(()=>{
        ClienteService.getClienteById(id).then(response =>{
            setNombre(response.data.nombre);
            setApellidos(response.data.apellidos);
            setEmail(response.data.email);
        }).catch(error =>{
            console.log(error);
        })
    },[])

    const titulo =()=>{
        if(id){
            return <h2 className="text-center">Actualizar Cliente</h2>
        }
        else{
            return <h2 className="text-center">Registrar Cliente</h2>
        }
    }

    return (
        <div>
            <div className="container" style={{ marginTop: "80px" }}>
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h2> {titulo()}</h2>
                        <div className="card-body">
                            <form>
                                <div className="form-group mb-2">
                                    <label className="form-label">Nombre:</label>
                                    <input
                                        type="text"
                                        placeholder="Escriba su nombre"
                                        name="txtNombre"
                                        className="form-control"
                                        value={nombre}
                                        onChange={(e) => setNombre(e.target.value)}
                                    />
                                </div>
                                <div className="form-group mb-2">
                                    <label className="form-label">Apellidos:</label>
                                    <input
                                        type="text"
                                        placeholder="Escriba sus apellidos"
                                        name="txtApellidos"
                                        className="form-control"
                                        value={apellidos}
                                        onChange={(e) => setApellidos(e.target.value)}
                                    />
                                </div>
                                <div className="form-group mb-2">
                                    <label className="form-label">Email:</label>
                                    <input
                                        type="email"
                                        placeholder="Escriba su email"
                                        name="txtEmail"
                                        className="form-control"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <button className="btn btn-success" onClick={(e) => saveOrUpdateCliente(e)}>Guardar</button>
                                <Link to="/clientes" className="btn btn-danger" style={{ marginLeft: "10px" }}>Cancelar</Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddClienteComponent;
