export class User {
  id: number;
  Name: string;
  email: string;
  password: string;


  constructor(name, email, password) {
      this.Name = name;
      this.email = email;
      this.password = password;
  }
}
