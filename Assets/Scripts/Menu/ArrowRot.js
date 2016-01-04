#pragma strict
var Angle : float = 0;
function Start () {
}

function Update () {
	
	Angle+=5;
	transform.localRotation = Quaternion.Euler(Angle,0f,0f);
}