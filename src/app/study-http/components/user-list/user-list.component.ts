import { Component, OnInit } from '@angular/core';
import { UserService } from './../../services/user.service';
import { IUser } from './../../defines/user.interface';
import { Router } from '@angular/router';

@Component({
	selector: 'user-list',
	templateUrl: './user-list.component.html',
	styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

	errorMessage : string;
	users : IUser[] = [];
	user : IUser;

	constructor(
		private _userService : UserService,
		private _routerService : Router,
	) { 

	}

	ngOnInit() {

	}

	getItems(){
		this._userService.getItems().subscribe(
			(data : IUser[]) => { this.users = data },
			(error : any) => { this.errorMessage = <any>error }
		);
	}

	getItem(id : number){
		this._userService.getItem(id).subscribe(
			(data : IUser) => { this.user = data },
			(error : any) => { this.errorMessage = <any>error }
		);
	}

	addItem(){
		this._routerService.navigate(['user/add']);
	}

	editItem(id : number){
		this._routerService.navigate(['user',id,'edit']);
	}

	deleteItem(id : number){
		this._userService.deleteItem(id).subscribe(
			(data : IUser) => { 
				for (var i = 0; i < this.users.length; i++) {
					if(this.users[i].id == id){
						this.users.splice(i,1);
						break;
					}
				}
			},
			(error : any) => { this.errorMessage = <any>error }
		);
	}

	viewDetail(id : number){
		this._routerService.navigate(['user',id]);
	}

}
