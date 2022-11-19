const baseUrl = "https://6377c6440992902a2510e1f3.mockapi.io/api/v1/users"
const firstName = document.getElementById("name")
const lastName = document.getElementById("surName")
const editName = document.getElementById("editName")
const editSurName = document.getElementById("editSurName")


function getUsers() {
    fetch(baseUrl)
        .then((res) => res.json())
        .then((data) => console.log(data));
}

function getUserId() {
    const id = "22"
    fetch(`${baseUrl}/${id}`)
        .then((res) => res.json())
        .then((data) => {
            firstName.textContent = data.name
            lastName.textContent = data.surName
            console.log(data)
        });
}

function postNewUser() {
    fetch(baseUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            // body: JSON.stringify(obj)

            body: JSON.stringify({
                name: firstName.value,
                surName: lastName.value,
            })
        })
        .then((response) => response.json())
        .catch((error) => {
            console.error('Error:', error);
        });
}

function editUser() {
    const id = "18"
    fetch(`${baseUrl}/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: editName.value,
                surName: editSurName.value,
            })
        })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => {
            console.error('Error:', error);
        });
}

function deleteUser() {
    const id = "20"
    fetch(`${baseUrl}/${id}`, {
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(res => console.log(res))
}