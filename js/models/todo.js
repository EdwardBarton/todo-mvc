const Todo = Backbone.Model.extend({
  defaults: () => ({title: '', completed: false}),

  toggleCompleted() {
    this.set('completed', !this.get('completed'));
  }
});