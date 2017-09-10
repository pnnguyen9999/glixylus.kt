<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

/*STRUCT FOR PRODUCT INFOMATION*/
class Product_Infomation{
	public $product_name;
	public $product_price;
	public $product_img_src;

	function __construct(){
		$this->product_name = "";
		$this->product_price = "";
		$this->product_img_src = "";
	}
	public function Get_Data_Serialize(){
		$data = $this->product_img_src."|".$this->product_name."|".$this->product_price;
		return $data;
	}

}

class HomePageController extends Controller
{
    /*HomePage Controller*/
	public function showHomePage(){
		// get database to stdClass Variable
		$products = DB::table('Test_Data')->select(array('img_src','name','price'))->get();
		$products = json_decode(json_encode($products),true);
		$product_list = array();

    foreach ($products as $product) {   
    		$product_properties = new Product_Infomation();
    		$product_properties->product_img_src = $product["img_src"];
    		$product_properties->product_name = $product["name"];
    		$product_properties->product_price = $product["price"];

    		$product_list[] = $product_properties->Get_Data_Serialize();
    }
    //serialize product_list 
   	$data = implode(",",$product_list);
	return \View::make("test1",['data'=>$data]);
	}
	public function testPage(){
		return \View('somePage');
	}
}
