

const resultado = fetch("https://reqres.in/api/users?per_page=12")

resultado
    .then(respuesta => respuesta.json())
    .then(respuestaJSON => {
        respuestaJSON.data.forEach(
            persona => {
                const card = `
                <article>
                <div class="container-img">
                    <img src="${persona.avatar}">
                </div>
                <div class="container-info">
                <p class="nombre">${persona.first_name} ${persona.last_name}</p>
                <p class="titulo">${persona.email}</p>
                <button class="btn"><i class="icon-btn"></i>Add me</button>
                </div>
                </article>
                `
                const container = document.querySelector("#container")
                container.innerHTML += card;
            }
        )
    })






