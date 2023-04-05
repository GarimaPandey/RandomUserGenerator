<?php
namespace Database\Seeders;

use App\Models\RandomUser;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Http;
use Carbon\Carbon;

class RandomUsersSeeder extends Seeder
{
    public function run()
    {
        $randomUser = new RandomUser();
        $count = $randomUser->count();
        
        // Check if the database is empty
        if ($count === 0) {
            $response = Http::get('https://randomuser.me/api/?results=100');
            $results = $response->json()['results'];

            foreach ($results as $result) {

                RandomUser::create([
                    'first_name' => $result['name']['first'],
                    'last_name' => $result['name']['last'],
                    'email' => $result['email'],
                    'phone' => $result['phone'],
                    'birthdate' => Carbon::parse($result['dob']['date'])->format('Y-m-d'),
                    
                ]);


            }
        }
    }
}
