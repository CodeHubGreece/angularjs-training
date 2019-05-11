# Assignment

A small and very simple web application could be developed to keep product versions and installations of each version to customers. Each version and each installation have its details (notes).

## Data models

```js
class User {
    Id,
    FirstName,
    LastName,
    Email
}

class Product {
    Id,
    Name
}

class Customer {
    Id,
    Name,
    Description,
    Country
}

class Version {
    Id,
    ReleaseDate,
    ProductId,
    VersionNumber,
    Description
}

class VersionNoteType {
    Id,
    Name
}

class VersionNotes {
    Id,
    VersionId,
    UserId,
    VersionNoteTypeId,
    Description
}

class Installation {
    Id,
    CustomerId,
    VersionId,
    RefDate
}

class InstallationNotes {
    Id,
    InstallationId,
    UserId,
    Name,
    Description
}
```

## Details about data models

 - **User** is the application user. Each class member is a user.
 - **1 product** can be used for simplicity, e.g. **“Axia”**.
 - **5 customers** should be enough for the exercise.
 - **10 versions** should be enough for the exercise.
 - **Version Note Type** could not change (static data) and could be one of the following: **Module** or **Bug Fix**
 - **Up to 4 notes** per **version** should be enough for the exercise.

## View Models

View models should be slightly different. The model Ids should be kept hidden but included in the models.

## Application Views

 - CRUD operations for all models
 - Search for a customer and see installations and their notes (details)
 - Search for a specific version and see basic information its notes
 - Search using a period and check how many and which versions have been released within that period
 - Search using a period and check how many installations were accomplished within that period

 >API is not necessary if mockup data exist in JSON files