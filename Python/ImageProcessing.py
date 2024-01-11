import tensorflow as tf
import numpy as np
import matplotlib.pyplot as plt

# Load the trained CNN model (replace 'model_path' with the actual path to your model)
model_path = 'path/to/your/model'
model = tf.keras.models.load_model(model_path)

# Define classes for classification
classes = ['plant', 'crop', 'pest']

# Load the image (you need to provide the image data as numpy array)
# Replace 'image_data' with your actual image data
image_data = np.random.rand(224, 224, 3)  # Example random image data

# Preprocess the image
image_data = tf.image.resize(image_data, (224, 224))
image_data = image_data / 255.0  # Normalize the pixel values

# Make a prediction
predictions = model.predict(np.array([image_data]))
predicted_class = classes[np.argmax(predictions)]

# Generate recommendations based on the classification
recommendations = {}

if predicted_class == 'pest':
    recommendations['pesticides'] = ['Pesticide A', 'Pesticide B', 'Pesticide C']
elif predicted_class == 'crop':
    recommendations['fertilizers'] = ['Fertilizer X', 'Fertilizer Y']
else:
    recommendations['none'] = ['No specific recommendations for plants']

# Print the results
print(f'Predicted class: {predicted_class}')
print('Recommendations:')
for category, items in recommendations.items():
    print(f'{category}: {", ".join(items)}')


#images in graphical
for i in range(len(images)):
    plt.figure()
    plt.imshow(images[i])  # Display the image
    plt.title(f'Predicted Label: {labels[i]}')  # Display the predicted label
    plt.show()