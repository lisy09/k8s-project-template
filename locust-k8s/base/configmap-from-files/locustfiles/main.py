import os
from functools import lru_cache

import yaml
from locust import HttpUser, between, task

@lru_cache
def get_config():
    conf_path = os.getenv('LOCUSTFILE_CONF', None)
    if not conf_path:
        return None
    with open(conf_path, 'r') as stream:
        config = yaml.safe_load(stream)
    return config

class HelloWorldUser(HttpUser):
    wait_time = between(1,2)

    @task(weight=1)
    def hello_world(self):
        self.client.get("/")
