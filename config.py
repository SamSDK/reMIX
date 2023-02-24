"""This module is to configure app to connect with database."""

from pymongo import MongoClient

DATABASE = MongoClient()['restfulapi'] # DB_NAME
DEBUG = True
client = MongoClient('mongodb+srv://user:$password123@cluster0.3e6yhwg.mongodb.net/?retryWrites=true&w=majority')
