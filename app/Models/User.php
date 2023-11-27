<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use HasFactory;

    protected $table = "users";

    public $timestamps = false;

    protected $fillable = [
        'name',
        'email',
        'city',
        'country',
        'state',
        'password',
        'location',
        'role',
        'parent_id',
    ];

    public function getAuthPassword()
    {
        return bcrypt($this->password);
    }
}
