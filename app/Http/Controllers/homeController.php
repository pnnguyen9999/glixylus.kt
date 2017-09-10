<?php 
/*STRUCT FOR PRODUCT INFOMATION*/

namespace App\Http\Controller;

use App\Http\Controllers\Controller;
use App\User;

class Product_Infomation{
	public $product_name;
	public $product_price;
	public $product_img_src;

}

abstract class Serializer implements \Serializable{
	public function serialize_Data($data){
		return serialize($data);
	}
}

class homeController extends Controller{

	/*HomePage Controller*/
	public function showHomePage(){
		$data =	Load_Data_Of_Product();
		Tranfer_To_View($data,"test1");
	}

	private function Load_Data_Of_Product(){

	// get database to stdClass Variable
	$products = DB::table('Test_Data')->pluck('img_src','name','price');
	$product_list = array();

    foreach ($products as $product) {
    	$product_properties = new Product_Infomation();
    	$product_properties->product_name = $product['name'];
    	$product_properties->product_img_src = $product['img_src'];
    	$product_properties->product_price = $product['price'];

    	$product_list[] = $product_properties;
    }

    //serialize product_list 
    $serializer = new Serializer();
    return $serializer->serialize_Data($product_list);
	}

	private function Tranfer_To_View($data,$viewName){
		return View::make($viewName,['data'=>$data]);
	}

}

?>