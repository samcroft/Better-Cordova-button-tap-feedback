var app = {
    initialize: function() {
        this.bind();
    },
    bind: function() {
        document.addEventListener('deviceready', this.deviceready, false);
    },
    deviceready: function() {
        app.report('deviceready');
    },
    report: function(id) { 
        console.log('report:' + id);
    }
};

$(function(){
	$('a').on('touchstart', function(e){
		$(this).addClass('tapped');
	});
	
	$('a').on('touchend', function(e){
		$(this).removeClass('tapped');
	});
	
	$('a').on('tap', function(e){
		e.preventDefault();
	
		//do your thing
		$('#output').append('<li>You tapped a button.</li>')
	
		return false;
	});
});