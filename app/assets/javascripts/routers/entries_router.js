Todobone.Routers.Entries = Backbone.Router.extend({
  routes : {
    '' : 'index',
    'entries/:id' : 'show'
  },

  initialize : function() {
    collection = new Todobone.Collections.Entries();
    collection.fetch();
  },

  index : function(){
    entryView = new Todobone.Views.EntriesIndex({collection: this.collection});
    $('#container').html(entryView.render().el)
  },

  show : function(id){
    alert('Entry for '+id)
  }
});
