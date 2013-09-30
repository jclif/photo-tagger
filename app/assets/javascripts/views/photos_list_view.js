(function(root) {
  var PT = root.PT = (root.PT || {})

  var PhotosListView = PT.PhotosListView = function(){
    this.$el = $('<div></div>');
    PT.Photo.on("add", this.render.bind(this));
    this.$el.delegate('a', 'click', function(event) {
      event.preventDefault();
      photoId = $(this).data('id');
      PT.showPhotoDetail(PT.Photo.find(photoId));
    });
  }

  PhotosListView.prototype.render = function(){
    this.$el.empty();
    var $ul = $('<ul id="index"></ul>');
    this.$el.append($ul);

    PT.Photo.all.forEach(function(photo, i, allPhotos){
      var $li = $('<li></li>');
      var li_string = '<a href="#" data-id="'
      + photo.id
      + '">'
      + photo.title
      + '</a>';

      $li.html(li_string);
      $ul.append($li);
    });

    return this.$el;
  }


})(this)