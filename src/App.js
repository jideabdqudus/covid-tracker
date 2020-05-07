import React, { Component } from "react";
import styles from "./App.module.css";
import { Cards, Chart, CountryPicker } from "./components";
import {fetchData} from "./api"
import Viruins from "./components/Viruins/Viruins"

class App extends Component {

  state={
    data:{},
    country: ''
  }

 async  componentDidMount(){
    const fetchedData = await fetchData()

    this.setState ({data: fetchedData})
  }

  handleCountryChange =async (country)=>{
    const fetchedData = await fetchData(country)

    this.setState({data: fetchedData, country: country})

    console.log(fetchedData)
  }
  render() {
    const {data, country} = this.state
    return (
      <div>
      <Viruins/>
      <div className={styles.container}>
        <Cards data={data}/>
        <CountryPicker handleCountryChange={this.handleCountryChange}/>
        <Chart data={data} country={country}/>
    </div>
      </div>
    );
  }
}

export default App;
