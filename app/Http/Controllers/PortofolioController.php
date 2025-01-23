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
        $portofolio = Portofolio::orderBy("id", "desc")->get();
        $user = User::with("biodata")->first();

        $params["data"] = (object)[
            "portofolio" => $portofolio,
            "user" => $user,
        ];
        return inertia("Portofolio", $params);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Portofolio $portofolio)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Portofolio $portofolio)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Portofolio $portofolio)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Portofolio $portofolio)
    {
        //
    }
}
