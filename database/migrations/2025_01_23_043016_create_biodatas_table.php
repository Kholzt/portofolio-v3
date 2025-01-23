<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('biodata', function (Blueprint $table) {

            $table->id(); // Primary key
            $table->foreignId('id_user')->references("id")->on("users")->cascadeOnDelete()->cascadeOnUpdate(); // Nama lengkap
            $table->string('phone')->nullable(); // Nomor telepon
            $table->string('address')->nullable(); // Alamat
            $table->string('date_of_birth')->nullable(); // Tanggal lahir
            $table->string('place_of_birth')->nullable(); // Tempat lahir
            $table->text('about_me')->nullable(); // Tentang saya
            $table->string('photo')->nullable(); // Foto profil (URL atau path)
            $table->string('github')->nullable(); // Foto profil (URL atau path)
            $table->string('linkedin')->nullable(); // Foto profil (URL atau path)
            $table->string('instagram')->nullable(); // Foto profil (URL atau path)
            $table->timestamps(); // Created at dan Updated at
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('biodatas');
    }
};
