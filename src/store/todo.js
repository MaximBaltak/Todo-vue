export default {
  state: {
    tasks: [],
    inputText: ''
  },
  mutations: {
    inputChange (state, value) {
      state.inputText = value
    },
    add (state) {
      if (state.inputText === '') {
        alert('нет задачи, поле пустое')
      } else {
        const body = {
          id: Math.floor(Math.random() * new Date().getMilliseconds()),
          text: state.inputText
        }
        state.tasks.unshift(body)
        state.inputText = ''
      }
    },
    deleteEl (state, id) {
      state.tasks.forEach((task, i) => {
        if (task.id === id) {
          state.tasks.splice(i, 1)
        }
      })
    },
    clear (state) {
      if (state.tasks.length > 0) {
        state.tasks = []
      }
    }
  }
}
