<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/','HomePageController@showHomePage');

Route::get('/test/{src_list}',function($src_list){
		return View::make('view2',['src_list'=>$src_list]);	
	
});
Route::get('/testa', function(){
	return View('somePage');
});