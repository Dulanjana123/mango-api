import jwt from "jsonwebtoken";
import { users } from "../mockData/users";
import { UserLoginDto } from "../types/interfaces/authentication/user-login-dto";

const SECRET_KEY = "your_secret_key";

export class AuthService {
  static generateToken(payload: {
    id: number;
    name: string;
    email: string;
    role: string;
  }): string {
    return jwt.sign(payload, SECRET_KEY, { expiresIn: "1h" });
  }

  static validateCredentials(request: UserLoginDto): {
    id: number;
    name: string;
    email: string;
    role: string;
  } | null {
    const user = users.find(
      (u) => u.email === request.email && u.password === request.password
    );

    if (!user) {
      return null;
    }

    // Return user details for token generation
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role || "user", // Add default role if not available
    };
  }
}
