import whisper
import ssl
import os
from openai import OpenAI
import json

model = whisper.load_model("base")
client = OpenAI(api_key="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")

result = model.transcribe("mental.mp4")
print(result["text"])


summarization = client.chat.completions.create(
    messages=[
        {
          "role": "system",
          "content": "You are an expert in mental health. I need a JSON object with the following keys: summary = exactly 5 summary bullets, exactly 3 questions with sub keys: questionID = 1,2 or 3, question = multiple choice question, choices = 4 choices(just the choices without numbering), ans = correct answer given as a,b,c or d lowercase, keywords = 3 keywords describing the question and answer. Give only JSON and nothing else"
        },
        {
            "role": "user",
            "content": result["text"],
        }
    ],
    model="gpt-3.5-turbo"
)
json_string = summarization.choices[0].message.content

# Convert JSON string to Python dictionary
json_data = json.loads(json_string)

# Define the file name
file_name = "test.json"

# Write the dictionary to a file with proper indentation
with open(file_name, "w") as json_file:
    json.dump(json_data, json_file, indent=4)

# Print a message indicating the file has been saved
print(f"JSON content saved to {file_name}")