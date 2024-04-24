<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class LocalizationController extends Controller
{
    public function store(Request $request)
    {
        app()->setLocale($request->locale);
        session()->put('locale', $request->locale);
    }
}
