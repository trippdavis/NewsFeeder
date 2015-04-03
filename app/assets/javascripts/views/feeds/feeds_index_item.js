NewsReader.Views.FeedsIndexItem = Backbone.View.extend({
  template: JST['feeds/index_item'],

  tagName: 'li',

  events: {
    "click .delete-feed": "deleteFeed",
    "click .fav-feed": "favFeed"
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
  },

  favFeed: function (event) {
    event.preventDefault();
    var params = { fav_type: "feed", favorable_id: this.model.id };
    $.ajax({
      url: "/api/favorites",
      type: "post",
      dataType: 'json',
      data: params,
      success: function() {
        this.$el.find(".fav-feed").remove();
      }.bind(this)
    });
  }
});
