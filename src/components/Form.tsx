import { useState } from "react"
import { categories } from "../data/categories"

function Form() {
    const [activity, setActivity] = useState({
        category: 1,
        name: '',
        calories: 0,
    })
    const handleChange = (e)=>{
        console.log(e.target.id);
        console.log(e.target.value);
    }
    return (
        <form
            className="space-y-5 bg-white shadow p-10 rounded-lg not-visited:"
        >
            <div className="grid grid-cols-1 gap-3">
                <label htmlFor="category" className="font-bold">Categoría:</label>
                <select
                    className="border border-slate-300 p-2 rounded-lg"
                    id="category"
                    value={activity.category}
                    onChange={handleChange}
                    >
                    {categories.map(category => (
                        <option
                            key={category.id}
                            value={category.id}>
                            {category.name}
                        </option>
                    ))}
                </select>
            </div>
            <div className="grid grid-cols-1 gap-3">
                <label htmlFor="name" className="font-bold">Actividad:</label>
                <input
                    type="text"
                    id="name"
                    className="border border-slate-300 p-2 rounded-lg"
                    placeholder="Ej. Comida, Zumo de Naranja, Ensalada, Pesas, Bicicleta..."
                    value={activity.name}
                    onChange={handleChange}
                />
                </div>
            <div className="grid grid-cols-1 gap-3">
                <label htmlFor="activity" className="font-bold">Calorias:</label>
                 <input 
                    type="number"
                    id="calories"
                    className="border border-slate-300 p-2 rounded-lg"
                    placeholder="Calorias, Ej....500, 300"
                    value={activity.calories}
                    onChange={handleChange}
                />
            </div>
            <input type="submit"
            className="bg-gray-600 hover:bg-gray-900 w-full p-2 font-bold uppercase text-white cursor-pointer"
            value="Guardar comida o ejercicio"
           />
            
        </form>
    )
}

export default Form