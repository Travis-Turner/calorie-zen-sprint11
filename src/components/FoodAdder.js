import React from 'react';
import './FoodAdder.css';

class FoodAdder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      foodList: []
    };
  }

  handleSubmit = () => {

  }

  render() {
    return (
      <form className="food-adder">
        <input type="text" placeholder="Add food" />
        <button className="food-adder__submit"></button>
      </form>
    );
  }
}

export default FoodAdder;
