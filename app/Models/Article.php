<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
    protected $table = "articles";
    protected $fillable = ["title","slug","content","thumbnail","category_id","author_id","published_at","status"];

    public function category() {
        return $this->belongsTo(Category::class);
    }
    public function author() {
        return $this->belongsTo(User::class);
    }

    protected static function booted()
    {
        static::saving(function ($article) {
            if ($article->status === 'published' && !$article->published_at) {
                $article->published_at = Carbon::now();
            }

            if (in_array($article->status, ['draft', 'archived'])) {
                $article->published_at = null;
            }
        });
    }
}
