import requests
import json
from pygments import highlight, lexers, formatters

host = 'http://localhost:8080'


def format_json(json_obj):
    return highlight(
        json.dumps(json_obj, indent=4, sort_keys=True, ensure_ascii=False),
        lexers.JsonLexer(), formatters.TerminalFormatter()
    )


def get(api_address, params):
    return format_json(requests.get(host + '/' + api_address, params=params).json())


def post(api_address, body):
    return format_json(requests.post(host + '/' + api_address, json=body).json())


def put(api_address, data):
    return requests.put(f'{host}/{api_address}', json=data)
