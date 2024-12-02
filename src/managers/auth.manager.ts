import { AuthService } from "../services/auth.service";
import { UserLoginDto } from "../types/interfaces/authentication/user-login-dto";

export class AuthManager {
  static login(request: UserLoginDto): { email: string; token: string } | null {
    const user = AuthService.validateCredentials(request);

    if (!user) {
      return null;
    }

    // Generate the token with additional fields
    const token = AuthService.generateToken({
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role || "user", // Default role 
    });

    return { email: user.email, token };
  }
}
