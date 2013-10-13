Todobone.Views.EntriesIndex = Backbone.View.extend({

  template: JST['entries/index'],

  render : function(){
    this.$el.html(this.template({entries: "Entry Content"}));
    return this
  }

});
