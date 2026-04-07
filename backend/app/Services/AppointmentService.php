<?php

namespace App\Services;

use Illuminate\Support\Collection;
use Illuminate\Support\Facades\File;
use RuntimeException;

class AppointmentService
{
    public function list(?string $status = null): Collection
    {
        $appointments = $this->loadFromJson();

        if ($status !== null && $status !== '') {
            $appointments = $appointments
                ->filter(fn (array $appointment) => ($appointment['status'] ?? null) === $status)
                ->values();
        }

        return $appointments
            ->sortBy('appointmentDate')
            ->values();
    }

    private function loadFromJson(): Collection
    {
        $jsonPath = env('APPOINTMENTS_JSON_PATH', base_path('../data/appointments.json'));

        if (!File::exists($jsonPath)) {
            throw new RuntimeException('Arquivo de agendamentos nao encontrado.', 404);
        }

        $decoded = json_decode(File::get($jsonPath), true);

        if (!is_array($decoded)) {
            throw new RuntimeException('Formato invalido no arquivo de agendamentos.', 422);
        }

        return collect($decoded);
    }
}
