<?php

namespace App\Http\Controllers;

use App\Models\Log;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class UserController extends Controller
{
    public function index(Request $request)
    {
        $user = Auth::user();
        $role = $user->role;

        $sort = $request->get('sort', 'id');
        $order = $request->get('order', 'asc');

        $filters = $request->only(['name', 'email', 'location', 'role']);

        $users = User::orderBy($sort, $order)
            ->when($role === "Teacher" || $role === "Researcher", function ($query) use ($user) {
                return $query->where('parent_id', $user->id);
            })
            ->when(isset($filters['name']), function ($query) use ($filters) {
                return $query->where('name', 'like', "%{$filters['name']}%");
            })
            ->when(isset($filters['email']), function ($query) use ($filters) {
                return $query->where('email', 'like', "%{$filters['email']}%");
            })
            ->when(isset($filters['location']), function ($query) use ($filters) {
                return $query->where('city', 'like', "%{$filters['location']}%")
                    ->orWhere('state', 'like', "%{$filters['location']}%")
                    ->orWhere('country', 'like', "%{$filters['location']}%");
            })
            ->when(isset($filters['role']), function ($query) use ($filters) {
                return $query->where('role', 'like', "%{$filters['role']}%");
            })
            ->paginate(15);

        return Inertia::render('Users/Index', [
            'users' => $users,
            'currentSort' => $sort,
            'currentOrder' => $order,
            'currentFilters' => $filters,
        ]);
    }

    public function create()
    {
        $parent_users = User::select('id', 'name')->where('role', 'Teacher')->orWhere('role', 'Researcher')->get();

        return Inertia::render('Users/Create', ['parentUsers' => $parent_users]);
    }

    public function store(Request $request)
    {
        $this->validate($request, [
            'email' => 'required',
            'password' => 'required|confirmed',
            'role' => 'required',
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'city' => $request->city,
            'state' => $request->state,
            'country' => $request->country,
            'password' => $request->password,
            'location' => $request->location,
            'role' => $request->role,
            'parent_id' => $request->parent_id,
        ]);

        Log::create([
            'user_id' => Auth::id(),
            'action_type' => 'users.store',
            'description' => "Criou um novo usuário com id {$user->id}.",
        ]);

        return Redirect::route('users.index');
    }

    public function show($id)
    {
        $user = User::find($id);
        $parent_users = User::select('id', 'name')->where('role', 'Teacher')->orWhere('role', 'Researcher')->get();

        return Inertia::render('Users/Show', ['user' => $user, 'parentUsers' => $parent_users]);
    }

    public function edit($id)
    {
        $user = User::find($id);
        $parent_users = User::select('id', 'name')->where('role', 'Teacher')->orWhere('role', 'Researcher')->get();

        return Inertia::render('Users/Edit', ['user' => $user, 'parentUsers' => $parent_users]);
    }

    public function update(Request $request, $id)
    {
        $this->validate($request, [
            'email' => 'required',
            'password' => 'required|confirmed',
            'role' => 'required',
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
            'role' => $request->role,
            'parent_id' => $request->parent_id,
        ]);

        Log::create([
            'user_id' => Auth::id(),
            'action_type' => 'users.update',
            'description' => "Atualizou um usuário com id {$user->id}.",
        ]);


        return Redirect::route('users.index');
    }

    public function destroy($id)
    {
        $user = User::find($id);

        $user->delete();

        Log::create([
            'user_id' => Auth::id(),
            'action_type' => 'users.destroy',
            'description' => "Deletou um usuário com id {$id}.",
        ]);

        return Redirect::route('users.index');
    }
}
