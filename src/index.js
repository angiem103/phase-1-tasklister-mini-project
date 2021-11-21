

document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('form')
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    createToDo(e.target['new-task-description'].value)
    form.reset()
  })
});

function createToDo(todo) {
  let li = document.createElement('li')
  li.textContent = `${todo} `
  let btn = document.createElement('button')
  btn.textContent = 'x'
  li.appendChild(btn)
  btn.addEventListener('click', handleDelete)
  document.querySelector('#tasks').appendChild(li)
  

}

function handleDelete(e){
  e.target.parentNode.remove()
}