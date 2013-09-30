(function(root) {
  var PT = root.PT = (root.PT || {})

  var PhotoDetailView = PT.PhotoDetailView = function(photo){
    this.$el = $('<div></div>');
    this.photo = photo;

    this.setupClickHandler();
  }

  PhotoDetailView.prototype.setupClickHandler = function() {
    var that = this;

    this.$el.delegate('img', 'click', function(event) {
      PT.showPhotoTaggingsIndex(event, this);
    });
  };

  PhotoDetailView.prototype.render = function() {
    this.$el.empty();
    var $back = $('<a href="#" id="back"></a>')
    $back.html("Back")
    this.$el.append($back)

    this.$el.delegate('a[id="back"]', 'click', function(event) {
      event.preventDefault();
      $('#content').empty();
      PT.initialize();
    });

    this.$el.append()
    var $photo_detail = JST["photo_detail"]({"photo": this.photo});
    this.$el.append($photo_detail);

    return this.$el;
  };

})(this);