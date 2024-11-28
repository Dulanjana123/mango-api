import { AuthService } from "../services/auth.service";
import { UserLoginDto } from "../types/interfaces/authentication/user-login-dto";

export class AuthManager {
  static login(request : UserLoginDto): { token: string } | null {
    const isValid = AuthService.validateCredentials(request);

    if (!isValid) {
      return null;
    }

    const token = AuthService.generateToken({ request });
    return { token };
  }
}
