import React, { useEffect, useState } from "react";

function useBeerInfo(){
    const [data, setData] = useState([])
    useEffect(()=>{
        fetch(`https://api.sampleapis.com/beers/ale`)
        .then(res=>res.json())
        .then(data=>{
            const newData = data.map(item=>{
                const updatedItem = {...item, isHidden:false}
                return updatedItem
            })
            setData(newData)
        })
    },[])
    return data
}


export default useBeerInfo;