var postMsg = ''

function postText(value){
	console.log('iFrame sender: ' + value) 
	parent.postMessage(value, "*")
}


const scriptsInEvents = {

	async Gamesheet_Event28_Act13(runtime, localVars)
	{
		postText(runtime.globalVars.postMsg)
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

