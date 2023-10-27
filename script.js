let form = document.getElementById('form')
let input = document.getElementById('input')
let todosList = document.getElementById('todos')



form.addEventListener('submit', function(e){
    e.preventDefault()

    AddInput()
})



function AddInput(todo) {
    let todoText = input.value

    if(todo) {
        todoText = todo.text
    }

    if(todoText) {
        let todoElement = document.createElement('li')
        if(todo && todo.completed) {
            todoElement.classList.add('completed')
        }

        todoElement.innerText = todoText

        todoElement.addEventListener('click', function(){
            todoElement.classList.toggle('completed')
            updateList()
        }) 

        todoElement.addEventListener('contextmenu', function(e){
            e.preventDefault()

            todoElement.remove()
            updateList()
        }) 

        todosList.appendChild(todoElement)

        input.value = ''

        updateList()
    }
}

function updateList() {
    todosElements = document.querySelectorAll('li')
    let todos = []
    todosElements.forEach(function(todoElement){
        todos.push({
            text: todoElement.innerText,
            completed: todoElement.classList.contains('completed')
        })
    })

}