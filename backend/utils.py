import json


def parseRequest(res):
    pageinfo = []
    for app in res:
        screenshots = app.appScreen.split(";")[0:5]
        pageinfo.append(
            {
                "appname": app.appName,
                "apppackage": app.key.id(),
                "appimg": app.appIcon,
                "rating": app.ratings,
                "developer": app.appDev,
                "screenshots": screenshots,
            }
        )
    jsonString = json.dumps(pageinfo)
    return jsonString
