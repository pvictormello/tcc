<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class SeedlingPhase extends Model
{
    use HasFactory;

    protected $table = "seedling_phase";

    protected $primaryKey = 'access_id';

    public $timestamps = false;

    protected $fillable = [
        'access_id',
        'cod1',
        'cod2',
        'cod3',
        'cod4',
        'cod5',
        'cod6',
    ];

    public function vegetative_phase(): HasOne
    {
        return $this->hasOne(VegetativePhase::class, 'access_id', 'access_id');
    }
}
