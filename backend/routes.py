import webapp2
from handlers import Apps

app = webapp2.WSGIApplication([('/apps/.*', Apps)], debug=True)