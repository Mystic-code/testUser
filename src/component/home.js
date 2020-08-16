import React, { useState, useEffect  } from 'react';
import Card from './card'
import userData from '../data'

function Home() {

  // const [hasError, setErrors] = useState(false);
  // const [planets, setPlanets] = useState({});


  //  If i will get a endpoint i'll use this code for fetching data from api.

  // useEffect(() => {
  //   async function fetchData() {
  //     const res = await fetch("https://demptest.com/api/userdata");
  //     res
  //       .json()
  //       .then(res => setPlanets(res))
  //       .catch(err => setErrors(err));
  //   }

  //   fetchData();
  // });
  
   return (
    <div >
        <div style={{ display: "flex", flexDirection:'row', flexWrap:'wrap',  alignItems:'center', padding:'15px'}}>
       {
          userData.members.length > 0 ?
          userData.members.map(sel => {
          return(
            <Card  value ={sel} />
          )
          
          }): 
           <Card />
    
       }
           
          </div>  
      </div>
  );
}

export default Home;
