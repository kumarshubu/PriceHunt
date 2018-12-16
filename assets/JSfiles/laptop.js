console.log("Page connected")
var laptop_data;
var laptop_details={
	name:"",
	image:"",
	price:[],
	store:["Amazon", "Flipkart", "Shopclues", "Paytm-Mall"]
};


var laptop_request = new XMLHttpRequest();
laptop_request.onreadystatechange = function(){
			if (this.readyState == 4 && this.status == 200) {
			 	laptop_data = JSON.parse(laptop_request.responseText)

				 laptop_details.name = laptop_data.data.product_name;
				 document.getElementById('laptop_name').innerText = laptop_details.name;
				 
				 laptop_details.price.push(laptop_data.data.stores[0].amazon.product_price)

				 laptop_details.price.push(laptop_data.data.stores[1].flipkart.product_price)
				
				 laptop_details.price.push(laptop_data.data.stores[12].shopclues.product_price)

				 laptop_details.price.push(laptop_data.data.stores[13].paytmmall.product_price)
				
				if(laptop_details.price[0] === undefined){

					document.getElementById('laptop_price1').innerText= "N/A";

				} else {

					document.getElementById('laptop_price1').innerText= laptop_details.price[0];
				}
				if (laptop_details.price[1] === undefined) {

					document.getElementById('laptop_price2').innerText= "N/A";

				} else {

					document.getElementById('laptop_price2').innerText= laptop_details.price[1];
				}
				if(laptop_details.price[2] === undefined){

					document.getElementById('laptop_price3').innerText= "N/A";

				} else {

					document.getElementById('laptop_price3').innerText= laptop_details.price[2];
				}
				if (laptop_details.price[3] === undefined) {

					document.getElementById('laptop_price4').innerText= "N/A";

				} else {

					document.getElementById('laptop_price4').innerText= laptop_details.price[3];
				}
				console.log(laptop_details);
			}
		};

laptop_request.open("GET","https://price-api.datayuge.com/api/v1/compare/detail?api_key=TBthShTtefA5xcMU4de1lGG7vaFseNwXl35&id=ZTo1MTQ1OTY", true);
laptop_request.send();
