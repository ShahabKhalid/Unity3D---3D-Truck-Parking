#pragma strict
var MAX_LEVEL : int = 10;
var Loading : boolean = true;
var GOLoading : GameObject;

function Start()
{
	GOLoading = GameObject.Find("Loading");
	GOLoading.renderer.enabled = false;
}

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
	Loading = true;
	if(PlayerPrefs.GetInt("Level") <= MAX_LEVEL) {
		var Level : String = "Level" + PlayerPrefs.GetInt("Level");
		Application.LoadLevel(Level);
	}
	else
		Application.LoadLevel("Menu");
	
	if(Loading) {
		GameObject.Find("TT").renderer.enabled = false;
		GameObject.Find("Menu").renderer.enabled = false;
		GameObject.Find("Next").renderer.enabled = false;
		GameObject.Find("Complete").renderer.enabled = false;
		GameObject.Find("Play Again").renderer.enabled = false;
		GOLoading.renderer.enabled = true;
	}
	
	if(Application.isLoadingLevel)
		Loading = false;
}