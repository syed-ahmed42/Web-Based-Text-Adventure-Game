const firstBut = document.getElementById('opt-1');
const secondBut = document.getElementById('opt-2');
const thirdBut = document.getElementById('opt-3');


let textbox = document.getElementById('textbox');
let counter = 0;

const readFile = function () {
    const reader = new FileReader();
    const storyText = reader.readAsText();
    return storyText;
}

function StoryGen(id, edgeList, storyText, numButtons, butMess1 = 'Option 1', butMess2 = 'Option 2', butMess3 = 'Option 3') {
    this.id = id;
    this.edgeList = edgeList;
    this.storyText = storyText;
    this.numButtons = numButtons;
    this.butMess1 = butMess1
    this.butMess2 = butMess2
    this.butMess3 = butMess3
    this.showButtons = function () {
        let i;
        for (i = 1; i <= this.numButtons; i++) {
            let curButton = document.getElementById(`opt-${i}`);
            curButton.style.display = 'inline';
        }
        for (i; i <= 3; i++) {
            let curButton = document.getElementById(`opt-${i}`);
            curButton.style.display = 'none';
        }
    };
    this.modBut = function () {
        if (this.numButtons === 1) {
            firstBut.innerText = this.butMess1;
        }
        else if (this.numButtons === 2) {
            firstBut.innerText = this.butMess1;
            secondBut.innerText = this.butMess2;
        }

        else {
            firstBut.innerText = this.butMess1;
            secondBut.innerText = this.butMess2;
            thirdBut.innerText = this.butMess3;
        }

    }
}

//Story Texts
const stex_0 = `I wake up in a cell and notice that three new prisoners have arrived. A Kingsman, a Peasant and a Doctor. I should approach one of them and tell them about my escape plan but who should I choose?`
const stex_d_0 = `The doctor turns out to be a serial killer and immediately kills you right then and there.`
const stex_k_cell = `You approach the Kingsman to talk about your escape plan with him. You learn he is the right hand man of the recently deceased King Oliver. But he already tells you that he has an escape plan and will not escape with criminal scum like you. So he leaves without you`
const stex_p_0 = `You fry 2 eggs for yourself`
const stex_p_war = 'The peasant turns out to be a wizard and transports you to a war torn place where corpses are littered everywhere preventing you from seeing the ground, out in the distance you can see a man charging at you with a sword while screaming your name.'
const stex_p_war_1 = 'Once the man reaches you, you try to talk to him but he stabs you. Leaving you to die a slow death';
const stex_p_war_2 = 'You decide to start running in the opposite direction. You eventually reach a red brick house but the door does not have a knob or lock.'
const stex_p_war_3 = 'You pick up a sword from the bloody hands of a man and begin to prepare yourself for what is about to come. As the man comes closer you realize that the man is double your size. You swing your sword at the man but it does not reach. The man swings his sword down and splits your head in two.';
const stex_p_house_1 = 'You knock on the house and wait. As you look back the man seems to have gotten larger. You decide to accept your fate when suddenly the door opens. You enter the house and find yourself in a large superstructure comprised of a labyrinth of stairways. There is also a hallway more akin to a street to your left with a door at the end.';
const stex_p_house_2 = 'You decide to ignore the house and keep running. You run until your legs give out and you fall on the ground. You die';
const stex_p_house_3 = 'You squeeze yourself into a nearby barrel and wait for what felt like hours. You try getting out but fail and become stuck. You eventually die from dehydration.';
const stex_p_stairway_1 = 'You walk across the hallway and come to a door with a jewel emblazoned on it. You decide to knock first but hear no answer. You open the door and find that it is a complete replica of the place you were born. You also notice that a trapdoor has materialized to your right.';
const stex_p_stairway_2 = 'You walk towards the staircase and explore for a little bit until you become lost. A high pitched crying seems to permeate the entire area and seems to be getting louder the longer you stay. After several days you die.';
const stex_p_stairway_3 = 'You decide to go back and are instantly grabbed by the man. The man grabs your head with both his arms and lifts you up. He says something in an unknown language before breaking your neck like a twig';
const stex_p_room = 'You go inside the room and take a nap you never wake up.';
const stex_p_end = 'You climb through the trapdoor and find that you are outside the city in which you were held captive. You can hear scuffles breaking out in the city. You see an unattended horse in front of you and decide to take it and head east, far from the rebellion.';

