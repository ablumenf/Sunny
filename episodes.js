/* January 1, 1970 = Thursday */
const sunday = 86400000*3;
const monday = 86400000*4;
const tuesday = 86400000*5;
const wednesday = 86400000*6;
const thursday = 0;
const friday = 86400000;
const saturday = 86400000*2;
const hour = 3600000;
const minute = 60000;
const week = 604800000;

let episodes = [];

let season1 = [];
season1.push({title: "The Gang Gets Racist", time: thursday+45*minute});
season1.push({title: "Charlie Wants an Abortion", time: tuesday+11*hour+45*minute});
season1.push({title: "Underage Drinking: A National Concern", time: friday+21*hour+45*minute});
season1.push({title: "Charlie Has Cancer", time: tuesday+12*hour+40*minute});
season1.push({title: "Gun Control", time: friday+11*hour+25*minute});
season1.push({title: "The Gang Finds A Dead Guy", time: friday+10*hour+25*minute});
season1.push({title: "Charlie Gets Molested", time: monday+11*hour+15*minute});
episodes.push(season1);

let season2 = [];
season2.push({title: "Charlie Gets Crippled", time: monday+22*hour+15*minute});
season2.push({title: "The Gang Goes Jihad", time: monday+15*hour+30*minute});
season2.push({title: "Dennis And Dee Go On Welfare", time: wednesday+16*hour+30*minute});
season2.push({title: "Mac Bangs Dennis' Mom", time: friday+16*hour+30*minute});
season2.push({title: "Hundred Dollar Baby", time: tuesday+23*hour+30*minute});
season2.push({title: "The Gang Gives Back", time: monday+11*hour+15*minute});
season2.push({title: "The Gang Exploits A Miracle", time: tuesday+11*hour});
season2.push({title: "The Gang Runs For Office", time: wednesday+10*hour+15*minute});
season2.push({title: "Charlie Goes America All Over Everybody's Ass", time: saturday+2*hour+30*minute});
season2.push({title: "Dennis And Dee Get A New Dad", time: monday+8*hour});
episodes.push(season2);

let season3 = [];
season3.push({title: "The Gang Finds a Dumpster Baby", time: wednesday+16*hour+30*minute});
season3.push({title: "The Gang Gets Invincible", time: wednesday+10*hour+30*minute});
season3.push({title: "Dennis and Dee's Mom Is Dead", time: monday+12*hour});
season3.push({title: "The Gang Gets Held Hostage", time: wednesday+13*hour+30*minute});
season3.push({title: "The Aluminum Monster vs. Fatty Magoo", time: tuesday+11*hour*30*minute});
season3.push({title: "The Gang Solves the North Korea Situation", time: monday+16*hour});
season3.push({title: "The Gang Sells Out", time: tuesday+14*hour+30*minute});
season3.push({title: "Frank Sets Sweet Dee on Fire", time: wednesday+18*hour});
season3.push({title: "Sweet Dee's Dating a Retarded Person", time: wednesday+22*hour+30*minute});
season3.push({title: "Mac is a Serial Killer", time: thursday+10*hour});
season3.push({title: "Dennis Looks Like a Registered Sex Offender", time: tuesday+15*hour+30*minute});
season3.push({title: "The Gang Gets Whacked (Part 1)", time: monday+14*hour+30*minute});
season3.push({title: "The Gang Gets Whacked (Part 2)", time: monday+14*hour+30*minute});
season3.push({title: "Bums: Making a Mess All Over the City", time: monday+10*hour+15*minute});
season3.push({title: "The Gang Dances Their Asses Off", time: saturday+13*hour+15*minute});

let day = randomInt(-2, 1);
let h = randomInt(7, 20);
let m = randomInt(0, 60);
season3[12].time = ((7+day)*week/7 + h*hour + m*minute) % week;
episodes.push(season3);

