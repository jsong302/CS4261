import { NavController } from 'ionic-angular';
import { SelectRole } from '../select-role/select-role';

export class Utils {
  static home(navCtrl) {
    navCtrl.push(SelectRole, {});
  }
}
