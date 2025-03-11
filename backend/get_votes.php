<?php
header('Access-Control-Allow-Origin: *'); // Allows requests from other ports
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

header('Content-Type: application/json');
global $pdo;

try {
    require_once 'db_connect.php';

    $json = file_get_contents('php://input');
    $data = json_decode($json, true);
    $projectId = $data['project_id'] ?? '';
    
    if (empty($projectId)) {
        throw new Exception("project_id not received");
    }

    // Get vote count for this project
    $stmt = $pdo->prepare("SELECT COUNT(*) FROM votes_table WHERE project_id = ?");
    $stmt->execute([$projectId]);
    $voteCount = $stmt->fetchColumn();

    echo json_encode([
        'success' => true,
        'votes' => $voteCount
    ]);

} catch (Exception $e) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => $e->getMessage()
    ]);
}

?>