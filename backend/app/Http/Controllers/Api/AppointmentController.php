<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Services\AppointmentService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use RuntimeException;

class AppointmentController extends Controller
{
    public function __construct(private readonly AppointmentService $appointmentService)
    {
    }

    public function index(Request $request): JsonResponse
    {
        try {
            $status = $request->query('status');
            $appointments = $this->appointmentService->list($status);

            return response()->json([
                'data' => $appointments,
                'meta' => [
                    'total' => $appointments->count(),
                    'filters' => [
                        'status' => $status,
                    ],
                ],
            ]);
        } catch (RuntimeException $exception) {
            return response()->json([
                'message' => $exception->getMessage(),
            ], $exception->getCode() ?: 500);
        }
    }
}
