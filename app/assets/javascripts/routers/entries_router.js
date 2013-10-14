Todobone.Routers.Entries = Backbone.Router.extend({
  routes : {
    '' : 'index',
    'entries/:id' : 'show'
  },

  index : function(){
    new Todobone.Views.EntriesIndex();
  },

  show : function(id){
    alert('Entry for '+id)
  }
});
