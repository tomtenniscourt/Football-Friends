const URL = "http://localhost:5001";

// Create a User when they Register
export const createUser = async (data) => {
  try {
    const result = await fetch(`${URL}/Register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return result.json();
  } catch (err) {
    return err;
  }
};

// Login

//NEED TO DO A TRY CATCH
export async function login(data) {
  const response = await fetch(`${URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
}

//Test
//NEED TO DO A TRY CATCH

export async function test() {
  const response = await fetch(`${URL}/api/protected`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("JWT")}`,
    },
  });
  return response.json();
}
