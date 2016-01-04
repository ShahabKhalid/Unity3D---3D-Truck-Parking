#pragma strict
var EndTime : float = 0;
var StartTime : float = 0;

var MaxSpeed : float;
var Acceleration : float;
var Speed : float;
var SlowDownFor : boolean = false;
var SlowDownRev : boolean = false;
var Gear : int = 1;
var For : boolean = false;
var Rev : boolean = false;
var Break : boolean = false;
var RotY : float = 0;
var MoveRight : boolean;
var MoveLeft : boolean;

var BodyRot : float = 0f;
var Body : Transform;
var RareWheel : Transform;
var FrontWheel_R : Transform;
var FrontWheel_L : Transform;
var WheelRotX : float;
var WheelRotY : float = 0;

var Place : Transform;
var ForGear : GameObject;
var RevGear : GameObject;
var ObjNames = new Array ("truck2","fordnew","Wall","Building","Barrier","roadblock");

function Start () {
	ForGear = GameObject.Find("Forward");
	RevGear = GameObject.Find("Reverse");
	RevGear.guiTexture.enabled = false;
}

function OnLevelWasLoaded (level : int) {
		StartTime = Time.time;
		PlayerPrefs.SetFloat("ST",StartTime);
}
	
// Update is called once per frame
function Update () {
	
	if(Input.GetKeyDown(KeyCode.LeftShift))
	{
		if(Gear == 1) {
			Speed = 0;
			Gear = 2; 
			RevGear.guiTexture.enabled = true;
			ForGear.guiTexture.enabled = false;
			}
		else if(Gear == 2) {
			Speed = 0;
			Gear = 1; 
			RevGear.guiTexture.enabled = false;
			ForGear.guiTexture.enabled = true;}
	}
	if (Input.GetKey (KeyCode.W)) {
			For = false;
			Rev = false;
			if(Gear == 1)
				For = true;
			else if(Gear == 2)
				Rev = true;
		}
		
	if (Input.GetKey (KeyCode.S)) {
		Break = true;
	}
	
	
	if(For)
	{
	SlowDownRev = false;
	if(!Break) {
		if(SlowDownFor)
			SlowDownFor = false;
		if(Speed < MaxSpeed)
			Speed += Acceleration;
		WheelRotX+=Speed;
		RotY += WheelRotY * 0.005 * Speed;
		}
	}
	
	if(Rev)
	{
	if(!Break) {
		SlowDownFor = false;
		if(SlowDownRev)
			SlowDownRev = false;
		if(Speed < MaxSpeed)
			Speed += Acceleration;
		WheelRotX-=Speed;
		RotY -= WheelRotY * 0.005 * Speed;
		}
	}
	
	if(Break)
	{
		if(Speed > 0)Speed -= 1;
	}
	
	

	if(!SlowDownFor && BodyRot >= 0 && Speed <= 1)
		BodyRot-=0.25;
	
	
	if(Input.GetKeyUp(KeyCode.W))
	{
		if(For) {
		For = false;
		SlowDownFor = true; }
		if(Rev) {
		Rev = false;
		SlowDownRev = true; }
	}
	
	if(Input.GetKeyUp(KeyCode.S))
	{
		if(Break) {
		Break = false;}
	}
	
	if(SlowDownFor)
	{
		if(Speed > 0) {
			Speed -= 0.05;
		}
		else
		SlowDownFor = false;
		
		RotY += WheelRotY * 0.005 * Speed;
		WheelRotX+=Speed*10;

	}
	
	if(SlowDownRev)
	{
		if(Speed > 0) {
			Speed -= 0.05;
		}
		else
		SlowDownRev = false;
		
		RotY -= WheelRotY * 0.005 * Speed;
		WheelRotX-=Speed*10;

	}
	
	if(EndTime == 0 && Speed < 0) {
		if(parseInt(transform.position.x) == parseInt(Place.transform.position.x) && parseInt(transform.position.z) == parseInt(Place.transform.position.z))
		{	
			if(Place.transform.rotation.y + 5 > transform.rotation.y && Place.transform.rotation.y - 5 < transform.rotation.y) {
				EndTime = Time.time;
 				PlayerPrefs.SetInt("Level",PlayerPrefs.GetInt("Level")+1);
				PlayerPrefs.SetFloat("TT",EndTime);
				Application.LoadLevel("NextLevel");
			}
		}
	}


	if(For || SlowDownFor)
		transform.localPosition -= transform.up * Speed * 0.02;
	if(Rev || SlowDownRev)
		transform.localPosition += transform.up * Speed * 0.02;
		
	transform.localRotation = Quaternion.Euler(270,RotY, 0f);


		
	RareWheel.transform.localRotation = Quaternion.Euler(WheelRotX, 0f, 0f);
	FrontWheel_R.transform.localRotation = Quaternion.Euler(WheelRotX,WheelRotY, 0f);
	FrontWheel_L.transform.localRotation = Quaternion.Euler(WheelRotX,WheelRotY, 0f);
	Body.transform.localRotation = Quaternion.Euler(BodyRot,0f, 0f);
	//Sterring
	if (Input.GetKeyDown (KeyCode.D)) {
		MoveRight = true;
	}

	else if (Input.GetKeyDown (KeyCode.A)) {
		MoveLeft = true;
	}
	
	if (Input.GetKeyUp (KeyCode.D)) {
		 MoveRight = false;
	}

	else if (Input.GetKeyUp (KeyCode.A)) {
		MoveLeft = false;
	}
	
	if(MoveRight)
	{
		if(WheelRotY < 30) WheelRotY+=2.5;
	}
	
	
	if(MoveLeft)
	{
		if(WheelRotY > -30) WheelRotY-=2.5;
	}
	
	if(!MoveRight && ! MoveLeft)
	{
		if(WheelRotY > 0)
		{
			WheelRotY-=5;
		}
		else if(WheelRotY < 0)
		{	
			WheelRotY+=5;
		}
	}
}

function OnCollisionEnter(collision : Collision)
{
	if(collision.gameObject.name == "LCube" || collision.gameObject.name == "RCube");
		Speed *= 0.5;


	if(collision.transform.position.x == transform.position.x)
		transform.position.x = 0;
		
	for(var i = 0; i < ObjNames.length;i++)
	{
		if(collision.gameObject.name == ObjNames[i])
			Application.LoadLevel("Loss");
	}
		

}