(function(root) {
  var PT = root.PT = (root.PT || {})

  var PhotoDetailView = PT.PhotoDetailView = function(photo){
    this.$el = $('<div></div>');
    this.photo = photo;

    var that = this;
  }

  PhotoDetailView.prototype.render = function() {
    this.$el.empty();
    var $photo_detail = JST["photo_detail"](this.photo);
    this.$el.append($photo_detail);

    return this.$el;
  };

})(this);