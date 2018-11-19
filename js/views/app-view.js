const AppView = Backbone.View.extend({
  el: '.todoapp',

  events: {
    'keypress .new-todo': 'createOnEnter'
  },

  initialize() {
    this.$input = this.$('.new-todo');
    this.$list = this.$('.todo-list');

    this.listenTo(todosCollection, 'add', this.addOne);
  },
  render() {
    return this;
  },
  createOnEnter(e) {
    if (e.keyCode === 13 && this.$input.val()) {
      todosCollection.add({
        title: this.$input.val(),
        completed: false
      });
  
      this.$input.val('');
    }
  },
  addOne(todo) {
    const todoView = new TodoView({ model: todo });
    this.$list.append(todoView.render().el);
  }
});