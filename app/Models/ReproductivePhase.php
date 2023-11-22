<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ReproductivePhase extends Model
{
    use HasFactory;

    protected $table = "reproductive_phase";

    protected $primaryKey = 'access_id';

    public $timestamps = false;

    protected $fillable = [
        'access_id',
        'cod26',
        'cod27',
        'cod28',
        'cod29',
        'cod30',
        'cod31',
        'cod32',
        'cod33',
        'cod34',
        'cod35',
        'cod36',
        'cod37',
        'cod38',
        'cod39',
        'cod40',
        'cod41',
        'cod42',
        'cod43',
        'cod44',
        'cod45',
        'cod46',
        'cod47',
        'cod48',
        'cod49',
        'cod50',
        'cod51',
        'cod52',
        'cod53',
        'cod54',
        'cod55',
        'cod56',
        'cod57',
        'cod58',
        'cod59',
        'cod60',
        'cod61',
        'cod62',
        'cod63',
        'cod64',
        'cod65',
        'cod66',
        'cod67',
        'cod68',
        'cod69',
        'cod70',
    ];
}
