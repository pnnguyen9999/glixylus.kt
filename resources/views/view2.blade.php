<!DOCTYPE html>
<html>
<head>
	<title>View1</title>
</head>
<body>
<script>


var list = '{{$src_list}}'.split(",");
for(var i = 0; i < list.length;i++){
	list[i] = window.atob(list[i]);
	var img = document.createElement("img");
	img.src = list[i];
	img.style.width = "100px";
	img.style.height = "100px";
	document.body.appendChild(img);

}
</script>
</body>
</html>