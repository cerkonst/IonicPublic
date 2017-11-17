import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {
	EnterText: string;
	constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
		
	}
	
	doPrompt() {
		let prompt = this.alertCtrl.create({
			title: 'PopupIsMine',
			message: "Enter here anything!",
			inputs: [
				{
					name: 'title',
					placeholder: 'Your text'
				},
			],
			buttons: [
				{
					text: 'Cancel',
					handler: data => {
					this.EnterText='Cancel clicked';
					}
				},
				{
					text: 'Save',
					handler: data => {
					this.EnterText=data.title;
					}
				}
			]
		});
		prompt.present();
	}
}