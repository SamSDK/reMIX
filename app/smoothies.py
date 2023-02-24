"""This module will serve the api request."""

from config import client
from app import app
from bson.json_util import dumps
from flask import request, jsonify
import json
import ast
from importlib.machinery import SourceFileLoader


# Import the helpers module
helper_module = SourceFileLoader('*', './app/helpers.py').load_module()

# Select the database
db = client.restfulapi
# Select the collection
collection = db.test.recipes

@app.route("/")
def get_initial_response():
    """Welcome message for the API."""
    # Message to the user
    message = {
        'apiVersion': 'v1.0',
        'status': '200',
        'message': 'Welcome to the Flask API'
    }
    # Making the message looks good
    resp = jsonify(message)
    # Returning the object
    return resp


@app.route("/api/post", methods=['POST'])
def create_smoothie():
    """
       Function to create new smoothies.
       """
    try:
        # Create new smoothies
        try:
            body = ast.literal_eval(json.dumps(request.get_json()))
        except:
            # Bad request as request body is not available
            # Add message for debugging purpose
            return "", 400

        record_created = collection.insert(body)

        # Prepare the response
        if isinstance(record_created, list):
            # Return list of Id of the newly created item
            return jsonify([str(v) for v in record_created]), 201
        else:
            # Return Id of the newly created item
            return jsonify(str(record_created)), 201
    except:
        # Error while trying to create the resource
        # Add message for debugging purpose
        return "", 500


@app.route("/api/getAll", methods=['GET'])
def get_smoothies():
    """
       Function to fetch the smoothies.
       """
    try:
        return dumps(collection.find())
    except:
        # Error while trying to fetch the resource
        # Add message for debugging purpose
        return "", 500


@app.route("/api/update/<id>", methods=['POST'])
def update_smoothie(id):
    """
       Function to update the smoothie.
       """
    try:
        # Get the value which needs to be updated
        try:
            body = ast.literal_eval(json.dumps(request.get_json()))
        except:
            # Bad request as the request body is not available
            # Add message for debugging purpose
            return "", 400

        # Updating the user
        records_updated = collection.update_one({"id": int(id)}, body)

        # Check if resource is updated
        if records_updated.modified_count > 0:
            # Prepare the response as resource is updated successfully
            return "", 200
        else:
            # Bad request as the resource is not available to update
            # Add message for debugging purpose
            return "", 404
    except:
        # Error while trying to update the resource
        # Add message for debugging purpose
        return "", 500


@app.route("/api/delete/<id>", methods=['DELETE'])
def delete_smoothie(id):
    """
       Function to delete a smoothie
       """
    try:
        # Delete the user
        delete_user = collection.delete_one({"id": int(id)})

        if delete_user.deleted_count > 0 :
            # Prepare the response
            return "", 204
        else:
            # Resource Not found
            return "", 404
    except:
        # Error while trying to delete the resource
        # Add message for debugging purpose
        return "", 500


@app.errorhandler(404)
def page_not_found(e):
    """Send message to the user with notFound 404 status."""
    # Message to the user
    message = {
        "err":
            {
                "msg": "This route is currently not supported. Please refer API documentation."
            }
    }
    # Making the message looks good
    resp = jsonify(message)
    # Sending OK response
    resp.status_code = 404
    # Returning the object
    return resp
