Todobone.Views.EntriesIndex = Backbone.View.extend({

  template: JST['entries/index'],

  events : {
    'submit #new-entry': 'createEntry'
  },

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

  createEntry : function(event){
    event.preventDefault();
    this.collection.create({name: $('#new_entry_name').val()})
    this.collection.on('change', this.render(), this);
  }
});
