<?php

namespace xililo\YiiConfirm;

use yii\web\AssetBundle;

class ConfirmAssets extends AssetBundle
{
    public $sourcePath = '@vendor/xililo/yii-confirm/src/assets';

    public $js = [
        'confirm-override.js',
        'confirm-js.js',

    ];
    public $css = [
        'confirm-js.css',
    ];

    public $depends = [
        'yii\web\JqueryAsset',
    ];
}