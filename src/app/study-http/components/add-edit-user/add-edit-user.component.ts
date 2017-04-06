import { Component, OnInit } from '@angular/core';
import { IUser } from './../../defines/user.interface';
import { UserService } from './../../services/user.service';
import { Subscription } from 'rxjs/Rx';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
	selector: 'add-edit-user',
	templateUrl: './add-edit-user.component.html',
	styleUrls: ['./add-edit-user.component.css']
})
export class AddEditUserComponent implements OnInit {

	user : IUser = null;
	subscriptionParams : Subscription;
	errorMessage : string;

	constructor(
		private _routerService : Router,
		private _activatedRouteService : ActivatedRoute,
		private _userService : UserService
	) { }

	ngOnInit() {
		this.subscriptionParams = this._activatedRouteService.params.subscribe((params : Params) => {
			let id : number = parseInt(params['id']);
			if(id){
				this.user = {
					id : id,
					username: "edited",
					password: "edited",
					email: "edited@gcs-vn.com",
					fullname: "edited",
					stafftitle: "",
					salesorg: "",
					userrole: "",
					status: false
				};
				this._userService.editItem(id,this.user).subscribe(
					(data : IUser) => { this.user = data, this._routerService.navigate(['users']) },
					(error : any) => { this.errorMessage = <any>error }
				);
			}else{
				this.user = {
					id: 5,
					username: "added",
					password: "added",
					email: "added@gcs-vn.com",
					fullname: "added",
					stafftitle: "",
					salesorg: "",
					userrole: "",
					status: false
				};
				this._userService.addItem(this.user).subscribe(
					(data : IUser) => { this.user = data, this._routerService.navigate(['users']) },
					(error : any) => { this.errorMessage = <any>error }
				);
			}
		});
	}

}
