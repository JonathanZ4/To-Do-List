import React, { Component } from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      itemList: [],
      listItem: "",
    }
  }
  

  handleDelete=(e)=> {
    let allItems = [...this.state.itemList];

    allItems.splice(e.target.value, 1);
    this.setState({itemList: allItems})
}

handleItemInput = (event) => {
  this.setState({ listItem: event.target.value });
}

  

    handleClick = () => {
      let itemList = { listItem: this.state.listItem };
      this.setState({ itemList: [...this.state.itemList, itemList], listItem: ""});
    }
    render(){
      let itemList = this.state.itemList.map((Todo, index) => {
        return (
          <div key={index}>
            <div>Todo: {Todo.listItem}</div>
          </div>
        )
        return <input key={Todo.id} id={Todo.id} deletehandler={this.deleteList.bind(this)} /> 
       
      })
      return (
        <div>
          <h4>To Do List</h4>
          <p>Wash dishes, Scrub baseboards, Clean cabinets, Review lecture notes, Dinner prep</p>
          
          {itemList}
          <input value={this.state.listItem} onChange={this.handleItemInput} placeholder="List item" />
          <button onClick={this.handleClick}>Add List Item</button>

          <button className="btn btn-danger" onClick={this.handleDelete.bind(this)}>Delete</button>
        </div>
      )
    }
  }
  

export default App;