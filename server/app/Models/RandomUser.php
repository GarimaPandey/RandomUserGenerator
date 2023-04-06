<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Http;

class RandomUser extends Model
{
    use HasFactory;

    protected $fillable = [
        'first_name',
        'last_name',
        'email',
        'phone',
        'birthdate',
    ];

    protected $endpoint = 'https://randomuser.me/api/?results=100';

    public function fetchAndStore()
    {
        $response = Http::get($this->endpoint);
        $results = $response->json()['results'];

        foreach ($results as $result) {
        
            self::create([
                'first_name' => $result['name']['first'],
                'last_name' => $result['name']['last'],
                'email' => $result['email'],
                'phone' => $result['phone'],
                'birthdate' => Carbon::parse($user['dob']['date'])->format('Y-m-d'),
            ]);
        }  
    }

    public function getUsers(){
        $users = RandomUser::all();
        return $users;
    }


}
