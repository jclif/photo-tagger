(function(root) {
  var PT = root.PT = (root.PT || {})

  var PhotosListView = PT.PhotosListView = function(){
    this.$el = $('<div></div>');
  }

  PhotosListView.prototype.render = function() {
    this.$el.empty();
    var $ul = $('<ul></ul>');
    this.$el.append($ul);

    PT.Photo.all.forEach(function(photo, i, allPhotos){
      var $li = $('<li></li>');
      $li.html(photo.title);
      $ul.append($li);
    });

    return this.$el;
  }


})(this)

