import webapp2
from models import Gpmodel
import json
import utils
from google.appengine.ext import ndb

class Apps(webapp2.RequestHandler):
    def get(self):
        jsonString = ""
        params = self.request.params
        app_id = params.get('app_id')
        if app_id is None:
            res = Gpmodel.query()
            jsonString = utils.parseRequest(res)
        else:
            ekey = ndb.Key(Gpmodel, app_id)
            res = ekey.get()
            jsonString = utils.parseRequest([res])
        self.response.headers['Content-Type'] = 'application/json; charset=utf-8'
        self.response.out.write( jsonString )
    
    def post(self):
        f = open('data.json',"r")
        data = json.loads(f.read())
        for elem in data:
            gpentry = Gpmodel(key=ndb.Key(Gpmodel, elem['apppackage']),appName = elem['appname'],appIcon = elem['appimg'],ratings = elem['rating'],appDev = elem['developer'],appScreen = elem['screenshots'])
            gpentry.put()