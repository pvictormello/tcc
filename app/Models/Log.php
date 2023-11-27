<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Log extends Model
{
    use HasFactory;

    protected $table = "logs";

    public $timestamps = false;

    protected $hidden = ['user_id'];

    protected $fillable = [
        'user_id',
        'action_type',
        'description',
    ];

    public function user(): BelongsTo
    {
        return $this->BelongsTo(User::class, 'user_id', 'id')->select(['id', 'name']);
    }
}
