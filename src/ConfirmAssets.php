<?php

namespace xililo\YiiConfirm;

use yii\web\AssetBundle;

class ConfirmAssets extends AssetBundle
{
    public $sourcePath = '@vendor/xililo/yii-confirm/src/assets';

    public $js = [
        'confirm-override.js',
    ];

    public $depends = [
        'yii\web\JqueryAsset',
    ];
}