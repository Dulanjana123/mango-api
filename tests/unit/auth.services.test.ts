import { authenticateUser } from "../../src/services/auth.service";

describe("Auth Service", () => {
  it("should return a token for valid credentials", () => {
    const token = authenticateUser("alice@example.com", "password123");
    expect(token).toBeDefined();
  });

  it("should throw an error for invalid credentials", () => {
    expect(() => authenticateUser("alice@example.com", "wrongpassword")).toThrow("Invalid credentials");
  });
});
