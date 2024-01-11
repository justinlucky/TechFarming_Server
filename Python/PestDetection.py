import os
import cv2
import pandas as pd
import numpy as np

# Load a pre-trained pest classification model
model = load_prestige_model()  # Replace with your model loading logic

# Define pest classes or species
classes = ['aphid', 'caterpillar', 'beetle', 'other']

# Directory containing crop images with pests
crop_images_dir = 'path/to/crop/images'

# Directory to save CSV files
csv_output_dir = 'output_csv'

# Create the output directory if it doesn't exist
os.makedirs(csv_output_dir, exist_ok=True)

# Function to preprocess an image (resize and normalize)
def preprocess_image(image):
    image = cv2.resize(image, (224, 224))  # Resize to a consistent size
    image = image / 255.0  # Normalize pixel values
    return image

# Function to classify and save pest images to CSV
def classify_and_save_pests(crop_image_path, output_csv_path):
    # Load the crop image
    crop_image = cv2.imread(crop_image_path)
    
    # Preprocess the image
    preprocessed_image = preprocess_image(crop_image)

    # Make a prediction
    predictions = model.predict(np.array([preprocessed_image]))
    predicted_class = classes[np.argmax(predictions)]

    # Create or append to the CSV file
    if not os.path.isfile(output_csv_path):
        df = pd.DataFrame(columns=['Image', 'Class'])
    else:
        df = pd.read_csv(output_csv_path)

    # Append the image filename and class label to the CSV
    df = df.append({'Image': os.path.basename(crop_image_path), 'Class': predicted_class}, ignore_index=True)

    df.to_csv(output_csv_path, index=False)

# Process crop images and save them to CSV files
for root, _, files in os.walk(crop_images_dir):
    for file in files:
        if file.endswith(('.jpg', '.jpeg', '.png')):
            crop_image_path = os.path.join(root, file)
            classify_and_save_pests(crop_image_path, os.path.join(csv_output_dir, 'pests.csv'))
