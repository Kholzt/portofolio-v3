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
                'about_me' => 'Saya adalah Junior Programmer dengan pengalaman dalam pengembangan aplikasi web menggunakan JavaScript dan Java. Saya memiliki keterampilan dalam framework seperti React dan Laravel, serta semangat untuk terus belajar dan berkontribusi dalam proyek-proyek inovatif.',
                'photo' => NULL,
                'created_at' => NULL,
                'updated_at' => '2025-01-23 07:45:54',
            ),
        ));
        
        
    }
}