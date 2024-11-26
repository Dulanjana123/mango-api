import jwt from "jsonwebtoken";
import { users } from "../mockData/users";

const SECRET_KEY = "your_secret_key";

export class AuthService {
  static generateToken(payload: object): string {
    return jwt.sign(payload, SECRET_KEY, { expiresIn: "1h" });
  }

  static validateCredentials(email: string, password: string): boolean {

    const user = users.find(u => u.email === email && u.password === password);
    return user != undefined;
  }

  static getUserByEmail(email: string) {
    return users.find(user => user.email === email);
  }
}


