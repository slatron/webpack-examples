/**
*    This file contains data intended to move to a
*      user configuration page.
**/
angular.module('Example')
.factory('userConfigDataFactory', function(gettext) {
  var userConfigData = {
    /// Heading for email preferences page
    header_email_alert_preferences: gettext('Email Alert Preferences'),

    /**
    *   Possible event types:
    *   - 'lists-due-mine'
    *   - 'interaction-follow-all'
    **/
    eventTypes: [
      {
        type: 'lists-due-mine',
        color: 'purple'
      },
      {
        type: 'interaction-follow-all',
        color: 'green-fade'
      },
    ]
  };

  return userConfigData;
});
