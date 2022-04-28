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

export async function getVisitors() {
    const apiURL = "http://localhost:8080/api/visitor"

    const res = await fetch(apiURL);
    const data = await res.json();

    return data
}

export async function getCSV(string1, string2) {
    const apiURL = "http://localhost:8080/api/visitor/csv?from=" + string1 + "&to=" + string2

    const res = await fetch(apiURL);

    return res
}