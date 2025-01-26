<?php

namespace App\Http\Controllers;

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
        $portofolio = Portofolio::orderBy("end_date", "desc")->get();
        $user = User::with("biodata")->first();

        $params["data"] = (object)[
            "portofolio" => $portofolio,
            "user" => $user,
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
