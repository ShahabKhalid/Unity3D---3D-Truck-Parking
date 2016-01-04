#pragma strict


function Update () {
}

function OnMouseEnter()
{
	renderer.material.color = Color.gray;
	GameObject.Find("Arrow1").renderer.enabled = true;
}

function OnMouseExit()
{
	renderer.material.color = Color.white;
	GameObject.Find("Arrow1").renderer.enabled = false;
}

function OnMouseUpAsButton()
{
	PlayerPrefs.SetInt("Level",1);
	Application.LoadLevel("Level1");
}