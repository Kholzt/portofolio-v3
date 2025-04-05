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
        Schema::table('portofolio', function (Blueprint $table) {
            $table->dropColumn("description");
            $table->text("details")->nullable()->change();
            $table->string("thumbnail", 200)->nullable()->default("storage/projek/default.jpg")->change();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('portofolio', function (Blueprint $table) {
            //
        });
    }
};
