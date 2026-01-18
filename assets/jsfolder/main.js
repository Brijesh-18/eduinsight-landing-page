(function($) {
  "use strict";  

	$(window).on('load', function(){

   /*Page Loader active
  ========================================================*/
  $('#preloader').fadeOut();

  // Sticky Nav
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 100) {
            $('.scrolling-navbar').addClass('top-nav-collapse');
        } else {
            $('.scrolling-navbar').removeClass('top-nav-collapse');
        }
    });

    /* Auto Close Responsive Navbar on Click
    ========================================================*/
    function close_toggle() {
        if ($(window).width() <= 768) {
            $('.navbar-collapse a').on('click', function () {
                $('.navbar-collapse').collapse('hide');
            });
        }
        else {
            $('.navbar .navbar-inverse a').off('click');
        }
    }
    close_toggle();
    $(window).resize(close_toggle);
	
	/* 
    CounterUp
    ========================================================================== */
    $('.counter').counterUp({
      time: 1000
    });  

   
    // one page navigation 
    $('.navbar-nav').onePageNav({
      currentClass: 'active'
    });
   
   
      /* WOW Scroll Spy
    ========================================================*/
     var wow = new WOW({
      //disabled for mobile
        mobile: false
    });

    wow.init();


   
    
    /* Testimonials Carousel 
    ========================================================*/
    var owl = $("#testimonials");
      owl.owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        center: true,
        margin: 15,
        slideSpeed: 1000,
        stopOnHover: true,
        autoPlay: true,
        responsiveClass: true,
        responsiveRefreshRate: true,
        responsive : {
            0 : {
                items: 1
            },
            768 : {
                items: 1
            },
            960 : {
                items: 1
            },
            1200 : {
                items: 1
            },
            1920 : {
                items: 1
            }
        }
      });  

      /* Sliders Carousel 
    ========================================================*/
    var owl = $("#sliders");
      owl.owlCarousel({
        loop: true,
        nav: false,
        dots: false,
        center: true,
        margin: 15,
        smartSpeed: 700,
        stopOnHover: true,
        autoplay: true,
        responsiveClass: true,
        responsiveRefreshRate: true,
        
         // slideSpeed: 1000,
        responsive : {
            0 : {
                items: 1
            },
            768 : {
                items: 1
            },
            960 : {
                items: 1
            },
            1200 : {
                items: 1
            },
            1920 : {
                items: 1
            }
        }
      }); 
    /* 
   
    
    
   

    /* Back Top Link active
    ========================================================*/
      var offset = 200;
      var duration = 500;
      $(window).scroll(function() {
        if ($(this).scrollTop() > offset) {
          $('.back-to-top').fadeIn(400);
        } else {
          $('.back-to-top').fadeOut(400);
        }
      });

      $('.back-to-top').on('click',function(event) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: 0
        }, 600);
        return false;
      });
	  
	  	$("form[id='subscribe-form']").validate({
			errorClass: "subscribe-error",
			
			rules: {
				txt__name:{
					required:true,
					minlength:3,
					maxlength:255
				},
				txt__mobile:{
					required:true,
					digits:true,
					maxlength:10,
					minlength:10
					
				},
				txt__email:{
					required:true,
					email:true,
					minlength:3,
					maxlength:255
				},
				sl_phone_code: {
					required:true
				}
			},
			messages:{
				
			},
			highlight: function(element) {
				$(element).closest('.form-group').addClass('has-error');
			},
			
			unhighlight: function(element) {
				$(element).closest('.form-group').removeClass('has-error');
			},
			errorPlacement: function(error, element) {
				if(element.parent('.input-group').length) {
					error.insertAfter(element.parent());
				} else {
					error.insertAfter(element);
				}
			},
			submitHandler: function(form) {
				$('form[id="subscribe-form"] input[type="submit"]').attr("disabled", true);
				$('form[id="subscribe-form"] input[type="submit"]').val("Loading...");
				$.ajax({
					url: base_url+"../processo-subscribe.php", type: "POST",   data: $(form).serialize(),    dataType: 'json',  
					success: function(response) {
						if(response.status == "success") {
							$("#subscribe-form-message").html("You have subscribed successfully");
							$("#subscribe-form-message").addClass("alert alert-success");
							form.reset();
						} else {
							$("#subscribe-form-message").html("Got some error. Please try again.");
							$("#subscribe-form-messagee").addClass("alert alert-danger");
						}
						$("#subscribe-form-message").fadeTo(2000, 500).slideUp(500, function(){
							$("#subscribe-form-message").alert('close');
						});
						$('form[id="subscribe-form"] input[type="submit"]').removeAttr("disabled");
						$('form[id="subscribe-form"] input[type="submit"]').val("Subscribe");
					}
				});
			}
		});

		$("#custom-country-carousel").owlCarousel({
		    loop: true,
		    items: 1,
		    center: true,
		    responsiveClass:true,
		    autoplay: true,
		    autoPlaySpeed: 5000,
		    autoplayHoverPause: true,
		    dots: true
		});

		var owl = $("#sidebar-uni-ranking");
      	owl.owlCarousel({
	        loop: true,
	        nav: false,
	        dots: false,
	        center: true,
	        margin: 15,
	        smartSpeed: 700,
	        stopOnHover: true,
	        autoplay: true,
	        responsiveClass: true,
	        responsiveRefreshRate: true,
	        
	         // slideSpeed: 1000,
	        responsive : {
	            0 : {
	                items: 1
	            },
	            768 : {
	                items: 1
	            },
	            960 : {
	                items: 1
	            },
	            1200 : {
	                items: 1
	            },
	            1920 : {
	                items: 1
	            }
	        }
	    });

	    var owl = $("#sidebar-articles-slider");
      	owl.owlCarousel({
	        loop: true,
	        nav: false,
	        dots: false,
	        center: true,
	        margin: 15,
	        smartSpeed: 700,
	        stopOnHover: true,
	        autoplay: true,
	        responsiveClass: true,
	        responsiveRefreshRate: true,
	        
	         // slideSpeed: 1000,
	        responsive : {
	            0 : {
	                items: 1
	            },
	            768 : {
	                items: 1
	            },
	            960 : {
	                items: 1
	            },
	            1200 : {
	                items: 1
	            },
	            1920 : {
	                items: 1
	            }
	        }
	    }); 

	    var owl10 = $("#testimonials-faces");
		 	owl10.owlCarousel({
			    loop: true,
			    nav: false,
			    dots: true,
			    center: true,
			    margin: 15,
			    slideSpeed: 500,
			    stopOnHover: true,
			    slideSpeed: 500,
			    autoplayTimeout: 4000,
			    autoplay: true,
			    autoplayHoverPause:true,
			    responsiveClass: true,
			    responsiveRefreshRate: true,
			    responsive : {
			        0 : {
			            items: 1
			        },
			        768 : {
			            items: 1
			        },
			        960 : {
			            items: 1
			        },
			        1200 : {
			            items: 1
			        },
			        1920 : {
			            items: 1
			        }
			    }
		  	});
		  	

		  	var owl13 = $("#faces-slider");
		  	owl13.owlCarousel({
		        loop: true,
		        nav: false,
		        dots: false,
		        slideSpeed: 5000,
		        stopOnHover: true,
		        autoplay: true,
		        autoplayTimeout: 1000,
		        responsiveClass: true,
		        responsiveRefreshRate: true,
		        autoplayHoverPause:true,
		        responsive : {
		            0 : {
		                items: 2
		            },
		            768 : {
		                items: 4
		            },
		            960 : {
		                items: 4
		            },
		            1200 : {
		                items: 8
		            },
		            1920 : {
		                items: 8
		            }
		        }
		  	});

		$("form[id='lead-form']").validate({
		highlight: function (element, errorClass) {
			$(element).removeClass(errorClass)
		}, unhighlight: function (element, errorClass) {
			$(element).removeClass(errorClass)
		}, errorPlacement: function (error, element) {
			if(element.attr("type") == "checkbox") {
				error.insertAfter($(element).parents('label'));
            } else {
				error.insertAfter(element);
			}
		}, rules: {
			txt__lf_fname: {
				required:true,
				minlength:3,
				maxlength:50
			}, txt__lf_email:{
				required:true,
				validate_email:true,
				minlength:3,
				maxlength:100
			}, txt__lf_phone: {
				required:true,
				digits:true,
				minlength:10,
				maxlength:10
			}, cmb__lf_ser: {
				required:true
			}, txt__lf_company: {
				required:true,
				minlength:3,
				maxlength:100
			}, sl_phone_code: {
				required:true
			},

		},submitHandler: function(form) {
				$('button[type="submit"]').attr("disabled", true);
				$('button[type="submit"]').val("Loading...");
				$.ajax({
					url: "https://www.kenznow.com/processo-lead.php", type: "POST",   data: $(form).serialize(),    dataType: 'json',  
					success: function(response) {
						if(response.status == "success") {
							$("#lead-form-messages").html("Message has been sent successfully.");
							$("#lead-form-messages").addClass("alert alert-success");
							form.reset();
						} else {
							$("#lead-form-messages").html("Got some error. Please try again.");
							$("#lead-form-messages").addClass("alert alert-danger");
						}
						$('button[type="submit"]').removeAttr("disabled");
						$('button[type="submit"]').val("Proceed");
					}
				});
			}
		});

		jQuery.validator.addMethod("validate_email", function(value, element) {
			if (/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(value)) {
		        return true;
		    } else {
		        return false;
		    }
		}, "Please enter a valid Email.");

