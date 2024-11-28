import jwt from "jsonwebtoken";
import { users } from "../mockData/users";
import { UserLoginDto } from "../types/interfaces/authentication/user-login-dto";

const SECRET_KEY = "your_secret_key";

export class AuthService {
  static generateToken(payload: object): string {
    return jwt.sign(payload, SECRET_KEY, { expiresIn: "1h" });
  }

  static validateCredentials(request: UserLoginDto): boolean {

    const user = users.find(u => u.email === request.email && u.password === request.password);
    return user != undefined;
  }

  static getUserByEmail(email: string) {
    return users.find(user => user.email === email);
  }
}


