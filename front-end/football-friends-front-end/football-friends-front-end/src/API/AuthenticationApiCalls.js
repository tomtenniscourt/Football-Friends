const URL = "http://localhost:5001";

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
