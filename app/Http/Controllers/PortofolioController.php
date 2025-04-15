<?php

namespace App\Http\Controllers;

use App\Models\Achievement;
use App\Models\Article;
use App\Models\Category;
use App\Models\Portofolio;
use App\Models\User;

class PortofolioController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $portofolio = Portofolio::orderBy("end_date", "desc")->where("type","project")->get()
        ->map(function ($item) {
            $item->details = str($item->details)->sanitizeHtml();
            return $item;
        });
        $experience = Portofolio::orderBy("end_date", "desc")->where("type","experience")->get()
        ->map(function ($item) {
            $item->details = str($item->details)->sanitizeHtml();
            return $item;
        });
        $achievement = Achievement::orderBy("id", "desc")->get();
        $user = User::with("biodata")->first();

        $params["data"] = (object)[
            "portofolio" => $portofolio,
            "experience" => $experience,
            "user" => $user,
            "achievement" => $achievement
        ];
        return inertia("Portofolio", $params);
    }
    public function cv()
    {
        $portofolio = Portofolio::orderBy("end_date", "desc")->get();
        $user = User::with("biodata")->first();

        $params["data"] = (object)[
            "portofolio" => $portofolio,
            "user" => $user,
        ];
        return inertia("CV", $params);
    }
    public function article()
    {
        $articles = Article::orderBy("id", "desc")->where("status","published")->get();
        $categories = Category::orderBy("name", "desc")->with("articles",function ($qr) {
            $qr->where("status","published");
        })->get();

        $params["data"] = (object)[
            "articles" => $articles,
            "categories" => $categories,
        ];
        return inertia("Article", $params);
    }
}
