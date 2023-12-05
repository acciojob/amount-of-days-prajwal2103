function daysOfYear(date) {
	if((date%4==0 &&  date%100!=0)||(date%100==0 && date%400==0)){
		return 366;
	}
	else{
		return 365;
	}
}

