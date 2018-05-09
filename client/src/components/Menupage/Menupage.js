import API from '../../utils/API';
import './Menupage.css';
import React, {Component} from "react";

class Menupage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menu: [],
      selected: ""
    }
  }

  componentDidMount() {
    this.updateMenuType("Starts");
  };

  updateMenuType(type) {
    API.getType(type).then(res => this.setState({menu: res.data})).catch(err => console.log(err));
  };

  updateMenuCategory(category, selected) {
    this.setState({selected})
    API.getCategory(category).then(res => this.setState({menu: res.data})).catch(err => console.log(err));
  };

  updateMenuSpecific(category, type) {
    API.getCategory(category).then(res =>
    // this.setState({ menu: res.data })
    this.setState({
      menu: res.data.filter(item => {
        return item.type === type
      })
    })).catch(err => console.log(err))
  };

  render() {

    return (<div className={this.state.selected} id="menu-page">
      <div className="row">
        <div className="col-md-12" id="inside-nav">
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <p id="starts" className="category-nav" onClick={() => this.updateMenuType("Starts")}>STARTS</p>
            </li>
            <li className="nav-item">
              <p id="soupsAndSalads" className="category-nav" onClick={() => this.updateMenuCategory("soupsandsalads")}>SALADS & SOUPS</p>
            </li>
            <li className="nav-item">
              <p id="lunch" className="category-nav" onClick={() => this.updateMenuCategory("Main Dishes", "lunch")}>LUNCH</p>
            </li>
            <li className="nav-item">
              <p id="dinner" className="category-nav" onClick={() => this.updateMenuCategory("Main Dishes", "dinner")}>DINNER</p>
            </li>
          </ul>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          <ul className="nav subCategories justify-content-center">
            <li className="nav-item">
              <p id="Chicken" className="sub-nav focus" onClick={() => this.updateMenuSpecific("Main Dishes", "Chicken")}>#chicken</p>
            </li>
            <li className="nav-item">
              <p id="Beef" className="sub-nav focus" onClick={() => this.updateMenuSpecific("Main Dishes", "Beef")}>#beef</p>
            </li>
            <li className="nav-item">
              <p id="Seafood" className="sub-nav focus" onClick={() => this.updateMenuSpecific("Main Dishes", "Seafood")}>#seafood</p>
            </li>
            <li className="nav-item">
              <p id="Vegetables" className="sub-nav focus" onClick={() => this.updateMenuSpecific("Main Dishes", "Vegetables")}>#vegetables</p>
            </li>
          </ul>
        </div>
      </div>

      {
        this.state.menu.map(item => (<div className="row">
          <div className="col-md-12 ">
            <h5 className="center" id="item-name">
              {
                item.name
                  ? "-" + item.name + "-"
                  : ""
              }
            </h5>
            <div className="center" id="gluten-free">
              {
                item.glutenFree
                  ? "*GF"
                  : ""
              }
            </div>
            <div className="center" id="spicy">
              {
                item.spicy
                  ? "*SPICY"
                  : ""
              }
            </div>
            <div className="center">
              {item.ingredients}
            </div>
            <div className="center">
              {
                item.onePrice
                  ? "$" + item.onePrice.toFixed(2)
                  : ""
              }
            </div>
            <div className="center">
              {
                item.smallPrice
                  ? "Small $" + item.smallPrice.toFixed(2)
                  : ""
              }
            </div>
            <div className="center">
              {
                item.largePrice
                  ? "Large $" + item.largePrice.toFixed(2)
                  : ""
              }
            </div>
            <div className="center lunchPrice">
              {
                item.lunchPrice
                  ? "Lunch $" + item.lunchPrice.toFixed(2)
                  : ""
              }
            </div>
            <div className="center dinnerPrice">
              {
                item.dinnerPrice
                  ? "Dinner $" + item.dinnerPrice.toFixed(2)
                  : ""
              }
            </div>
          </div>
        </div>))
      }

    </div>);
  };

};

export default Menupage;
