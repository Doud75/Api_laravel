let section = document.querySelector("#section");


document.addEventListener("DOMContentLoaded",() => {
    refreshState();
});

function refreshState() {
    fetch('/api/blog')
    .then(res => res.json())
    .then(data => {
        section.innerHTML = "";
        data.forEach(element => {
            var section = document.querySelector("#section");
            title = createLink(element.title, element.id);
            form = createForm(element.id);
            br = document.createElement("br");
            section.appendChild(title);
            section.appendChild(form);
            section.appendChild(br);
        });
    }) .then (() => {
        getButton();
    })
}

function createLink(content, id) {
    a = document.createElement("a");
    a.innerHTML = content;
    a.href = '/postView/' + id;
    return a
}

function createForm(id) {
    const section = document.querySelector("#section");
    const f = document.createElement("form");
    f.setAttribute('method', "post");
    f.setAttribute('action', "");
    
    const i = document.createElement("input");
    i.setAttribute('type', "hidden");
    i.setAttribute('name', "id");
    i.setAttribute('value', id);
    
    const b = document.createElement("button");
    b.setAttribute('type', "button");
    b.innerHTML = 'Supprimer';
    b.id = "deleteForm"

    f.appendChild(b);
    f.appendChild(i);
    return f
}

function getButton() {
    document.querySelectorAll("#deleteForm").forEach(form => {
        form.addEventListener("click", e => {
            // preventDefault(e);
            const target = e.target
            let id = target.nextElementSibling.value
            fetch('/api/blog/'+id, {
                method: "DELETE",
            }) .then (() => {
                refreshState()
            })
        })
    })
}
