import React, { Component } from 'react';
const shops = [
       {
                "companyID": 401929,
                "name": "Piney Woods Woodworking",
                "phone1": "1-888-234-5678",
                "email": "info@PWW.com",
                "addressLine1": "1234 Some Street",
                "addressLine2": "",
                "city": "Charlotte",
                "state": "North Carolina",
                "country": "US",
                "zipcode": "28205",
                "weekHours": {
                    "mon": "7:00am - 7:00pm",
                    "tue": "7:00am - 7:00pm",
                    "wed": "7:00am - 7:00pm",
                    "thu": "7:00am - 7:00pm",
                    "fri": "7:00am - 7:00pm",
                    "sat": "7:00am - 3:00pm",
                    "sun": "Closed"
                }
            }, {
                "companyID": 401928,
                "name": "Crooked Oak Custom Woodworking",
                "phone1": "1-888-888-8888",
                "email": "info@CrookedOakCustoms.com",
                "addressLine1": "1234 Some Street",
                "addressLine2": "",
                "city": "Charlotte",
                "state": "North Carolina",
                "country": "US",
                "zipcode": "28205",
                "weekHours": {
                    "mon": "7:00am - 7:00pm",
                    "tue": "7:00am - 7:00pm",
                    "wed": "7:00am - 7:00pm",
                    "thu": "7:00am - 7:00pm",
                    "fri": "7:00am - 7:00pm",
                    "sat": "Closed",
                    "sun": "On Call"
                }
            }, {
                "companyID": 401927,
                "name": "'Merica! Custom Cabinets and Woodworking",
                "phone1": "1-877-987-6543",
                "email": "info@AmericasCustomCabinets.com",
                "addressLine1": "1234 Some Street",
                "addressLine2": "",
                "city": "Charlotte",
                "state": "North Carolina",
                "country": "US",
                "zipcode": "28205",
                "weekHours": {
                    "mon": "8:00am - 5:00pm",
                    "tue": "8:00am - 5:00pm",
                    "wed": "8:00am - 5:00pm",
                    "thu": "8:00am - 5:00pm",
                    "fri": "8:00am - 5:00pm",
                    "sat": "8:00am - 5:00pm",
                    "sun": "Closed"
                }
            }, {
                "companyID": 401926,
                "name": "Lumber Warehouse Liquidators",
                "phone1": "1-888-346-4574",
                "email": "info@LWL.com",
                "addressLine1": "1234 Some Street",
                "addressLine2": "",
                "city": "Charlotte",
                "state": "North Carolina",
                "country": "US",
                "zipcode": "28205",
                "weekHours": {
                    "mon": "7:00am - 7:00pm",
                    "tue": "7:00am - 7:00pm",
                    "wed": "7:00am - 7:00pm",
                    "thu": "7:00am - 7:00pm",
                    "fri": "7:00am - 7:00pm",
                    "sat": "7:00am - 3:00pm",
                    "sun": "1:00pm - 5:00pm"
                }
            }, {
                "companyID": 401925,
                "name": "Iron Side Decking & Lumber",
                "phone1": "1-888-246-7485",
                "email": "info@IronSideDecks.com",
                "addressLine1": "1234 Some Street",
                "addressLine2": "",
                "city": "Charlotte",
                "state": "North Carolina",
                "country": "US",
                "zipcode": "28205",
                "weekHours": {
                    "mon": "7:00am - 7:00pm",
                    "tue": "7:00am - 7:00pm",
                    "wed": "7:00am - 7:00pm",
                    "thu": "7:00am - 7:00pm",
                    "fri": "7:00am - 7:00pm",
                    "sat": "7:00am - 3:00pm",
                    "sun": "Closed"
                }
            }, {
                "companyID": 401924,
                "name": "Big Axe Men Lumber",
                "phone1": "1-888-PRO-POOL",
                "email": "info@BAMLumber.com",
                "addressLine1": "1234 Some Street",
                "addressLine2": "",
                "city": "Charlotte",
                "state": "North Carolina",
                "country": "US",
                "zipcode": "28205",
                "weekHours": {
                    "mon": "7:00am - 7:00pm",
                    "tue": "7:00am - 7:00pm",
                    "wed": "7:00am - 7:00pm",
                    "thu": "7:00am - 7:00pm",
                    "fri": "7:00am - 7:00pm",
                    "sat": "7:00am - 3:00pm",
                    "sun": "Closed"
                }
            }, {
                "companyID": 401923,
                "name": "Chop Chop Cabinets",
                "phone1": "1-888-797-3463",
                "email": "info@CCC.com",
                "addressLine1": "1234 Some Street",
                "addressLine2": "",
                "city": "Charlotte",
                "state": "North Carolina",
                "country": "US",
                "zipcode": "28205",
                "weekHours": {
                    "mon": "7:00am - 7:00pm",
                    "tue": "7:00am - 7:00pm",
                    "wed": "7:00am - 7:00pm",
                    "thu": "7:00am - 7:00pm",
                    "fri": "7:00am - 7:00pm",
                    "sat": "7:00am - 7:00pm",
                    "sun": "7:00am - 7:00pm"
                }
            }
]


export class List extends Component {
    componentDidMount(){}
	render() {
		let shopList = shops.map((shop, idx)=>{
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