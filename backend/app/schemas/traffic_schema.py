from pydantic import BaseModel

class TrafficInput(BaseModel):
    speed: int
    vehicle_count: int