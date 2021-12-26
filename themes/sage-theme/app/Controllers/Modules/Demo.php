<?php

namespace App\Controllers\Modules;

// use App\Services\Queries;

class Demo
{
    public function dataModule($module)
    {
        return (object) [
            'module' => $module,
            'title' => $module['title'],
            'desc' => $module['desc'],
            //'example' => $this->getExample(),
        ];
    }

    // // Example lấy data trước khi xuất ra view
    // protected function getExample()
    // {
    //     return Queries::testExample();
    // }
}
