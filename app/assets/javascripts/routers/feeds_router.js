NewsReader.Routers.Feeds = Backbone.Router.extend({
  initialize: function (options) {
    this._collection = new NewsReader.Collections.Feeds();
    this.$rootEl = options.$rootEl;
  },

  routes: {
    "": "feedIndex",
    "feeds/:id": "feedShow"
  },

  feedIndex: function () {
    this._collection.fetch();
    var view = new NewsReader.Views.FeedsIndex({ collection: this._collection });
    this.$rootEl.html(view.render().$el);
  },

  feedShow: function(id) {
    var model = this._collection._getOrFetch(id);
    var view = new NewsReader.Views.FeedShow({model: model });
    this.$rootEl.html(view.render().$el);
  }
});
