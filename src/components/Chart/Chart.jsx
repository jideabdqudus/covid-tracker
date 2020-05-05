import React, {useState, useEffect} from 'react'
import {fetchDailyData, fetchData} from "../../api/index"

const Chart = () => {
    const [dailyData, setDailyData] = useState({})

    useEffect(()=>{
        const fetchAPI = async ()=>{
            setDailyData(await fetchDailyData())
        }

        fetchAPI()
    })
    
    return (
        <div>
        
        </div>
    )
}

export default Chart
