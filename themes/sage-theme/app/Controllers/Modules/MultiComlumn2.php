<?php

namespace App\Controllers\Modules;

class MultiComlumn2
{
    public function dataModule($module)
    {
        return (object) [
            'module' => $module
        ];
    }
}
