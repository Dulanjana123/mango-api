import { AuthService } from "../services/auth.service";

export class AuthManager {
  static login(email: string, password: string): { token: string } | null {
    const isValid = AuthService.validateCredentials(email, password);

    if (!isValid) {
      return null;
    }

    const token = AuthService.generateToken({ email });
    return { token };
  }
}
