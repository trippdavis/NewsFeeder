NewsReader.Routers.Feeds = Backbone.Router.extend({
  initialize: function (options) {
    this._collection = new NewsReader.Collections.Feeds();
    this.$rootEl = options.$rootEl;
    this._currentView;
  },

  routes: {
    "": "feedIndex",
    "feeds/:id": "feedShow"
  },

  feedIndex: function () {
    this._collection.fetch();
    var view = new NewsReader.Views.FeedsIndex({ collection: this._collection });
    this._switchView(view);
  },

  feedShow: function(id) {
    var model = this._collection._getOrFetch(id);
    var view = new NewsReader.Views.FeedShow({model: model });
    this._switchView(view);
  },
  _switchView: function(view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }
});
