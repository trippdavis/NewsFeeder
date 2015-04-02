NewsReader.Views.FeedShowItem = Backbone.View.extend({
  tagName: "li",

  template: JST["feeds/show_view_item"],

  render: function() {
    var content = this.template({ entry: this.model });
    this.$el.html(content);
    return this;
  }

});
