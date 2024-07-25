export interface CreateUserParams {
	email: string;
	password: string;
	confirmPassword: string;
}

export interface LoginUserParams {
	email: string;
	password: string;
}
