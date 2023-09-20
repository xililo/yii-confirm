<?php

namespace xililo\yiiConfirm\assets;

use yii\web\AssetBundle;

class ConfirmOverrideAsset extends AssetBundle
{
    public $sourcePath = '@vendor/xililo/yii-confirm/assets';

    public $js = [
        'confirm-override.js',
    ];

    public $depends = [
        'yii\web\JqueryAsset',
    ];
}