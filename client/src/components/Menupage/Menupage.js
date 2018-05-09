import API from '../../utils/API';
import './Menupage.css';
import React, {Component} from "react";

class Menupage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menu: []
    }
  }

  // componentDidMount() {
  //   API.getMenu()
  //    .then(res => res.json())
  //     .then(menu => this.setState({menu: menu.data}))
  // }


  updateMenuType(type) {
    API.getType(type).then(res => this.setState({menu: res.data})).catch(err => console.log(err));
  };

  updateMenuCategory(category) {
    API.getCategory(category).then(res => this.setState({menu: res.data})).catch(err => console.log(err));
  };

  render() {
    return (<div>
      <div className="row">
        <div className="col-md-12" id="inside-nav">
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <button id="starts" onClick={()=> this.updateMenuType("Starts")}>Starts</button>
            </li>
            <li className="nav-item">
              <button id="soupsAndSalads" onClick={()=> this.updateMenuCategory("soupsandsalads")}>Salads and Soups</button>
            </li>
            <li className="nav-item">
              <button id="lunch" onClick={()=> this.updateMenuCategory("Main Dishes")}>Lunch</button>
            </li>
            <li className="nav-item">
              <button id="dinner" onClick={()=> this.updateMenuType(this.id)}>Dinner</button>
            </li>
          </ul>
        </div>
      </div>

      {
        this.state.menu.map(item => (<div className="row">
          <div className="col-md-12">
            <h5 className="center">
              {item.name}
            </h5>
            <div className="center">
              {item.ingredients}
            </div>
            <div className="center">
              {item.onePrice ? item.onePrice.toFixed(2) : ""}
            </div>
            <div className="center">
              {item.smallPrice ? "Small: " + item.smallPrice.toFixed(2) : ""}
            </div>
            <div className="center">
              {item.largePrice ? "Large: " + item.largePrice.toFixed(2) : ""}
            </div>
            <div className="center">
              {item.lunchPrice ? item.lunchPrice.toFixed(2) : ""}
            </div>
            <div className="center">
              {item.glutenFree ? "GF": ""}
            </div>
            <div className="center">
              {item.spicy ? "*": ""}
            </div>
          </div>
        </div>))
      }

    </div>);
  };

};

export default Menupage;
