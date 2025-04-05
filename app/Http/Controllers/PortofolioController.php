<?php

namespace App\Http\Controllers;

use App\Models\Achievement;
use App\Models\Biodata;
use App\Models\Portofolio;
use App\Models\User;
use Illuminate\Http\Request;

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
}
