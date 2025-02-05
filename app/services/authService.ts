export async function login(username: string, password: string) {
  const response = await fetch(
    `${process.env.REACT_APP_API_LOCAL}/users/login`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    }
  );
  return response.json();
}
