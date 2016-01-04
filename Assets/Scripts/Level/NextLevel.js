#pragma strict
var MAX_LEVEL : int = 10;

function Start () {
	if(PlayerPrefs.GetInt("Level") >= MAX_LEVEL) {
		GameObject.Find("Next").renderer.enabled = false; 
		}
	transform.GetChild(0).GetComponent(TextMesh).text = "Level " + (PlayerPrefs.GetInt("Level") - 1) + " Complete";
	transform.GetChild(1).GetComponent(TextMesh).text = "Time Taken : " + (PlayerPrefs.GetFloat("TT") - PlayerPrefs.GetFloat("ST")) + " secs";
}

function Update () {

}