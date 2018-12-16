// Add string '&user=amarjyot&key=MDLMENKKAPUYDCYV' in all your API requests for authentication.
console.log("Page connected")
var mobile_data;
var mobile_details={
	name:"",
	image:"",
	price:[],
	store:["Amazon", "Flipkart", "Shopclues", "Paytm-Mall"]
};


var mobile_request = new XMLHttpRequest();
mobile_request.onreadystatechange = function(){
			if (this.readyState == 4 && this.status == 200) {
				mobile_data = JSON.parse(mobile_request.responseText)

				mobile_details.name = mobile_data.data.product_name;
				
				//mobiles_details.store.push(data.data.stores[0].amazon.product_store);
				mobile_details.price.push(mobile_data.data.stores[0].amazon.product_price)

				//mobiles_details.store.push(data.data.stores[1].flipkart.product_store);
				mobile_details.price.push(mobile_data.data.stores[1].flipkart.product_price)

				//mobiles_details.store.push(data.data.stores[12].shopclues.product_store);
				mobile_details.price.push(mobile_data.data.stores[12].shopclues.product_price)

				//mobiles_details.store.push(data.data.stores[13].paytmmall.product_store);
				mobile_details.price.push(mobile_data.data.stores[13].paytmmall.product_price)
				
				//document.getElementById('electronics').setAttribute('src' , product_details.image);
				document.getElementById('mobile_price1').innerHTML = mobile_data.data.stores[0].amazon.product_store+" : "+mobile_data.data.stores[0].amazon.product_price;
				document.getElementById('mobile_price2').innerHTML = mobile_data.data.stores[1].flipkart.product_store+" : "+mobile_data.data.stores[1].flipkart.product_price;
				document.getElementById('mobile_price3').innerHTML = mobile_data.data.stores[12].shopclues.product_store+" : "+mobile_data.data.stores[12].shopclues.product_price;
				document.getElementById('mobile_price4').innerHTML = mobile_data.data.stores[13].paytmmall.product_store+" : "+mobile_data.data.stores[13].paytmmall.product_price;

				//console.log(product_details);
			}
		};

mobile_request.open("GET","https://price-api.datayuge.com/api/v1/compare/detail?api_key=TBthShTtefA5xcMU4de1lGG7vaFseNwXl35&id=ZToxMjIyNA", true);
mobile_request.send();

// For BOOKS

var book_details={
	name:"",
	image:"",
	price:[],
	store:["Amazon", "Flipkart", "Shopclues", "Paytm-Mall"]
};

var book_data;
var book_request = new XMLHttpRequest();
book_request.onreadystatechange = function(){
			if (this.readyState == 4 && this.status == 200) {
				book_data = JSON.parse(book_request.responseText)

				console.log(book_data);

				book_details.name = book_data.data.product_name;
				
				book_details.price.push(book_data.data.product_price);

				console.log("Books: "+book_data.data.product_price);

				if(book_details.price[0] === undefined){

					document.getElementById('book_price1').innerText= "N/A";

				} else {

					document.getElementById('book_price1').innerText= book_details.price[0];
				}
				if (book_details.price[1] === undefined) {

					document.getElementById('book_price2').innerText= "N/A";

				} else {

					document.getElementById('book_price2').innerText= book_details.price[1];
				}
				if(book_details.price[2] === undefined){

					document.getElementById('book_price3').innerText= "N/A";
				} else {

					document.getElementById('book_price3').innerText= book_details.price[2];
				}
				if (book_details.price[3] === undefined){

					document.getElementById('book_price4').innerText= "N/A";

				} else {

					document.getElementById('book_price4').innerText= book_details.price[3];
				}

				
			}
		};

book_request.open("GET","https://price-api.datayuge.com/api/v1/compare/detail?api_key=TBthShTtefA5xcMU4de1lGG7vaFseNwXl35&id=Zjo4MjY4MDgzNA", true);
book_request.send();

//FOR TVs

var tv_details={
	name:"",
	image:"",
	price:[],
	store:["Amazon", "Flipkart", "Shopclues", "Paytm-Mall"]
};

var tv_data;

// request.onreadystatechange = function(){
// 			if (this.readyState == 4 && this.status == 200) {
// 				tv_data = JSON.parse(request.responseText)

// 				tv_details.name = tv_data.data.product_name;
// 				//tv_details.image = data.data.product_images[0];
				
// 				//tv_details.store.push(data.data.stores[0].amazon.product_store);
// 				tv_details.price.push(tv_data.data.stores[0].amazon.product_price)

// 				//tv_details.store.push(data.data.stores[1].flipkart.product_store);
// 				tv_details.price.push(tv_data.data.stores[1].flipkart.product_price)

// 				//tv_details.store.push(data.data.stores[12].shopclues.product_store);
// 				tv_details.price.push(tv_data.data.stores[12].shopclues.product_price)

// 				//tv_details.store.push(data.data.stores[13].paytmmall.product_store);
// 				tv_details.price.push(tv_data.data.stores[13].paytmmall.product_price)
				
// 				if(tv_details.price[0] === undefined){
// 					document.getElementById('tv_price1').innerText= "N/A";
// 				} else {
// 					document.getElementById('tv_price1').innerText= tv_details.price[0];
// 				}
// 				if (tv_details.price[1] === undefined) {

// 					document.getElementById('tv_price2').innerText= "N/A";

// 				} else {

// 					document.getElementById('tv_price2').innerText= tv_details.price[1];
// 				}
// 				if(tv_details.price[2] === undefined){
// 					document.getElementById('tv_price3').innerText= "N/A";
// 				} else {
// 					document.getElementById('tv_price3').innerText= tv_details.price[2];
// 				}
// 				if (tv_details.price[3] === undefined) {

// 					document.getElementById('tv_price4').innerText= "N/A";

// 				} else {

// 					document.getElementById('tv_price4').innerText= tv_details.price[3];
// 				}

// 				console.log(tv_details);
// 			}
// 		};

// request.open("GET","https://price-api.datayuge.com/api/v1/compare/detail?api_key=TBthShTtefA5xcMU4de1lGG7vaFseNwXl35&id=ZTo1MjEyNzQ", true);
// request.send();


//FOR LAPTOPS
//https://price-api.datayuge.com/api/v1/compare/detail?api_key=TBthShTtefA5xcMU4de1lGG7vaFseNwXl35&id=ZTo1MTQ1OTY

