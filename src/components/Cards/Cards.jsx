import React from 'react'
import {Card, CardContent, Typography, Grid} from "@material-ui/core"
import styles from "./Cards.module.css"

const Cards = ({data:{confirmed, recovered, deaths, lastUpdate}}) => {
    if(!confirmed){
        return "Loading.."
    }
    return (
        <div className={styles.containter}>
            <Grid container spacing ={3} justify ="center">
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant="h5">{confirmed.value}</Typography>
                        <Typography color="textSecondary">Date</Typography>
                        <Typography color="variant">Number of Active cases of COVID-19</Typography>  
                    </CardContent>
                 </Grid>
                 <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant="h5">Data</Typography>
                        <Typography color="textSecondary">Date</Typography>
                        <Typography color="variant">Number of Recoveries of COVID-19</Typography>  
                    </CardContent>
                 </Grid>
                 <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant="h5">Data</Typography>
                        <Typography color="textSecondary">Date</Typography>
                        <Typography color="variant">Number of Deaths caused by COVID-19</Typography>  
                    </CardContent>
                 </Grid>
            </Grid>
        </div>
        )
}

export default Cards
