import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import userModel from '../Models/user-model';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  // constructor(private http: HttpClient) {
  //   this.users = () => { getAll }
  // }
  // const users: userModel[]

  setCurrentUser(fullName: string, password: string) {

  }
  // getAll(): userModel[] {
  //   return 
  // }
  getById(id: number) {

  }
  add(user: userModel) {

  }
  update(user: userModel) {

  }
  delete(id: number) {

  }

}
