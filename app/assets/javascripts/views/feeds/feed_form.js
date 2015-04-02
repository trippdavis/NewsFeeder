NewsReader.Views.FeedForm = Backbone.View.extend({
  tagName: "form",

  template: JST["feeds/form"],

  events: {
    "submit": "submitFeed"
  },

  render: function () {
    var content = this.template({ feed: this.model });
    this.$el.html(content);
    return this;
  },

  submitFeed: function (event) {
    event.preventDefault();
    var $target = $(event.currentTarget);
    this.model.set($target.serializeJSON());
    this.model.save({}, {
      success: function () {
        this.collection.add(this.model, { merge: true });
        Backbone.history.navigate("", { trigger: true });
      }.bind(this)
    });
  }
});
