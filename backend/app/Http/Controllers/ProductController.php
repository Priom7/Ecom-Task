<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ProductController extends Controller
{
    /**
     * Fetch products
     * @param NA
     * @return JSON response
     */
    public function index() {
        $products = Product::all();
        return response()->json(["status" => "success", "count" => count($products), "data" => $products]);
    }

    /**
     * Upload products
     * @param $request
     * @return JSON response
     */
    public function upload(Request $request) {
        $productsName = [];
        $response = [];

        $validator = Validator::make($request->all(),
            [
                'name' => 'required',
                'images.*' => 'image|mimes:jpeg,png,jpg,gif,svg|max:2048',
                'images' => 'max:1',
            ]
        );

        if($validator->fails()) {
            return response()->json(["status" => "failed", "message" => "Validation error", "errors" => $validator->errors()]);
        }

        if($request->has('images')) {
            foreach($request->file('images') as $image) {
                $filename = time().rand(). '.'.$image->getClientOriginalExtension();
                $image->move('uploads/', $filename);

                Product::create([
                    'name' => $request->name,
                    'price'=> $request->price ? $request->price : 0.00,
                    'image_name' => $filename
                ]);
            }

            $response["status"] = "success";
            $response["message"] = "Success! product(s) uploaded";
        }

        else {
            $response["status"] = "failed";
            $response["message"] = "Failed! product(s) not uploaded";
        }
        return response()->json($response);
    }
}
