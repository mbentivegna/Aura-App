export async function getAvailableTags() {
    const apiURL = "http://localhost:8080/api/board/available"

    const res = await fetch(apiURL);
    const data = await res.json();

    return data
}

export async function getOccupiedTags() {
    const apiURL = "http://localhost:8080/api/board/occupied"

    const res = await fetch(apiURL);
    const data = await res.json();

    return data
}