import { Component, OnInit, OnDestroy } from '@angular/core';
import { IUser } from './../../defines/user.interface';
import { Subscription } from 'rxjs/Rx';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserService } from './../../services/user.service';

@Component({
  selector: 'user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit, OnDestroy {

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
			this._userService.getItem(id).subscribe(
				(data : IUser) => { this.user = data },
				(error : any) => { this.errorMessage = <any>error }
			);
		});
	}

	ngOnDestroy(){
		this.subscriptionParams.unsubscribe();
	}

	backToUserList(){
		this._routerService.navigate(['users']);
	}

}
