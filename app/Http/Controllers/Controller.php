<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    protected function APIResponse($success = true, $error = null, $data = null, $status = null) {
        if($success && !$status) {
            $status = 200;
        } else if(!$success && !$status) {
            if(is_null($error)) {
                $status = 500;
            } else {
                $status = 400;
            }
        }
        return response()->json([
            'success' => $success,
            'error' => $error,
            'data' => $data
        ], !$status ? 500 : $status)->setStatusCode($status);
    }
}
