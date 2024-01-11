import os
import csv
from PIL import Image
import shutil

# Specify the paths to the existing dataset and the new data
existing_dataset_path = "path_to_existing_dataset"
new_data_path = "path_to_new_data"

# Create a list of labels or categories for the new data
new_data_labels = ["label1", "label2", "label3"]

# Create a dictionary to store the counts for each label
label_counts = {label: 0 for label in new_data_labels}

# Loop through the new data and organize it into the existing dataset structure
for label in new_data_labels:
    label_folder = os.path.join(existing_dataset_path, label)
    
    # Ensure the label folder exists or create a new one
    if not os.path.exists(label_folder):
        os.makedirs(label_folder)
    
    # Loop through images in the new data folder
    for filename in os.listdir(os.path.join(new_data_path, label)):
        if filename.endswith(".jpg"):  # Adjust the file extension as needed
            image_path = os.path.join(new_data_path, label, filename)
            new_image_path = os.path.join(label_folder, filename)
            
            # Copy or move the image to the label folder
            shutil.copy(image_path, new_image_path)
            
            # Update the label count
            label_counts[label] += 1

# Save the counts to separate CSV files
for label, count in label_counts.items():
    csv_file = f"{label}_counts.csv"
    with open(csv_file, mode='w', newline='') as file:
        writer = csv.writer(file)
        writer.writerow(['Label', 'Count'])
        writer.writerow([label, count])

# Your dataset is now expanded with new data, and you have separate CSV files for label counts
