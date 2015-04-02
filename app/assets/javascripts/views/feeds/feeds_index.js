NewsReader.Views.FeedsIndex = Backbone.View.extend({
  initialize: function () {
    this.listenTo(this.collection, "sync remove add", this.render);
  },

  template: JST['feeds/index'],

  render: function () {
    var content = this.template();
    this.$el.html(content);
    this.collection.each(function(feed) {
      var item = new NewsReader.Views.FeedsIndexItem({ model: feed });
      this.$el.find(".index-items").append(item.render().$el);
    }, this);

    var model = new NewsReader.Models.Feed();
    var form = new NewsReader.Views.FeedForm({
                                            model: model,
                                       collection: this.collection });

    this.$el.find(".index-items").prepend(form.render().$el);
    return this;
  },
});
