
var carbon_score = 0;
var water_score = 0;

if (commute <= 10) {
   carbon_score+= 0;
}

if (commute <= 30) {
    carbon_score++;
}

if (commute <=60) {
   carbon_score+= 2;
}

if (commute > 60) {
	carbon_score += 3;
}



if (car_freq == 0) {
     carbon_score+= 0;
}

if (car_freq == 1) {
	carbon_score++;
}

if (car_freq == 2) {
	carbon_score+= 2;
}



if (car_type == 1) {
	carbon_score++;
}

if (car_type == 2) {
	carbon_score+= 2;
}

if (car_type == 3) {
	carbon_score+= 3;
}




if (pla_freq == 0) {
     carbon_score+= 0;
}

if (pla_freq == 1) {
	carbon_score++;
}

if (pla_freq == 2) {
	carbon_score+= 2;
}



if (shower <= 10) {
	water_score+= 0;
}
if (shower <= 20) {
	water_score++;
}
if (shower > 20) {
	water_score+= 2;
}



if (clothing <=3) {
	carbon_score++;
}
if (clothing < 10) {
	carbon_score+= 2;
}
if (clothing >= 10) {
	carbon_score+= 3;
}



if (eating_habits == 0) {
     water_score+= 0;
}

if (eating_habits == 1) {
	water_score++;
}

if (eating_habits == 2) {
	water_score+= 2;
}





if (housing == 1) {
	carbon_score++;
}

if (housing == 2) {
	carbon_score+= 2;
}

if (housing == 3) {
	carbon_score+= 3;
}




if (electronics == 1) {
	carbon_score++;
}

if (electronics == 2) {
	water_score+= 2;
}

if (electronics == 3) {
	carbon_score+= 3;
}



