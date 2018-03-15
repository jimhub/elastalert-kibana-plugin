import 'angular-aria';
import 'angular-animate';
import 'angular-material';
import 'angular-material/angular-material.css';
import './services/api';
import { uiModules as modules } from 'ui/modules';

modules
  .get('app/elastalert', ['ngMaterial'])
  .controller('elastalertRootController', function ($scope, $location) {
  });
