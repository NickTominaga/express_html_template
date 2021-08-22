fetch(URL, 
    {
     method: 'get',
     mode: 'cors',
     body: JSON.stringify(sendingjson),
     headers:
      {
       'Accept': 'application/json',
       'Content-Type': 'application/json'
      }
    })
    .then(response => {
        return response.json()
    })
    .then(data => {
        console.log(data)
})
