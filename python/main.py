import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

# Настройки электронной почты
my_email = "myemail@example.com"
my_password = "mypassword"
smtp_server = "smtp.example.com"
smtp_port = 587

# Список получателей
recipients = ["recipient1@example.com", "recipient2@example.com"]

# Создание сообщения
message = MIMEMultipart()
message["Subject"] = "Тема сообщения"
message["From"] = my_email
message["To"] = ", ".join(recipients)
body = "Текст сообщения"
message.attach(MIMEText(body, "plain"))

# Отправка сообщения
with smtplib.SMTP(smtp_server, smtp_port) as server:
    server.starttls()
    server.login(my_email, my_password)
    server.sendmail(my_email, recipients, message.as_string())
