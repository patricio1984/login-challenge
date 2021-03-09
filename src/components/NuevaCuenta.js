import React, { useState, useContext } from 'react';
import { Link } from "react-router-dom";
import AlertaContext from "../context/alertas/alertaContext";

const NuevaCuenta = () => {

    //extraer los valores del context
    const alertaContext = useContext(AlertaContext);
    const { alerta, mostrarAlerta } = alertaContext;


    //State para iniciar sesión
    const [ usuario, guardarUsuario ] = useState({
        nombre: "",
        apellido: "",
        email: "",
        genero: "",
        password: "",
        confirmar: ""
    });

    // extraer de usuario 
    const { nombre, apellido, email, genero, password, confirmar } = usuario; 

    const onChange = e => {
        guardarUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })
    };

    //Cuando el usuario quiere iniciar sesión
    const onSubmit = e => {
        e.preventDefault();

        //Validar que no haya campos vacios
        if(nombre.trim() === "" || apellido.trim() === "" || email.trim() === "" || genero.trim() === "" || password.trim() === "" || confirmar.trim() === "") {
            mostrarAlerta("Todos los campos son obligatorios", "alerta-error");
            return;
        } 

        // Password minimo de 6 caracteres
        if(password.length < 6) {
            mostrarAlerta("El password debe ser de al menos 6 caracteres", "alerta-error");
            return;
        }
        // Los dos passwords son iguales
        if(password !== confirmar) {
            mostrarAlerta("Los passwords no son iguales", "alerta-error");
            return;
        }

        if(usuario) {
            mostrarAlerta("Usuario creado", "alerta-ok");
            return;
        }
        
        //Función que registra usuario
        // registrarUsuario({
        //     nombre,
        //     apellido,
        //     email,
        //     password
        // })
};

    return ( 
        <div className="form-usuario">
            { alerta ? (<div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div>) : null }
            <div className="contenedor-form sombra-dark">
                <h1>Obtener una cuenta</h1>

                <form
                    onSubmit={onSubmit}
                >
                    <div className="campo-form">
                        <label htmlFor="nombre">Nombre</label>
                        <input 
                            type="text"
                            id="nombre"
                            name="nombre"
                            placeholder="Tu Nombre"
                            value={nombre}
                            onChange={onChange}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="apellido">Apellido</label>
                        <input 
                            type="text"
                            id="apellido"
                            name="apellido"
                            placeholder="Tu Apellido"
                            value={apellido}
                            onChange={onChange}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Tu Email"
                            value={email}
                            onChange={onChange}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="genero">Género</label>
                        <div className="first-radio-button">
                            <input type="radio" name="genero" value="femenino" checked={genero === "femenino"} onChange={onChange} className="radio-input" />
                            <label htmlFor="femenino">Femenino</label>
                        </div>
                        <div>
                            <input type="radio" name="genero" value="masculino" checked={genero === "masculino"} onChange={onChange} className="radio-input" />
                            <label htmlFor="masculino">Masculino</label>
                        </div>
                    </div>
                    <div className="campo-form">
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            placeholder="Tu Password"
                            onChange={onChange}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="confirmar">Confirmar Password</label>
                        <input 
                            type="password"
                            id="confirmar"
                            name="confirmar"
                            value={confirmar}
                            placeholder="Repite Password"
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <input type="submit" className="btn btn-primario btn-block" value="Registrarme" />
                    </div>
                </form>

                <Link to={"/"} className="enlace-cuenta">
                    Volver a Iniciar Sesión
                </Link>
            </div>
        </div>
     );
}
 
export default NuevaCuenta;