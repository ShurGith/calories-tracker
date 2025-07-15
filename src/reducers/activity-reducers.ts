import type { Activity } from "../types"

export type ActivityActions =
{ type:'save-activity', payload:{ newActivity:Activity }} |
{ type:'set-activeId', payload:{ id:Activity['id'] }}

export type ActivityState={
    activities:Activity[], 
    activeId: Activity['id'],
}

export const initialState : ActivityState ={
    activities:[],
    activeId: "",
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

           //console.log(action.payload.newActivity);

           return{
                ...state,
                activities:[...state.activities,action.payload.newActivity]
            };
        }
        if(action.type==='set-activeId'){
            return{
                ...state,
                activeId:action.payload.id
            };
        }
        return state;
}