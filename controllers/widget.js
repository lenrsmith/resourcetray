var trayToggle = false;
var currentView = '';

Titanium.UI.addEventListener("app:resourcetray_toggle",function(e){
	currentView = e.view;

	var closeAnimation = Titanium.UI.createAnimation({
		left : -140,
		duration : 400,
		curve : Titanium.UI.ANIMATION_CURVE_EASE_IN_OUT
	});

	var openAnimation = Titanium.UI.createAnimation({
		left : 0,
		duration : 400,
		curve : Titanium.UI.ANIMATION_CURVE_EASE_IN_OUT
	});

	closeAnimation.addEventListener('complete',function(e){
		currentView.visible=false;
	});

	if(trayToggle){
		$.resourceTray.animate(closeAnimation);
		trayToggle = false;
	} else {
		currentView.visible=true;
		$.resourceTray.animate(openAnimation);
		trayToggle = true;
	}
});