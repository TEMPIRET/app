from flask import Flask, request, jsonify, render_template, session
from dotenv import load_dotenv
from flask_cors import CORS
import json

load_dotenv()

from content_generation_agent import ask_question
from concept_map_manager import get_concept_map_updates
import os

app = Flask(__name__)
app.secret_key = os.urandom(24)
CORS(app)

@app.route('/')
def entry():
    return render_template('entry.html')

@app.route('/concept_map')
def concept_map():
    course = request.args.get('course')
    topic = request.args.get('topic')
    # You can use these parameters to load specific content
    return render_template('concept_map.html')

@app.route('/resources')
def resources():
    return render_template('resources.html')

@app.route("/ask", methods=["POST"])
def answer_question():
    try:
        if "concept_map" not in session:
            session["concept_map"] = []

        data = request.get_json()
        if not data or "question" not in data:
            return jsonify({"error": "Missing question in request body"}), 400

        learner_input = data["question"]


        print("Messages before calling ask_question:", learner_input)
        
        # Handle potential errors from ask_question
        try:
            llm_response = ask_question(learner_input)
        except Exception as e:
            print(f"Error calling ask_question: {e}")
            return jsonify({"error": "Error getting response from language model."}), 500

        # Consider making topic dynamic
        topic = "biogeochemical cycles"
        teachings = llm_response

        # Error handling for get_concept_map_updates if possible
        update_instructions = get_concept_map_updates(topic, teachings, session["concept_map"], learner_input)
        print("update_instructions:", update_instructions)

        # Apply the instructions to update the concept map
        if "NodeName" in update_instructions: # update_instruction could be empty
            node_name = update_instructions.get("NodeName")
            relationship = update_instructions.get("Relationship")
            parent_node = update_instructions.get("ParentNode")
            
            node_exists = any(
                node['NodeName'] == node_name for node in session['concept_map']
            )

            if not node_exists:
                session['concept_map'].append({
                    'NodeName': node_name,
                    'Relationship': relationship,
                    'ParentNode': parent_node
                })
        session.modified = True

        print("Response data being sent:", teachings)

        print(session["concept_map"])

        response_data = {
            "answer": teachings,
            "concept_map": session["concept_map"]  # Send directly as JSON object
        }
        return jsonify(response_data)

    except Exception as e:
        print(f"Flask Error: {e}")
        return jsonify({"error": "An unexpected error occurred."}), 500

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)