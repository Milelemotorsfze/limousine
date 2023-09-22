<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LoginOtp extends Model
{
    use HasFactory;
    protected $table = 'login_otps';
    protected $fillable = [
        'user_id',
        'otp',
        'expired_at',
    ];

}
