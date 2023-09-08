import json

with open('NES Games.json', 'r') as openfile:
    json_dict = json.load(openfile)
    titles = [i.get('Title', None) for i in json_dict]
    rates = [i.get('Rating', None) for i in json_dict]
    print(str(titles))


    # print Game Title - Rating