$(".show-chart").click(function(event) {
		
		event.preventDefault();
		var url = $(this).attr('href');
		
     	jQuery('#myModal .modal-body').html('<div style="text-align:center;margin-top:200px;"><i class="lni-spinner lni-spin-effect"></i></div>');
		
		// LOADING THE AJAX MODAL
		jQuery('#myModal').modal({show:true});
		
		$.ajax({
			type: "GET",
			url: url,
			dataType:"html",
			success: function(response)
			{
				jQuery('#myModal .modal-body').html(response);
			}
		});
		return false;
      });
		$('[data-toggle="tab"]').tooltip({
			trigger: 'hover',
			placement: 'top',
			animate: true,
			delay: 500,
			container: 'body',
		});
		$("#about-btn").click(function(){
			$("#about-toggle").slideToggle("slow");
			$("#about-toggle").addClass("show-toggle");
			$("#about-btn").addClass("remove-toggle");
			if($("#about-btn").text() == "Read more...."){
				$("#about-btn").text("");
			}
		});
		$("#about-btn2").click(function(){
			$("#about-toggle").slideToggle("slow");
			$("#about-toggle").removeClass("show-toggle");
			$("#about-btn").removeClass("remove-toggle");
			if($("#about-btn2").text() == "Read less...."){
				$("#about-btn").text("Read more....");
			}
		}); 
		
		$("form[id='info-form']").validate({
			highlight: function (element, errorClass) {
        		$(element).removeClass(errorClass)
    		}
    		, unhighlight: function (element, errorClass) {
        		$(element).removeClass(errorClass)
    		},	
    		errorPlacement: function (error, element) {
            	if (element.attr("type") == "checkbox") {
                	error.insertAfter($(element).parents('label'));
            	} else {
                	error.insertAfter(element);
            	}
        	},
	    	rules: {
	    		txt_name: {
					required:true,
					minlength:3,
					maxlength:50
				},
				txt_email:{
					required:true,
					validate_email:true,
					minlength:3,
					maxlength:100
				},
				txt_mobile: {
					required:true,
					digits:true,
					minlength:10,
					maxlength:10
				},
			},
			submitHandler: function(form) {
				$('button[type="submit"]').attr("disabled", true);
				$('button[type="submit"]').val("Loading...");
				$.ajax({
					url: base_url+"../processo-sponsored-lead.php", type: "POST",   data: $(form).serialize(),    dataType: 'json',  
					success: function(response) {
						if(response.status == "success") {
							$("#lead-form-messages").html("Message has been sent successfully.");
							$("#lead-form-messages").addClass("alert alert-success");
							form.reset();
						} else {
							$("#lead-form-messages").html("Got some error. Please try again.");
							$("#lead-form-messages").addClass("alert alert-danger");
						}
						$('button[type="submit"]').removeAttr("disabled");
						$('button[type="submit"]').val("Proceed");
					}
				});
			}
		});

		/*Contact Us Form Start*/
		$("form[id='contact-us'], form[id='contact-us-modal']").validate({
			rules: {
				txt__cu_name: {
					required:true,
					minlength:3,
					maxlength:50
				},
				txt__cu_email:{
					required:true,
					validate_email:true,
					minlength:3,
					maxlength:100
				
				},
				txt__cu_phone: {
					required:true,
					digits:true,
					minlength:10,
					maxlength:10
				},
				
				sl_phone_code:{
					required:true
				},
				
				txt__cu_message:{
					required:true,
					minlength:3,
					maxlength:255
				}
				
			},
			highlight: function(element) {
				$(element).closest('.form-group').addClass('has-error');
			},
	    	unhighlight: function(element) {
				$(element).closest('.form-group').removeClass('has-error');
			},
		  	errorPlacement: function(error, element) {
	        	if(element.parent('.input-group').length) {
	            	error.insertAfter(element.parent());
		        } else {
		            error.insertAfter(element);
		        }
	    	},
			submitHandler: function(form) {
				$('input[type="submit"]').attr("disabled", true);
				$('input[type="submit"]').val("Loading...");
				$.ajax({
					url: base_url+"/contact-us", 
					type: "POST",  
					data: $(form).serialize(), 
					dataType: 'json',  
					success: function(response) {
						if(response.status == "success") {
							$("#contat-us-message").html("Thank you for reaching out to Kenznow. We shall get in touch with you soon.");
							$("#contat-us-message").addClass("alert alert-success");
							form.reset();
							$("#contat-us-message").fadeTo(2000, 500).slideUp(500, function(){
								$("#contat-us-message").slideUp(500);
							});   
						} else {
							$("#contat-us-message").html("Got some error. Please try again.");
							$("#contat-us-message").addClass("alert alert-danger");
							$("#contat-us-message").fadeTo(2000, 500).slideUp(500, function(){
								$("#contat-us-message").slideUp(500);
							}); 
						}
						$('input[type="submit"]').removeAttr("disabled");
						$('input[type="submit"]').val("Submit");
					}
				});
			}
		});
		
		
		 $("form[id='inquiry-form']").validate({
			
			
			rules: {
				cpname:{
					required:true,
					minlength:3,
					maxlength:255
				},
				cpemail:{
					required:true,
					email:true,
					minlength:3,
					maxlength:255
				},
				cpphone:{
					required:true,
					digits:true,
					minlength:10,
					maxlength:10
				},
				cpmessage:{
					minlength:3,
					maxlength:255
				}
				
				
			},
			
			highlight: function(element) {
				$(element).closest('.form-group').addClass('has-error');
			},
			
			unhighlight: function(element) {
				$(element).closest('.form-group').removeClass('has-error');
			},
			errorPlacement: function(error, element) {
				if(element.parent('.input-group').length) {
					error.insertAfter(element.parent());
				} else {
					error.insertAfter(element);
				}
			},
			submitHandler: function(form) {
				$('form[id="inquiry-form"] input[type="submit"]').attr("disabled", true);
				$('form[id="inquiry-form"] input[type="submit"]').val("Loading...");
				$.ajax({
					url: base_url+"contact-us?action=inquiry", type: "POST",   data: $(form).serialize(),    dataType: 'json',  
					success: function(response) {
						if(response.status == "success") {
							$("#inquiry-form-messages").html("Thank you for your submission. We will get in touch with you shortly.");
							$("#inquiry-form-messages").addClass("alert alert-success");
							form.reset();
							//setTimeout(function(){	window.location.reload(1); }, 5000);
						} else {
							$("#inquiry-form-messages").html("Got some error. Please try again.");
							$("#inquiry-form-messages").addClass("alert alert-danger");
						}
						$("#inquiry-form-messages").fadeTo(2000, 500).slideUp(500, function(){
							$("#inquiry-form-messages").alert('close');
						});
						$('form[id="inquiry-form"] input[type="submit"]').removeAttr("disabled");
						$('form[id="inquiry-form"] input[type="submit"]').val("Submit");
					}
				});
			}
		});

		 $("form[id='stay-book-query-form']").validate({
			submitHandler: function(form) {
				$.ajax({
					url: base_url+"home/stay_booking_query", type: "POST",   data: $(form).serialize(),    dataType: 'json',  
					success: function(response) {
						if(response.status == "success") {
							$("#stay_query_message").html("Thank you for reaching out, we shall get in touch with you shortly.");
							$("#stay_query_message").addClass("alert alert-success");
							form.reset();
							//setTimeout(function(){	window.location.reload(1); }, 5000);
						} else {
							$("#stay_query_message").html("Oops!, Got some error. Please try again..");
							$("#stay_query_message").addClass("alert alert-danger");
						}
					}
				});
			}
		});
		
		$("form[id='edu-loan-query-form']").validate({
			submitHandler: function(form) {
				$.ajax({
					url: base_url+"home/education_loan_query", type: "POST",   data: $(form).serialize(),    dataType: 'json',  
					success: function(response) {
						if(response.status == "success") {
							$("#edu_loan_query_message").html("Thank you for reaching out, we shall get in touch with you shortly.");
							$("#edu_loan_query_message").addClass("alert alert-success");
							form.reset();
							//setTimeout(function(){	window.location.reload(1); }, 5000);
						} else {
							$("#edu_loan_query_message").html("Oops!, Got some error. Please try again..");
							$("#edu_loan_query_message").addClass("alert alert-danger");
						}
					}
				});
			}
		});

		$("form[id='iubh-uni-query-form']").validate({
			rules: {
				txt_name: {
					required:true,
					minlength:3,
					maxlength:50
				},
				txt_email:{
					required:true,
					validate_email:true,
					minlength:3,
					maxlength:100
				
				},
				txt_mobile: {
					required:true,
					digits:true,
					minlength:10,
					maxlength:10
				},
				
				interested_course:{
					required:true
				},
				
				gridCheck:{
					required:true
				}
				
			},
			submitHandler: function(form) {
				$('input[type="submit"]').attr("disabled", true);
				$('input[type="submit"]').val("Loading...");
				$.ajax({
					url: base_url+"home/iubh_university_query", 
					type: "POST",  
					data: $(form).serialize(), 
					dataType: 'json',  
					success: function(response) {
						if(response.status == "success") {
							$("#form-messages").html("Thank you for reaching out to Kenznow. We shall get in touch with you soon.");
							$("#form-messages").addClass("alert alert-success");
							form.reset();
							$("#form-messages").fadeTo(2000, 500).slideUp(500, function(){
								$("#form-messages").slideUp(500);
							});   
						} else {
							$("#form-messages").html("Got some error. Please try again.");
							$("#form-messages").addClass("alert alert-danger");
							$("#form-messages").fadeTo(2000, 500).slideUp(500, function(){
								$("#form-messages").slideUp(500);
							}); 
						}
						$('input[type="submit"]').removeAttr("disabled");
						$('input[type="submit"]').val("Submit");
					}
				});
			}
		});

		$("form[id='coursera-inq-query-form']").validate({
			submitHandler: function(form) {
				$.ajax({
					url: base_url+"home/coursera_query",
					type: "POST", 
					data: $(form).serialize(), 
					dataType: 'json',  
					success: function(response) {
						if(response.status == "success") {
							$("#coursera_query_message").html("Thank you for reaching out, we shall get in touch with you shortly.");
							$("#coursera_query_message").addClass("alert alert-success");
							form.reset();
							//setTimeout(function(){	window.location.reload(1); }, 5000);
						} else {
							$("#coursera_query_message").html("Oops!, Got some error. Please try again..");
							$("#coursera_query_message").addClass("alert alert-danger");
						}
					}
				});
			}
		});

		$("form[id='uni-short-app']").validate({
			errorClass: "subscribe-error",
			
			rules: {
				sl_name:{
					required:true,
					minlength:3,
					maxlength:255
				},
				sl_phone:{
					required:true,
					digits:true,
					maxlength:10,
					minlength:10
				},
				sl_phone_code:{
					required:true
				},
				sl_email:{
					required:true,
					email:true,
					minlength:3,
					maxlength:255
				}
			},
			highlight: function(element) {
				$(element).closest('.form-group').addClass('has-error');
			},
			
			unhighlight: function(element) {
				$(element).closest('.form-group').removeClass('has-error');
			},
			errorPlacement: function(error, element) {
				if(element.parent('.input-group').length) {
					error.insertAfter(element.parent());
				} else {
					error.insertAfter(element);
				}
			},
			submitHandler: function(form) {
				$('form[id="uni-short-app"] input[type="submit"]').attr("disabled", true);
				$('form[id="uni-short-app"] input[type="submit"]').val("Loading...");
				$.ajax({
					url: base_url+"home/university_shortlisting_application_query", type: "POST",   data: $(form).serialize(),    dataType: 'json',  
					success: function(response) {
						if(response.status == "success") {
							$("#uni_short_app_query_message").html("Thank you for reaching out, we shall get in touch with you shortly.");
							$("#uni_short_app_query_message").addClass("alert alert-success");
							form.reset();
						} else {
							$("#uni_short_app_query_message").html("Got some error. Please try again.");
							$("#uni_short_app_query_messagee").addClass("alert alert-danger");
						}
						$("#uni_short_app_query_message").fadeTo(2000, 500).slideUp(500, function(){
							$("#uni_short_app_query_message").alert('close');
						});
						$('form[id="uni-short-app"] input[type="submit"]').removeAttr("disabled");
						$('form[id="uni-short-app"] input[type="submit"]').val("Subscribe");
					}
				});
			}
		});
	
	


  });      
  
  $.validator.addMethod("checkfi", function(value, element, param) {
			if(param === 'm') {
				var re = /^([0-9]{10})$/;
				if (!re.test(value)) {
					$.validator.messages.checkfi = "Enter Valid Mobile No";
					return false;
				}
				return true;
			} else {
				var re1 = /^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
				if (!re1.test(value)) {
					$.validator.messages.checkfi = "Enter Valid Email Address";
					return false;
				}
				return true;
			}
		},$.validator.messages.checkfi);

}(jQuery));