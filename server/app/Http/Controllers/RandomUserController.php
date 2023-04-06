<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use Illuminate\Support\Facades\Http;
use Illuminate\Pagination\Paginator;
use Illuminate\Pagination\LengthAwarePaginator;
use App\Models\RandomUser;

class RandomUserController extends Controller
{
    function index()
    {   $user = new RandomUser();
        $users = $user->getUsers();
        // $response = [
        //     'data' => $users->items(),
        // ];
    
        return $users;
    }
    

}

