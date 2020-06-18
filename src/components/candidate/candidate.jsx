import React, {useState,useEffect} from 'react'
import {NativeSelect,FormControl} from '@material-ui/core'
import styles from './candidate.module.css';
import {fetchWeeklyData} from "../../api";
const Candidate =({handleWeekChange})=>{
    const [weeklyData,setWeeklyData]=useState([]);

     useEffect(()=>{
         const fetchAPI=async()=>{
             setWeeklyData(await fetchWeeklyData());
         };
         fetchAPI();

     },[setWeeklyData]);



     if(weeklyData.data ===undefined){
     return <div>Loading...</div>};

    return(
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(event)=>handleWeekChange(event.target.value)} >

                <option value="week">Week</option>
                {weeklyData.data.map((week,i)=><option key={i} value="week">{week.weekno}</option>)}

            </NativeSelect>

        </FormControl>
    );
};

export default Candidate;