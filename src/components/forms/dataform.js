import React from 'react';
import styles from './forms.module.css';
import axios from 'axios'


class DataForm extends React.Component {
  state={data:[]};
  handleChange=event=>{

      this.setState({data:[...this.state.data,event.target.value]})
  };


  handleSubmit=(event)=> {
    event.preventDefault();
    const data = this.state;
     console.log(data);

    axios.post('/api/jobs', {
       data,
    }).then(res=>{
        console.log(res)
    })
  }

 render() {
   return (
       <div className={styles.container}>
     <form onSubmit={this.handleSubmit} >
         <div className={styles.container}>
       <label className="username">number of Hours spent on networking</label>
       <input
         type="text"
         name="networking"
         id="networking"

         onChange={this.handleChange}




       />
         </div>
         <div className={styles.container}>
       <label className="username">number of Hours spent on job application</label>
       <input
         type="text"
         name="jobapp"
         id="jobapp"

         onChange={this.handleChange}






       />
         </div>
         <div className={styles.container}>
       <label className="username">Enter User ID</label>
       <input
         type="text"
         name="userid"
         id="userid"

         onChange={this.handleChange}





       />
         </div>
         <div className={styles.container}>
       <label className="username">number of Hours spent on preparation</label>
       <input
         type="text"
         name="prep"
         id="prep"

         onChange={this.handleChange}





       />
         </div>
         <div>
       <label className="username">Enter Week No</label>
       <input
         type="text"
         name="weekno"
         id="weekno"

         onChange={this.handleChange}



       />
     </div>
         <div className={styles.container}>
       <label className="username">Number of interview</label>
       <input
         type="text"
         name="noint"
         id="noint"

         onChange={this.handleChange}






       />
         </div>

         <button >Send data!</button>


     </form>
       </div>
   );
 }
}
export default DataForm