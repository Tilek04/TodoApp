const App = {
    data() {
      return {
          placeholderString: 'Введите название заметки',
          title: 'Список заметок:',
          inputValue: '',
          notes:['Заметка 1' , 'Заметка 2' , 'Заметка 3 ']
      }
    },
    methods: {
      inputChangeHandler(event) {
      this.inputValue = event.target.value
      },
      addNewNote(){
          if(this.inputValue !== '')
          this.notes.unshift(this.inputValue)
          this.inputValue = ''
          
          
      },
      inputKeyPress(event){
          if (event.key === 'Enter'){
            this.addNewNote()
          }
      },
      toUpperCase(item) {
return item.toUpperCase(  )
      },
      removeNote(idx, event){
        this.notes.splice(idx, 1)
    }
    }
  }



  Vue.createApp(App).mount('#app')

