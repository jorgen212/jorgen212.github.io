$(document).ready(function(){
	
    $(document).on("click", "#paraguas_content_right img", function(event) {
         event.preventDefault();
         nextFotoParaguas(1);
    });


    $(document).on("click", "#paraguas_content_left img", function(event) {
         event.preventDefault();
         nextFotoParaguas(0);
    });

    $(document).on("click", "#expat_content_right img", function(event) {
         event.preventDefault();
         nextFotoExpat(1);
    });


    $(document).on("click", "#expat_content_left img", function(event) {
         event.preventDefault();
         nextFotoExpat(0);
    });

	$(document).on("click", ".button", function(event) {
         event.preventDefault();
         link = this.className;
         
        resetButtons();
    		 
    	 if(includes(link,"sirenas")) {
    		 $("#sirenas").show("slow");
    		 $(this).addClass('button_sirenas2').removeClass('button_sirenas');
    	 } else {
    		 $("#sirenas").hide("slow");
    	 }
    	 
    	if(includes(link,"expat")) {
    		 $("#expat").show("slow");
    		 $(this).addClass('button_expat2').removeClass('button_expat');
    	 } else {
    		 $("#expat").hide("slow");
    	 }
    	 
    	 if(includes(link,"paraguas")) {
    		 $("#paraguas").show("slow");
    		 $(this).addClass('button_paraguas2').removeClass('button_paraguas');
    	 } else {
    		 $("#paraguas").hide("slow");
    	 }
    	 
    	 if(includes(link,"rubbish")) {
    		 $("#rubbish").show("slow");
    		 $(this).addClass('button_rubbish2').removeClass('button_rubbish');
    	 } else {
    		 $("#rubbish").hide("slow");
    	 }
    	 

	    	 
 	});
	
	
	// ===== Scroll to Top ==== 
	$(window).scroll(function() {
		if ($(this).scrollTop() >= 50) {
			$('#return-to-top').fadeIn(200);
		} else {
			$('#return-to-top').fadeOut(200);
		}
	});
	
	


	function nextFotoParaguas(side){
		nameFoto = $("#paraguas_content_center img").attr('src');
         part1 = nameFoto.substring(0,nameFoto.lastIndexOf("_")+1);
         part2 = nameFoto.substring(nameFoto.lastIndexOf("."),nameFoto.length);
         numberFoto = parseInt(nameFoto.substring(nameFoto.lastIndexOf("_")+1, nameFoto.lastIndexOf(".")));
         if(side == 1) {
         	if(numberFoto == 15){
         		numberFoto = 1;
         	} else {
         		numberFoto = numberFoto + 1;
         	}
         } else {
         	if(numberFoto == 1 ) {
         		numberFoto = 15;
        	 } else {
        	 	numberFoto = numberFoto - 1;
         	}
         }
         $("#paraguas_content_center img").attr('src',part1+numberFoto+part2);

	}

    function nextFotoExpat(side){
        nameFoto = $("#expat_content_center img").attr('src');
         part1 = nameFoto.substring(0,nameFoto.lastIndexOf("_")+1);
         part2 = nameFoto.substring(nameFoto.lastIndexOf("."),nameFoto.length);
         numberFoto = parseInt(nameFoto.substring(nameFoto.lastIndexOf("_")+1, nameFoto.lastIndexOf(".")));
         if(side == 1) {
            if(numberFoto == 10){
                numberFoto = 1;
            } else {
                numberFoto = numberFoto + 1;
            }
         } else {
            if(numberFoto == 1 ) {
                numberFoto = 10;
             } else {
                numberFoto = numberFoto - 1;
            }
         }
         $("#expat_content_center img").attr('src',part1+numberFoto+part2);

    }


	function includes(word,sentence){
		if(word.indexOf(sentence) != -1) {
			return true;
		}
		return false;
	}


	function resetButtons() {

		$( ".button" ).each(function(index, element) {
        	if(includes(element.className,'sirenas')) {
  				$(element).addClass('button_sirenas').removeClass('button_sirenas2');
  			} else if(includes(element.className,'expat')) {
  				$(element).addClass('button_expat').removeClass('button_expat2');
  			} else if(includes(element.className,'paraguas')) {
  				$(element).addClass('button_paraguas').removeClass('button_paraguas2');
  			} else if(includes(element.className,'rubbish')) {
  				$(element).addClass('button_rubbish').removeClass('button_rubbish2');
  			} 
		});
	} 
	
});

