<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class BiodataTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('biodata')->delete();
        
        \DB::table('biodata')->insert(array (
            0 => 
            array (
                'id' => 1,
                'id_user' => 1,
                'phone' => '2',
                'address' => 'Bataan, Tenggarang, Bondowoso',
                'date_of_birth' => '2025-01-01',
                'place_of_birth' => 'Bondowoso, Jawa timur',
                'about_me' => 'Saya adalah fullstack developer dengan pengalaman 2 tahun  dan saat ini melanjutkan kuliah pada prodi teknik informatika. Saya',
                'photo' => NULL,
                'github' => NULL,
                'linkedin' => NULL,
                'instagram' => NULL,
                'created_at' => NULL,
                'updated_at' => '2025-02-14 10:26:21',
            ),
        ));
        
        
    }
}