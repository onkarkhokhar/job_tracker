import React, {useState,useEffect} from 'react';
import {Line} from 'react-chartjs-2';
import {fetchWeeklyData} from "../../api";
import styles from './charts.module.css';



 const Chart =()=>{
     const [weeklyData,setWeeklyData]=useState([]);

     useEffect(()=>{
         const fetchAPI=async()=>{
             setWeeklyData(await fetchWeeklyData());
         };
         fetchAPI();

     });

if(weeklyData.data ===undefined){
     return <div>Loading...</div>
 }




    return (


      <div className={styles.container}>
        <Line
          data={{
              labels: weeklyData.data.map(week=>{return week.weekno}),
              datasets: [
                  {
                      label: 'Interviews',
                      fill: false,
                      lineTension: 0.5,
                      backgroundColor: 'rgba(75,192,192,1)',
                      borderColor: 'rgba(0,0,0,1)',
                      borderWidth: 2,
                      data: weeklyData.data.map(inter=>{return inter.noint})
                  }
          ]
          }}
          options={{
            title:{
              display:true,
              text:'Interview Success',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
        </div>
    );
  };

 export default Chart
