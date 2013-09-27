(function(root) {
  var PT = root.PT = (root.PT || {})

  var PhotosListView = PT.PhotosListView = function(){ }

  PhotosListView.$el = $('<div></div>');

  PhotosListView.render = function() {
    PhotosListView.$el.empty();
    var $ul = $('<ul></ul>');
    PhotosListView.$el.append($ul);
    console.log(PT.Photo.all)
    PT.Photo.all.forEach(function(photo, i, allPhotos){
      var $li = $('<li></li>');
      $li.html(photo.title);
      $ul.append($li);
    });


    return PhotosListView.$el;
  }









})(this)

