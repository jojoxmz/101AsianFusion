// import React, {Component} from "react";
// import API from '../../utils/API';
//
// import "./Menus.css";
//
// export default class Menus extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       menu: []
//     }
//   }
//
//   componentDidMount() {
//     API.getMenu()
//       // .then(res => res.json())
//       .then(menu => this.setState({ menu: menu.data }))
//   }
//
//
//   render() {
//     return (this.state.menu.map(item => (
//       <div className="row">
//       <div className="col-md-6">
//           <div>
//           Name:   {item.name}
//           </div>
//       </div>
//       <div className="col-md-6">
//           <div>
//           Dinner Price:  {item.dinnerPrice}
//           </div>
//       </div>
//     </div>
//     )
//
//     )
// )
// };
// };


import React, {Component} from "react";
import Menupage from "../../components/Menupage";


export default class Menus extends Component {

  render() {
    return (
    <Menupage/>
    );
  }
}
