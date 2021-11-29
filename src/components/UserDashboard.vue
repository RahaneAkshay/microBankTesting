/* eslint-disable @typescript-eslint/ban-types */
<template>
 <div>
      <div class="offset-3 col-6"> 
        <table class="table">
<thead>
<tr>
<th scope="col">Full Name</th>
<th scope="col">Email</th>
<th scope="col">Password</th>
<th scope="col">Edit</th>
</tr>
</thead>
<tbody>
<tr v-for="(user,index) in userRecords" :key="user.email">
<th>{{user.fullName}}</th>
<td>{{user.email}}</td>
<td>{{user.password}}</td>
<td><button type="button" id="edit" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" @click="openUserModal(user,index)">
Update</button></td>
</tr>
</tbody>
</table>
  </div>
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Update User Data</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
          <form>
          <div class="mb-3">
            <label for="fullName" class="col-form-label">fullName:</label>
            <input type="text" class="form-control" id="fullName" v-model="currentUser.fullName">
          </div>
<div class="mb-3">
            <label for="email" class="col-form-label">Email:</label>
            <input type="email" class="form-control" id="email" v-model="currentUser.email">
          </div>
<div class="mb-3">
            <label for="password" class="col-form-label">Password:</label>
            <input type="text" class="form-control" id="password" v-model="currentUser.password">
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="beforeUpdate()">Save changes</button>
      </div>
    </div>
  </div>
</div>
 </div>
</template>
<script lang="ts">
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { UserModel } from '@/model/user.model';
import { Component, Vue } from 'vue-property-decorator';
import { namespace } from 'vuex-class'

const User = namespace('User')
@Component({
  components: {
  },
})
export default class UserDashboard extends Vue {
@User.Getter
public getAllUsers!: Array<any>
@User.Mutation
  public updateUser!: (newUser: UserModel) => void;
  currentUser = {
    fullName:'',
    email:'',
    password:'',
    index:0
  }
userRecords:any = []
openUserModal(user:UserModel,index:number):void{
this.currentUser.fullName = user.fullName
this.currentUser.email = user.email
this.currentUser.password = user.password
this.currentUser.index = index
}
created():void{
this.userRecords = this.getAllUsers
}
beforeUpdate():void{
  this.userRecords = this.getAllUsers
  this.userRecords[this.currentUser.index] = this.currentUser
  this.updateUser(this.userRecords)
}
}
</script>
<style>