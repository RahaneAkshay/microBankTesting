import {
  mount,
  Wrapper,
  RouterLinkStub,
  createLocalVue,
} from "@vue/test-utils";
import CreateAccount from "@/components/CreateAccount.vue";
import { VueConstructor } from "vue";
import Vuex, { Store } from "vuex";
import { data } from "@/utility/data";

let localVue: VueConstructor<Vue>;
let store: Store<any>;
let state: any;
let mutations: any;
let getters: any;
const routerMock = {
  $route: {
    name: "createAccount",
  },
  $router: {
    replace: jest.fn(),
    push: jest.fn(),
  },
};
let wrapper: Wrapper<
  CreateAccount & {
    [key: string]: any;
  }
>;
beforeEach(() => {
  localVue = createLocalVue();
  localVue.config.ignoredElements = [/vl*/];
  localVue.prototype.$notify = jest.fn();
  localVue.use(Vuex);
  mutations = {
    setUser: jest.fn(),
  };
  store = new Vuex.Store({
    modules: {
      user: {
        mutations,
        namespaced: true,
      },
    },
  });
  wrapper = mount(CreateAccount, {
    localVue,
    mocks: routerMock,
    store,
  });
});

describe("CreateAccount.vue", () => {
  it("should mount create account and check its component", () => {
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.is(CreateAccount)).toBeTruthy();
  });

  it("check the error string", async () => {
    await wrapper.find("button").trigger("click");
    expect(wrapper.vm.errors).toContain("");
  });
  it("check the alert box", async () => {
    const button = wrapper.find("button");
    expect(button.exists()).toBeTruthy();
    await wrapper.setData({ isValid: false });
    await button.trigger("click");
    wrapper.vm.getFormData();
    jest.spyOn(window, "alert").mockReturnValue();
  });

  it("Should able to navigate to UserDashord page", async () => {
    routerMock.$route.name = "UserDashboard";
    const button = wrapper.find("button");
    expect(button.exists()).toBeTruthy();
    await button.trigger("click");
    await wrapper.setData({ isValid: true });
    await wrapper.vm.checkFormStatus();
    wrapper.vm.getFormData();
    const routerSpy = jest.spyOn(wrapper.vm.$router, "push");
    expect(routerSpy).toHaveBeenCalledWith({
      name: "UserDashboard",
    });
    await wrapper.setData({ isValid: false });
    await button.trigger("click");
    wrapper.vm.getFormData();
    jest.spyOn(window, "alert").mockReturnValue();
  });

  it("check errors present", async () => {
    const button = wrapper.find("button");
    await button.trigger("click");
    await wrapper.setData({ isValid: false });
    wrapper.vm.getFormData();
  });
});
