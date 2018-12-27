import React, { Component } from "react";
import echarts from "echarts/lib/echarts";
import "echarts/lib/chart/bar";

import "echarts/lib/component/title";
import config from "./echarts/index";
import axios from "axios";
import { Http } from "../config";
import { unwatchFile } from "fs";
import Cookies from "js-cookie";
export default class extends Component {
  constructor(props) {
    super(props);
    let id = ("_" + Math.random()).replace(".", "_");
    this.state = {
      pieId: "pie" + id,
      uid: Cookies.get("userid")
    };
  }
  initPie(id) {
    let myChart = echarts.getInstanceByDom(document.getElementById(id));
    if (myChart === undefined) {
      myChart = echarts.init(document.getElementById(id));
    }
    myChart.setOption(config);
  }
  componentDidMount() {
 
    Http.post(`/countnote`, {
      userid: this.state.uid
    }).then(rec => {
      console.log(rec.data);
      let count = rec.data.data.map(x => {
        return x.count;
      });
      let xtime = rec.data.data.map(x => {
        return x.addtime;
      });

      config.series[0].data = count;
      config.xAxis.data = xtime;
      this.initPie(this.state.pieId);
    });
  }
  componentDidUpdate() {
    console.log("componentDidUpdate!");
    this.initPie();
  }
  render() {
    return (
      <div>
        <div id={this.state.pieId} style={{ width: "100%", height: "500px" }} />
      </div>
    );
  }
}
