NewsReader.Views.FeedShowItem = Backbone.View.extend({
  tagName: "li",

  template: JST["feeds/show_view_item"],

  events: {
    "click .fav-entry": "favEntry"
  },

  render: function() {
    var content = this.template({ entry: this.model });
    this.$el.html(content);
    return this;
  },

  favEntry: function (event) {
    event.preventDefault();
    var params = { fav_type: "entry", favorable_id: this.model.id };
    $.ajax({
      url: "/api/favorites",
      type: "post",
      dataType: 'json',
      data: params,
      success: function() {
        this.$el.find(".fav-entry").remove();
      }.bind(this)
    });
  }
});
