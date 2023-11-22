<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AccessImage extends Model
{
    use HasFactory;

    protected $table = "access_images";

    public $timestamps = false;

    protected $fillable = [
        'name',
        'access_id',
    ];
}
