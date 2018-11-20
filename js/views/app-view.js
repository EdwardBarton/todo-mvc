const AppView = Backbone.View.extend({
  el: '.todoapp',

  events: {
    'keypress .new-todo': 'createOnEnter',
    'click .all': 'renderAll',
    'click .active': 'renderActive',
    'click .completed': 'renderCompleted'
  },

  initialize() {
    this.$input = this.$('.new-todo');
    this.$list = this.$('.todo-list');

    this.listenTo(todosCollection, 'add', this.addOne);
  },

  clearList() {
    this.$list.empty();
    this.$el.find(`.selected`).removeClass(`selected`);
  },

  renderAll() {
    this.clearList();
    todosCollection.forEach(todo => {
      this.addOne(todo);
    });
    $(`.all`).addClass(`selected`);
    console.log(this);
    return this;
  },

  renderActive() {
    this.clearList();
    todosCollection.where({completed: false}).forEach(todo => {
      this.addOne(todo);
    });
    $(`.active`).addClass(`selected`);
    console.log(this);
    return this;
  },

  renderCompleted() {
    this.clearList();
    todosCollection.where({completed: true}).forEach(todo => {
      this.addOne(todo);
    });
    $(`.completed`).addClass(`selected`);
    console.log(this);
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