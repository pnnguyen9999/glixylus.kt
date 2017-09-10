function Load_Product_To_View(data){
		var list_data = data.split(",");
		var count = list_data.length;

		for(var i = 0; i < count;i++){
		var list_data_child = list_data[i].split("|");
		console.log(list_data_child[0] + "/" + list_data_child[1] + "/" + list_data_child[2]);
		var div_0 = document.createElement("div");
		div_0.setAttribute("class","col-md-3 col-sm-6 col-xs-6");
		div_0.style.height = "100%";
		div_0.style.padding = "5px";
		div_0.style.textAlign = "center";
		div_0.setAttribute("name","product_place");


		var div_1 = document.createElement("div");
		div_1.setAttribute("class","gallery");
		div_0.appendChild(div_1);

		var a = document.createElement("a");
		a.setAttribute("target","_blank");
		a.href = "#";
		div_1.appendChild(a);

		/*---IMAGE OF PRODUCT HERE---*/
		var img = document.createElement("img");
		img.src = list_data_child[0];
		img.height = "100";
		img.setAttribute("id","anh_san_pham_" + i);
		a.appendChild(img);

		var div_2 = document.createElement("div");
		div_2.setAttribute("class","desc");
		div_1.appendChild(div_2);

		/*---NAME OF PRODUCT HERE---*/
		var h4_1 = document.createElement("h4");
		h4_1.innerHTML = list_data_child[1];
		div_2.appendChild(h4_1);

		/*---PRICE OF PRODUCT HERE---*/
		var h4_2 = document.createElement("h4");
		h4_2.innerHTML = list_data_child[2] || "Free";
		h4_2.style.fontFamily= "font3";
		div_2.appendChild(h4_2);

		var button = document.createElement("button");
		button.setAttribute("name","add_card");
		button.setAttribute("class","btn btn-success");
		button.style.width = "80%";
		button.innerHTML = "thêm vào giỏ";
		div_2.appendChild(button);

		var span = document.createElement("span");
		span.setAttribute("class","glyphicon glyphicon-shopping-cart");
		span.style.cssFloat = "left";
		button.appendChild(span);

		var br = document.createElement("br");
		div_2.appendChild(br);

		var div_parent = document.getElementById("div_parent");
		div_parent.appendChild(div_0);
		}	
}
		