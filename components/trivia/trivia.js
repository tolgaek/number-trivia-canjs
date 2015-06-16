define(['can/util/string', 'can/component', 'mustache!./trivia'], function(can, Component, initView){
  return can.Component({
    tag : 'trivia',
    template : initView,
    scope : {
      number: 0,
      getTrivia: function() {
        var number = $('#trivia-number').val();
        Number.findOne(number, function(xhr) {
          console.log("HEREERE");
          debugger
        });
      }
    }
  })

});
