interface User {
  preferred_name: string
  name: string
  roles: string
  sub: string
  iss: string
  iat: number
  exp: number
  email: string
}

interface AuthStore {
  isAuthenticated: boolean,
  authUser?: User
}

export const useAuthStore = defineStore('auth', {
  state: (): AuthStore => ({
    isAuthenticated: false
  }),
  actions: {
    async login() {
      const response = await $fetch('/api/account/login');
      if (response.isSuccess) {
        const response = await $fetch('/api/account/user-info');
        this.isAuthenticated = true;
        this.authUser = response.data as any;
      }
    },
    async logout() {
      const { error } = await useFetch('/api/account/logout');
      if (!error) {
        this.isAuthenticated = false;
        this.authUser = undefined;
      }
    },
    async refresh() {
      const { error } = await useFetch('/api/account/refresh');
      if (error) {
        this.isAuthenticated = false;
      } else {
        const { data, error } = await useFetch('/api/account/user-info');
        if (!error) {
          this.isAuthenticated = true;
          this.authUser = data.value?.data as any;
        }
      }
    },
    async fetchUser() {
      const { data } = await useFetch('/api/account/user-info');
      if (data.value?.isSuccess) {
        this.isAuthenticated = true;
        this.authUser = data.value?.data as any
      }
    }
  }
});