import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { GroceriesServiceProvider } from '../../providers/groceries-service/groceries-service';


/*
  Generated class for the InputDialogServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class InputDialogServiceProvider {

  constructor(public alertCtrl: AlertController, public dataService: GroceriesServiceProvider) {
    console.log('Hello InputDialogServiceProvider Provider');
  }

  showPrompt(item?, index?) {
    const prompt = this.alertCtrl.create({
      title: item ? 'Edit Item' : 'Add Item',
      message: item ? "Please edit item..." : "Please enter itme...",
      inputs: [
        {
          name: 'name',
          placeholder: 'Name',
          value: item ? item.name : null
        },
        {
          name: 'quantity',
          placeholder: 'Quantity',
          value: item ? item.quantity : null
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: item => {
            console.log('Saved clicked');
            if (index !== undefined){
              this.dataService.editItem(item, index);
            } else {
              this.dataService.addItem(item);
            };
            this.dataService.editItem(item, index);
          }
        }
      ]
    });
    prompt.present();
  }

  showRadio(item) {
    let alert = this.alertCtrl.create();
    alert.setTitle('Quantity');

    alert.addInput({
      type: 'radio',
      label: '1',
      value: '1',
      checked: true
    });

    alert.addInput({
      type: 'radio',
      label: '2',
      value: '2'
    });

    alert.addInput({
      type: 'radio',
      label: '3',
      value: '3'
    });

    alert.addInput({
      type: 'radio',
      label: '4',
      value: '4'
    });

    alert.addInput({
      type: 'radio',
      label: '5',
      value: '5'
    });

    alert.addButton('Cancel');
    alert.addButton({
      text: 'OK',
      handler: data => {
        item.quantity = data;
      }
    });
    alert.present();
  };

}