let season4 = [];
season4.push({title: "Mac and Dennis: Manhunters", time: wednesday+15*hour+30*minute});
season4.push({title: "The Gang Solves the Gas Crisis", time: monday+10*hour+30*minute});
season4.push({title: "America's Next Top Paddy's Billboard Model Contest", time: monday+9*hour+30*minute});
season4.push({title: "Mac's Banging the Waitress", time: wednesday+14*hour+30*minute});
season4.push({title: "Mac and Charlie Die (Part 1)", time: monday+10*hour});
season4.push({title: "Mac and Charlie Die (Part 2)", time: monday+10*hour});
season4.push({title: "Who Pooped the Bed?", time: wednesday+15*hour+30*minute});
season4.push({title: "Paddy's Pub: The Worst Bar in Philadelphia", time: tuesday+16*hour+42*minute});
season4.push({title: "Dennis Reynolds: An Erotic Life", time: monday+23*hour});
season4.push({title: "Sweet Dee Has a Heart Attack", time: monday+19*hour});
season4.push({title: "The Gang Cracks the Liberty Bell", time: thursday+14*hour+30*minute});
season4.push({title: "The Gang Gets Extreme: Home Makeover Edition", time: friday+15*hour+27*minute});
season4.push({title: "The Nightman Cometh", time: friday+19*hour+15*minute});

day = randomInt(-2, 1);
h = randomInt(7, 20);
m = randomInt(0, 60);
season4[5].time = ((7+day)*week/7 + h*hour + m*minute) % week;
episodes.push(season4);

let season5 = [];
season5.push({title: "The Gang Exploits the Mortgage Crisis", time: tuesday+11*hour+30*minute});
season5.push({title: "The Gang Hits the Road", time: tuesday+11*hour});
season5.push({title: "The Great Recession", time: tuesday+11*hour});
season5.push({title: "The Gang Gives Frank an Intervention", time: wednesday+11*hour});
season5.push({title: "The Waitress Is Getting Married", time: saturday+12*hour*30*minute});
season5.push({title: "The World Series Defense", time: tuesday+11*hour});
season5.push({title: "The Gang Wrestles for the Troops", time: saturday+12*hour+30*minute});
season5.push({title: "Paddy's Pub: Home of the Original Kitten Mittens", time: wednesday+12*hour+30*minute});
season5.push({title: "Mac and Dennis Break Up", time: friday+12*hour});
season5.push({title: "The D.E.N.N.I.S. System", time: saturday+13*hour+30*minute});
season5.push({title: "Mac and Charlie Write a Movie", time: thursday+13*hour+30*minute});
season5.push({title: "The Gang Reignites the Rivalry", time: tuesday+20*hour+17*minute});
episodes.push(season5);

let season6 = [];
season6.push({title: "Mac Fights Gay Marriage", time: thursday+11*hour});
season6.push({title: "Dennis Gets Divorced", time: monday+7*hour+30*minute});
season6.push({title: "The Gang Buys a Boat", time: saturday+10*hour});
season6.push({title: "Mac's Big Break", time: thursday+9*hour+30*minute});
season6.push({title: "Mac and Charlie: White Trash", time: saturday+12*hour+30*minute});
season6.push({title: "Mac's Mom Burns Her House Down", time: thursday+12*hour});
season6.push({title: "Who Got Dee Pregnant?", time: saturday+17*hour+30*minute});
season6.push({title: "The Gang Gets a New Member", time: monday+11*hour+30*minute});
season6.push({title: "Dee Reynolds: Shaping America's Youth", time: monday+8*hour+30*minute});
season6.push({title: "Charlie Kelly: King of the Rats", time: tuesday+10*hour});
season6.push({title: "The Gang Gets Stranded in the Woods", time: saturday+15*hour+30*minute});
season6.push({title: "Dee Gives Birth", time: friday+9*hour+30*minute});
season6.push({title: "A Very Sunny Christmas", time: thursday+9*hour});
episodes.push(season6);

