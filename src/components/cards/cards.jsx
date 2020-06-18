import React from 'react'
import {Card, CardContent, Typography, Grid } from '@material-ui/core';
import styles from './cards.module.css';
import CountUp from 'react-countup';
import cx from 'classnames';

const Cards = (props)=>{
    console.log(props.data)

    // if(props.data.record===undefined){}
    // props.data.record.map((rec)=>{
    //     console.log(rec)
    // });
    if(props.data === undefined){
        return <div>'Loading...'</div>
    }
    return(
        <div className={styles.container}>
            <Grid container spacing={20} justify="center">
                <Grid item component={Card} xs={13} md={3} className={cx(styles.card,styles.interview)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Number of Interview:</Typography>
                        <Typography color="textSecondary" >
                            <CountUp
                                start={0}
                                end={5}
                                duration={0.1}
                                separator=","

                            />
                        </Typography>
                        <Typography color="textSecondary">Rejected:</Typography>
                        <Typography color="textSecondary">success:</Typography>
                    </CardContent>
                </Grid>
                 <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.week)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom> Week number </Typography>
                        <Typography color="textSecondary">hours spent:</Typography>
                        <Typography color="textSecondary">Networking:</Typography>
                        <Typography color="textSecondary">Preparation:</Typography>
                    </CardContent>
                </Grid>
                 <Grid item component={Card } xs={12} md={3} className={cx(styles.card,styles.company)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom> Company Applied</Typography>
                        <Typography color="textSecondary" >Name:</Typography>
                        <Typography color="textSecondary">Location:</Typography>
                        <Typography color="textSecondary">Contact: </Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    );
};

export default Cards;