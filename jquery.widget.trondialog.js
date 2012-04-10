$.widget("UI.tronDialog", {
    options: {
		openSpeed 	: "slow",
		closeEffect	: "explode",
		autoOpen	: true,
		x			: 0,
		y			: 0,
		modal		: false
    },
    _create: function() {
		if(this.options.x==0)
			this.options.x=Math.random()*($(window).innerWidth()-416)+100;
		if(this.options.y==0)
			this.options.y=Math.random()*$(window).innerHeight()-100;
		var title = this.element.attr("title");
		var content = this.element.html();
		console.log(this.options.x);
		this.element.css({"left":0,"top":0}).addClass("tronDialog").removeAttr("title").html("<div class=\"dialogHeader\"><div class=\"headerTitle\"><div class=\"headerLeftTitle\"></div><div class=\"headerContentTitle\">"+title+"</div><div class=\"headerRightTitle\"></div></div></div><div class=\"dialogBody\">"+content+"</div><div class=\"dialogFooter\"></div>");
		this.element.draggable({
			handle:".headerTitle",
			start : function(){
				$(this).css("z-index",20)
			},
			stop : function(){
				$(this).css("z-index",2)
			},
		}).find(".headerLeftTitle").click(this._close);
		this.element.find(".dialogBody").resizable({ handles: 's' });
		if(this.options.autoOpen)
			this._open();
		
    },
	_close:function(){
		$(this).parent().parent().parent().effect("explode");
	},
	_open:function(){
		this.element.fadeIn("slow").animate({"left":this.options.x+"px","top":this.options.y+"px"},this.options.openSpeed);
	},
    open: function() {
		this._open();
    },
	close: function() {
		this._close();
    }
});