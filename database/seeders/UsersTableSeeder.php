<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('users')->delete();
        
        \DB::table('users')->insert(array (
            0 => 
            array (
                'id' => 1,
                'name' => 'Muhammad Nor Kholit',
                'email' => 'mnorkholit7@gmail.com',
                'email_verified_at' => NULL,
                'password' => '$2y$12$.trtKFU4smIaglR/OkPui.zhpMxiUb2P932EeEcqS9vh6e.80xuMK',
                'role' => 'admin',
                'remember_token' => 'KDvIa3p6tVBMiOqlUbK8bNcjY4d4dwx0040DoXLCmhg51o4GBABxPv8940UQ',
                'created_at' => '2025-01-21 04:21:12',
                'updated_at' => '2025-01-21 04:21:12',
            ),
        ));
        
        
    }
}