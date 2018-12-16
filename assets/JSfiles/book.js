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

				book_details.name = book_data.data.product_name;
				document.getElementById('book_name').innerText = book_details.name;

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
