import React, { Component } from "react";
// import { AgGridReact } from "ag-grid-react";
// import "ag-grid-community/dist/styles/ag-grid.css";
// import "ag-grid-community/dist/styles/ag-theme-alpine-dark.css";

import RankingTop10 from "./RankingTop10";
import EventDetail from "./EventDetail";
 
class Ranking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventTitle: "RAISE A SUILEN～御簾を上げろ～（前編）",
      eventStartDate: "2020-6-10",
      eventStartTime: "15:00",
      eventDurationHr: 198,
      roundMaxPoint: 22830,
      fastestRoundSec: 125
    };
  }

  //Strings to their exact timestamp in seconds
  dayTimeToTimestamp(date, time) {
    var res = [], res2 = [];
    var year = 0, month = 0, day = 0, hour = 0;
    if(date.includes("-")) {
      res = date.split("-");
      if(res.length === 3) {
        year = parseInt(res[0]);
        month = parseInt(res[1]);
        day = parseInt(res[2]);
      }
    }
    if(time.includes(":")) {
      res2 = time.split(":");
      if(res2.length !== 0) {
        hour = parseInt(res2[0]);
      }
    }
    // Force to JP time
    var datum = new Date(Date.UTC(year,month-1,day,hour-9,0,0));
    return datum.getTime()/1000;
  }

  render() {
    return (
      <div>
        <h2>TOP 10 - <b>{this.state.eventTitle}</b></h2>
        <h4>
          スタート日: <b>{this.state.eventStartDate} </b> | 
          イベント時間: <b>{this.state.eventDurationHr}</b> | 
          周回理論PT: <b>{this.state.roundMaxPoint}</b> |
          周回理論時間: <b>{this.state.fastestRoundSec} 秒</b>
        </h4>
        <br/>
        <RankingTop10 
          eventStartTimestamp={this.dayTimeToTimestamp(this.state.eventStartDate, this.state.eventStartTime)}
          eventDuration={this.state.eventDurationHr}
          roundMaxPt={this.state.roundMaxPoint}
          fastestRound={this.state.fastestRoundSec}
        />
        <div class="editmenu">
          <EventDetail 
            eventTitle={this.state.eventTitle}
            eventStartTimestamp={this.dayTimeToTimestamp(this.state.eventStartDate, this.state.eventStartTime)}
            eventDuration={this.state.eventDurationHr}
            roundMaxPt={this.state.roundMaxPoint}
            fastestRound={this.state.fastestRoundSec}
          />
        </div>
      </div>
    );
  }
}

export default Ranking;