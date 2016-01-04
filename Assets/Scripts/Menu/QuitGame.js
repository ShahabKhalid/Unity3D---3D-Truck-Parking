#pragma strict


function Update () {
}

function OnMouseEnter()
{
	renderer.material.color = Color.gray;
	GameObject.Find("Arrow3").renderer.enabled = true;
}

function OnMouseExit()
{
	renderer.material.color = Color.white;
	GameObject.Find("Arrow3").renderer.enabled = false;
}


function OnMouseUpAsButton()
{
	Application.Quit();
}