function Script()
{
	THREE.Object3D.call(this);

	this.updateable = true;

	//Script Code
	this.code = '';
	this.func = Function(this.code_loop);
}

//Function Prototype
Script.prototype = Object.create(THREE.Object3D.prototype);
Script.prototype.constructor = Script;
Script.prototype.update = update;
Script.prototype.setLoopCode = setLoopCode;

//Set loop code
function setLoopCode(code)
{
	this.code = code;
	this.func = Function(this.code);
}

//Update Script (run)
function update()
{
	this.func_loop();
}