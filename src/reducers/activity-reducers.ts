import type { Activity } from "../types"

export type ActivityActions ={
    type:'save-activity', payload:{ newActivity:Activity }
}

type ActivityState={
    activities:Activity[]
}

export const initialState : ActivityState ={
    activities:[],
}

export const activityReducer = (
        state:ActivityState = initialState,
        action:ActivityActions
    )=>{
        if(action.type === 'save-activity'){

            //Este código maneja la lógica
            //de guardar una nueva actividad en el estado.
            //Primero crea una copia del arreglo de actividades existentes utilizando spread operator.
            //Luego agrega la nueva actividad al final del nuevo arreglo y devuelve un objeto con las propiedades actualizadas.
            return{
                ...state,
                activities:[...state.activities,action.payload.newActivity]
            }
        }
}