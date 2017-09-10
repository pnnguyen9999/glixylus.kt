/*ADD EVENTS*/	
var count = document.getElementsByName("product_place");

// https://kipalog.com/posts/Closure-va-scope-trong-javascript
var addTheHanglers = function (nodes) {
	var helper = function(i){
		return function(e){
			var img = document.getElementById("anh_san_pham_" + i);
			buy(img.getAttribute("src"));
		}
	}
  var i;
  for (i = 0; i < nodes.length; i += 1) {
    nodes[i].onclick = helper(i);
  }
};
nodes = document.getElementsByName("add_card");
addTheHanglers(nodes);

var payButton = document.getElementById("pay_btt");
payButton.addEventListener("click",pay);


/*PRODUCT METHODS*/

function buy(src){
	src = window.btoa(src);		
	updateCookie("list_mat_hang",src);
}

function pay(){
		var cookies = document.cookie;
		cookieProduct = getCookieByName("list_mat_hang");
		console.log(cookieProduct);
		if(cookieProduct == ""){
			//if(cardProduct.length != 0){
				//document.cookie = "list_mat_hang=" + cardProduct.toString();
				//window.location.href = "/test/" + cardProduct.toString();
			//} else{
			//	alert("ban chua chon mat hang nao gan day");
			//}
		} else {
			window.location.href = "/test/" + cookieProduct;
		}
	}


/*COOKIE METHODS*/

function updateCookie(name,value){
	var cookieData = document.cookie;
	var valueOfcookies = cookieData.split(";");
	var count = valueOfcookies.length;

	for(var i = 0 ; i < count ; i++){
		if(valueOfcookies[i].indexOf(name) != -1){
			valueOfcookies[i] += "," + value;
			document.cookie = valueOfcookies[i];
			console.log(valueOfcookies[i]);
			return;
		}
	}
	document.cookie = name + "=" + value;
}	

function getCookieByName(name){
	var cookie_data = document.cookie;
	var valueOfcookies = cookie_data.split(";");
	var count = valueOfcookies.length;

	for(var i = 0 ; i < count ; i++){
		if(valueOfcookies[i].indexOf(name) != -1){
			return valueOfcookies[i].substr(valueOfcookies[i].indexOf("=") + 1,valueOfcookies[i].length - valueOfcookies[i].indexOf("=")); // list_mat_hang=
		}
	}
}


