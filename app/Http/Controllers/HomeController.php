<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Messages;
use Response;
use App\User;


class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
      
        return view('home');

    }

     public function inbox()
    {
        $user = auth()->user();
        $data = Messages::where('to', $user->id)->get();

      foreach ($data as $key => $value) {
       
          $data[$key]['sender'] = Messages::find($value->from)->getSender->name;
      }
            
        return Response::json($data);

    }

    public function sent()
    {
        $user = auth()->user();
        $data = Messages::where('from', $user->id)->get();
        return Response::json($data);
        // return view('home', ['page_name' => 'Sent', 'data' => $data]);
    }

     public function deleted()
    {
        $user = auth()->user();
        $data = Messages::onlyTrashed()
                ->where('from', $user->id)
                ->orWhere('to', $user->id)
                ->get(); 
        return Response::json($data);
        // return view('home', ['page_name' => 'Deleted', 'data' => $data]);
    }


    public function all(){
        $user = auth()->user();
        $data = Messages::withTrashed()
                ->where('from', $user->id)
                ->orWhere('to', $user->id)
                ->get(); 
        return Response::json($data);
        // return view('home', ['page_name' => 'All', 'data' => $data]);;
    }
}
