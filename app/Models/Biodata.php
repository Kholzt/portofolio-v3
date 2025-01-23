<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Biodata extends Model
{
    protected $table = "biodata";
    protected $fillable = ["phone", "address", "date_of_birth", "place_of_birth", "about_me", "photo"];
}
