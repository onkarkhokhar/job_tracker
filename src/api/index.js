import axios from 'axios';
const url="/api/jobs/list";
export const fetchData=async()=>{

    try {
         const response= await axios.get(url,{
          headers:{
             userid: '2'
             }
         });
        console.log(response);
         return response
        // return axios.get(url,{
        //     headers: {
        //         userid: '2'
        //     }
        //     }).then(res=>{
        //        console.log(res.data) })

    } catch(error){
     console.log(error)
    }

};

export const fetchWeeklyData=async()=>{
    try {
        const response= await axios.get(url,{
          headers:{
             userid: '2'
             }
         });

         return response
    }catch (error){

    }
};
