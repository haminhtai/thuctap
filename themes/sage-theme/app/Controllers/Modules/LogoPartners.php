<?php

namespace App\Controllers\Modules;

class LogoPartners
{
    public function dataModule($module)
    {
        return (object) [
            'module' => $module
        ];
    }
}
