from datetime import datetime
import tensorflow as tf
from tensorflow.keras.preprocessing.image import ImageDataGenerator
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Conv2D, MaxPooling2D, Flatten, Dense

def is_harvest_ready(start_date, growing_days):
    start_date = datetime.strptime(start_date, "%Y-%m-%d")
    current_date = datetime.now()
    days_elapsed = (current_date - start_date).days
    return days_elapsed >= growing_days

start_date = "2023-04-01"  
growing_days_required = 90  

# Check if the crop is ready for harvest
if is_harvest_ready(start_date, growing_days_required):
    print("The crop is ready for harvest.")
else:
    print("The crop needs more time to grow.")

dataset_path = "path/to/your/dataset"

# Define the number of classes (crop types)
num_classes = 3  # You can adjust this according to your dataset

# Image dimensions
img_width, img_height = 224, 224

# Create a data generator for training data
train_datagen = ImageDataGenerator(rescale=1.0/255, validation_split=0.2)

# Load and preprocess the dataset
train_generator = train_datagen.flow_from_directory(
    dataset_path,
    target_size=(img_width, img_height),
    batch_size=32,
    class_mode='categorical',  # For multi-class classification
    subset='training'
)

validation_generator = train_datagen.flow_from_directory(
    dataset_path,
    target_size=(img_width, img_height),
    batch_size=32,
    class_mode='categorical',
    subset='validation'
)

# Create a CNN model
model = Sequential()
model.add(Conv2D(32, (3, 3), activation='relu', input_shape=(img_width, img_height, 3))
model.add(MaxPooling2D(2, 2))
model.add(Conv2D(64, (3, 3), activation='relu'))
model.add(MaxPooling2D(2, 2))
model.add(Flatten())
model.add(Dense(128, activation='relu'))
model.add(Dense(num_classes, activation='softmax'))

# Compile the model
model.compile(optimizer='adam', loss='categorical_crossentropy', metrics=['accuracy'])

# Train the model
model.fit(train_generator, epochs=10, validation_data=validation_generator)

# Save the trained model for future use
model.save('crop_classifier.h5')
