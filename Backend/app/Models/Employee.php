<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Task;
use App\Models\User;

class Employee extends Model
{
    use HasFactory;

    public function task(){

       return $this->hasMany(Task::class);
    }

    public function user(){

        return $this->belongsTo(User::class);
    }
}
