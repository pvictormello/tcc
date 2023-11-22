<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class VegetativePhase extends Model
{
    use HasFactory;

    protected $table = "vegetative_phase";

    protected $primaryKey = 'access_id';

    public $timestamps = false;

    protected $fillable = [
        'access_id',
        'cod7',
        'cod8',
        'cod9',
        'cod10',
        'cod11',
        'cod12',
        'cod13',
        'cod14',
        'cod15',
        'cod16',
        'cod17',
        'cod18',
        'cod19',
        'cod20',
        'cod21',
        'cod22',
        'cod23',
        'cod24',
        'cod25',
    ];

    public function reproductive_phase(): HasOne
    {
        return $this->hasOne(ReproductivePhase::class, 'access_id', 'access_id');
    }
}
