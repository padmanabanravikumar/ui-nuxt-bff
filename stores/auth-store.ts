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

export const authStore = defineStore<'auth', AuthStore>('auth', {
  state: () => ({
    isAuthenticated: false
  }),
  actions: {
    async login() {
      const { error } = await useFetch('/api/account/login');
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
    }
  }
});