export class AuthService {
    private rootUrl: string|undefined = process.env.REACT_APP_BACKEND;

    async signIn(username: string, password: string): Promise<Response> { 
        const response = await fetch(this.rootUrl + "auth/login", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({ username: username, password: password })
        });

        return response;
    }
    async register(username: string, password: string): Promise<Response> {
        const response = await fetch(
            this.rootUrl + "users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username: username, password: password })
        }
        );
        return response;
    }
}