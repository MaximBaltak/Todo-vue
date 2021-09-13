export default {
  state: {
    inputText: '',
    tasks: []
  },
  mutations: {
    inputChange (state, text) {
      state.inputText = text
    },
    add (state) {
      if (state.inputText === '') {
        alert('Поле пустое')
      } else {
        const task = {
          id: Math.floor(Math.random() * new Date().getMilliseconds()),
          text: state.inputText
        }
        state.tasks.unshift(task)
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
      state.tasks = []
    }
  }
}
