from pymongo import MongoClient
import json

uri = "mongodb+srv://lamsal:test1234@cluster0.foppkbb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

# Create a new client and connect to the server
client = MongoClient(uri)

# Access or create the database
db = client["test-db"]  # Replace "my_database" with your desired database name

# Access or create the collection
collection = db["test-col"]  # Replace "my_collection" with your desired collection name

# Read JSON file
with open('test.json', 'r') as file:
    json_data = json.load(file)

# Insert JSON data into MongoDB
collection.insert_one(json_data)

print("JSON data successfully uploaded to MongoDB.")
