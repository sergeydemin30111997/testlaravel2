<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\Specialization;
use App\Models\User;
use App\Models\UserStatus;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
//         UserStatus::factory(10)->create();
        Specialization::factory()->count(3)->create();
        $specializations = Specialization::factory()->count(3)->create();
        $user = User::factory()
            ->count(10)
            ->has(
                UserStatus::factory()
            )
            ->hasAttached(
                $specializations
            )
            ->create();
        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
    }
}
