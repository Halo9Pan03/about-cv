var rightKey, leftKey, topKey, bottomKey;

$(document).ready(function () {

	//Set up the triggers for the arrow keys
	$(document).keydown(function(e){
		if (e.keyCode == 37 && typeof leftKey === 'function') {
			leftKey();
		} else if(e.keyCode == 38 && typeof topKey === 'function') {
			topKey();
		} else if(e.keyCode == 39 && typeof rightKey === 'function') {
			rightKey();
		} else if(e.keyCode == 40 && typeof bottomKey === 'function') {
			bottomKey();
		}
	});

	parallax.add($("#index"))
			.add($("#contact"));
  $("div[id^=project_]").each(function(){
    parallax.add($(this));
  });
  $("div[id^=skill_]").each(function(){
    parallax.add($(this));
  });

	parallax.background = $("body");

	//Clears each page navigation on load
	parallax.preload = function(){
		rightKey = leftKey = topKey = bottomKey = "";
		$(".control").hide();
	};


	parallax.index.onload=function(){
		setBottom("contact", "Contact me");
	};
	parallax.contact.onload=function(){
		setBottom("skill_4", "Skills");
	};
  addCategory("skill_");
	parallax.skill_1.onload=function(){
		setBottom("project_11", "Projects");
	};
  addCategory("project_");
	//Setting up page navigation
  /*
	parallax.index.onload=function(){
		setRight("features", "Features");
		setTop("sandbox", "SandBox");
		setLeft("me","The Guy");
	};

	parallax.sandbox.onload=function(){
		setBottom("index","Home");
	};

	parallax.features.onload=function(){
		setLeft("index", "Home");
		setRight("me", "The Guy");
	};

	parallax.me.onload=function(){
		setLeft("features", "Features");
		setRight("index","Home");
	};
  */
  
  function addCategory(category){
    for (var key in parallax) {
      if (parallax.hasOwnProperty(key)) {
        if(key.indexOf(category) != -1){
          var index = key.substring(category.length);
          index = parseInt(index);
          var next = category + (index - 1);
          var previous = category + (index + 1);
          (function(k, n, p) {
            parallax[k].onload=function(){
              console.log(k+"->"+n);
              console.log(k+"<-"+p);
              setTop(p,"Previous");
              setBottom(n, "Next");
            };
          })(key, next, previous);
        }
      }
    }
  }

	//Sets the correct triggers for the arrows, plus arrow keys
	function setRight(page, text){
    if(parallax[page] == undefined){
      return;
    }
		$("#rightText").text(text);
		$("#rightControl").show().unbind('click').click(function(){
			parallax[page].right();
		});
		rightKey = function(){
			parallax[page].right();
		};
	}

	function setLeft(page, text){
    if(parallax[page] == undefined){
      return;
    }
		$("#leftText").text(text);
		$("#leftControl").show().unbind('click').click(function(){
			parallax[page].left();
		});
		leftKey = function(){
			parallax[page].left();
		};
	}

	function setTop(page, text){
    if(parallax[page] == undefined){
      return;
    }
		$("#topText").text(text);
		$("#topControl").show().unbind('click').click(function(){
			parallax[page].top();
		});
		topKey = function(){
			parallax[page].top();
		};
	}

	function setBottom(page, text){
    if(parallax[page] == undefined){
      return;
    }
		$("#bottomText").text(text);
		$("#bottomControl").show().unbind('click').click(function(){
			parallax[page].bottom();
		});
		bottomKey = function(){
			parallax[page].bottom();
		};
	}

	//The fadey bits
	$("#bottomControl").mouseenter(function(){
		$("#bottomArrow").fadeTo(500,1);
		$("#bottomText").fadeTo(500,1);
	}).mouseleave(function(){
		$("#bottomArrow").stop().fadeTo(500,0.2);
		$("#bottomText").stop().fadeTo(500,0);
	});

	$("#leftControl").mouseenter(function(){
		$("#leftArrow").fadeTo(500,1);
		$("#leftText").fadeTo(500,1);
	}).mouseleave(function(){
		$("#leftArrow").stop().fadeTo(500, 0.2);
		$("#leftText").stop().fadeTo(500,0);
	});

	$("#rightControl").mouseenter(function(){
		$("#rightArrow").fadeTo(500,1);
		$("#rightText").fadeTo(500,1);
	}).mouseleave(function(){
		$("#rightArrow").stop().fadeTo(500, 0.2);
		$("#rightText").stop().fadeTo(500,0);
	});

	$("#topControl").mouseenter(function(){
		$("#topArrow").fadeTo(500,1);
		$("#topText").fadeTo(500,1);
	}).mouseleave(function(){
		$("#topArrow").stop().fadeTo(500, 0.2);
		$("#topText").stop().fadeTo(500,0);
	});


	$(".control").hide();
	parallax.index.show();

});
