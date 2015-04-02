NewsReader.Views.FeedShow = Backbone.View.extend({
  initialize: function() {
    this.listenTo(this.model, "sync", this.render);
  },

  events: {
    "click .refresh-feed": "updateFeed"
  },

  template: JST['feeds/show'],

  render: function() {
    var content = this.template({ feed: this.model });
    this.$el.html(content);
    this.model.entries().each(function(entry) {
      var item = new NewsReader.Views.FeedShowItem({ model: entry });
      this.$el.find(".feed-entries").append(item.render().$el);
    }, this);
    return this;
  },

  updateFeed: function (event) {
    event.preventDefault();
    this.model.fetch();
  }
});
