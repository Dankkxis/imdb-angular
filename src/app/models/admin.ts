export class Admin {
  id: number;
  name: string;
  surname: string;
  email: string;
  username: string;
}

export class Session {
  token: string;
  user: Admin;
}

export class adminLogin {
  username: string;
  password: string;
}