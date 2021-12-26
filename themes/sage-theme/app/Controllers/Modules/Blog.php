<?php

namespace App\Controllers\Modules;

class Blog
{
    public function dataModule($module)
    {
        return (object) [
            'module' => $module
        ];
    }
}
