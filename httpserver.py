from http.server import *
from http import cookies

server_address = ('', 8000)
httpd = HTTPServer(server_address, SimpleHTTPRequestHandler)
httpd.RequestHandlerClass.default_request_version = 'HTTP/1.1'
httpd.RequestHandlerClass.error_message_format = '<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"\n"http://www.w3.org/TR/html4/strict.dtd">\n<html>\n<head>\n<meta http-equiv="Content-Type" content="text/html;charset=utf-8">\n<title>Error %(code)d  %(message)s</title>\n</head>\n<body>\n<h1>Error %(code)d</h1>\n<img src="https://http.cat/%(code)d" width="350">\n<p>Error code: %(code)d</p>\n<p>Message: %(message)s.</p>\n<p>Error code explanation: %(code)s - %(explain)s.</p>\n</body>\n</html>'
httpd.serve_forever()
