<?php

namespace App\Controllers\Modules;

class ModEmcompass
{
    public function dataModule($module)
    {
        return (object) [
            'module' => $module
        ];
    }
}
