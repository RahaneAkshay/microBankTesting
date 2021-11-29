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
            <input v-model="user.fullName" type="text" name="name" />
          </div>
          <div>
            <label>Date of incorparation:</label>
            <input v-model="user.dateOfIncorporation" type="date" name="date" />
          </div>
          <div>
            <label>Email:</label>
            <input v-model="user.email" type="text" name="email" />
          </div>
          <div>
            <label>Password:</label>
            <input v-model="user.password" type="password" name="password" />
          </div>
          <div>
            <label>Confirm Password:</label>
            <input
              v-model="user.confirmPassword"
              type="password"
              name="confirmpassword"
            />
          </div>

          <div>
            <button
              type="button"
              @click="getFormData()"
              :disabled="false"
              id="btn"
            >
              create account
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
import { namespace } from "vuex-class";
import { UserModel } from "../model/user.model";
const User = namespace("User");
@Component({})
export default class CreateAccount extends Vue {
  @User.Mutation
  public setUser!: (newUser: UserModel) => void;
  user = {
    fullName: "",
    dateOfIncorporation: new Date(),
    email: "",
    password: "",
    confirmPassword: "",
  };
  isValid = false;
  private errors = "";
  getFormData() {
    // eslint-disable-next-line no-constant-condition
    if (this.checkFormStatus()) {
      this.$router.push("/UserDashboard");
      this.setUser(this.user);
    } else {
      alert(this.errors);
      this.errors = "";
    }
  }
  checkFormStatus(): boolean {
    if (this.user.fullName === "") {
      this.errors += "Enter the user name \n";
    }
    if (this.user.email === "") {
      this.errors += "Enter the email \n";
    }
    if (this.user.password === "") {
      this.errors += "Enter the password \n";
    }
    if (this.user.confirmPassword === "") {
      this.errors += "Enter the confirm password \n";
    }
    return this.errors.length > 1 ? false : true;
  }
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