let season7 = [];
season7.push({title: "Frank's Pretty Woman", time: monday+11*hour+30*minute});
season7.push({title: "The Gang Goes to the Jersey Shore", time: friday+10*hour+30*minute});
season7.push({title: "Frank Reynolds' Little Beauties", time: saturday+12*hour});
season7.push({title: "Sweet Dee Gets Audited", time: thursday+11*hour+15*minute});
season7.push({title: "Frank's Brother", time: wednesday+15*hour+50*minute});
season7.push({title: "The Storm of the Century", time: friday+11*hour+40*minute});
season7.push({title: "Chardee MacDennis: The Game of Games", time: monday+12*hour+45*minute});
season7.push({title: "The ANTI-Social Network", time: saturday+21*hour+30*minute});
season7.push({title: "The Gang Gets Trapped", time: tuesday+13*hour+45*minute});
season7.push({title: "How Mac Got Fat", time: sunday+12*hour+20*minute});
season7.push({title: "Thunder Gun Express", time: wednesday+14*hour+15*minute});
season7.push({title: "The High School Reunion", time: friday+19*hour+10*minute});
season7.push({title: "The High School Reunion Part 2: The Gang's Revenge", time: friday+19*hour+10*minute});

h = randomInt(20, 22);
m = randomInt(0, 60);
season7[12].time = friday + h*hour + m*minute;
episodes.push(season7);

let season8 = [];
season8.push({title: "Pop-Pop: The Final Solution", time: tuesday+10*hour+45*minute});
season8.push({title: "The Gang Recycles Their Trash", time: monday+11*hour+40*minute});
season8.push({title: "The Maureen Ponderosa Wedding Massacre", time: friday+22*hour});
season8.push({title: "Charlie and Dee Find Love", time: friday+11*hour+30*minute});
season8.push({title: "The Gang Gets Analyzed", time: thursday+11*hour});
season8.push({title: "Charlie's Mom Has Cancer", time: saturday+11*hour+20*minute});
season8.push({title: "Frank's Back in Business", time: friday+11*hour+15*minute});
season8.push({title: "Charlie Rules the World", time: tuesday+10*hour+30*minute});
season8.push({title: "The Gang Dines Out", time: saturday+8*hour*17*minute});
season8.push({title: "Reynolds vs. Reynolds: The Cereal Defense", time: friday+10*hour+19*minute});
episodes.push(season8);

let season9 = [];
season9.push({title: "The Gang Broke Dee", time: wednesday+12*hour+15*minute});
season9.push({title: "Gun Fever Too: Still Hot", time: tuesday+9*hour+35*minute});
season9.push({title: "The Gang Tries Desperately to Win an Award", time: friday+14*hour+30*minute});
season9.push({title: "Mac and Dennis Buy a Timeshare", time: thursday+11*hour+45*minute});
season9.push({title: "Mac Day", time: saturday+23*hour+55*minute});
season9.push({title: "The Gang Saves the Day", time: wednesday+12*hour+15*minute});
season9.push({title: "The Gang Gets Quarantined", time: monday+11*hour+30*minute});
season9.push({title: "Flowers for Charlie", time: wednesday+9*hour+14*minute});
season9.push({title: "The Gang Makes Lethal Weapon 6", time: -1}); // unknown time
season9.push({title: "The Gang Squashes Their Beefs", time: wednesday+13*hour});

day = randomInt(-3, 2);
h = randomInt(9, 18);
m = randomInt(0, 60);
season9[8].time = ((7+day)*week/7 + h*hour + m*minute) % week;
episodes.push(season9);

