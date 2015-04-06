#pragma strict

// Positions
var player_obj : GameObject;

// Node
var node_obj : GameObject;

// Objects
var obj_1 : GameObject;
var obj_2 : GameObject;
var obj_3 : GameObject;
var obj_4 : GameObject;

// Variables
var obj_id : int = 0;
var current_obj : GameObject;
var can_iterate_further : boolean = true;

function Start () 
{

}

function Update () 
{
	// Check Distance Between Player And Node
	var distance_to_obj = Vector3.Distance(player_obj.transform.position, node_obj.transform.position);
	Debug.Log(distance_to_obj);
	
	// If The Distance Is Less Than 2, Allow Input
	if (can_iterate_further == true)
	{
		if (distance_to_obj < 2)
		{
			if (Input.GetKeyDown("1"))
			{
				obj_id++;
				Destroy(current_obj);
				
				if (obj_id == 5)
				{
					can_iterate_further = false;
				}
				
				if (can_iterate_further == false)
				{
					Debug.Log("No More Interations Available");
				}
				else
				{
					Debug.Log(obj_id);
				}
			}
		}
	}
	
	if (obj_id == 1)
	{
		Destroy(current_obj);
		current_obj = Instantiate (obj_1, node_obj.transform.position, Quaternion.identity);
	}
	
	if (obj_id == 2)
	{
		Destroy(current_obj);
		current_obj = Instantiate (obj_2, node_obj.transform.position, Quaternion.identity);
	}
	
	if (obj_id == 3)
	{
		Destroy(current_obj);
		current_obj = Instantiate (obj_3, node_obj.transform.position, Quaternion.identity);
	}
	
	if (obj_id == 4)
	{
		Destroy(current_obj);
		current_obj = Instantiate (obj_4, node_obj.transform.position, Quaternion.identity);
	}
}