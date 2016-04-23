var prompt = require('prompt');
var Bus = require('./bus.js');

prompt.get(['name', 'gender', 'grade', 'gpa', 'detentions', 'sleepingInClass', 'catchPhrase'], function(error, result){
  if(!error){
  	var schoolbus = new Bus('Barbara', 'yellow', 'full');
    schoolbus.studentEntersBus(result.name, result.gender, result.grade, result.gpa, result.detentions, result.sleepingInClass, result.catchPhrase)

      for(i = 0; i < kids.name.length; i++){
        schoolbus.studentEntersBus(kids.name[i], kids.gender[i], kids.grade[i], kids.gpa[i], kids.detentions[i], kids.sleepingInClass[i], kids.catchPhrase[i])
        schoolbus.studentsOnTheBus[i].canStudentHaveFun();
        schoolbus.busChatter();
      }

  }else{
    console.log(error);
  }
});

var kids = {
    name: ['Bilal', 'Maliha', 'Aisha', 'Valerie', 'Carole','Wendy', 'Lisa', 'Jordan', 'Jonathon', 'Jason','Andrew', 'Gavin','Randall','Melissa', 'Kimberly','Rameez', 'Rais', 'Zaim', 'Izam'],
    gender: ['male', 'female', 'female', 'female', 'female','female', 'female','male', 'male', 'male','male', 'male','male', 'female', 'female','male', 'male', 'male', 'male'],
    grade: ['3', '7', '2', '5', '1','10', '11','12', '12', '6','7', '8','9', '12', '4','1', '3', '2', '1'],
    gpa: ['4.00', '3.21', '2.09', '1.56', '2.21','2.00', '3.14','2.42', '4.00', '1.92','0.33', '3.14','4.20', '1.13', '2.91','2.13', '4.00', '2.15', '1.33'],
    detentions: ['1', '16', '12', '0', '3','1', '13','1', '6', '0','2', '1','7', '8', '2','14', '99', '0', '0'],
    sleepingInClass: ['N', 'N', 'Y', 'Y', 'N','N', 'Y','Y', 'N', 'Y','N', 'Y','N', 'Y', 'N','N', 'N', 'N', 'N'],
    catchPhrase:[
      "You're gonna geddit!", "Gonna stick it in your butt!","We're gonna PARRRRRTYYY!!!!", 'OMG Mean Girls is the best movie ever!',"Why isn't there a girl's football team?", "Knock! Knock! No one is home.",'Follow me on Snapchat!', 'Shut up Lisa!','Pavan is peddling fire sauce packets', 'Owens is a ninja!',"You guys, I'm super tired.", 'Giphy is the best!','Does anyone have the answers to the homework?', 'Peanut Butter and Jelly again?!?! Thanks for nothing mom!','Who wants to trade lunches?', 'Batman vs Superman is the best superhero movie ever!','Batman vs Superman sucks!', "I'm running out of catchphrases to make up....",'I want to be a unicorn when I grow up!', 'Is catnip the cat equivalent of marijuana?',"IT'S THE FINAL COUNTDOWN!",
    ]
  }
