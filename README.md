# Petful Server

**Live Link**
https://petful-client-template-nu.vercel.app/

## Built With

- Node
- Express

## API Documentation

**Pet Routes**

```
GET /pets

Status 200 OK

{
    "cat": {
        "age": 2,
        "breed": "Bengal",
        "description": "Orange bengal cat with black stripes lounging on concrete.",
        "gender": "Female",
        "imageURL": "https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "name": "Steve French",
        "story": "Thrown on the street"
    },
    "dog": {
        "age": 3,
        "breed": "Golden Retriever",
        "description": "A smiling golden-brown golden retreiver listening to music.",
        "gender": "Male",
        "imageURL": "https://images.pexels.com/photos/33053/dog-young-dog-small-dog-maltese.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "name": "Zim",
        "story": "Owner Passed away"
    }
}

```

<!--  -->

```
Delete /pets
the delete route for /pets takes in a request from the body (type), values 'dog' and 'cat' are accepted. This removes the first item in the dog or cats queue and the first item in the people queue.

```

**People Routes**

<!--  -->

```
GET /people
Status 200 ok
returns:
[
    "Randy Lahey",
    "Trevor Cory",
    "Jim Lahey"
]
```

```
POST /people
status 201 ok

{
  message: 'Person added'
}
```
