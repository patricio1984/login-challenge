import React, { useReducer } from 'react';
import alertaReducer from "./alertaReducer";
import alertaContext from "./alertaContext";


const AlertaState = props => {
    
    const initialState = {
        alerta: null
    }

    const [ state, dispatch ] = useReducer(alertaReducer, initialState);

    //Funciones
    const mostrarAlerta = (msg, categoria) => {
        dispatch({
            type: "MOSTRAR_ALERTA",
            payload: {
                msg,
                categoria
            }
        });
        
        //Después de 5 segundos limpiar el alerta
        setTimeout(() => {
            dispatch({
                type: "OCULTAR_ALERTA"
            })
        }, 5000);
    }

    return ( 
        <alertaContext.Provider
            value={{
                alerta: state.alerta,
                mostrarAlerta
            }}
        >
            {props.children}
        </alertaContext.Provider>
     );
}
 
export default AlertaState;