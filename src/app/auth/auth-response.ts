export interface AuthResponse {
    user: {
        id: number,
        name: string,
        uname: string,
        role_id: number
    },
    access_token: string,
    expires_in: number
}
