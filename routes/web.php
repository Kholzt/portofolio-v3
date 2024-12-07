<?php

use App\Http\Controllers\PortofolioController;
use Illuminate\Support\Facades\Route;

Route::get('/', [PortofolioController::class, "index"]);
