(function(root) {
  var PT = root.PT = (root.PT || {})

  var PhotoFormView = PT.PhotoFormView = function(){
    this.$el = $('<div></div>');

    var that = this;

    this.$el.delegate('form', 'submit', function(event) {
      that.submit(event);
    });

    PT.Photo.on("add", this.clearForm);
  }

  PhotoFormView.prototype.render = function() {
    this.$el.empty();
    var $form = JST["photo_form"]
    this.$el.append($form)

    return this.$el
  };

  PhotoFormView.prototype.submit = function(event) {
    event.preventDefault();

    var formData = $('#photo-form').serializeJSON();
    var new_photo = new PT.Photo(formData);
    new_photo.create(function(response){});
  }

  PhotoFormView.prototype.clearForm = function() {
    $('#photo-form').find('input[type=text]').val("");
  }

})(this);