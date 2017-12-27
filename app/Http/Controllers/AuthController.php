<?php

namespace App\Http\Controllers;

use App\User;
use Auth;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class AuthController extends Controller
{
    public function login(Request $request) {
        try {
            $inputData = $this->validate($request, [
                'email' => 'string|required|email',
                'password' => 'string|required'
            ]);
        }catch (ValidationException $e) {
            return $this->APIResponse(false, $e->validator->errors()->first(), null, 422);
        }

        if (!Auth::attempt($inputData)) {
            return $this->APIResponse(false, "Invalid email or password", null, 403);
        }

        return $this->APIResponse(true, null, ["token" => Auth::issue(), "user" => Auth::user()]);
    }

    public function createUser(Request $request) {
        try {
            $inputData = $this->validate($request, [
                'name' => 'string|required',
                'email' => 'string|required|unique:users|email',
                'password' => 'string|required|confirmed'
            ]);
        }catch (ValidationException $e) {
            return $this->APIResponse(false, $e->validator->errors()->first(), null, 422);
        }

        try {
            $user = new User();
            $user->name = $inputData["name"];
            $user->email = $inputData["email"];
            $user->password = Hash::make($inputData["password"]);
            $user->save();
        }catch (\Exception $e) {
            $this->APIResponse(false, "An internal error occurred", null, 500);
        }

        return $this->APIResponse(true, null, ["verification_sent_to" => $user->email]);
    }
}