const stex_k_cell_0 = 'You decide to take a nap and when you wake up the Kingsman seems to have dissapeared. As you hear guards approach you start to mentally prepare yourself for your imminent execution. However the Kingsman reappears chained and shackled while being carried by the guards. The Kingsman is thrown back in the jail cell heaving.';
const stex_k_cell_1 = 'You try to steal the key but fail. The Kingsman disgusted slowly approaches a nearby table and places the key on it. He then proceeds to pick you up by the scruff of the neck and throws you headfirst onto the table. As your head hits the table the large iron key shoots through your eyesocket and into your brain instantly killing you.';
const stex_k_cell_teamup_0 = 'You approach the Kingsman and tell him again about your escape plan. However he tells you that he will only help you if you can get help him kill King Edward. You accept his conditions and unlock his chains using your lockpicking skills. The two of you then escape the cell and come along a corridor with two guards with their backs turned towards you';
const stex_k_cell_teamup_1 = 'You decide to ignore the Kingsman and go about your day accepting your fate however your execution day swiftly approaches and you get hanged.';
const stex_k_teamup_corridor_0 = 'You decide to hide and wait for the guards to leave however the guards were carrying a torch so you are easily discovered and then stabbed to death.';
const stex_k_teamup_corridor_1 = 'You try to strangle the guards from behind since you don\'t have a weapon however you come within range of their swords and they manage to stab and kill you.'
const stex_k_teamup_corridor_2 = 'You wear the nearby armor and pretend to be guards. The rouse works and you and your companion take the stairs down and onto the battlements. The guards at the entrance recognizes the Kingsman and blows the battlehorn. You try running back up the stairs but the other two guards are now also coming downstairs.'
const stex_k_corridor_flight_0 = 'You decide to stay and fight, however it is two and four and you are quickly overpowered.'
const stex_k_corridor_flight_1 = 'You try to squeeze yourself through the window however there isn\'t enough time. So you are caught and immediately executed'
const stex_k_corridor_flight_2 = 'You act like you are the guard who blew the horn and convince the two other guards from upstairs that the intruders are downstairs. You then work with the two guards to kill the other two. Once that is done you and the Kingsman eliminate the remaining two.'
const stex_k_flight_end_0 = 'You go to the battlements and discover a swarm of guards attracted there by the noise of the horn. They all gang up on you and kill you.';
const stex_k_flight_end_1 = 'You escape through the window and then shimmy along the sides of the walls until you reach a nearby cliff edge you jump onto it and escape';
//Stories objects
const story_k_flight_end_0 = new StoryGen('stex_k_cell_teamup_1', [], stex_k_flight_end_0, 1, 'Restart');
const story_k_flight_end_1 = new StoryGen('stex_k_cell_teamup_1', [], stex_k_flight_end_1, 1, 'Restart');
const story_k_corridor_flight_0 = new StoryGen('stex_k_cell_teamup_1', [], stex_k_corridor_flight_0, 1, 'Restart');
const story_k_corridor_flight_1 = new StoryGen('stex_k_cell_teamup_1', [], stex_k_corridor_flight_1, 1, 'Restart');
const story_k_corridor_flight_2 = new StoryGen('stex_k_cell_teamup_1', [story_k_flight_end_0, story_k_flight_end_1], stex_k_corridor_flight_2, 2, 'Continue to the battlements', 'Escape through the window on the stairwell');
const story_k_teamup_corridor_0 = new StoryGen('stex_k_cell_teamup_1', [], stex_k_teamup_corridor_0, 1, 'Restart');
const story_k_teamup_corridor_1 = new StoryGen('stex_k_cell_teamup_1', [], stex_k_teamup_corridor_1, 1, 'Restart');
const story_k_teamup_corridor_2 = new StoryGen('stex_k_cell_teamup_1', [story_k_corridor_flight_0, story_k_corridor_flight_1, story_k_corridor_flight_2], stex_k_teamup_corridor_2, 3, 'Stay and fight', 'Escape through the window on the stairwell', 'Act like guards again');
const story_k_cell_teamup_0 = new StoryGen('stex_k_cell_teamup_0', [story_k_teamup_corridor_0, story_k_teamup_corridor_1, story_k_teamup_corridor_2], stex_k_cell_teamup_0, 3, 'Hide and wait for the guards to leave', 'Take out the two guards from behind', 'Act like a guards');
const story_k_cell_teamup_1 = new StoryGen('stex_k_cell_teamup_1', [], stex_k_cell_teamup_1, 1, 'Restart');
const story_k_cell_0 = new StoryGen('story_k_cell_0', [story_k_cell_teamup_1, story_k_cell_teamup_0], stex_k_cell_0, 2, 'Ignore the Kingsman', 'Free him from his chains');
const story_k_cell_1 = new StoryGen('story_k_cell_1', [], stex_k_cell_1, 1, 'Restart');
const story_p_end = new StoryGen('story_p_end', [], stex_p_end, 1, 'Restart');
const story_p_room = new StoryGen('story_p_room', [], stex_p_room, 1, 'Restart');
const story_p_stairway_3 = new StoryGen('story_p_stairway_3', [], stex_p_stairway_2, 1, 'Restart');
const story_p_stairway_2 = new StoryGen('story_p_stairway_2', [], stex_p_stairway_2, 1, 'Restart');
const story_p_stairway_1 = new StoryGen('story_p_stairway_1', [story_p_room, story_p_end], stex_p_stairway_1, 2, 'Explore the room', 'See where the trapdoor leads');
const story_p_house_3 = new StoryGen('story_p_house_3', [], stex_p_house_3, 1, 'Restart');
const story_p_house_2 = new StoryGen('story_p_house_2', [], stex_p_house_2, 1, 'Restart');
const story_p_house_1 = new StoryGen('story_p_house_1', [story_p_stairway_1, story_p_stairway_2, story_p_stairway_3], stex_p_house_1, 3, 'Open door to left', 'Take stairway in front of you', 'Go back');
const story_p_war_3 = new StoryGen('story_p_war_3', [], stex_p_war_3, 1, 'Restart');
const story_p_war_2 = new StoryGen('story_p_war_2', [story_p_house_1, story_p_house_2, story_p_house_3], stex_p_war_2, 3, 'Knock on the door', 'Ignore house and keep running', 'Hide in nearby barrel');
const story_p_war_1 = new StoryGen('story_p_war_1', [], stex_p_war_1, 1, 'Restart');
const story_p_war = new StoryGen('story_p_war', [story_p_war_1, story_p_war_2, story_p_war_3], stex_p_war, 3, 'Wait to talk to the man', 'Run in opposite direction', 'Pickup nearby sword from corpse and fight');
const story_doctor = new StoryGen('story_doctor', [], stex_d_0, 1, 'Restart');
const story_peasant = new StoryGen('story_peasant', [], stex_p_0, 3, 'Popcorn', 'Vegetables', 'Cereal');
const story_k_cell = new StoryGen('story_kingsman', [story_k_cell_0, story_k_cell_1], stex_k_cell, 2, 'Take a nap', 'Try to steal key from him');
const story_cell_0 = new StoryGen('story_cell_0', [story_doctor, story_p_war, story_k_cell], stex_0, 3, 'Approach the Doctor', 'Approach the Peasant', 'Approach the Kingsman');

