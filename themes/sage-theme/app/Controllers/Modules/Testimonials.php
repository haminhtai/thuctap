<?php

namespace App\Controllers\Modules;

class Testimonials
{
    public function dataModule($module)
    {
        return (object) [
            'module' => $module
        ];
    }
}
