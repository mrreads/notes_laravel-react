<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\Note;

class NoteController extends Controller
{
    public function show()
    {
        $data = Note::all();
        return response()->json($data);
    }

}
