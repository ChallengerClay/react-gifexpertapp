import React, {useState, useEffect} from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
//import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

   //const [count, setCount] = useState(0);
   const {data:images , loading} = useFetchGifs(category);
   /* const [images, setImages] = useState([]);
    useEffect(() =>{
        getGifs(category).
        then(setImages);
    },[category])*/



  return <>
            <h3>{ category}</h3>
            {loading && <p>Loading...</p>}
            <div className="card-grid">
                
                {
                    images.map( img => (
                        <GifGridItem 
                            key={ img.id }
                            { ...img }
                        />
                    ))
                }
            
            </div>
            {/*<h3>{count}</h3>  
            <button onClick={() => setCount(count + 1)}></button>*/}
        </>;
};
