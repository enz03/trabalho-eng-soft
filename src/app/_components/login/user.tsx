// userStore.ts
let user: string | null | undefined = null;

export const setUser = (newUser: string | undefined): void => {
  user = newUser;
};

export const getUser = (): string | null | undefined => {
  return user;
};