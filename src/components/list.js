import React, { Component } from 'react';
import axios from 'axios'
// hard data back up
// import shops from '../data/shops.json'


export class List extends Component {
  constructor() {
    super();
      this.state = {
        dealers: [],
      }
  this.getDealers = this.getDealers.bind(this)
  }

  componentDidMount(){
    this.getDealers()
  }
  getDealers(){
    axios.get('http://localhost:8000/shops')
    .then((response) => {
      console.log(response.data);
      this.setState({
        dealers: response.data
      })
    })
    .catch((error) => {
      console.log(error)
    }) 
  }
	render() {
		let shopList = this.state.dealers.map((shop, idx)=>{
			return(
					<div key={shop.companyID}>
						<h4>{shop.name}</h4>
						<h4>{shop.phone1}</h4>
					</div>
				)
		})
		return (
			<div>
				{shopList}
			</div>
		);
	}
}

export default List