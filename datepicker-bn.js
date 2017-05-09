/* Bengali initialisation for the jQuery UI date picker plugin. */
/* Written by Saad Amin. */
( function( factory ) {
	if ( typeof define === "function" && define.amd ) {

		// AMD. Register as an anonymous module.
		define( [ "../widgets/datepicker" ], factory );
	} else {

		// Browser globals
		factory( jQuery.datepicker );
	}
}( function( datepicker ) {

datepicker.regional.bn = {
	closeText: "বন্ধ",
	prevText: "পরবর্তী",
	nextText: "পরবর্তী",
	currentText: "আজ",
	monthNames: ["জানুয়ারি","ফেব্রুয়ারি","মার্চ","এপ্রিল","মে","জুন","জুলাই","অগাস্ট","সেপ্টেম্বর","অক্টোবর","নভেম্বর","ডিসেম্বর"],
	monthNamesShort: ["জান","ফেব্রু","মার্চ","এপ্রিল","মে","জুন","জুলাই","অগাস্ট","সেপ","অক্টোবর","নভেম্বর","ডিসেম্বর"],
	dayNames: ["রবিবার","সোমবার","মঙ্গলবার","বুধবার","বৃহস্পতিবার","শুক্রবার","শনিবার"],
	dayNamesShort: ["রবি","সোম","মঙ্গল","বুধ","বৃহ:","শুক্র","শনি"],
	dayNamesMin: ["রবি","সোম","মঙ্গল","বুধ","বৃহ:","শুক্র","শনি"],
	weekHeader: "সপ্তাহ",
	dateFormat: "dd/MM/yy",
	firstDay: 6,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: "" };
datepicker.setDefaults( datepicker.regional.bn );

return datepicker.regional.bn;

} ) );
