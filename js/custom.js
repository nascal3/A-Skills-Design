$(document).ready(function(){

	/*$('.file_input').filer({
		changeInput: '<div class="jFiler-input-dragDrop"><div class="jFiler-input-inner"><div class="jFiler-input-icon"><i class="icon-jfi-cloud-up-o"></i></div><div class="jFiler-input-text"><h3>Drag & Drop files here</h3> <span style="display:inline-block; margin: 15px 0">or</span></div><a class="jFiler-input-choose-btn blue">Browse Files</a></div></div>',
       	showThumbs: true,
       	theme: "dragdropbox",
       	templates: {
           box: '<ul class="jFiler-items-list jFiler-items-grid"></ul>',
			item: '<li class="jFiler-item">\
						<div class="jFiler-item-container">\
							<div class="jFiler-item-inner">\
								<div class="jFiler-item-thumb">\
									<div class="jFiler-item-status"></div>\
									<div class="jFiler-item-thumb-overlay">\
										<div class="jFiler-item-info">\
											<div>\
												<span class="jFiler-item-title"><b title="{{fi-name}}">{{fi-name}}</b></span>\
												<span class="jFiler-item-others">{{fi-size2}}</span>\
												<a class="icon-jfi-trash jFiler-item-trash-action"></a>\
											</div>\
										</div>\
									</div>\
									{{fi-image}}\
								</div>\
								{{fi-progressBar}}\
								<div class="jFiler-item-assets jFiler-row">\
									<ul class="list-inline pull-left">\
										<li></li>\
									</ul>\
								</div>\
							</div>\
						</div>\
					</li>',
			itemAppend: '<li class="jFiler-item">\
							<div class="jFiler-item-container">\
								<div class="jFiler-item-inner">\
									<div class="jFiler-item-thumb">\
										<div class="jFiler-item-status"></div>\
										<div class="jFiler-item-thumb-overlay">\
											<div class="jFiler-item-info">\
												<div>\
													<span class="jFiler-item-title"><b title="{{fi-name}}">{{fi-name}}</b></span>\
													<span class="jFiler-item-others">{{fi-size2}}</span>\
													<a class="icon-jfi-trash jFiler-item-trash-action"></a>\
												</div>\
											</div>\
										</div>\
										{{fi-image}}\
									</div>\
								</div>\
							</div>\
						</li>',
			progressBar: '<div class="bar"></div>',
			itemAppendToEnd: false,
			canvasImage: false,
			removeConfirmation: true,
			_selectors: {
				list: '.jFiler-items-list',
				item: '.jFiler-item',
				progressBar: '.bar',
				remove: '.jFiler-item-trash-action'
			}
		},
       	appendTo: '#media-files',
		dragDrop: {
			dragEnter: null,
			dragLeave: null,
			drop: function(){
				$('.tab-content > .tab-pane').removeClass('active');
		        $('#fileManager .nav-tabs li').removeClass('active');
		        $('.tab-content > #media').addClass('active');
		        $('#fileManager .nav-tabs li:last-child').addClass('active');
			},
			dragContainer: null,
		},
		fileMaxSize:0.6,
		uploadFile: {
			url: "http://localhost/angies/frontend/web/ajax_upload_file.php",
			data: null,
			type: 'POST',
			enctype: 'multipart/form-data',
			synchron: true,
			beforeSend: function(){},
			success: function(data, itemEl, listEl, boxEl, newInputEl, inputEl, id){
				var parent = itemEl.find(".jFiler-jProgressBar").parent(),
					new_file_name = JSON.parse(data),
					filerKit = inputEl.prop("jFiler");

				var src = itemEl.find(".jFiler-item-thumb-image > img").attr('src', new_file_name);
				itemEl.find(".jFiler-jProgressBar").fadeOut("slow", function(){
					$("<div class=\"jFiler-item-others text-success\"><i class=\"icon-jfi-check-circle\"></i></div>").hide().appendTo(parent).fadeIn("slow");
				});

        		filerKit.files_list[id].name = new_file_name;
			},
			error: function(el){
				var parent = el.find(".jFiler-jProgressBar").parent();
				el.find(".jFiler-jProgressBar").fadeOut("slow", function(){
					$("<div class=\"jFiler-item-others text-error\"><i class=\"icon-jfi-minus-circle\"></i></div>").hide().appendTo(parent).fadeIn("slow");
				});
			},
			statusCode: null,
			onProgress: null,
			onComplete: null
		},

       	addMore: true,
       	allowDuplicates: true,
		clipBoardPaste: true,
		excludeName: null,
		beforeRender: null,
		afterRender: null,
		beforeShow: null,
		beforeSelect: null,
		onSelect: null,
		afterShow: null,
		onRemove: function(itemEl, file, id, listEl, boxEl, newInputEl, inputEl){
			var filerKit = inputEl.prop("jFiler"),
		        file_name = filerKit.files_list[id].name;
		        alert(filerKit.files_list[id].file);
		    //$.post('./php/ajax_remove_file.php', {file: file_name});
		},
		onEmpty: null,
		options: null,
		dialogs: {
			alert: function(text) {
				return alert(text);
			},
			confirm: function (text, callback) {
				confirm(text) ? callback() : null;
			}
		},
		captions: {
			button: "Choose Files",
			feedback: "Choose files To Upload",
			feedback2: "files were chosen",
			drop: "Drop file here to Upload",
			removeConfirmation: "Are you sure you want to remove this file?",
			errors: {
				filesLimit: "Only {{fi-limit}} files are allowed to be uploaded.",
				filesType: "Only Images are allowed to be uploaded.",
				filesSize: "{{fi-name}} is too large! Please upload file up to {{fi-maxSize}} MB.",
				filesSizeAll: "Files you've choosed are too large! Please upload files up to {{fi-maxSize}} MB."
			}
		}
   	});*/

	$('.request-form .row.form-footer button.start-chat, .request-form .row.form-footer button.call-pro').click(function(e){
		e.preventDefault();
	});

	$('.start-chat').click(function(e){
		$('.quick-chat').slideToggle();
	});


	/*---- Bootstrap Dashboard Menu Fix -----*/
	//alert(window.location['pathname']);
	/*
	if( window.location['pathname'] !== 'angies/frontend/web/index.php?r=offers%2Fcreate') {
		$('.nav-user .dropdown > .dropdown-toggle').click(function(){
			$(this).closest('li.dropdown').toggleClass('open');
			if($(this).closest('li.dropdown').hasClass('open')){
				$(this).attr('aria-expanded', true);
			} else {
				$(this).attr('aria-expanded', false);
			}
		})
	}*/



	/*jQuery("#owl-demo").owlCarousel({

      autoPlay: false, //Set AutoPlay to 3 seconds
      navigation : true,
      pagination : false,
      navigationText : ['<span class="fa fa-angle-left"></span>','<span class="fa fa-angle-right"></span>'],
      //rewindNav : false,
      //loop:false,
      items : 3,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3],
      rewindNav: true,

  	});*/


	$('.center-carousel').slick({
	  //centerMode: true,
	  centerPadding: '40px',
	  slidesToScroll: 1,
	  slidesToShow: 3,
	  speed: 300,
	  arrows: true,
	  prevArrow: '<i class="fa fa-angle-left slide-left"></i>',
	  nextArrow: '<i class="fa fa-angle-right slide-right"></i>',
	  responsive: [
	    {
	      breakpoint: 768,
	      settings: {
	        //arrows: false,
	        //centerMode: true,
	        centerPadding: '40px',
	        slidesToShow: 1
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        //arrows: false,
	        //centerMode: true,
	        centerPadding: '40px',
	        slidesToShow: 1
	      }
	    }
	  ]
	});


	$('.discard').click(function(){
		$('.chat-box').removeClass('show');
	});

	$('.toggle-chat').click(function(e){
		e.preventDefault();
		$('.chat-box').addClass('show');
	});

	$('.rev-reply').click(function(e){
		$(this).next().slideToggle('fast');
	});

	$('.cancel-reply').click(function(e){
		$(this).closest('.comments-form').slideUp('fast');
	});


	jQuery("#tab-slider").owlCarousel({
    	navigation : true, // Show next and prev buttons
    	navigationText : ['<span class="fa fa-angle-left"></span>','<span class="fa fa-angle-right"></span>'],
    	slideSpeed : 300,
    	paginationSpeed : 400,
    	singleItem:true,
    	transitionStyle : "fade"
    });

    jQuery('.stats').percentcircle();

	if($('.left-sticky').length != 0){
		$('.left-sticky').niceScroll(
			{
				cursorcolor:"#ccc",
				cursorborder: "none",
			}
		);
	}

	$('.splash button.close, a.claim-biz').click(function(e){
      e.preventDefault();
      $('.splash > div').addClass('destroy');
      $('.splash').css('opacity', '0');
      setTimeout(function(){ $('.splash').remove(); }, 300);
    });


    $('button.lock-loc').click(function(e){
      e.preventDefault();
      $('.map-container').addClass('destroy');
      $('button.select-biz').text(shorten($('#set-address').val(),45));
      $('#co_ordinates').val($('#us3-lat').val()+','+$('#us3-lon').val());
      //$('.set-physical').css('opacity', '0');
      //setTimeout(function(){ $('.set-physical').hide(); }, 200);
      $('.set-physical').hide();
    });


    $('button.select-biz').click(function(e){
      e.preventDefault();
      $('.set-physical').show();
      $('#set-location').locationpicker({
        location: {
            latitude: -1.288564,
            longitude: 36.823173
        },
        radius: 20,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        scrollwheel: false,
        inputBinding: {
            latitudeInput: $('#us3-lat'),
            longitudeInput: $('#us3-lon'),
            radiusInput: $('#us3-radius'),
            locationNameInput: $('#set-address')
        },
        enableAutocomplete: true,
        onchanged: function (currentLocation, radius, isMarkerDropped) {
            // Uncomment line below to show alert on each Location Changed event
            //alert("Location changed. New location (" + currentLocation.latitude + ", " + currentLocation.longitude + ")");
        }
    });
      setTimeout(function(){ $('.map-container').removeClass('destroy'); }, 200);
    });

	//$('.set-physical').hide();

	function shorten(text, maxLength) {
		var ret = text;
		if (ret.length > maxLength) {
		ret = ret.substr(0,maxLength-3) + ' [...]';
		}
		return ret;
	}


	$('input[name="User[role]"]').click(function(){
		//$('.submit-modal .submit-content').
		//alert('yes');
		var modal_content;
		if($(this).attr('id') == '20') modal_content = 'You are claiming to be a <strong>Professional</strong>. You cannot revert to another account type in the future.';
		else modal_content = 'You are claiming to be a <strong>Company</strong>. You cannot revert to another account type in the future.';
		$('.submit-modal .submit-content').html(modal_content);
		$('.submit-bg').fadeIn('fast');
    	$('.submit-modal').fadeIn('fast');
        /*(if($(this).prop('checked')){
        	$('.role-selection').addClass('destroy');
        	setTimeout(function(){ $('.role-selection').hide(); }, 50);
        	$('.step-2').fadeIn('fast');
        	$('.step-hue').text('02');
        	$('.step-section .steps.step-one').removeClass('current');
        	$('.step-section .steps.step-two').addClass('current');
        }*/
    });


    $('.step-section a.steps.disabled').click(function(e){
    	e.preventDefault();
    });


    $('.submit-modal .submit-btns .dismiss').click(function(e){
    	e.preventDefault();
    	$('.submit-bg').fadeOut('fast');
    	$('.submit-modal').fadeOut('fast');
    });
    /*$('.step-section .steps').click(function(){
    	if($(this).hasClass('step-one')){
    		$(this).removeAttr('disabled').addClass('current');
    		$(this).next().removeClass('current');
    		$('.step-2').fadeOut('fast');
    		$('.step-hue').text('02');
    		setTimeout(function(){ $('.role-selection').show(); }, 50);
    		$('.role-selection').removeClass('destroy');
    	} else {
    		('.step-2').fadeIn('fast');
        	$('.step-hue').text('02');
        	$('.role-selection').addClass('destroy');
        	setTimeout(function(){ $('.role-selection').hide(); }, 50);
        	$('.step-section .steps.step-one').removeClass('current');
        	$('.step-section .steps.step-two').addClass('current');
    	}
    });*/

	//if($('.account-role input')
	//$('.role-selection')

});


$(window).load(function(){
	if($('.splash').length != 0){
		$('.splash > div').addClass('enable');
	}
});



$(function() {



});
