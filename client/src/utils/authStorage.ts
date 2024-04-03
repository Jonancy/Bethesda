function setUserData({ username, token }: { username: string, token: string }) {
    console.log(token, "token");
    console.log(username, "username");
    localStorage.setItem("username", JSON.stringify(username));
    localStorage.setItem("token", JSON.stringify(token));
} 

function getUserData() {
    const username = JSON.parse(localStorage.getItem("username") as string);
    const token = JSON.parse(localStorage.getItem("token") as string);


    return { username, token };
}

function clearUserData() {
    localStorage.clear();
}
  
  export { setUserData, getUserData, clearUserData };
  