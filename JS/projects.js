let repos = []
let repo = {
    id: '',
    name: '',
    url: '',
    created_at: '',
    description: '',
}

function temp(repo) {
    return `<tr>
            <td>${repo.id}</td>
            <td>${repo.name} </td>
            <td>${repo.created_at}</td>
            <td class="truncate">${repo.description == null ? '': repo.description} </td>
            <td><a href="${repo.html_url}">URL</a></td>
            </tr>`

}


fetch('https://api.github.com/users/ramialkaro/repos')
    .then(res => res.json())
    .then(data => {
        data.sort((a, b) => b.id - a.id).map(d => {
            let formatedDate = `${new Date(d.created_at).getDay()}.${new Date(d.created_at).getMonth()+1}.${new Date(d.created_at).getFullYear()}`
            d.created_at = formatedDate
            document.getElementById("tbody")
                .insertAdjacentHTML('afterbegin', temp(d))
        })
    })