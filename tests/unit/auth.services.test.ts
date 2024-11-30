import { AuthService } from "../../src/services/auth.service";

describe("AuthService", () => {
  it("should validate credentials and return user details", () => {
    const validCredentials = { email: "alice@example.com", password: "password123" };
    const user = AuthService.validateCredentials(validCredentials);

    expect(user).toBeDefined();
    expect(user?.email).toBe(validCredentials.email);
    expect(user?.role).toBe("admin");
  });

  it("should return null for invalid credentials", () => {
    const invalidCredentials = { email: "alice@example.com", password: "wrongpassword" };
    const user = AuthService.validateCredentials(invalidCredentials);

    expect(user).toBeNull();
  });

  it("should generate a valid JWT token", () => {
    const payload = { id: 1, name: "Alice", email: "alice@example.com", role: "admin" };
    const token = AuthService.generateToken(payload);

    expect(token).toBeDefined();
    expect(typeof token).toBe("string");
  });
});
