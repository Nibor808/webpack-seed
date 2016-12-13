webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(1);
	__webpack_require__(5);

/***/ },
/* 1 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(6);
	
	$(document).ready(function () {
	  $('select').material_select();
	
	  $('#new-user-form').on('submit', function (e) {
	    e.preventDefault();
	    if ($('#firstName').val() == '' || $('#lastName').val() == '' || $('#userName').val() == '' || $('#permission').val() == '') {
	      $('#error').text('you are missing some info');
	    } else if ($('#password').val() == '' || $('#password').val() != $('#passwordConfirm').val()) {
	      $('#error').text('the passwords you entered don\'t match');
	    } else {
	      $('#new-user-form')[0].submit();
	    }
	  });
	});

/***/ }
]);
//# sourceMappingURL=main.js.map