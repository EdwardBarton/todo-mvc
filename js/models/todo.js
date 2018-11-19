const Todo = Backbone.Model.extend({
  defaults: () => ({title: '', completed: false}),

  toggle() {
    this.set('completed', !this.get('completed'));
  }
});