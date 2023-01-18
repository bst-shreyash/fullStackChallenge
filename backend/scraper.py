from selenium import webdriver
import time
import json

co = webdriver.ChromeOptions()
co.add_argument('headless')
co.add_argument("--disable-xss-auditor")
driver = webdriver.Chrome(options=co)
driver.get("https://play.google.com/store/apps/")
time.sleep(10)
SCROLL_PAUSE_TIME = 5
last_height = driver.execute_script("return document.body.scrollHeight")
time.sleep(SCROLL_PAUSE_TIME)
while True:
    driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")
    time.sleep(SCROLL_PAUSE_TIME)
    new_height = driver.execute_script("return document.body.scrollHeight")
    if new_height == last_height:
        break
    last_height = new_height
links_games = []
elems = driver.find_elements_by_xpath("//a[@href]")
for elem in elems:
    if "details?id" in elem.get_attribute("href"):
        links_games.append(elem.get_attribute("href"))
links_games = list(dict.fromkeys(links_games))
list_all_elements = []
for iteration in links_games:
    screenshotimages = []
    driver.get(iteration)
    time.sleep(2)
    developer = driver.find_element_by_xpath("//a[contains(@href,'dev?id') or contains(@href,'developer?id')]").text.encode('ascii','ignore')
    screenshots = driver.find_elements_by_xpath("//img[contains(@class,'T75of B5GQxf')]")
    for screenshot in screenshots:
        screenshotimages.append(screenshot.get_attribute("src"))
    # for screenshot in screenshotimages:
    #     screenshot = screenshot.encode('ascii','ignore')
    screenshots = ";".join(screenshotimages[0:5])
    name = driver.find_element_by_tag_name("h1").text.encode('ascii','ignore')
    star = 0 
    try:
        star = float(driver.find_element_by_class_name("jILTFe").text)
    except:
        star = 0
    img = driver.find_element_by_xpath("//img[contains(@class,'T75of cN0oRe fFmL2e')]").get_attribute("src")
    list_elements = {"appname":name,"apppackage":iteration.split("=")[1].encode('ascii','ignore'),"developer":developer,"appimg":img,"rating":star,"screenshots":screenshots}
    list_all_elements.append(list_elements)
print(list_all_elements)
jsonString = json.dumps(list_all_elements)
jsonFile = open("C:\Users\shrey\OneDrive\Desktop\gplayscrapeselenium\data.json","w")
jsonFile.write(jsonString)
jsonFile.close()