export interface RegisterUserResponse {
  message: string;
  user: { id: string; email: string; roles: string[] };
}
