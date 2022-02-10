;
(function () {
  'use strict'

  const get = (target) => {
    return document.querySelector(target)
  }

  const $todos = get('.todos')
  const $form = get('.todo_form')
  const $todoInput = get('.todo_input')
  const API_URL = `http://localhost:3000/todos`

  const createTodoElement = (item) => {
    const {
      id,
      content,
      completed
    } = item
    const isChecked = completed ? 'checked' : ''
    const $todoItem = document.createElement('div')
    $todoItem.classList.add('item')
    $todoItem.dataset.id = id
    $todoItem.innerHTML = `
            <div class="content">
              <input
                type="checkbox"
                class='todo_checkbox' 
                ${isChecked}
              />
              <label>${content}</label>
              <input type="text" value="${content}" />
            </div>
            <div class="item_buttons content_buttons">
              <button class="todo_edit_button">
                <i class="far fa-edit"></i>
              </button>
              <button class="todo_remove_button">
                <i class="far fa-trash-alt"></i>
              </button>
            </div>
            <div class="item_buttons edit_buttons">
              <button class="todo_edit_confirm_button">
                <i class="fas fa-check"></i>
              </button>
              <button class="todo_edit_cancel_button">
                <i class="fas fa-times"></i>
              </button>
            </div>
      `
    return $todoItem
  }

  const renderAllTodos = (todos) => {
    $todos.innerHTML = ''
    todos.forEach((item) => {
      const todoElement = createTodoElement(item)
      $todos.appendChild(todoElement)
    })
  }

  const getTodos = () => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((todos) => {
        renderAllTodos(todos)
      })
      .catch((error) => console.error(error.message))
  }

  const addTodo = (e) => {
    e.preventDefault()
    const content = $todoInput.value
    if (!content) return
    const todo = {
      content,
      completed: false,
    }
    fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(todo),
      })
      .then((response) => response.json())
      .then(getTodos)
      .then(() => {
        $todoInput.value = ''
        $todoInput.focus()
      })
      .catch((error) => console.error(error.message))
  }

  const toggleTodo = (e) => {
    if (e.target.className !== 'todo_checkbox') return
    const $item = e.target.closest('.item')
    const id = $item.dataset.id
    const completed = e.target.checked
    fetch(`${API_URL}/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({
          completed
        }),
      })
      .then((response) => response.json())
      .then(getTodos)
      .catch((error) => console.error(error.message))
  }


  const changeEditMode = (e) => {
    const $item = e.target.closest('.item') // 타겟과 제일 가까운 .item찾기
    const $label = $item.querySelector('label') // .item의 라벨 찾기
    const $editInput = $item.querySelector('input[type="text"]') // .item의 input 타입을 텍스트로 
    const $contentButtons = $item.querySelector('.content_buttons') // 기본 수정, 삭제 아이콘
    const $editButtons = $item.querySelector('.edit_buttons') // 에딧 버전에서 쓰일 확인 취소 아이콘
    const value = $editInput.value

    if (e.target.className === 'todo_edit_button') {
      $label.style.display = 'none'
      $editInput.style.display = 'block'
      $contentButtons.style.display = 'none'
      $editButtons.style.display = 'block'
      $editInput.focus() // 커서가 수정해야하는 곳에 깜빡인다 (근데 왼쪽에서 깜빡거린다.)
      $editInput.value = '' // 그래서 이코드랑 
      $editInput.value = value // 이코드를 작성해주면 글 오른쪽에 커서가 깜빡거림 ㅇㅇ

    }

    if (e.target.className === 'todo_edit_cancel_button') {
      $label.style.display = 'block'
      $editInput.style.display = 'none'
      $contentButtons.style.display = 'block'
      $editButtons.style.display = 'none'
      $editInput.value = $label.innerText
    }
  }

  const editTodo = (e) => {
    if (e.target.className !== 'todo_edit_confirm_button') return
    const $item = e.target.closest('.item')
    const id = $item.dataset.id
    const $editInput = $item.querySelector('input[type="text"]')
    const content = $editInput.value

    fetch(`${API_URL}/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({
          content
        }),
      })
      .then((response) => response.json())
      .then(getTodos)
      .catch((error) => console.error(error.message))

  }

  const removeTodo = (e) => {
    if (e.target.className !== 'todo_remove_button') return
    const $item = e.target.closest('.item')
    const id = $item.dataset.id

    fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
      })
      .then((response) => response.json())
      .then(getTodos)
      .catch((error) => console.error(error.message))
  }


  const init = () => {
    window.addEventListener('DOMContentLoaded', () => {
      getTodos()
    })

    $form.addEventListener('submit', addTodo)
    $todos.addEventListener('click', toggleTodo)
    $todos.addEventListener('click', changeEditMode)
    $todos.addEventListener('click', editTodo)
    $todos.addEventListener('click', removeTodo)
  }

  init()
})()
