/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { VuexModule, Module, Mutation, Action} from 'vuex-module-decorators'
import {data} from '../utility/data'
import {UserModel} from '../model/user.model'
@Module({ namespaced: true, name: 'user', })
class User extends VuexModule {
  public users:Array<UserModel> =data
  @Mutation
  public setUser(newUser:UserModel): void {
   this.users =  [...this.users,newUser]
  }
  @Action
  public addUser(newUser: UserModel): void {
    this.context.commit('setUser', newUser)
  }
  @Mutation
  public updateUser(newUser:UserModel[]): void {
   this.users =  newUser
  }
  get getAllUsers(){
      return this.users
  }
}

export default User