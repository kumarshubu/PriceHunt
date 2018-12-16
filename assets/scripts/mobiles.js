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
				document.getElementById('mobile_name').innerText = mobile_details.name;
				
				mobile_details.price.push(mobile_data.data.stores[0].amazon.product_price)

				mobile_details.price.push(mobile_data.data.stores[1].flipkart.product_price)

				mobile_details.price.push(mobile_data.data.stores[12].shopclues.product_price)

				mobile_details.price.push(mobile_data.data.stores[13].paytmmall.product_price)
				
				if(mobile_details.price[0] === undefined){

					document.getElementById('mobile_price1').innerText= "Out Of Stock";

				} else {

					document.getElementById('mobile_price1').innerHTML= '<span><i class="fas fa-rupee-sign"></i></span>'+mobile_details.price[0];

				}
				if (mobile_details.price[1] === undefined) {

					document.getElementById('mobile_price2').innerText= "Out Of Stock";

				} else {

					document.getElementById('mobile_price2').innerHTML= '<span><i class="fas fa-rupee-sign"></i></span>'+mobile_details.price[1];
				}
				if(mobile_details.price[2] === undefined){

					document.getElementById('mobile_price3').innerText= "Out Of Stock";

				} else {

					document.getElementById('mobile_price3').innerHTML= '<span><i class="fas fa-rupee-sign"></i></span>'+mobile_details.price[2];
				}
				if (mobile_details.price[3] === undefined) {

					document.getElementById('mobile_price4').innerText= "Out Of Stock";

				} else {

					document.getElementById('mobile_price4').innerHTML= '<span><i class="fas fa-rupee-sign"></i></span>'+mobile_details.price[3];
				}
				
			}
		};

mobile_request.open("GET","https://price-api.datayuge.com/api/v1/compare/detail?api_key=TBthShTtefA5xcMU4de1lGG7vaFseNwXl35&id=ZToxMjIyNA", true);
mobile_request.send();


//Search functionlity
		function SEARCH(){
		let search=document.getElementById('search_button');
		console.log(search.value);
		search.value=" ";
}

//ReadMore functionality
function readMore() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}