/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
    "name": "Thomas Porquet",
    "role": "Software engineer",
    "contact_info": "thomas.porquet@gmail.com",
    "picture_url": "http://porquet.org/picture.jpeg",
    "welcome_message": "hello there! hope everything's allright",
    "skills": ["cooking", "guitar", "js"]
};

var work = {
    "jobs": [
	{
	    "title": "Usage statistics manager",
	    "employer": "Couperin.org",
	    "dates": "2012-future",
	    "city": "Paris"
	},
	{
	    "title": "Software engineer",
	    "employer": "SemanticEdge GmbH",
	    "dates": "2009-2011",
	    "city": "Berlin"	    
	}
    ]
};

var education = {
    "schools": [
	{
	    name: "Université Sorbonne Nouvelle",
	    city: "Paris",
	    degree: "DESS"
	},
	{
	    name: "Université Toulouse Le Mirail",
	    city: "Toulouse",
	    degree: "Master"
	}
    ],
    "onlineCourses": [
	{
	    "title": "Javascript Crash Course",
	    "school": "Udacity",
	    "dates": 2016,
	    "url": "http://www.udacity.com/course/ud804"
	}
    ]
};

var projects = {
    projects: [
	{
	    "title": "Mesure",
	    "dates": "2012-now",
	    "description": "Automated harvesting of publishers' COUNTER reports",
	    "url": "http://mesure.couperin.org"
	},
	{
    	    "title": "ezPAARSE",
	    "dates": "2012-now",
	    "description": "locally generated usage statistics",
	    "url": "http://ezpaarse.couperin.org"
	}
    ]
};

//$("#main").append(bio.name);

if (bio.skills.length && bio.skills.length > 0){
    $("#header").append(HTMLskillsStart);
    for(var skill in bio.skills){
	$("#skills").append(HTMLskills.replace("%data%", bio.skills[skill]));
    }
}

if (work.jobs && work.jobs.length > 0){
    for (var job in work.jobs){
	$("#workExperience").append(HTMLworkStart);
	var employer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var jobTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	$(".work-entry:last").append(employer + " " + jobTitle);
    }
}

