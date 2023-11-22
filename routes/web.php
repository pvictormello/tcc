<?php

use App\Http\Controllers\AccessController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [HomeController::class, 'index'])->name('home.index');

Route::middleware('auth')->group(function () {
    Route::get('/acessos', [AccessController::class, 'index'])->name('access.index');
    Route::get('/acessos/novo', [AccessController::class, 'create'])->name('access.create');
    Route::post('/acessos/novo', [AccessController::class, 'store'])->name('access.store');
    Route::get('/acessos/{id}/editar', [AccessController::class, 'edit'])->name('access.edit');
    Route::put('/acessos/{id}/editar', [AccessController::class, 'update'])->name('access.update');
    Route::delete('/acessos/{id}', [AccessController::class, 'destroy'])->name('access.destroy');
    Route::post('/acessos/imagens', [AccessController::class, 'store_image'])->name('access.store_image');

    Route::get('/usuarios', [UserController::class, 'index'])->name('users.index');
    Route::get('/usuarios/novo', [UserController::class, 'create'])->name('users.create');
    Route::post('/usuarios/novo', [UserController::class, 'store'])->name('users.store');
    Route::get('/usuarios/{id}/editar', [UserController::class, 'edit'])->name('users.edit');
    Route::put('/usuarios/{id}/editar', [UserController::class, 'update'])->name('users.update');
    Route::delete('/usuarios/{id}', [UserController::class, 'destroy'])->name('users.destroy');
});

require __DIR__ . '/auth.php';
