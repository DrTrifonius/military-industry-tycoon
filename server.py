import http.server
import socketserver
import webbrowser
PORT = 8000
Handler = http.server.SimpleHTTPRequestHandler

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print(f"Serving at port {PORT}")
    webbrowser.open("http://localhost:8000")
    httpd.serve_forever()