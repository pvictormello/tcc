<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Redirect;

class ContactController extends Controller
{
    public function store(Request $request)
    {
        Log::debug($request);
        $this->validate($request, [
            'name' => 'required',
            'email' => 'required',
            'message' => 'required',
        ]);

        return Redirect::route('users.index');
    }
}
