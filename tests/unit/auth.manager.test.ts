import { AuthManager } from "../../src/managers/auth.manager";
import { AuthService } from "../../src/services/auth.service";

jest.mock("../../src/services/auth.service");

describe("AuthManager", () => {
  it("should return user email and token on successful login", () => {
    const loginRequest = { email: "alice@example.com", password: "password123" };
    const mockUser = { id: 1, name: "Alice", email: "alice@example.com", role: "admin" };
    const mockToken = "mockedToken";

    jest.spyOn(AuthService, "validateCredentials").mockReturnValue(mockUser);
    jest.spyOn(AuthService, "generateToken").mockReturnValue(mockToken);

    const result = AuthManager.login(loginRequest);

    expect(result).toBeDefined();
    expect(result?.email).toBe(loginRequest.email);
    expect(result?.token).toBe(mockToken);
  });

  it("should return null for invalid login credentials", () => {
    const loginRequest = { email: "alice@example.com", password: "wrongpassword" };

    jest.spyOn(AuthService, "validateCredentials").mockReturnValue(null);

    const result = AuthManager.login(loginRequest);

    expect(result).toBeNull();
  });
});
