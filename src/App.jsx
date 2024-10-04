import React from "react";
import { Component } from "react";

class Tablefetch extends Component {
  constructor() {
    super();
    this.state = {
      thead: [],
      tbody: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((x) => x.json())
      .then((x) => {
        this.setState({ thead: Object.keys(x[0]).slice(0, 4) });
        this.setState({ tbody: x });
      });
  }

  render() {
    return (
      <>
        <table id="t1" border={2}>
          <thead id="t2">
            <tr>
              {this.state.thead.map((x, index) => (
                <th key={index}>{x}</th>
              ))}
            </tr>
          </thead>
          <tbody id="t11"> 
            {this.state.tbody.map((x) => {
              return (
                <tr key={x.id}>
                  <td>{x.id}</td>
                  <td>{x.name}</td>
                  <td>{x.username}</td>
                  <td>{x.email}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    );
  }
}

export default Tablefetch;
