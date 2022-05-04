import HttpClient from "react-http-client"

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

export async function fetchCSV(string1, string2, time1, time2) {
    const url = "http://localhost:8080/api/visitor/csv?from=" + string1 + "_" + time1 + "&to=" + string2 + "_" + time2
    console.log(url)
    const method = "GET";
    fetch(url, 
        {
            method: 'GET',
        })
      .then((response) => {
        response.blob().then(blob => download(blob, "output.csv"))
          /*
        console.log("data", response)
        const url = window.URL.createObjectURL(new Blob([response.body]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'Asset Manager.csv');
        document.body.appendChild(link);
        link.click();
        link.remove();
        */
      })
      .catch(error => {
        console.log("error", error);
      })
  }

  function download(blob, filename) {
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    // the filename you want
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  }
