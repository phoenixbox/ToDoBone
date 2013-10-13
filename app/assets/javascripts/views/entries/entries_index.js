Todobone.Views.EntriesIndex = Backbone.View.extend({

  template: JST['entries/index'],

  render : function(){
    this.$el.html(this.template({entries: this.collection}));
    return this
  }

});
