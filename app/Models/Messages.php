<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use DB;

use User;

class Messages extends Model
{
    use HasFactory;
    use SoftDeletes;


    // from
    public function getTo()
    {
        return $this->hasOne('App\Models\User', 'id', 'from');
    }

    // to
    public function getSender()
    {
        return $this->hasOne('App\Models\User', 'id', 'to');
    }

  
    
}
