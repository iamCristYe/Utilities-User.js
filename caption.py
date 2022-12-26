import requests
import re
import json

_SUBTITLE_FORMATS = ("json3", "srv1", "srv2", "srv3", "ttml", "vtt")

# zVGtmufJdGc
# JdBYVNuky1M
# YbJOTdZBX1g
res = requests.get("https://www.youtube.com/watch?v=KTZ-y85Erus")
# print(res.content)

captionRe = re.compile(r"captionTracks\"\:\[(?P<list>[^\]]+)")
captionMatched = captionRe.search(res.content.decode("utf-8"))

if captionMatched:
    captionList = json.loads("[" + captionMatched.group("list") + "]")
    for caption in captionList:
        if caption["languageCode"] == "en":

            vtt = requests.get(caption["baseUrl"])
            print(vtt.content.decode("utf-8"))
            for format in _SUBTITLE_FORMATS:
                print(caption["baseUrl"] + "&format=" + format)
