import requests
import json
url = ""
data = {
    "job_title": "Software Engineer",
    "years_of_experiance": "9 Years"
}

request = requests.post(url, data=json.dumps(data))