//All stories that force a restart
story_doctor.edgeList = [story_cell_0];
story_p_war_1.edgeList = [story_cell_0];
story_p_war_3.edgeList = [story_cell_0];
story_p_house_2.edgeList = [story_cell_0];
story_p_house_3.edgeList = [story_cell_0];
story_p_stairway_2.edgeList = [story_cell_0];
story_p_stairway_3.edgeList = [story_cell_0];
story_p_end.edgeList = [story_cell_0];
story_p_room.edgeList = [story_cell_0];
story_k_cell_1.edgeList = [story_cell_0];
story_k_cell_teamup_1.edgeList = [story_cell_0];
story_k_teamup_corridor_0.edgeList = [story_cell_0];
story_k_teamup_corridor_1.edgeList = [story_cell_0];
story_k_corridor_flight_0.edgeList = [story_cell_0];
story_k_corridor_flight_1.edgeList = [story_cell_0];
story_k_flight_end_0.edgeList = [story_cell_0];
story_k_flight_end_1.edgeList = [story_cell_0];

console.log('the num of buttons: ' + story_doctor.numButtons);


let storyHolder = [story_cell_0
];

let curStory;
if (counter === 0) curStory = storyHolder[0];
function startGame() {
    textbox.innerText = curStory.storyText;
    curStory.showButtons(curStory.numButtons);
    if (curStory !== undefined) curStory.modBut();
}

if (counter === 0) startGame();
function updateStateAfterClick(curStory, buttonId) {
    const nextStoryArrPos = parseInt(buttonId[4]) - 1;
    console.log(nextStoryArrPos);
    console.log(curStory.storyText);
    curStory = curStory.edgeList[nextStoryArrPos];
    console.log(curStory.storyText);
    //console.log(storyHolder[0].id);
    textbox.innerText = curStory.storyText;
    curStory.showButtons(curStory.numButtons);
    if (curStory !== undefined) curStory.modBut();
    counter++;
    //For debugging
    console.log(`${counter} ${storyHolder[counter]}`)

    return curStory;
}


firstBut.addEventListener('click', e => {
    console.log(curStory.storyText);
    curStory = updateStateAfterClick(curStory, firstBut.id);
})

secondBut.addEventListener('click', e => {
    console.log(curStory.storyText);
    curStory = updateStateAfterClick(curStory, secondBut.id);
})

thirdBut.addEventListener('click', e => {
    console.log(curStory.storyText);
    curStory = updateStateAfterClick(curStory, thirdBut.id);
})






























