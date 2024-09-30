// import React from 'react'

// function APIcall() {
//   return (
//  fetch("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m")
//  .then(resposne=>{
//     if(resposne.ok==200){
//         console.log(resposne.json());
//     }
//     else{
//         throw new Error ("Api cannot be fetched")
//     }
//  })
//  .then(data=>{
//     console.log(data);
//  })
//   )
// }

// export default APIcall
import React, { useEffect, useState } from 'react';

const APIcall = () => {

const [weather,setWeather]=useState(null);

const fetchWeather = ()=>{
 fetch("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m")
 .then((response=>{
   if(!response.ok){
      throw new Error('Cannot fetch')
   }
   return response.data
 }
 )).then(data=>
   setWeather(data)
 )
}

useEffect(()=>{
   fetchWeather()
},[])
   return(
      <>
         <p>this is the api page</p>
      </>
   )
};

export default APIcall;
