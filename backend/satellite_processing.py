# satellite_processing.py
import numpy as np
from PIL import Image
import io
import matplotlib.pyplot as plt
import matplotlib.colors as mcolors
from io import BytesIO


def process_image(image_data):
    # Convert image data to a PIL Image
    img = Image.open(io.BytesIO(image_data.read()))

    # Convert image to numpy array
    img_array = np.array(img)

    # Check the number of bands
    num_bands = img_array.shape[2] if len(img_array.shape) > 2 else 1

    if num_bands == 4:
        # Calculate NDVI (Normalized Difference Vegetation Index)
        nir = img_array[:, :, 3].astype(float)
        red = img_array[:, :, 2].astype(float)
        # Add a small value to avoid division by zero
        ndvi = (nir - red) / (nir + red + 1e-10)
    elif num_bands == 3:
        # If the image is a 3-band RGB image, use the green band as a proxy for vegetation
        green = img_array[:, :, 1].astype(float)
        ndvi = green / 255  # Normalizing the green band
    else:
        raise ValueError("Unsupported number of bands: {}".format(num_bands))

    # Create a figure with a custom color map
    fig, ax = plt.subplots()
    cmap = mcolors.LinearSegmentedColormap.from_list(
        "", ["red", "yellow", "green"])
    ax.imshow(ndvi, cmap=cmap, vmin=-1, vmax=1)
    ax.axis('off')

    # Save the figure to a BytesIO object
    img_io = BytesIO()
    fig.savefig(img_io, format='png', bbox_inches='tight')
    img_io.seek(0)

    # Open the image from the BytesIO object
    ndvi_image = Image.open(img_io)

    return ndvi_image
