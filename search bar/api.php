<?php
require_once('connection.php');
 
function get_city($conn , $term){ 
 $query = "SELECT * FROM Menu WHERE Item LIKE '%".$term."%' ORDER BY Item ASC";
 $result = mysqli_query($conn, $query); 
 $data = mysqli_fetch_all($result,MYSQLI_ASSOC);
 return $data; 
}
 
if (isset($_GET['term'])) {
 $getItem = get_city($conn, $_GET['term']);
 $ItemList = array();
 foreach($getItem as $Items){
 $ItemList[] = $Items['Item'];
 }
 echo json_encode($ItemList);
}
?>