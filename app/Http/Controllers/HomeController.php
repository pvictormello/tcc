<?php

namespace App\Http\Controllers;

use App\Models\Banner;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        $banners = Banner::all();

        return Inertia::render('Home', ['banners' => $banners]);
    }
}
