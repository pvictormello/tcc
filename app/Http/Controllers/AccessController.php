<?php

namespace App\Http\Controllers;

use App\Models\Access;
use App\Models\AccessImage;
use App\Models\ReproductivePhase;
use App\Models\SeedlingPhase;
use App\Models\VegetativePhase;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class AccessController extends Controller
{
    public function index()
    {
        $access = Access::all();

        return Inertia::render('Access/Index', ['access' => $access]);
    }

    public function create()
    {
        return Inertia::render('Access/Create');
    }

    public function store(Request $request)
    {
        $this->validate($request, [
            'sample' => 'required',
        ]);

        $access = Access::create([
            'sample' => $request->sample,
            'species' => $request->species,
            'variety' => $request->variety,
            'color' => $request->color,
            'generation' => $request->generation,
            'producer_name' => $request->producer_name,
            'coordinates' => $request->coordinates,
            'location' => $request->location,
            'phone' => $request->phone,
            'collection_date' => $request->collection_date,
            'observation' => $request->observation,
        ]);

        SeedlingPhase::create([
            'access_id' => $access->id,
            'cod1' => $request->cod1,
            'cod2' => $request->cod2,
            'cod3' => $request->cod3,
            'cod4' => $request->cod4,
            'cod5' => $request->cod5,
            'cod6' => $request->cod6,
        ]);

        VegetativePhase::create([
            'access_id' => $access->id,
            'cod7' => $request->cod7,
            'cod8' => $request->cod8,
            'cod9' => $request->cod9,
            'cod10' => $request->cod10,
            'cod11' => $request->cod11,
            'cod12' => $request->cod12,
            'cod13' => $request->cod13,
            'cod14' => $request->cod14,
            'cod15' => $request->cod15,
            'cod16' => $request->cod16,
            'cod17' => $request->cod17,
            'cod18' => $request->cod18,
            'cod19' => $request->cod19,
            'cod20' => $request->cod20,
            'cod21' => $request->cod21,
            'cod22' => $request->cod22,
            'cod23' => $request->cod23,
            'cod24' => $request->cod24,
            'cod25' => $request->cod25,
        ]);

        ReproductivePhase::create([
            'access_id' => $access->id,
            'cod26' => $request->cod26,
            'cod27' => $request->cod27,
            'cod28' => $request->cod28,
            'cod29' => $request->cod29,
            'cod30' => $request->cod30,
            'cod31' => $request->cod31,
            'cod32' => $request->cod32,
            'cod33' => $request->cod33,
            'cod34' => $request->cod34,
            'cod35' => $request->cod35,
            'cod36' => $request->cod36,
            'cod37' => $request->cod37,
            'cod38' => $request->cod38,
            'cod39' => $request->cod39,
            'cod40' => $request->cod40,
            'cod41' => $request->cod41,
            'cod42' => $request->cod42,
            'cod43' => $request->cod43,
            'cod44' => $request->cod44,
            'cod45' => $request->cod45,
            'cod46' => $request->cod46,
            'cod47' => $request->cod47,
            'cod48' => $request->cod48,
            'cod49' => $request->cod49,
            'cod50' => $request->cod50,
            'cod51' => $request->cod51,
            'cod52' => $request->cod52,
            'cod53' => $request->cod53,
            'cod54' => $request->cod54,
            'cod55' => $request->cod55,
            'cod56' => $request->cod56,
            'cod57' => $request->cod57,
            'cod58' => $request->cod58,
            'cod59' => $request->cod59,
            'cod60' => $request->cod60,
            'cod61' => $request->cod61,
            'cod62' => $request->cod62,
            'cod63' => $request->cod63,
            'cod64' => $request->cod64,
            'cod65' => $request->cod65,
            'cod66' => $request->cod66,
            'cod67' => $request->cod67,
            'cod68' => $request->cod68,
            'cod69' => $request->cod69,
            'cod70' => $request->cod70,
        ]);

        foreach ($request->images as $image) {
            $access->access_images()->create([
                'name' => $image
            ]);
        }

        return Redirect::route('access.index');
    }

    public function edit($id)
    {
        $access = Access::find($id);
        $seedling_phase = SeedlingPhase::find($id);
        $vegetative_phase = VegetativePhase::find($id);
        $reproductive_phase = ReproductivePhase::find($id);
        $images = AccessImage::where('access_id', $id)->get();

        return Inertia::render('Access/Edit', [
            'access' => $access,
            'seedlingPhase' => $seedling_phase,
            'vegetativePhase' => $vegetative_phase,
            'reproductivePhase' => $reproductive_phase,
            'images' => $images
        ]);
    }

    public function update(Request $request, $id)
    {
        $this->validate($request, [
            'sample' => 'required',
        ]);

        $access = Access::find($id);
        $seedling_phase = SeedlingPhase::find($id);
        $vegetative_phase = VegetativePhase::find($id);
        $reproductive_phase = ReproductivePhase::find($id);

        $access->update([
            'sample' => $request->sample,
            'species' => $request->species,
            'variety' => $request->variety,
            'color' => $request->color,
            'generation' => $request->generation,
            'producer_name' => $request->producer_name,
            'coordinates' => $request->coordinates,
            'location' => $request->location,
            'phone' => $request->phone,
            'collection_date' => $request->collection_date,
            'observation' => $request->observation,
        ]);

        $seedling_phase->update([
            'cod1' => $request->cod1,
            'cod2' => $request->cod2,
            'cod3' => $request->cod3,
            'cod4' => $request->cod4,
            'cod5' => $request->cod5,
            'cod6' => $request->cod6,
        ]);

        $vegetative_phase->update([
            'cod7' => $request->cod7,
            'cod8' => $request->cod8,
            'cod9' => $request->cod9,
            'cod10' => $request->cod10,
            'cod11' => $request->cod11,
            'cod12' => $request->cod12,
            'cod13' => $request->cod13,
            'cod14' => $request->cod14,
            'cod15' => $request->cod15,
            'cod16' => $request->cod16,
            'cod17' => $request->cod17,
            'cod18' => $request->cod18,
            'cod19' => $request->cod19,
            'cod20' => $request->cod20,
            'cod21' => $request->cod21,
            'cod22' => $request->cod22,
            'cod23' => $request->cod23,
            'cod24' => $request->cod24,
            'cod25' => $request->cod25,
        ]);

        $reproductive_phase->update([
            'cod26' => $request->cod26,
            'cod27' => $request->cod27,
            'cod28' => $request->cod28,
            'cod29' => $request->cod29,
            'cod30' => $request->cod30,
            'cod31' => $request->cod31,
            'cod32' => $request->cod32,
            'cod33' => $request->cod33,
            'cod34' => $request->cod34,
            'cod35' => $request->cod35,
            'cod36' => $request->cod36,
            'cod37' => $request->cod37,
            'cod38' => $request->cod38,
            'cod39' => $request->cod39,
            'cod40' => $request->cod40,
            'cod41' => $request->cod41,
            'cod42' => $request->cod42,
            'cod43' => $request->cod43,
            'cod44' => $request->cod44,
            'cod45' => $request->cod45,
            'cod46' => $request->cod46,
            'cod47' => $request->cod47,
            'cod48' => $request->cod48,
            'cod49' => $request->cod49,
            'cod50' => $request->cod50,
            'cod51' => $request->cod51,
            'cod52' => $request->cod52,
            'cod53' => $request->cod53,
            'cod54' => $request->cod54,
            'cod55' => $request->cod55,
            'cod56' => $request->cod56,
            'cod57' => $request->cod57,
            'cod58' => $request->cod58,
            'cod59' => $request->cod59,
            'cod60' => $request->cod60,
            'cod61' => $request->cod61,
            'cod62' => $request->cod62,
            'cod63' => $request->cod63,
            'cod64' => $request->cod64,
            'cod65' => $request->cod65,
            'cod66' => $request->cod66,
            'cod67' => $request->cod67,
            'cod68' => $request->cod68,
            'cod69' => $request->cod69,
            'cod70' => $request->cod70,
        ]);

        foreach ($request->images as $image) {
            if (empty(AccessImage::where('name', $image)->get()->toArray())) {
                $access->access_images()->create([
                    'name' => $image
                ]);
            }
        }

        return Redirect::route('access.index');
    }

    public function destroy($id)
    {
        AccessImage::where('access_id', $id)->delete();

        $reproductive_phase = ReproductivePhase::find($id);
        $reproductive_phase->delete();

        $vegetative_phase = VegetativePhase::find($id);
        $vegetative_phase->delete();

        $seedling_phase = SeedlingPhase::find($id);
        $seedling_phase->delete();

        $access = Access::find($id);
        $access->delete();


        return Redirect::route('access.index');
    }

    public function store_image(Request $request)
    {
        $this->validate($request, [
            'image' => 'required|image|mimes:png,jpg,jpeg',
        ]);

        $image = $request->file('image');
        $image_name = time() . '.' . $image->getClientOriginalExtension();
        $image->move(public_path('images/uploads'), $image_name);

        $response = array("image" => $image_name);

        return json_encode($response);
    }

    public function destroy_image(Request $request)
    {
        AccessImage::where('name', $request->image)->delete();
        unlink(public_path() . '/images/uploads/' . $request->image);
    }
}
