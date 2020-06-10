import React, { Component } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine-dark.css";
 
class Ranking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columnDefs: ([
        { headerName: "Top", field: "top", sortable: true, filter: "agNumberColumnFilter", maxWidth: 100 },
        { headerName: "ID", field: "name", sortable: true, filter: "agTextColumnFilter", maxWidth: 130 },
        { headerName: "イベントpt", field: "eventpt", sortable: true, filter: "agNumberColumnFilter", maxWidth: 130 },
        { headerName: "ボーナス", field: "bonus", sortable: true, filter: "agNumberColumnFilter", maxWidth: 120 },
        { headerName: "1位差", field: "diff_1st", sortable: true, filter: "agNumberColumnFilter", maxWidth: 100 },
        { headerName: "前位差", field: "diff_last", sortable: true, filter: "agNumberColumnFilter", maxWidth: 100 },
        { headerName: "前位回数差", field: "diff_last_round", sortable: true, filter: "agNumberColumnFilter", maxWidth: 150 },
        { headerName: "追撃時間", field: "catch_time", sortable: true, filter: false, maxWidth: 150 },
        { headerName: "pt時速", field: "point_per_hour", sortable: true, filter: "agNumberColumnFilter", maxWidth: 100 },
        { headerName: "平均周回時速", field: "round_per_hour", sortable: true, filter: "agNumberColumnFilter", maxWidth: 150 },
        { headerName: "pt/10分", field: "point_10mins", sortable: true, filter: "agNumberColumnFilter", maxWidth: 100 },
        { headerName: "pt/30分", field: "point_30mins", sortable: true, filter: "agNumberColumnFilter", maxWidth: 100 },
        { headerName: "pt/60分", field: "point_60mins", sortable: true, filter: "agNumberColumnFilter", maxWidth: 100 },
        { headerName: "休憩(min)", field: "rest", sortable: true, filter: "agNumberColumnFilter", maxWidth: 100 },
      ]),
      rowData: ([]),
      gridApi: null

    };
  }

  render() {
    return (
      <div>
        <h2>TOP 10 股票系統</h2>
        
      </div>
    );
  }
}

export default Ranking;