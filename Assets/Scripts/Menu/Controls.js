#pragma strict


function Update () {
}

function OnMouseEnter()
{
	renderer.material.color = Color.gray;
	GameObject.Find("Arrow2").renderer.enabled = true;
}

function OnMouseExit()
{
	renderer.material.color = Color.white;
	GameObject.Find("Arrow2").renderer.enabled = false;
}

function OnMouseUpAsButton()
{
	Application.LoadLevel("Controls");
}