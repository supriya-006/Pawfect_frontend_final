const API =`http://localhost:4000`

export const addPet =(pet) => {
   return fetch(`${API}/addPet`, {
      method: "POST",
      headers: {

      },
      body: pet
   })
   .then(response => response.json())
        .catch(error => console.log(error))
}