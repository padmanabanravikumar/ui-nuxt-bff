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
      const response = await $fetch('/api/account/login', {
        method: 'POST',
        body: {
          username: 'ravi@example.com',
          password: 'Ravi@321'
        }
      });
      if (response.isSuccess) {
        const response = await $fetch('/api/account/user-info');
        this.isAuthenticated = true;
        this.authUser = response.data as any;
      }
    },
    async logout() {
      const response = await $fetch('/api/account/logout');
      if (response.isSuccess) {
        this.isAuthenticated = false;
        this.authUser = undefined;
      }
    },
    async refresh() {
      const response = await $fetch('/api/account/refresh');
      if (response.isSuccess) {
        const response = await $fetch('/api/account/user-info');
        this.isAuthenticated = true;
        this.authUser = response.data as any;
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