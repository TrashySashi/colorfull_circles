from config import db

class Circle(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    color = db.Column(db.String(20), unique=False, nullable=False)
    circle_name=db.Column(db.String(35), unique=True, nullable=False)
    
    def to_json(self):
        return {
            "id": self.id,
            "color": self.color, 
            "circleName": self.circle_name,
        }