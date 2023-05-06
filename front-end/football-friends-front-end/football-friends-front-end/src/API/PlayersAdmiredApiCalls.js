const URL = "http://localhost:5001"

export const createAdmiredPlayer = async (id, data) => {
    try {
        const result = await fetch(`${URL}/Users/${id}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        })
        return result.json()
    } catch (err) {
        return err
    }
}

export const deleteAdmiredPlayer = async (id, playerId) => {
    try {
        const result = await fetch(`${URL}/Users/${id}/${playerId}`, {
            method: "DELETE"
        })
        return result.json()
    }
    catch (err) {
        return err
    }
}