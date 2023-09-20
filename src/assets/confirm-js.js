function confirmationModal(options) {
    var settings = $.extend(
        {
            title: 'Confirmation',
            message: 'Are you sure?',
            confirmText: 'Confirm',
            cancelText: 'Cancel',
            onConfirm: function () { },
            onCancel: function () { }
        },
        options
    );

    var modalHtml = `
      <div class="custom-confirmation-modal">
        <div class="yii-confirm-overlay"></div>
        <div class="yii-confirm-dialog">
          <div class="yii-confirm-content">
            <div class="yii-confirm-header">
              <h5 class="yii-confirm-title">${settings.title}</h5>
              <button type="button" class="yii-confirm-close">&times;</button>
            </div>
            <div class="yii-confirm-body">
              <p>${settings.message}</p>
            </div>
            <div class="yii-confirm-footer">
              <button type="button" class="yii-confirm-btn yii-confirm-cancel-btn">${settings.cancelText}</button>
              <button type="button" class="yii-confirm-btn yii-confirm-confirm-btn">${settings.confirmText}</button>
            </div>
          </div>
        </div>
      </div>
    `;

    var $modal = $(modalHtml);

    $modal.find('.yii-confirm-confirm-btn').on('click', function () {
        settings.onConfirm();
        $modal.remove();
    });

    $modal.find('.yii-confirm-cancel-btn, .yii-confirm-close').on('click', function () {
        settings.onCancel();
        $modal.remove();
    });

    $('body').append($modal);
}