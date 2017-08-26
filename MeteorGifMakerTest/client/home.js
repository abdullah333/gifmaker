// this function will call once user click on submit button
function onSubmit(event){
	var time = document.querySelector('#time').value;
	var gifImage = document.querySelector('#gifImage');
	Meteor.submit(event,time,gifImage);
}
// add file will tigger this event and call savefile
Template.gifmaker.events({
    'change input': Meteor.saveFile
});

Template.body.events({
	'click button':onSubmit
})
