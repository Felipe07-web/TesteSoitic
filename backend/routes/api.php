<?php

use App\Http\Controllers\Api\AppointmentController;
use Illuminate\Support\Facades\Route;

// Rota da Api
Route::get('/appointments', [AppointmentController::class, 'index']);
