(function (root) {
  var PT = root.PT = (root.PT || {});

  var Photo = PT.Photo = function(data) {
    this.attributes = data;
  }

  Photo.all = [];

  Photo._events = {};

  Photo.on = function(eventName, callback) {
    if (Photo._events[eventName]) {
      Photo._events[eventName].push(callback)
    } else {
      Photo._events[eventName] = [callback];
    }
  }

  Photo.trigger = function(eventName) {
    Photo._events[eventName].forEach(function(callback, i, array) {
      callback();
    });
  }

  Photo.prototype.get = function(attr_name) {
    return this.attributes[attr_name];
  }

  Photo.prototype.set = function(attr_name, val) {
    _.extend(this.attributes, {attr_name: val})
  }

  Photo.prototype.create = function(callback) {
    var that = this

    var ajaxOptions = {
      url: '/api/photos',
      type: 'POST',
      data: this.attributes,
      success: function(photoData) {
        callback(photoData);
        _.extend(that.attributes, photoData);

        Photo.all.unshift(that.attributes)

        Photo.trigger('add');
      }
    };

    $.ajax(ajaxOptions);
  };

  Photo.photos_union = function(arr1, arr2) {
    var union = arr1.concat(arr2);
    var new_union = []

    for (var i = 0; i < union.length; i++) {
      for (var j = i+1; j < union.length; j++) {
        if (Photo.photos_are_equal(union[i], union[j])) {
          union.splice(j, 1);
        }
      }
    }

    return union;
  }

  Photo.photos_are_equal = function(p1, p2) {
    return p1.id === p2.id;
  }

  Photo.fetchByUserId = function(userId, callback) {
    var ajaxOptions = {
      url: '/api/users/' + userId + '/photos',
      type: 'GET',
      success: function(response) {
        Photo.all = Photo.photos_union(Photo.all, response);
        callback();
      }
    }

    $.ajax(ajaxOptions);
  }

  Photo.find = function(photoId) {
    found_photo = undefined;

    Photo.all.forEach(function(photo) {
      if (photo.id === photoId) {
        found_photo = photo;
      }
    });

    return found_photo;
  }

})(this);