import React, { Component } from "react";
import styles from "./App.module.css";
import { Cards, Chart, CountryPicker } from "./components";
import {fetchData} from "./api"

class App extends Component {

  state={
    data:{},
  }

 async  componentDidMount(){
    const fetchedData = await fetchData()

    this.setState
  }
  render() {
    return (
      <div className={styles.container}>
        <Cards />
        <CountryPicker />
        <Chart />
      </div>
    );
  }
}

export default App;
