CREATE TABLE email_stats
(
    mail_from VARCHAR(255) NOT NULL,
    mail_to VARCHAR(255) NOT NULL,
    mail_subject VARCHAR(255),
    mail_message VARCHAR(255) NOT NULL,
    mail_status VARCHAR(255) NOT NULL,
    mail_timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    mail_response_id VARCHAR(255)
);