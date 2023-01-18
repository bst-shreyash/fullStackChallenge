from google.appengine.ext import ndb

class Gpmodel(ndb.Model):
    appName = ndb.StringProperty()
    ratings = ndb.FloatProperty()
    appIcon = ndb.StringProperty()
    appDev = ndb.StringProperty()
    appScreen = ndb.TextProperty()
    