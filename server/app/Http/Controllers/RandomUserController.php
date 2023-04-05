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
    {   
        // Retrieve paginated random users from the database
        $users = RandomUser::paginate(10);
    
        // Format the data in the required structure for pagination
        $response = [
            'current_page' => $users->currentPage(),
            'data' => $users->items(),
            'last_page' => $users->lastPage(),
        ];
    
        // Pass the users to the view as JSON
        return response()->json($response);
    }
    


         public function paginate($items, $perPage = 10, $page = null)
        {
            $page = $page ?: (Paginator::resolveCurrentPage() ?: 1);
            $total = count($items);
            $currentpage = $page;
            $offset = ($currentpage * $perPage) - $perPage ;
            $itemstoshow = array_slice($items , $offset , $perPage);
            return new LengthAwarePaginator($itemstoshow ,$total ,$perPage);
        }
}

