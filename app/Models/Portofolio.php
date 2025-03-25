<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Model;

class Portofolio extends Model
{
    protected $table = "portofolio";
    protected $fillable = ["title", "description", "thumbnail", "details", 'start_date', "end_date"];


    // protected function thumbnail(): Attribute
    // {
    //     return Attribute::make(
    //         get: fn(string $value) => str_contains($value, 'https') ? $value : asset("storage/projek/" . $value),
    //     );
    // }
    // public function getRealThumbnail($useReal = false): string
    // {
    //     $value = $this->attributes['thumbnail'];
    //     return $value;
    // }
}
