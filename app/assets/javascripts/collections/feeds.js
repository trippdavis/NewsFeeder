NewsReader.Collections.Feeds = Backbone.Collection.extend({
  model: NewsReader.Models.Feed,
  url: "/api/feeds",

  _getOrFetch: function(id) {
    var model = this.get(id);

    if (model) {
      model.fetch();
    } else {
      model = new NewsReader.Models.Feed({ id: id });
      model.fetch({
        success: function () {
          this.add(model);
        }.bind(this)
      }
      );
    }
  return model;
  }
});
