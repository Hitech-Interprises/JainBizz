# import random  

# def generate_otp(length):
#     random_number = ''.join(str(random.randint(0, 9)) for _ in range(length))
#     print(random_number,"=========================================")
#     return random_number
 

# def validate_otp(user_input, otp):
#     return user_input == otp

# length = 6  # Length of the OTP



from jwt import decode, encode
from datetime import datetime

def validate_jwt(jwt_token):
    decoded_payload = decode(jwt_token, "vn9RMTIxXrPOBwTIkGk3SQN5vc", algorithms=["HS256"])
    cur_dt = datetime.now()
    jwt_dt = datetime.strptime(decoded_payload.get("Time"),"%m/%d/%Y, %H:%M:%S")
    jwt_expiry_secs = 60*60*2
    if((cur_dt - jwt_dt).seconds > jwt_expiry_secs):
        raise Exception("JWT Expired")
    return decoded_payload

def generate_token(email, user_id):
    payload = {"Email": email, "Username":user_id}
    payload["Time"] = (datetime.now()).strftime("%m/%d/%Y, %H:%M:%S")
    jwt_token = encode(payload, "vn9RMTIxXrPOBwTIkGk3SQN5vc", algorithm="HS256")
    return jwt_token

