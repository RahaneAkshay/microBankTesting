<template>
  <div class="container">
    <div class="left-container">
      <div class="logo-container"></div>
      <h1>Micro Bank</h1>
    </div>
    <div>
      <h1>Create an Account</h1>
      <div>
        <form name="form">
          <div>
            <label>Fullname:</label>
            <input
              v-model="userFormGroup.props.fullName"
              type="text"
              name="name"
            />
          </div>
          <div>
            <label>Date of incorparation:</label>
            <input
              v-model="userFormGroup.props.dateOfIncorporation"
              type="date"
              name="date"
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              v-model="userFormGroup.props.email"
              type="text"
              name="email"
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              v-model="userFormGroup.props.password"
              type="password"
              name="password"
            />
          </div>
          <div>
            <label>Confirm Password:</label>
            <input
              v-model="userFormGroup.props.confirmPassword"
              type="password"
              name="confirmpassword"
            />
          </div>

          <div>
            <button
              type="button"
              class="btn btn-outline-warning"
              @click="getFormData()"
              :disabled="!userFormGroup.valid"
              id="btn"
            >
              <router-link to="/UserDashboard" >Create Account</router-link>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class CreateAccount extends Vue {
}
</script>

<style scoped>
.container {
  display: flex;
  width: 98%;
  margin: auto;
  height: 622px;
}
.container > div {
  width: 50%;
}
h1 {
  margin-top: 40px;
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 44px;
  color: #1a1a1a;
}
form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
form > div {
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: flex-start;
}
input {
  width: 320px;
  height: 50px;
  background: #e8e8e8;
  border-radius: 12px;
  border: none;
}
button {
  border: none;
  outline: none;
  width: 320px;
  height: 50px;
  background: #d90429;
  box-shadow: 0px 6px 28px 5px rgba(243, 230, 229, 0.3);
  border-radius: 12px;
  color: #ffff;
}
.left-container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #d90429;
}
.logo-container {
  width: 400px;
  height: 400px;
  margin: auto;
  background-image: url("~@/assets/iconn.png");
}
.left-container h1 {
  width: 401px;
  height: 80px;
  font-family: Orbitron;
  font-style: normal;
  font-weight: 900;
  font-size: 64px;
  line-height: 80px;
  text-align: center;
  color: #ffffff;
}
</style>