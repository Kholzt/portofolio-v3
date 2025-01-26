<?php

use App\Http\Controllers\PortofolioController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProjekController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [PortofolioController::class, "index"])->name("landing");
Route::get('/cv', [PortofolioController::class, "cv"])->name("cv");

Route::prefix("c/admin")->middleware("auth")->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');
    Route::get('/biodata', function () {
        return Inertia::render('admin/biodata/Biodata');
    })->name('biodata');
    Route::resource("projek", ProjekController::class);
    Route::post("projek/{id}", [ProjekController::class, "update"])->name("projek.update");
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});


require __DIR__ . '/auth.php';
