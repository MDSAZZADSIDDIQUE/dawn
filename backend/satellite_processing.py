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


def process_soil_moisture(image_data):
    # Convert image data to a PIL Image
    img = Image.open(io.BytesIO(image_data.read()))

    # Convert image to numpy array
    img_array = np.array(img)

    # Check the number of bands
    num_bands = img_array.shape[2] if len(img_array.shape) > 2 else 1

    if num_bands >= 4:  # Assuming at least 4 bands (R, G, NIR, SWIR)
        # Calculate NDMI (Normalized Difference Moisture Index)
        nir = img_array[:, :, 3].astype(float)  # NIR band
        swir = img_array[:, :, 4].astype(float)  # SWIR band
        # Add a small value to avoid division by zero
        ndmi = (nir - swir) / (nir + swir + 1e-10)
    elif num_bands == 3:
        # If the image is a 3-band RGB image, fall back to NDWI using Green and NIR bands
        green = img_array[:, :, 1].astype(float)  # Green band
        # NIR band (used in this context as a proxy)
        nir = img_array[:, :, 2].astype(float)
        ndwi = (green - nir) / (green + nir + 1e-10)
        ndmi = ndwi  # Use NDWI as proxy for moisture
    else:
        raise ValueError("Unsupported number of bands: {}".format(num_bands))

    # Create a figure with a custom blue color map
    fig, ax = plt.subplots()
    cmap = mcolors.LinearSegmentedColormap.from_list(
        # Color map for moisture (blue shades)
        "", ["lightblue", "blue", "darkblue"])
    ax.imshow(ndmi, cmap=cmap, vmin=-1, vmax=1)
    ax.axis('off')

    # Save the figure to a BytesIO object
    img_io = BytesIO()
    fig.savefig(img_io, format='png', bbox_inches='tight')
    img_io.seek(0)

    # Open the image from the BytesIO object
    soil_moisture_image = Image.open(img_io)

    return soil_moisture_image


def process_ndbi(image_data):
    img = Image.open(io.BytesIO(image_data.read()))
    img_array = np.array(img)

    # Check the number of bands in the image
    num_bands = img_array.shape[2] if len(img_array.shape) > 2 else 1

    # NDBI calculation requires at least 5 bands (NIR, SWIR)
    if num_bands >= 5:
        swir = img_array[:, :, 4].astype(float)
        nir = img_array[:, :, 3].astype(float)
        ndbi = (swir - nir) / (swir + nir + 1e-10)
    elif num_bands == 3:  # RGB image (fallback case)
        # In the case of only 3 bands, we can't compute NDBI directly
        raise ValueError(
            "NDBI cannot be computed from an RGB image with only 3 bands.")
    else:
        raise ValueError("Unsupported number of bands: {}".format(num_bands))

    # Create a figure with a custom color map for built-up areas
    fig, ax = plt.subplots()
    cmap = mcolors.LinearSegmentedColormap.from_list(
        "", ["green", "yellow", "red"])
    ax.imshow(ndbi, cmap=cmap, vmin=-1, vmax=1)
    ax.axis('off')

    # Save the figure to a BytesIO object
    img_io = BytesIO()
    fig.savefig(img_io, format='png', bbox_inches='tight')
    img_io.seek(0)

    return Image.open(img_io)
