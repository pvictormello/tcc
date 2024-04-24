<?php

use App\Http\Controllers\AccessController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\LocalizationController;
use App\Http\Controllers\LogController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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

Route::get('/sobre', function () {
    return Inertia::render('About');
})->name('about.index');

Route::get('/contato', function () {
    return Inertia::render('Contact');
})->name('contact.index');
Route::post('/contato', [ContactController::class, 'store'])->name('contact.store');

Route::post('/localizacao', [LocalizationController::class, 'store'])->name('localization.store');


Route::middleware('auth', 'role:Student,Teacher,Researcher')->group(function () {
    Route::get('/acessos', [AccessController::class, 'index'])->name('access.index');
    Route::get('/acessos/novo', [AccessController::class, 'create'])->name('access.create');
    Route::post('/acessos/novo', [AccessController::class, 'store'])->name('access.store');
    Route::get('/acessos/{id}', [AccessController::class, 'show'])->name('access.show');
    Route::get('/acessos/{id}/json', [AccessController::class, 'show_json'])->name('access.show_json');
    Route::post('/acessos/imagens', [AccessController::class, 'store_image'])->name('access.store_image');
    Route::delete('/acessos/imagens', [AccessController::class, 'destroy_image'])->name('access.destroy_image');
    Route::get('/acessos/{id}/editar', [AccessController::class, 'edit'])->name('access.edit');
    Route::put('/acessos/{id}/editar', [AccessController::class, 'update'])->name('access.update');
    Route::put('/acessos/{id}/visibilidade', [AccessController::class, 'update_visibility'])->name('access.update_visibility');
    Route::delete('/acessos/{id}', [AccessController::class, 'destroy'])->name('access.destroy');
});

Route::middleware('auth', 'role:Teacher,Researcher')->group(function () {
    Route::get('/usuarios', [UserController::class, 'index'])->name('users.index');
    Route::get('/usuarios/novo', [UserController::class, 'create'])->name('users.create');
    Route::post('/usuarios/novo', [UserController::class, 'store'])->name('users.store');
    Route::get('/usuarios/{id}', [UserController::class, 'show'])->name('users.show');
    Route::get('/usuarios/{id}/editar', [UserController::class, 'edit'])->name('users.edit');
    Route::put('/usuarios/{id}/editar', [UserController::class, 'update'])->name('users.update');
    Route::delete('/usuarios/{id}', [UserController::class, 'destroy'])->name('users.destroy');
});

Route::middleware('auth', 'role:Admin')->group(function () {
    Route::get('/logs', [LogController::class, 'index'])->name('logs.index');
});

require __DIR__ . '/auth.php';
