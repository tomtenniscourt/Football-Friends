const URL = "http://localhost:5001";

export const getAllUsers = async () => {
  try {
    const result = await fetch(`${URL}/Users`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("JWT")}`,
      },
    });
    return result.json();
  } catch (err) {
    return err;
  }
};

export const getOneUser = async (id) => {
  try {
    const result = await fetch(`${URL}/Users/${id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("JWT")}`,
      },
    });
    return result.json();
  } catch (err) {
    return err;
  }
};

export const updateUser = async (id, data) => {
  try {
    const result = await fetch(`${URL}/Users/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("JWT")}`,
      },
      body: JSON.stringify(data),
    });
    return result.json();
  } catch (err) {
    return err;
  }
};
