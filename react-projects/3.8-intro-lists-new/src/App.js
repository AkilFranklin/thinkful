import "./App.css";
import React from "react";

const listOfTodos = [
  "Thing 1efwe",
  "Thingwef 2",
  "Thing 3",
];

function Todolist({todoList}) {
  const listItems = todoList.map((todo, index) => <li key={index}>{todo}</li>);
  // const listItems = todoList.map((todo, index) => <li>{todo}</li>);
  return <ul>{listItems}</ul>;
}

const groceryList = [
  {quantity: 1, item: "brisket"},
  {quantity: 2, item: "salsa"},
  {quantity: 3, item: "chips"}
]

function GroceryList({ items }) {
  const rows = items.map(({quantity, item}, index) => 
    <tr>
      <td>{quantity}</td>
      <td>{item}</td>
    </tr>
  )

  return (
    <div>
      <h1>Grocery List</h1>
      <table>
        <thead>
          <tr>
            <th>Quantity</th>
            <th>Item</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
}

function App() {
  const listofItems = listOfTodos.map((todo, index) => <li key={index}>{todo}</li>);
  
  return (
    <main>
    <Todolist todoList={listOfTodos}/>
    <GroceryList items={groceryList}/>
  </main>
  )

}

export default App;