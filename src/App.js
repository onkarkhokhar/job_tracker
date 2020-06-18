import React from 'react';
import Cards from './components/cards/cards';
import Chart from './components/chart/chart';
import Candidate from './components/candidate/candidate';
import DataForm from './components/forms/dataform';
import styles from './App.module.css';
import {fetchData} from './api';

class App extends React.Component{
    state={
        data:{},
        week:'',
    };


    async componentDidMount(){

        const fetchedData= await fetchData();


        this.setState({data:fetchedData});

    }

    handleWeekChange=async (week)=>{
         console.log(week)

     };



  render(){


    return (

        <div className={styles.container}>

          <Cards data={this.state.data}/>
          <Chart />
          <Candidate handleWeekChange={this.handleWeekChange}/>
          <DataForm/>
        </div>

    );
  }
}

export default App;
