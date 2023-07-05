# Welcome to Crypto Currency Tracker!

## Development

To run project locally:

- Install Dependencies
   ```sh
    npm install
   ```

- Create SQLite database
   ```sh
    npx prisma db push
   ```

- Run Project
   ```sh
    npm run dev
   ```

This starts your app in development mode, rebuilding assets on file changes.

## Explanation
This section will explain the application structure and remix queries to load and save the data.

### Folder Structure
All the major logic is inside the app folder. On the root folder we have ```prisma``` folder which contains the schema file and will also contain the database file ```dev.sqlite``` once we run the command to create sqlite database.

Inside ```app`` folder, we have the following folders:

### assets
This folder will contain the images, css files etc.

### components
This folder contains the building blocks of application.

### containers
This folder house the components responsible for maintaining the states. So, we can say these are smart components.

### pages
This folder is added so we can have the least amount of code in routes' files. (It is not used for the test purpose but ideally, it should be used.)

### routes
This folder contains all the routes of application.
- Important thing to note is, I have used ```server.``` prefix for the routes to be run only on server e.g. when saving the crypto currency information in database.

### services
This folder contains the logic of communication with database and/ or external APIs

### styles
This folder will contain style files.

### utils
This folder will contains different utilities and wrappers functions to be used across the application.

### root.tsx
This file has some modifications related to Page Layout and Page Title (Ideally we should use redux to handle page titles from centralized place or we should write a wrapper (HOC) component to set the page title.)

### Data Loader Query
This query can be found in ```routes/_index.tsx``` file and we used ```GET``` method to load the data. 

### Data Saving Query
From the ```currencies_list/currencieslist.tsx``` file, we are submitting the data using ```useFetcher``` hook and data is being posted to ```server/save_crypto``` route. This route contains the ```ActionFunction``` to handle the request which then calls ```CreateOrUpdateCryptoCurrency``` from ```cryptocurrencies.service.ts``` file. This function then communicates with database and saves the data.



## View DB Contents
- From VS Code, install an extension ```SQLite Viewer``` by ```Florian Klamper``` and the open ```prisma/dev.sqlite``` file.


## Note
- Many components are created inside ```apps/components``` folder.
- There is alot of room for improvement in the current implementation e.g. Redux store can be added.
- Some utility methods are also added but many can be added as per needs.
