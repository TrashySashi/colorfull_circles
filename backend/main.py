from flask import request, jsonify
from config import app, db
from models import Circle
from flask_cors import CORS

@app.route("/circles", methods=["GET"])
def get_circles():
    circles = Circle.query.all()
    json_circles = [{ "color": "blue", "circleName": "Ivan", "id": 1 }]
    # list(map(lambda x: x.to_json(), circles))
    return jsonify({"circles": json_circles})

@app.route("/create_cirlce", methods=["POST"])
def create_circle():
    color = request.json.get("color")
    circle_name = request.json.get("circleName")
    
    if not color or not circle_name:
        return (
            jsonify({"message": "You must enter color and name"}), 
            400,
        )
        
    new_circle = Circle(color=color, circle_name=circle_name)
    try:
        db.session.add(new_circle)
        db.session.commit()
    except Exception as e:
        return jsonify({"message": str(e)}), 400
    
    return jsonify({"message": "Circle created!"}), 201

@app.route("/delete_circle/<int:user_id>", methods=["DELETE"])
def delete_circle(user_id):
    circle = Circle.query.get(user_id)
    
    if not circle:
        return jsonify({"message": "User not found"}), 404
    
    db.session.delete(circle)
    db.session.commit()
    
    return jsonify({"message": "User deleted!"}), 200
    

if __name__ == "__main__":
    with app.app_context():
        db.create_all()
        
    app.run(debug=True)