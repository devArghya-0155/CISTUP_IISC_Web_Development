import cv2
import os
from ultralytics import YOLO
from flask import Flask, request
from flask_cors import CORS, cross_origin

"""Object Detection"""

model = YOLO("yolov8n.pt")
def processImg(img):
    image = cv2.imread(img)
    result = model.predict(image, conf = 0.50 , save = True)[0]
    temp = ""
    for c in result.save_dir:
        if not(c.isalnum()) :
            c = '/'
        
        temp = temp + c

    imgPath = f"{temp}/{result.path}"
    return imgPath








"""Backend part"""

Upload = './static/upload'
app = Flask(__name__)
app.config['uploadFolder'] = Upload
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route("/results", methods=["POST", "GET"])
@cross_origin()
def imgUpload():
    if request.method == "POST":
        file = request.files['img']
        filePath = os.path.join(app.config['uploadFolder'], file.filename)
        print(filePath)
        file.save(filePath)
        return processImg(filePath) #This should contain a path to the processed image
    
    


if __name__ == "__main__":
    app.run(debug=True);
