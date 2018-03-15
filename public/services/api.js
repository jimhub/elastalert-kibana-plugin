import chrome from 'ui/chrome';
import { uiModules as modules } from 'ui/modules';
import path from 'path';

modules
  .get('app/elastalert')
  .service('api', function ($http) {
    return function (request) {
      if (request && request.url) {
        request.url = chrome.addBasePath(path.join('/api/elastalert', request.url));
      }

      return $http(request);
    };
  });
