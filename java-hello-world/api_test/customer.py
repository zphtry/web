from index import get, post, put

filter_request = {
    'page': 0,
    'size': 3,
}


print(get('demo/', filter_request))
