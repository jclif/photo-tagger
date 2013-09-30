(function (root) {
  var PT = root.PT = (root.PT || {});

  var PhotoTagging = PT.PhotoTagging = function(data) {
    this.attributes = data;
  }

  PhotoTagging.all = [];

  PhotoTagging._events = {};

  PhotoTagging.trigger = function(eventName) {
    PhotoTagging._events[eventName].forEach(function(callback, i, array) {
      callback();
    });
  }

  PhotoTagging.prototype.create = function(callback) {
    var that = this

    var ajaxOptions = {
      url: '/api/photo_taggings',
      type: 'POST',
      data: {"photo_tagging" : this.attributes},
      success: function(photoTaggingData) {
        callback(phot oTaggingData);
        _.extend(that.attributes, photoTaggingData);

        PhotoTagging.all.unshift(that.attributes)

        PhotoTagging.trigger('add');
      }
    };

    $.ajax(ajaxOptions);
  };

  PhotoTagging.fetchByPhotoId = function(photoId, callback) {
    var ajaxOptions = {
      url: '/api/photos/' + photoId + '/photo_taggings',
      type: 'GET',
      success: function(response) {
        console.log("before :" + PhotoTagging.all)
        PhotoTagging.all = PhotoTagging.photo_taggings_union(PhotoTagging.all, response);
        console.log("after :" + PhotoTagging.all)
        callback();
      }
    }

    $.ajax(ajaxOptions);
  }

  PhotoTagging.photo_taggings_union = function(arr1, arr2) {
    var union = arr1.concat(arr2);

    for (var i = 0; i < union.length; i++) {
      for (var j = i+1; j < union.length; j++) {
        if (PhotoTagging.photo_taggings_are_equal(union[i], union[j])) {
          union.splice(j, 1);
        }
      }
    }

    return union;
  }

  PhotoTagging.photo_taggings_are_equal = function(p1, p2) {
    return p1.id === p2.id;
  }

})(this);