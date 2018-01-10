import React, { Component } from "react";

class TodoItems extends Component {
  constructor(props, context) {
    super(props, context);

    this.createTasks = this.createTasks.bind(this);
  }
  delete(key) {
    this.props.delete(key);
  }
  
  createTasks(item) {
    const value = item.type === 'checkbox' ? item.checked : item.value;
    return <li onClick={() => this.delete(item.key)}
    key={item.key}>{item.text}<input type="checkbox"></input></li>
  }


  render() {
    var todoEntries = this.props.entries;
    var listItems = todoEntries.map(this.createTasks);

    return (
      <ul className="theList">
          {listItems}
      </ul>
    );
  }
};

export default TodoItems;
