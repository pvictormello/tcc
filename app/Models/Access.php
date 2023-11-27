<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Access extends Model
{
    use HasFactory;

    protected $table = "access";

    public $timestamps = false;

    protected $hidden = ['created_by_id', 'owner_id'];

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
        'created_by_id',
        'owner_id',
        'public',
    ];

    public function seedling_phase(): HasOne
    {
        return $this->hasOne(SeedlingPhase::class, 'access_id');
    }

    public function access_images(): HasMany
    {
        return $this->hasMany(AccessImage::class, 'access_id');
    }

    public function created_by(): BelongsTo
    {
        return $this->BelongsTo(User::class, 'created_by_id', 'id')->select(['id', 'name']);
    }

    public function owner(): BelongsTo
    {
        return $this->BelongsTo(User::class, 'owner_id', 'id')->select(['id', 'name']);
    }
}
