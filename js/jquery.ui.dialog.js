/**
 * @file
 * Fixes required to get jQuery UI dialogs and Bootstrap working together better
 */
(function ($, Drupal) {
  "use strict";

  Drupal.behaviors.bootstrapJqueryModals = {
    attach: function (context) {
	  // listen for jQuery's open event, then make needed adjustments
	  // add some bootstrap glyphicon classes to tidy the button up
      $(document).on("dialogopen", function (event, ui) {
        $('button.ui-dialog-titlebar-close').addClass('glyphicon').addClass('glyphicon-remove');
      });
    }
  }
})(jQuery, Drupal);
