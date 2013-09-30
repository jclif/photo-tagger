// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//-
//= require_tree ../templates
//= require_tree .
//= require_tree ./models
//= require_tree ./views
//= require underscore
//= require jquery.serializeJSON.min


PT.initialize = function() {
  PT.updatePhotoForm();
  PT.showPhotosIndex();
}

PT.showPhotosIndex = function() {
  PT.Photo.fetchByUserId(CURRENT_USER_ID, function(){
    var listView = new PT.PhotosListView
    var $el = listView.render();
    $('#content').append($el);
  });
}

PT.updatePhotoForm = function() {
  var formView = new PT.PhotoFormView
  var $form = formView.render();
  $('#content').append($form);
}

PT.showPhotoDetail = function(photo) {
  var detailView = new PT.PhotoDetailView(photo);
  var $detail = detailView.render();

  $('#content').html($detail);
}