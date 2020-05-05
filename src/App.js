import React, { Component } from "react";
import styles from "./App.module.css";
import { Cards, Chart, CountryPicker } from "./components";
import {fetchData} from "./api"
import Viruins from "./components/Viruins/Viruins";

class App extends Component {

  state={
    data:{},
  }

 async  componentDidMount(){
    const fetchedData = await fetchData()

    this.setState ({data: fetchedData})
  }
  render() {
    const {data} = this.state
    return (
      <div>
      <Viruins/>
      <div className={styles.container}>
        <Cards data={data}/>
        <CountryPicker />
        <Chart />
      </div>
      </div>
    );
  }
}

export default App;
