import type { Activity } from "../types"
import { categories } from "../data/categories"
import { useMemo, type Dispatch } from "react"
import { Icon } from '@iconify-icon/react';
import type { ActivityActions } from "../reducers/activity-reducers"


type ActiviListProps = {
    activities: Activity[]
    dispatch: Dispatch<ActivityActions>
}
export default function ActivityList({ activities, dispatch }: ActiviListProps) {
    const categoryName = useMemo(() => 
        (category: Activity['category']) => categories.map(cat => cat.id === category ? cat.name : ""), [activities])  

    return (
        <>
            <h2 className="text-4xl font-bold text-slate-600 text-center"> Comida y Actividades</h2>
            {
                activities.map(activity => (
                    <div key={activity.id}
                        className="flex justify-between items-center py-10 px-5 mt-5 border-b border-gray-300">
                        <div className="space-y-2 relative">
                            <p className={`absolute -top-8 -left-8 px-10 py-2 text-white uppercas font-bold ${activity.category===1? 'bg-lime-500' :'bg-orange-500'} `}>{categoryName(+activity.category)}</p>
                            <p className="text-2xl font-bold pt-5">{activity.name}</p>
                            <p className="font-black text-4xl text-lime-500">{activity.calories} {' '}
                                <span className="text-sm font-normal">Calorias</span>
                            </p>
                        </div>
                        <div className="flex gap-5 items-center">
                            <button
                            onClick={() => dispatch({type:"set-activeId", payload:{id:activity.id}})}>
                                <Icon icon="radix-icons:pencil-2" width="32"  height="32" className="cursor-pointer" />
                            </button>
                        </div>
                    </div>
                ))}
        </>
    )
}
