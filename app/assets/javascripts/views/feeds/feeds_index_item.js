NewsReader.Views.FeedsIndexItem = Backbone.View.extend({
  template: JST['feeds/index_item'],
  
  tagName: 'li',

  events: {
    "click .delete-feed": "deleteFeed"
  },

  render: function() {
    var content = this.template({ feed: this.model });
    this.$el.html(content);
    return this;
  },

  deleteFeed: function(event) {
    event.preventDefault();
    this.model.destroy();
    this.remove();
  }
});
