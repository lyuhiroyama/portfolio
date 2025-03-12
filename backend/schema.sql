-- For documentation:

USE portfolio;

CREATE TABLE IF NOT EXISTS votes_table (
    id INT AUTO_INCREMENT PRIMARY KEY,
    project_id VARCHAR(255) NOT NULL,
    ip_address VARCHAR(45) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


CREATE INDEX idx_project_ip ON votes_table(project_id, ip_address);
/* 
Explanation on why index was used:

MySQL can quickly look up votes using both project_id and ip_address together.

It's like:
No index = checking every page in a book to find something
With index = using the book's index to jump right to the page

For your voting system, this matters because:
Every vote check needs to look up by both project_id AND ip_address
This lookup happens every time someone loads a project
As your table grows with more votes, searches get much faster with an index

So while your site might work without it, adding the index is a good practice for:
Better performance
Faster vote checking
Future-proofing as your data grows

*/
