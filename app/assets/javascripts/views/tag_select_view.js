(function(root) {
  var PT = root.PT = (root.PT || {})

  var TagSelectView = PT.TagSelectView = function(event, img){
    this.$el = $("<div id='tags'></div>");
    this.event = event;
    this.img = img;
    this.pos = $(this.img).position()
  }

  TagSelectView.prototype.render = function() {
    $('#tags').remove();
    var that = this;
    // existing tags

    this.$el.empty()

    PT.PhotoTagging.all.forEach(function(photo_tagging, i, allPhotoTaggings){
      var $div = $('<div class="photo-tag"></div>');
      console.log(that.event.offsetX)
      $div.css("left", that.pos.left + photo_tagging.x_pos + "px")
      $div.css("top", that.pos.top + photo_tagging.y_pos + "px")
      $div.data("id", photo_tagging.id);
      that.$el.append($div);
    });

    console.log(this.pos.left)

    var $tag = $("<div class='photo-tag'></div>");
    console.log(this.event.offsetX + this.pos.left)
    $tag.css("left", this.event.offsetX + this.pos.left + "px")
    $tag.css("top", this.event.offsetY + this.pos.top + "px")
    var $users = JST["photo_tag_options"];
    $tag.append($users)
    this.$el.append($tag)

    return this.$el
  };

})(this);