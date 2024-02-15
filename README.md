# mcdonald-location-apiv2

## Description

`mcdonald-location-apiv2` is a Node.js package that provides an easy way to find McDonald's locations based on latitude and longitude. It supports finding the nearest location or retrieving a list of locations within a specified search radius. This API utilizes an unofficial McDonald's location API and offers additional functionality for filtering results. It also offers a feature to search the McDonald's site and fetch results, such as food items, articles, etc.

## Features

- Retrieve the nearest McDonald's location based on latitude and longitude.
- Get a list of McDonald's locations within a specified radius.
- Filter search results by a maximum number of results.

## Installation

To install `mcdonald-location-apiv2`, use npm:

```bash
npm i mcdonald-location-apiv2
```
This will download and install the package and all its dependencies in your project's node_modules directory.

## Usage

After installation, you can use the package in your Node.js application to make API requests. Here is a basic example:

```js
const mcdonaldsApi = require('mcdonald-location-apiv2');

// Example: Get the nearest McDonald's location
mcdonaldsApi.getNearestLocation(40.712776, -74.005974)
  .then(location => console.log(location))
  .catch(error => console.error(error));

// Example: Get a list of McDonald's locations within a 10km radius
mcdonaldsApi.getLocations(40.712776, -74.005974, 10)
  .then(locations => console.log(locations))
  .catch(error => console.error(error));
```

## API Reference

### `getNearestLocation(latitude, longitude)`

- **Parameters:**
  - `latitude`: Latitude of the search location.
  - `longitude`: Longitude of the search location.

- **Returns:** A Promise that resolves to the nearest McDonald's location.

### `getLocations(latitude, longitude, radius, maxResults)`

- **Parameters:**
  - `latitude`: Latitude of the search location.
  - `longitude`: Longitude of the search location.
  - `radius`: Optional. Search radius in kilometers. Defaults to 8.045 km.
  - `maxResults`: Optional. Maximum number of results to return. Defaults to 30.

- **Returns:** A Promise that resolves to an array of McDonald's locations within the specified radius.

## Feature: Search McDonald's Site

This library includes a function, `searchMcDonaldsSite`, that allows you to search the McDonald's website for specific content. You can specify a search query and an optional limit for the number of results returned.

### Function: `searchMcDonaldsSite(searchText, resultLimit)`

#### Parameters:

- `searchText` (**String**): The text string you want to search for on the McDonald's site.
- `resultLimit` (**Number**, *optional*): The maximum number of search results to return. Defaults to 10 if not specified.

#### Returns:

- A promise that resolves to an array containing the titles of search results. The size of the array is determined by `resultLimit`.

#### Usage Example:

```javascript
const { searchMcDonaldsSite } = require('your-package-name');

searchMcDonaldsSite('Big Mac', 5)
  .then(results => {
    console.log(results); // Returns up to 5 results
  })
  .catch(error => {
    console.error(error);
  });