let season10 = [];
season10.push({title: "The Gang Beats Boggs", time: thursday+9*hour+30*minute});
season10.push({title: "The Gang Group Dates", time: tuesday+11*hour});
season10.push({title: "Psycho Pete Returns", time: monday+15*hour});
season10.push({title: "Charlie Work", time: monday+9*hour});
season10.push({title: "The Gang Spies Like U.S.", time: wednesday+10*hour});
season10.push({title: "The Gang Misses the Boat", time: friday+15*hour+30*minute});
season10.push({title: "Mac Kills His Dad", time: monday+17*hour+5*minute});
season10.push({title: "The Gang Goes on Family Fight", time: tuesday+13*hour+45*minute});
season10.push({title: "Frank Retires", time: wednesday+10*hour+30*minute});
season10.push({title: "Ass Kickers United: Mac and Charlie Join a Cult", time: wednesday+10*hour});
episodes.push(season10);

let season11 = [];
season11.push({title: "Chardee MacDennis 2: Electric Boogaloo", time: monday+10*hour+20*minute});
season11.push({title: "Frank Falls Out the Window", time: wednesday+12*hour+10*minute});
season11.push({title: "The Gang Hits the Slopes", time: friday+9*hour+30*minute});
season11.push({title: "Dee Made a Smut Film", time: tuesday+15*hour+12*minute});
season11.push({title: "Mac & Dennis Move To The Suburbs", time: thursday+10*hour+30*minute});
season11.push({title: "Being Frank", time: friday+11*hour});
season11.push({title: "McPoyle vs. Ponderosa: The Trial of the Century", time: friday+7*hour+54*minute});
season11.push({title: "Charlie Catches a Leprechaun", time: wednesday+10*hour});
season11.push({title: "The Gang Goes to Hell", time: -1}); // unknown time
season11.push({title: "The Gang Goes to Hell: Part Two", time: -1}); // unknown time

day = randomInt(-3, 2);
h = randomInt(9, 18);
m = randomInt(0, 60);
season11[8].time = ((7+day)*week/7 + h*hour + m*minute) % week;
let offset = 1000*60*randomInt(0, 60);
season11[9].time = season11[8].time + offset;
episodes.push(season11);

let season12 = [];
season12.push({title: "The Gang Turns Black", time: friday+21*hour+15*minute});
season12.push({title: "The Gang Goes To A Water Park", time: saturday+9*hour+58*minute});
season12.push({title: "Old Lady House: A Situational Comedy", time: tuesday+12*hour});
season12.push({title: "Wolf Cola: A Public Relations Nightmare", time: monday+10*hour+5*minute});
season12.push({title: "Making Dennis Reynolds a Murderer", time: saturday+2*minute});
season12.push({title: "Hero or Hate Crime?", time: monday+11*hour+41*minute});
season12.push({title: "PTSDee", time: wednesday+15*hour+25*minute});
season12.push({title: "The Gang Tends Bar", time: tuesday+11*hour});
season12.push({title: "A Cricket's Tale", time: sunday+15*hour+10*minute});
season12.push({title: "Dennis' Double Life", time: thursday+11*hour+30*minute});
episodes.push(season12);

let season13 = [];
season13.push({title: "The Gang Makes Paddy's Great Again", time: thursday+21*hour+30*minute});
season13.push({title: "The Gang Escapes", time: saturday+14*hour+30*minute});
season13.push({title: "The Gang Beats Boggs: Ladies Reboot", time: thursday+12*hour});
season13.push({title: "Time's Up For The Gang", time: saturday+10*hour});
season13.push({title: "The Gang Gets New Wheels", time: tuesday+15*hour+15*minute});
season13.push({title: "The Gang Solves the Bathroom Problem", time:friday+2*hour});
season13.push({title: "The Gang Does a Clip Show", time:tuesday+14*hour});
season13.push({title: "Charlie's Home Alone", time:saturday+14*hour+40*minute});
season13.push({title: "The Gang Wins the Big Game", time:saturday+14*hour+40*minute});
season13.push({title: "Mac Finds His Pride", time:saturday+10*hour+15*minute});
episodes.push(season13);