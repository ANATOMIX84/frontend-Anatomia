import initialUsers from "../data/users.json";
import { storageService } from "../services/storageService";
import type {
  LoginCredentials,
  RegisterCredentials,
  User,
  UserRecord,
} from "../types/auth";

const SESSION_KEY = "app_session";
const USERS_KEY = "app_users";

const defaultUsers = initialUsers as UserRecord[];

function getUsers(): UserRecord[] {
  return storageService.get<UserRecord[]>(USERS_KEY) ?? defaultUsers;
}

function createSessionUser(user: UserRecord): User {
  return {
    id: user.id,
    name: user.name,
    carnet: user.carnet,
    role: user.role,
  };
}

export const authRepository = {
  login(credentials: LoginCredentials): User | null {
    const foundUser = getUsers().find(
      (user) =>
        user.carnet === credentials.carnet &&
        user.password === credentials.password
    );

    if (!foundUser) {
      return null;
    }

    const sessionUser = createSessionUser(foundUser);
    storageService.set<User>(SESSION_KEY, sessionUser);

    return sessionUser;
  },

  register(credentials: RegisterCredentials): User | null {
    const users = getUsers();

    const alreadyExists = users.some(
      (user) => user.carnet === credentials.carnet
    );

    if (alreadyExists) {
      return null;
    }

    const newUser: UserRecord = {
      id: crypto.randomUUID(),
      name: credentials.name.trim(),
      carnet: credentials.carnet.trim(),
      password: credentials.password,
      role: "USUARIO",
    };

    storageService.set<UserRecord[]>(USERS_KEY, [...users, newUser]);

    const sessionUser = createSessionUser(newUser);
    storageService.set<User>(SESSION_KEY, sessionUser);

    return sessionUser;
  },

  logout(): void {
    storageService.remove(SESSION_KEY);
  },

  getCurrentUser(): User | null {
    return storageService.get<User>(SESSION_KEY);
  },

  isAuthenticated(): boolean {
    return this.getCurrentUser() !== null;
  },
};