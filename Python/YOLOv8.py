import torch
from models.experimental import attempt_load
from utils.datasets import LoadImages
from utils.general import check_img_size, non_max_suppression

# Load the YOLOv5 model
weights = 'yolov5s.pt'
device = '0'  # GPU device
model = attempt_load(weights, map_location=device)  # Load the model

# Set the input image size (you might need to adjust this)
img_size = 640
stride = int(model.stride.max())  # YOLO stride

# Load and preprocess images
img_files = ['test_image.jpg']
dataset = LoadImages(img_files, img_size=img_size, stride=stride)

# Make predictions
results = []
for path, img, im0s, _ in dataset:
    img = torch.from_numpy(img).to(device)
    img = img.float()  # Convert to float32
    img /= 255.0  # Normalize to 0-1 range
    if img.ndimension() == 3:
        img = img.unsqueeze(0)

    pred = model(img)  # Forward pass

    # Apply non-maximum suppression (NMS) to filter detections
    pred = non_max_suppression(pred, 0.25, 0.45)

    results.extend(pred)

# Post-process the results, draw bounding boxes, calculate accuracy, etc.
# You'll need to customize this part based on your specific requirements.

for i, det in enumerate(results):
    if det is not None:
        det[:, :4] = det[:, :4].clip(0, im0s.shape[1])
        for *xyxy, conf, cls in reversed(det):
            label = f'{model.names[int(cls)]} {conf:.2f}'
            plot_one_box(xyxy, im0s, label=label, color=(0, 255, 0))

# Display or save the images with bounding boxes
