<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class PortofolioTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('portofolio')->delete();
        
        \DB::table('portofolio')->insert(array (
            0 => 
            array (
                'id' => 1,
                'title' => 'Kasir Apotik Berbasis Desktop',
                'description' => 'Aplikasi ini mempermudah pengelolaan penjualan di apotik dengan menyediakan sistem yang efisien dan terintegrasi.',
                'thumbnail' => 'https://firebasestorage.googleapis.com/v0/b/portofolio-2b52c.appspot.com/o/kasir-apotik.jpeg?alt=media&token=aab93822-a436-4546-b750-97012396fa58',
                'created_at' => '2024-12-30 11:40:02',
                'updated_at' => NULL,
            ),
            1 => 
            array (
                'id' => 2,
                'title' => 'Laravel Blog',
                'description' => 'Aplikasi Blog sederhana yang dibangun dengan teknologi laravel dan tailwind css. Menerapkan authentikasi dengan google dan penerapan 2FA',
                'thumbnail' => 'https://firebasestorage.googleapis.com/v0/b/portofolio-2b52c.appspot.com/o/Screenshot%202024-10-31%20122210.png?alt=media&token=da1c65dc-823b-4ae5-ace2-aa7bfde69533',
                'created_at' => '2024-12-30 11:40:02',
                'updated_at' => NULL,
            ),
            2 => 
            array (
                'id' => 3,
                'title' => 'Sosio App',
                'description' => 'Aplikasi ini mempermudah manajemen stakeholder di perusahaan BUMA dengan pengelolaan data yang efisien dan terstruktur.',
                'thumbnail' => 'https://firebasestorage.googleapis.com/v0/b/portofolio-2b52c.appspot.com/o/SOSIO-APP.png?alt=media&token=6522e862-b407-4c44-9e8e-19ac7a5b13fb',
                'created_at' => '2024-12-30 11:40:02',
                'updated_at' => NULL,
            ),
            3 => 
            array (
                'id' => 4,
                'title' => 'MOMENKU',
                'description' => 'Aplikasi undangan online yang mempermudah pembuatan, personalisasi, dan penyebaran undangan secara praktis. Cocok untuk acara pernikahan, ulang tahun, dan lainnya.',
            'thumbnail' => '6791c08778336_Screenshot (3).png',
                'created_at' => '2025-01-22 11:57:26',
                'updated_at' => '2025-01-23 04:07:35',
            ),
            4 => 
            array (
                'id' => 5,
                'title' => 'E-Badean Surat Native',
                'description' => 'Aplikasi surat menyurat berbasis web untuk kelurahan badean',
                'thumbnail' => '6791c21f6c4b7_WhatsApp Image 2025-01-23 at 11.13.08 AM.jpeg',
                'created_at' => '2025-01-23 04:14:23',
                'updated_at' => '2025-01-23 04:18:33',
            ),
            5 => 
            array (
                'id' => 6,
                'title' => 'Aplikasi PPDB pesantren',
                'description' => 'Aplikasi ini dirancang untuk membantu pengelolaan pendaftaran santri baru serta manajemen pembayaran SPP dengan lebih efisien dan terorganisir.',
                'thumbnail' => '67921d748f34d_Dashboard 1.png',
                'created_at' => '2025-01-23 10:44:04',
                'updated_at' => '2025-01-23 10:44:04',
            ),
        ));
        
        
    }
}