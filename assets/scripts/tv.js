var tv_details={
	name:"",
	image:"",
	price:[],
	store:["Amazon", "Flipkart", "Shopclues", "Paytm-Mall"]
};

var tv_data;

var tv_request = new XMLHttpRequest();
tv_request.onreadystatechange = function(){
			if (this.readyState == 4 && this.status == 200) {
				tv_data = JSON.parse(tv_request.responseText)

				tv_details.name = tv_data.data.product_name;
				document.getElementById('tv_name').innerText = tv_details.name;
				
				tv_details.price.push(tv_data.data.stores[0].amazon.product_price)

				tv_details.price.push(tv_data.data.stores[1].flipkart.product_price)

				tv_details.price.push(tv_data.data.stores[12].shopclues.product_price)

				tv_details.price.push(tv_data.data.stores[13].paytmmall.product_price)
				
				if(tv_details.price[0] === undefined){

					document.getElementById('tv_price1').innerText= "Out Of Stock";

				} else {

					document.getElementById('tv_price1').innerHTML= '<span><i class="fas fa-rupee-sign"></i></span>'+tv_details.price[0];
				}
				if (tv_details.price[1] === undefined) {

					document.getElementById('tv_price2').innerText= "Out Of Stock";

				} else {

					document.getElementById('tv_price2').innerHTML= '<span><i class="fas fa-rupee-sign"></i></span>'+tv_details.price[1];
				}
				if(tv_details.price[2] === undefined){

					document.getElementById('tv_price3').innerText= "Out Of Stock";

				} else {
					
					document.getElementById('tv_price3').innerHTML= '<span><i class="fas fa-rupee-sign"></i></span>'+tv_details.price[2];
				}
				if (tv_details.price[3] === undefined) {

					document.getElementById('tv_price4').innerText= "Out Of Stock";

				} else {

					document.getElementById('tv_price4').innerHTML= '<span><i class="fas fa-rupee-sign"></i></span>'+tv_details.price[3];
				}

			}
		};

tv_request.open("GET","https://price-api.datayuge.com/api/v1/compare/detail?api_key=TBthShTtefA5xcMU4de1lGG7vaFseNwXl35&id=ZTo1MjEyNzQ", true);
tv_request.send();

//Search functionality

function SEARCH(){
		let search=document.getElementById('search_button');
		console.log(search.value);
		search.value=" ";
}

//readMore functionality

function myFunction() {
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