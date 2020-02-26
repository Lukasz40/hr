import React, { Component } from "react";
import MaterialTable from "material-table";

const users = [
  { name: "Mehmet", surname: "Baran", email: 1987 },
  { name: "Zerya Betül", surname: "Baran", email: 2017 }
];

export default class Users extends Component {
  render() {
    return <MaterialTable data={users} />;
  }
}
