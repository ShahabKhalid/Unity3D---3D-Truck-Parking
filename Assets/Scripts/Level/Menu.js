#pragma strict
var MAX_LEVEL : int = 2;
function Update () {
}

function OnMouseEnter()
{
	renderer.material.color = Color.gray;
}

function OnMouseExit()
{
	renderer.material.color = Color.white;
}

function OnMouseUpAsButton()
{
		Application.LoadLevel("Menu");
}