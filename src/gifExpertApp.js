import { useState } from "react";
import{AddCategory} from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

function GifExpertApp() {
    //const categorias = ['One Punch Man','Samurai X','Dragon Ball']
    const [categorias, setCategorias] = useState(['Dragon Ball']);

    /*const handleAdd =() => {
        setCategorias([...categorias,'HunterXHunter']);
    }*/

  return (
    <div>  
        <h2>GifExpertApp</h2>
        <AddCategory setCategorias={setCategorias}/>
        <hr/>
       {/*<button onClick={handleAdd}>Agregar a la lista</button>*/}

        <ul>
            {
                categorias.map(categoria =>
                    <GifGrid key={categoria} category={categoria}/>
                    //return <li key={categoria}>{categoria}</li>
                )
            }
        </ul>
    </div>
  );
}

export default GifExpertApp;
