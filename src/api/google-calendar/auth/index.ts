export const login = async () => await gapi.auth2.getAuthInstance().signIn()

export const isSignIn = async () => await gapi.auth2.getAuthInstance().isSignedIn.get()

export const signOut = async () => await gapi.auth2.getAuthInstance().signOut()