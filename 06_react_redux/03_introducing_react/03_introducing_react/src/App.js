import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import _ from "underscore";


class Tableau extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputProductTable : props.inputProductTable,
      order : "asc"
    }
  }

   sortMachine = filter =>
     this.state.order === "asc"
     ? this.setState({inputProductTable: _.sortBy(this.state.inputProductTable, filter), order : "des"})
     : this.setState({inputProductTable: _.sortBy(this.state.inputProductTable, filter).reverse(), order : "asc"});

  render() {
    return (
      <div>
        <table border="1">
        <tr>
          <th onClick = {() => this.sortMachine("decathlon_id")}>Decathlon ID</th>
          <th onClick = {() => this.sortMachine("title")}>Title</th>
          <th onClick = {() => this.sortMachine("price")}>Price</th>
        </tr>
          {this.state.inputProductTable.map(props => <Row props={props} />)}
        </table>
      </div>
    );
  }
}

  function Row (props) {
      return (
        <tr>
          <td>{this.props.decathlon_id}</td>
          <td>{this.props.title}</td>
          <td>{this.props.price}</td>
        </tr>
      )
    }

export default Tableau;
