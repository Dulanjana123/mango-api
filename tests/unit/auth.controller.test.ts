import request from "supertest";
import express, { Application } from "express";
import { login } from "../../src/controllers/auth.controller";
import bodyParser from "body-parser";
import { AuthManager } from "../../src/managers/auth.manager";

jest.mock("../../src/managers/auth.manager");

const app: Application = express();
app.use(bodyParser.json());
app.post("/login", login);

describe("AuthController", () => {
  it("should return 200 and token for valid credentials", async () => {
    const mockPayload = { email: "alice@example.com", password: "password123" };

    // Mock the AuthManager.login method
    (AuthManager.login as jest.Mock).mockReturnValue({
      email: mockPayload.email,
      token: "mockToken",
    });

    const response = await request(app).post("/login").send(mockPayload);

    expect(response.status).toBe(200);
    expect(response.body.isSuccess).toBe(true);
    expect(response.body.result.token).toBe("mockToken");
  });

  it("should return 400 for missing email or password", async () => {
    const response = await request(app).post("/login").send({});

    expect(response.status).toBe(400);
    expect(response.body.isSuccess).toBe(false);
    expect(response.body.errorMessages).toContain("Email and password are required.");
  });

  it("should return 401 for invalid credentials", async () => {
    const mockPayload = { email: "alice@example.com", password: "wrongpassword" };

    // Mock the AuthManager.login method to return null for invalid credentials
    (AuthManager.login as jest.Mock).mockReturnValue(null);

    const response = await request(app).post("/login").send(mockPayload);

    expect(response.status).toBe(401);
    expect(response.body.isSuccess).toBe(false);
    expect(response.body.errorMessages).toContain("Invalid credentials.");
  });
});
