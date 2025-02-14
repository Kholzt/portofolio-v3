<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Model;

class Achievement extends Model
{
    protected $table = "achievements";
    protected $fillable = ["title", "description", "attachment1", "attachment2"];

    protected function attachment1(): Attribute
    {
        return Attribute::make(
            get: fn(string $value) => str_contains($value ?? "", 'https') ? $value ?? ""     : asset("assets/achievement/" . $value ?? ""),
        );
    }
    public function getRealAttachment1(): string
    {
        $value = $this->attributes['attachment1'];
        return $value;
    }
    protected function attachment2(): Attribute
    {
        return Attribute::make(
            get: fn($value) => str_contains($value ?? "", 'https') ? $value ?? "" : asset("assets/achievement/" . $value ?? ""),
        );
    }
    public function getRealAttachment2(): string
    {
        $value = $this->attributes['attachment2'];
        return $value;
    }
}
