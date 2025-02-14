<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class AchievementsTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('achievements')->delete();
        
        \DB::table('achievements')->insert(array (
            0 => 
            array (
                'id' => 1,
                'title' => 'Juara 1 Poster terbaik TIF Exhibition 2023',
                'description' => 'juara',
                'attachment1' => '679e07a91cca5_1 poster depan.jpg',
            'attachment2' => '679c36f0f3580_Screenshot (548).png',
                'created_at' => '2025-01-31 02:35:29',
                'updated_at' => '2025-02-01 11:38:49',
            ),
            1 => 
            array (
                'id' => 2,
                'title' => 'Juara 1 aplikasi terbaik kategori desktop aplikasi TIF Exhibition 2023',
                'description' => ',',
                'attachment1' => '679e0acd36a95_1 aplikasi depan.jpg',
                'attachment2' => '679e0acd3869e_1 aplikasi belakang.jpg',
                'created_at' => '2025-02-01 11:51:41',
                'updated_at' => '2025-02-13 12:47:15',
            ),
            2 => 
            array (
                'id' => 3,
                'title' => 'Juara 3 LKS Tingkat Provinsi Jawa Timur Bidang lomba Web Technologies',
                'description' => '.',
                'attachment1' => '67af1b9bd270f_1735985310560.jpg',
                'attachment2' => NULL,
                'created_at' => '2025-02-14 10:31:55',
                'updated_at' => '2025-02-14 10:31:55',
            ),
        ));
        
        
    }
}