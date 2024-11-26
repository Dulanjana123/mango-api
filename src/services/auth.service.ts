// import { users } from "../mockData/users";
// import jwt from "jsonwebtoken";

// const SECRET_KEY = "your_secret_key";

// export const authenticateUser = (email: string, password: string) => {
//   const user = users.find(u => u.email === email && u.password === password);

//   if (!user) {
//     throw new Error("Invalid credentials");
//   }

//   return jwt.sign({ id: user.id, email: user.email }, SECRET_KEY, { expiresIn: "1h" });
// };

import jwt from "jsonwebtoken";
import { users } from "../mockData/users";

const SECRET_KEY = "your_secret_key";

export class AuthService {
  static generateToken(payload: object): string {
    return jwt.sign(payload, SECRET_KEY, { expiresIn: "1h" });
  }

  static validateCredentials(email: string, password: string): boolean {

    const user = users.find(u => u.email === email && u.password === password);
    return user != undefined;
  }

  static getUserByEmail(email: string) {
    return users.find(user => user.email === email);
  }
}


