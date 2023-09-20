yii.confirm = function (message, ok, cancel) {
    var options = {
        message: message,
        onConfirm: ok,
        onCancel: cancel,
    };

    confirmationModal(options);
};
