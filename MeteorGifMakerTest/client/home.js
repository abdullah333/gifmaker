function onSubmit(event){
	var time = document.querySelector('#time').value;
	var gifImage = document.querySelector('#gifImage');
	Meteor.submit(event,time,gifImage);
}

Template.gifmaker.events({
    'change input': Meteor.saveFile
});

Template.body.events({
	'click button':onSubmit
})