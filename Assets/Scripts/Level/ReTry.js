#pragma strict
var Loading : boolean = true;
var GOLoading : GameObject;

function Start()
{
	GOLoading = GameObject.Find("Loading");
	GOLoading.renderer.enabled = false;
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
	var Level : String = "Level" + (PlayerPrefs.GetInt("Level"));
	Application.LoadLevel(Level);
	
	if(Loading) {
		GameObject.Find("Loss").renderer.enabled = false;
		GameObject.Find("Menu").renderer.enabled = false;
		GameObject.Find("ReTry").renderer.enabled = false;
		GOLoading.renderer.enabled = true;
	}
	
	if(Application.isLoadingLevel)
		Loading = false;
}