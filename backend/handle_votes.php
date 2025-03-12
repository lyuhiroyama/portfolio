<?php 
// ローカルでの使用用:
// ini_set('display_errors', 1);
// ini_set('display_startup_errors', 1);
// error_reporting(E_ALL);
// header('Access-Control-Allow-Origin: *'); // Allows requests from other ports
// header('Access-Control-Allow-Methods: POST, OPTIONS');
// header('Access-Control-Allow-Headers: Content-Type');

// // サーバーでの使用用：
header('Access-Control-Allow-Origin: https://ryuhiroyama.com'); // Allows requests from other ports
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Make further sense of this and organize notes on this later:
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}
/* 
- When React makes POST requests, browser actually makes two requests, not one.
- First Request: OPTIONS
- Second Request: POST
- OPTIONS request (that I understand it atm) is React checking if it has permission to make the POST request.
- It's just for a check, not to update the voting db. That happens in POST. 
- So we 'exit(0)' when the OPTIONS request is made.
*/


header('Content-Type: application/json');
global $pdo;

try {
    require_once 'db_connect.php';

    // Must make sense of & clean/reafactor the error_logs() later

    error_log('Testing database connection...');
    $test = $pdo->query('SELECT 1');
    error_log('Database connection successful');

    // Debug output to see what's happening
    error_log('Received request');
    
    // request body から JSONデータを受け取る
    $json = file_get_contents('php://input');
    error_log('Received JSON: ' . $json);
    
    $data = json_decode($json, true);
    error_log('Decoded data: ' . print_r($data, true));


    // JSONデータから projectId を受け取る
    $projectId = $data['project_id'] ?? '';
    if (empty($projectId)) {
        throw new Exception("project_id was not received in the php backend file");
    }

    // ユーザーIPを取得
    $ipAddress = $_SERVER['REMOTE_ADDR'];

    // トランザクション開始 (ensures multiple database operations either all succeed or all fail as a single unit)
    $pdo->beginTransaction();

    // このIPは投票済みかチェック
    $stmt = $pdo->prepare("SELECT id FROM votes_table WHERE project_id = ? AND ip_address = ?");
    $stmt->execute([$projectId, $ipAddress]);

    if ($stmt->rowCount() > 0) {
         throw new Exception('このプロジェクトには投票済みです。');
    } 

    // 投票を処理(足す)
    $stmt = $pdo->prepare("INSERT INTO votes_table (project_id, ip_address) VALUES (?, ?)");
    $stmt->execute([$projectId, $ipAddress]);
    $pdo->commit();

    // 該当プロジェクトの投票数を取得する
    $stmt = $pdo->prepare("SELECT COUNT(*) FROM votes_table WHERE project_id = ?");
    $stmt->execute([$projectId]);
    $voteCount = $stmt->fetchColumn();

    echo json_encode([
        'success' => true,
        'message' => '投票の記録に成功しました',
        'votes' => $voteCount
    ]);



} catch (Exception $e) {    
    if (isset($pdo) && $pdo && $pdo->inTransaction()) {
        $pdo->rollBack();
    }

    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => $e-> getMessage()
    ]);
}

?>