<?php

namespace App\Http\Controllers;

use App\Models\Log;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log as FacadesLog;
use Inertia\Inertia;

class LogController extends Controller
{
    public function index(Request $request)
    {
        $sort = $request->get('sort', 'id');
        $order = $request->get('order', 'asc');

        $filters = $request->only(['user', 'action_type', 'timestamp', 'description']);

        $logs = Log::orderBy($sort, $order)
            ->with('user')
            ->when(isset($filters['user']), function ($query) use ($filters) {
                $query->whereHas('user', function ($subQuery) use ($filters) {
                    $subQuery->where('name', 'like', "%{$filters['user']}%");
                });
            })
            ->when(isset($filters['action_type']), function ($query) use ($filters) {
                return $query->where('action_type', 'like', "%{$filters['action_type']}%");
            })
            ->when(isset($filters['timestamp']), function ($query) use ($filters) {
                return $query->where('timestamp', 'like', "%{$filters['timestamp']}%");
            })
            ->when(isset($filters['description']), function ($query) use ($filters) {
                return $query->where('description', 'like', "%{$filters['description']}%");
            })
            ->paginate(15);

        return Inertia::render('Logs/Index', [
            'logs' => $logs,
            'currentSort' => $sort,
            'currentOrder' => $order,
            'currentFilters' => $filters,
        ]);
    }
}
