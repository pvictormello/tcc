<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class UserController extends Controller
{
    public function index()
    {
        $users = User::all();

        return Inertia::render('Users/Index', ['users' => $users]);
    }

    public function create()
    {
        return Inertia::render('Users/Create');
    }

    public function store(Request $request)
    {
        $this->validate($request, [
            'email' => 'required',
            'password' => 'required|confirmed',
        ]);

        User::create([
            'name' => $request->name,
            'email' => $request->email,
            'city' => $request->city,
            'state' => $request->state,
            'country' => $request->country,
            'password' => $request->password,
            'location' => $request->location,
            'role_id' => 1,
        ]);

        return Redirect::route('users.index');
    }

    public function edit($id)
    {
        $user = User::find($id);

        return Inertia::render('Users/Edit', ['user' => $user]);
    }

    public function update(Request $request, $id)
    {
        $this->validate($request, [
            'email' => 'required',
            'password' => 'required|confirmed',
        ]);

        $user = User::find($id);

        $user->update([
            'name' => $request->name,
            'email' => $request->email,
            'city' => $request->city,
            'state' => $request->state,
            'country' => $request->country,
            'password' => $request->password,
            'location' => $request->location,
            'role_id' => 1,
        ]);

        return Redirect::route('users.index');
    }

    public function destroy($id)
    {
        $user = User::find($id);

        $user->delete();

        return Redirect::route('users.index');
    }
}
