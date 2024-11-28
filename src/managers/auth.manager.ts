import { AuthService } from "../services/auth.service";
import { UserLoginDto } from "../types/interfaces/authentication/user-login-dto";

export class AuthManager {
  static login(request: UserLoginDto): { token: string } | null {
    const user = AuthService.validateCredentials(request);

    if (!user) {
      return null;
    }

    const token = AuthService.generateToken({
      id: user.id,
      name: user.name,
      email: user.email,
    });

    return { token };
  }
}

