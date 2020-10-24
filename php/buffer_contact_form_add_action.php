<?php ob_start();?>

<?php
//Code written by Abdul A Patel (Ar)
//Created Version 1.0 December 8 by Ar

/*Take information, process it, add or refuse to add to database, and redirect*/

?>


<?php

//load libraries

include "../admin/library/buffer_node_functions.php";
include "../admin/library/buffer_db.php";
include "../admin/library/buffer_sql_select.php";
include "../admin/library/buffer_sql_insert.php";
include "../admin/library/buffer_sql.php";
include "../admin/library/buffer_bootstrap_nav.php";

//app specific functions
include "../admin/admin_resources/includes/admin_functions.php";

//MAIN

//checkLogin();
error_reporting(0);

//echo "connecting database<br>";

$highRoad = connect_database();

//echo "database  connected<br>";

    
//define sql values and conditions
$table_name = "buffer_contacts";
$table_columns = ['user_name', 'email', 'consent', 'reff', 'province'];
$post_variable = 'submit';

//insert info into database
//if (isset($_POST[$post_variable])){
    
    $errErr = false;
    
    $bufferData = getPostData($_POST);
//
//print_r(array($bufferData['user_name'], 
//       $bufferData['email'], 
//       $bufferData['consent'],
//       $bufferData['reff']));

    if (!$errErr){
        
        $insertObject = new BufferSQLInsert();
        $insertObject->setTable($table_name);
        $insertObject->setInsertColumns($table_columns);
        $insertObject->setValues(array($bufferData['user_name'], 
       $bufferData['email'], 
       $bufferData['consent'],
       $bufferData['reff'],
       $bufferData['province']
                                       
                                      ));

        $insertObject->consolidateQuery();
        
        $newSQL = new BufferSQL();

    $newSQL->setQuery($insertObject->getQuery());
//echo $newSQL->getQuery();
        
        try{

            
              $resultData = $newSQL->executeQuery($highRoad->getConn(), $insertObject->getInsertColumns(), $insertObject->getValues());

        }
        
        catch(PDOException $e){
            $errErr .='<p>'.$e->getMessage().'</p>';
        }

        if ($errErr){

            $_GET['msg']    = $errErr;
            $_GET['status'] = 'warning';
            
        } else {  
            
            $msg ="Item Successfully added";
//            echo $msg;
//            header("Location: ../index.html?msg=$msg&status=success");
            
        }
        
    }
    
//}

//FUNCTIONS
    function getPostData($post){
    //get all post data
        foreach ($post as $param_name => $param_val) {
            $bufferData[$param_name] = filter_var($param_val);
        }
        
        return $bufferData;
        
    }

?>