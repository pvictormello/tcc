<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Access extends Model
{
    use HasFactory;

    protected $table = "access";

    public $timestamps = false;

    protected $fillable = [
        'sample',
        'species',
        'variety',
        'color',
        'generation',
        'producer_name',
        'coordinates',
        'location',
        'phone',
        'collection_date',
        'observation',
    ];

    public function seedling_phase(): HasOne
    {
        return $this->hasOne(SeedlingPhase::class, 'access_id');
    }

    public function access_images(): HasMany
    {
        return $this->hasMany(AccessImage::class, 'access_id');
    }
}
