const TodoView = Backbone.View.extend({
  tagName: 'li',

  template: Handlebars.compile($(`#item-template`).html()),

  events: {
    'click .destroy': 'clear',
    'click .toggle': 'toggleCompleted'
  },

  initialize() {
    this.listenTo(this.model, 'change', this.render); // toggle completed
    this.listenTo(this.model, 'destroy', this.remove); // delete todo
  },

  render() {
    this.$el.html(this.template(this.model.toJSON()));
    this.$el.toggleClass('completed', this.model.get('completed'));
    return this;
  },

  clear() {
    this.model.destroy();
  },

  toggleCompleted() {
    this.model.toggle();
  }
});