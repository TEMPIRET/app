# -*- coding: utf-8 -*-
"""concept_map_manager.ipynb

Automatically generated by Colab.

Original file is located at
    https://colab.research.google.com/drive/11nCLQozlIo_DvDgHJ5NVCAl5BTSxMlMG
"""

import standard_conceptmaps
from langchain_groq import ChatGroq

llm = ChatGroq(model="llama-3.3-70b-versatile")

from typing import Annotated, List
from typing_extensions import TypedDict

from langgraph.graph.message import add_messages


class AgentState(TypedDict):
    # The add_messages function defines how an update should be processed
    # Default is to replace. add_messages says "append"
    topic: str
    teachings: str
    learner_input: str
    concept_map: List[dict]
    updates: str
    teaching_history: Annotated[list, add_messages]

def update_teaching_history(state: AgentState) -> AgentState:
    """
    Adds the current teaching to the current user input and join it to the teaching history.

    Args:
        state (AgentState): The current state.

    Returns:
        AgentState: The updated state.
    """

    # Create a string representing the current turn of conversation
    current_turn = f"Learner: {state['learner_input']}\nTeacher: {state['teachings']}"

    # Add the current turn to the teaching history
    state['teaching_history'].append(AIMessage(content=current_turn))

    return state

import json
from typing import Annotated, Literal
from typing_extensions import TypedDict

from langchain_core.messages import BaseMessage, HumanMessage, AIMessage
from langchain_core.prompts import PromptTemplate

from pydantic import BaseModel, Field


from langgraph.prebuilt import tools_condition

### Edges


def decide_for_conceptmap(state: AgentState) -> Literal["update", "end"]:
    """
    Determines whether the current teaching of the LLM requires updating of the concept map.

    Args:
        state (messages): The current state.

    Returns:
        str: A decision for whether the concept map should be updated or not.
    """

    print("---DECIDING---")

    # Data model
    class grade(BaseModel):
        """Binary score for decision."""

        binary_score: str = Field(description="Decision score 'yes' or 'no'")

    # LLM with tool and validation
    llm_with_tool = llm.with_structured_output(grade)

    # Prompt
    prompt = PromptTemplate(
        template="""You are a decision-maker assessing the teachings of a teacher to determine whether they require an update to a concept map. Your task requires understanding the *meaning* and *context* of the teachings, the topic, and the existing concept map. Your sole responsibility is to decide if the teaching introduces *new information* (concepts or relationships) that should be represented in the concept map. You are *not* responsible for *explicitly identifying* what that new information is (that is the role of a separate process).

Here is the teacher's current teaching:

{teachings}

Here is the topic being taught:

{topic}

Here is the current concept map (represented as a JSON array of objects. Each object has three keys: `NodeName`, `Relationship`, and `ParentNode`. `ParentNode` indicates the concept that the `NodeName` is related to. If `ParentNode` is null, it means the `NodeName` is the root concept):

{concept_map}

Your task is to decide *only* whether the teacher's current teaching introduces *new concepts or relationships* (based on their meaning) that are relevant to the topic and should be added to the concept map.

Respond with one of the following:

*   `yes`: The teaching introduces new concepts or relationships that should be added to the concept map.
*   `no`: The teaching does *not* introduce new concepts or relationships. It may be reiterating existing information, providing examples or explanations of existing concepts, or be irrelevant to the current topic and concept map.

Consider the following when making your decision:

*   A *new concept* is a concept (identified by its *meaning*) not already present as a `NodeName` in the concept map. Consider synonyms and paraphrases; if the *meaning* of the concept is already present (even if expressed with different words), it is not considered new.
*   A *new relationship* is a relationship (identified by its *meaning*) between existing or new concepts that is not already present in the concept map. Consider implicit relationships and the context of the teaching.
*   Examples and explanations of existing concepts *do not* require a concept map update unless they introduce new sub-concepts or relationships.
*   Nuances and additional details about existing concepts *do not* require a concept map update if they don't change the fundamental relationships.

Example 1:
Teachings: "Photosynthesis is the process by which plants convert light energy into chemical energy."
Concept Map: []
Response: yes

Example 2:
Teachings: "Plants use chlorophyll to absorb light during photosynthesis."
Concept Map: [{{"NodeName": "Photosynthesis", "Relationship": "converts", "ParentNode": "light energy"}}]
Response: yes

Example 3:
Teachings: "Photosynthesis is really important for plant life."
Concept Map: [{{"NodeName": "Photosynthesis", "Relationship": "converts", "ParentNode": "light energy"}}]
Response: no

Example 4:
Teachings: "Photosynthesis is a process that converts light energy to chemical energy. This energy is stored as glucose."
Concept Map: [{{"NodeName": "Photosynthesis", "Relationship": "converts", "ParentNode": "light energy"}}]
Response: yes

Example 5:
Teachings: "Plants make their own food using light. This food is a type of sugar called glucose."
Concept Map: [{{"NodeName": "Photosynthesis", "Relationship": "converts", "ParentNode": "light energy"}}]
Response: yes (Because "make their own food using light" is synonymous with photosynthesis, but the introduction of glucose and its connection to photosynthesis is new.)

Text: [Insert Teachings Here]""",
        input_variables=["teachings", "topic", "concept_map"],
    )

    # Chain
    chain = prompt | llm_with_tool

    scored_result = chain.invoke(
        {
        "teachings": state["teachings"],
        "topic": state["topic"],
        "concept_map": state["concept_map"]
        })

    score = scored_result.binary_score

    if score == "yes":
        print("---DECISION: UPDATE CONCEPT MAP---")
        return "update"

    else:
        print("---DECISION: DO NOT UPDATE CONCEPT MAP---")
        print(score)
        return "end"

