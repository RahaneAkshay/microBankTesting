/* eslint-disable prefer-const */
import { mount, Wrapper, createLocalVue } from "@vue/test-utils";
import UserDashboard from "@/components/UserDashboard.vue";
import { VueConstructor } from "vue";
import Vuex, { Store } from "vuex";
import { data } from "@/utility/data";

let localVue: VueConstructor<Vue>;
let store: Store<any>;
let state: any;
let mutations: any;
let getters: any;

let wrapper: Wrapper<
  UserDashboard & {
    [key: string]: any;
  }
>;
beforeEach(() => {
  localVue = createLocalVue();
  localVue.use(Vuex);
  localVue.config.ignoredElements = [/vl*/];
  localVue.prototype.$notify = jest.fn();
  mutations = {
    updateUser: jest.fn(),
  };

  store = new Vuex.Store({
    modules: {
      user: {
        state,
        mutations,
        getters: {
          getAllUsers: () => data,
        },
        namespaced: true,
      },
    },
  });

  // eslint-disable-next-line prefer-const
  wrapper = mount(UserDashboard, {
    localVue,
    store,
    methods: {
      beforeUpdate: jest.fn(),
    },
  });
});
const User = {
  fullName: "Akshay",
  email: "akshay@test.com",
  password: "pass123",
  index: 0,
};

describe("UserDashboard.vue", () => {
  it("should mount create account and check its component", () => {
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.is(UserDashboard)).toBeTruthy();
  });
  it("Should able to see create account  button", () => {
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find("button").exists()).toBe(true);
  });
  it("Should able to see modal", async () => {
    await wrapper.find(".btn").trigger("click");
    expect(wrapper.find(".modal").exists()).toBe(true);
  });

  it("Should able to see modal", async () => {
    await wrapper.find(".btn").trigger("click");
    expect(wrapper.find(".modal").exists()).toBe(true);
  });

  it("Should able to set value to current user", async () => {
    wrapper.vm.openUserModal(User, 1);
    expect(wrapper.vm.currentUser.fullName).toBe("Akshay");
    expect(wrapper.vm.currentUser.email).toBe("akshay@test.com");
    expect(wrapper.vm.currentUser.password).toBe("pass123");
  });

  it("Should able to update user record", async () => {
    await wrapper.setData({
      currentUser: {
        fullName: "Akshay",
        email: "akshay@test.com",
        password: "pass123",
        index: 0,
      },
    });

    const userRecords = wrapper.vm.userRecords;
  });
  it("Should call beforeUpdate lifecycle hook", async () => {
    await wrapper.find("button").trigger("click");
    expect(wrapper.vm.beforeUpdate).toBeCalled();
  });
});
