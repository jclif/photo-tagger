(function(root) {
  var PT = root.PT = (root.PT || {})

  var PhotosListView = PT.PhotosListView = function(){
    this.$el = $('<div></div>');
    PT.Photo.on("add", this.render.bind(this));
  }

  PhotosListView.prototype.render = function() {
    console.log(this);
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