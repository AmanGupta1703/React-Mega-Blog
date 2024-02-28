import { conf } from "../conf";

import { Client, Account, ID } from "appwrite";

class AuthService {
	client = new Client();
	account;

	constructor() {
		this.client
			.setEndpoint(conf.appwriteUrl)
			.setProject(conf.appwriteProjectId);
		this.account = new Account(this.client);
	}

	async createAccount({ email, password, name }) {
		try {
			const userAccount = await this.account.create(
				ID.unique(),
				email,
				password,
				name
			);

			if (userAccount) {
				return this.login({ email, password });
			} else {
				return userAccount;
			}
		} catch (error) {
			throw error;
		}
	}

	async login({ email, password }) {
		try {
			return await this.account.createEmailSession(email, password);
		} catch (error) {
			throw error;
		}
	}

	async getCurrentUser() {
		try {
			const currentUser = await this.account.get();

			if (currentUser) {
				return currentUser;
			} else {
				return null;
			}
		} catch (error) {
			console.log("Appwrite Service :: getCurrentUser :: error", error);
		}

		return null;
	}

	async logout() {
		try {
			await this.account.deleteSessions();
		} catch (error) {
			console.log("Appwrite Service :: logout :: error", error);
		}
	}
}

const authService = new AuthService();

export default authService;

/***
 * this.client
			.setEndpoint(conf.appwriteUrl)
			.setProject(conf.appwriteProjectId);
		this.account = new Account(this.client);
  * Here, we are setting the endpoint and project ID for the appwrite client.
  * Then, we are creating an instance of the Account class from the appwrite SDK.
 */

/***
 * ```await this.account.create(`ID.unique()`, email, password, name)```
 * Here, it is important to pass unique ID as the first argument to the create
 * method. Which is a unique identifier for the user.
 * It would create a new account with the given email, password, and name.
 */
