Todobone.Views.EntriesIndex = Backbone.View.extend({

  template: JST['entries/index'],

  initialize : function(){
    var that = this;
    this.collection = new Todobone.Collections.Entries();
    this.collection.fetch({success: function(collection, response) {
      $('#container').html(that.render().el);
      console.log(response);
    }});
  },

  render : function(){
    this.$el.html(this.template({entries: this.collection}));
    return this
  },
});
