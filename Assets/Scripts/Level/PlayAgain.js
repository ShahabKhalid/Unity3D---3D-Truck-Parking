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
	PlayerPrefs.SetInt("Level",PlayerPrefs.GetInt("Level") - 1); 
	var Level : String = "Level" + (PlayerPrefs.GetInt("Level"));
	Application.LoadLevel(Level);
	
	if(Loading) {
		GameObject.Find("TT").renderer.enabled = false;
		GameObject.Find("Next").renderer.enabled = false;
		GameObject.Find("Complete").renderer.enabled = false;
		GameObject.Find("Play Again").renderer.enabled = false;
		GOLoading.renderer.enabled = true;
	}
	
	if(Application.isLoadingLevel)
		Loading = false;
}