def update_conceptmap(state: AgentState):
    """
    Updates the concept map based on the current teaching using instructions.

    Args:
        All the state keys: The current state.

    Returns:
        AgentState: The updated state.
    """

    print("---UPDATING---")

    # Data model
    class grade(BaseModel):
        """Binary score for decision."""

        updated_conceptmap: dict = Field(description="New Node to be added")

    # LLM with tool and validation
    llm_with_tool = llm.with_structured_output(grade)

    # Prompt
    prompt = PromptTemplate(
        template="""Given the standardized concept map [MAP], the student's current concept map [STUDENT_MAP], the student-tutor interaction transcript [TRANSCRIPT], and the current topic [TOPIC], determine which new connections from the standardized map the student has demonstrated understanding of.
Anytime the [STUDENT_MAP] or [TRANSCRIPT] is empty, that means the teachings session is about to begin.
Always use "null" instead of "None" when needed.

Return ONLY a Python dictionary where:

*   Keys are 'NodeName', 'ParentNode', and 'Relationship'.
*   Each dictionary represents a single connection to be added to the student's concept map.
*   'NodeName' is the name of the node being connected.
*   'ParentNode' is the name of the parent node.
*   'Relationship' is the type of relationship between the nodes (e.g., "is a," "part of," "causes," etc.).  If the relationship is not explicitly stated in the transcript, infer the most appropriate one from the standardized map.

If no new connections are identified, return an empty dictionary: `{{}}`.  Do not return any other text or explanations.  Focus on generating the dictionary.
Always output updates from top to bottom. Do not bypass a specific node.
Always return your output as a python dictionary, not a list of dictionaries.

Example:

Standardized Map: [{{'NodeName': 'Photosynthesis', 'ParentNode': 'Plant', 'Relationship': 'is a process of'}}, {{'NodeName': 'Chlorophyll', 'ParentNode': 'Photosynthesis', 'Relationship': 'is needed for'}}]

Transcript: "Student: So, plants use chlorophyll to make food, right? Tutor: Exactly! And what's the name of that process? Student: Photosynthesis!"

Output: {{'NodeName': 'Photosynthesis', 'ParentNode': 'Plant', 'Relationship': 'is a process of'}}

Input Variables:
- [MAP]: \n\n {standard_conceptmap} \n\n
- [TRANSCRIPT]: \n\n {teaching_history} \n\n
- [STUDENT_MAP]: \n\n {concept_map} \n\n
- [TOPIC]: {topic}""",
        input_variables=["standard_conceptmap", "topic", "concept_map", "teaching_history"],
    )

    # Chain
    chain = prompt | llm_with_tool

    update_instructions = chain.invoke(
        {
        "teachings": state["teachings"],
        "topic": state["topic"],
        "concept_map": state["concept_map"],
        "teaching_history": state["teaching_history"],
        "standard_conceptmap": standard_conceptmaps.biogeochemical_cycles
        }
    )

    state["updates"] = json.dumps(update_instructions.updated_conceptmap)

    print("---UPDATED---")

    return state

from langgraph.graph import START, StateGraph, END

graph_builder = StateGraph(AgentState)

graph_builder.add_node("update_conceptmap", update_conceptmap)

graph_builder.add_node("update_history", update_teaching_history)

graph_builder.add_edge(START, "update_history")

graph_builder.add_conditional_edges(
    "update_history",
    decide_for_conceptmap,
    {
        "update": "update_conceptmap",
        "end": END
    },
)

graph_builder.add_edge("update_conceptmap", END)

concept_map_agent = graph_builder.compile()

def get_concept_map_updates(topic, teachings, concept_map, learner):
    """
    Gets the concept map updates from the concept_map_agent.

    Args:
        topic (str): The topic being discussed.
        teachings (str): The current teaching from the LLM.
        concept_map (dict): The current concept map.
        learner (str): The learner's input.

    Returns:
        list: A list of dictionaries, where each dictionary represents a concept map update.
              Returns an empty list if there are no updates.
    """

    concept_map_agent_input = {
        "topic": topic,
        "concept_map": concept_map,  # Pass the original concept_map directly
        "teachings": teachings,
        "learner_input": learner
    }
    result = concept_map_agent.invoke(concept_map_agent_input)
    
    # Extract the updates and return them (ensure 'updates' key exists in result)
    # updates = result.get("updates", [])  # Use .get to handle missing key #Original
    updates = result.get("updates") #Modified
    if updates and isinstance(updates, str): # Check if updates is not None and is a string
        updates = json.loads(updates)
    # Return empty list if updates is None or not a string
    return updates if updates else {}
