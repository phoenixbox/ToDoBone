Todobone.Routers.Entries = Backbone.Router.extend({
  routes : {
    '' : 'index',
    'entries/:id' : 'show'
  },

  index : function(){
    entryView = new Todobone.Views.EntriesIndex();
    $('#container').html(entryView.render().el)
  },

  show : function(id){
    alert('Entry for '+id)
  }
});
