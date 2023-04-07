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
    /**
     * function to consume random users stored in DB
     */
    function index()
    {   
        try {
            $user = new RandomUser();
            $users = $user->getUsers();
            return $users;
        } catch (Exception $e) {
            // Handle the exception here, e.g. log it or display an error message
            echo 'An error occurred: ' . $e->getMessage();
        }
         }
    
  
}

