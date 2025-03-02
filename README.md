Frontend:-
Objective
Develop and deploy a frontend application that uses the backend you’ve developed to process the input and
get response, then render it on frontend. (Preferably React based – including frameworks like Next.js, but
that’s optional).
Logic
1. The application should have a text input that accepts JSONs that are from the previous section’s
(backend’s) request. Example - { "data": ["A",”C”,”z”] }
2. The frontend application should call the REST API that you’ve created to process the data in request
and return the response as per the logic mentioned in backend challenge.
Details
Create a user interface with the following features:
1. Text input field and submit button:
- Accepts only valid JSON input
- Validates JSON format on submission, show error in case of invalid input
- Calls the REST API that you’ve created, with payload from the text input
- Gets the response and then uses the following logic to render it
2. Multi-Select Dropdown:
- Appears after valid JSON submission
- Contains the following options:
a. Alphabets
b. Numbers
c. Highest alphabet
3. Response shown on frontend will be basis options selected from dropdown. E.g. if user selects
Alphabets & Numbers then response should render data associated only with alpphabets & numbers
4. Also, the website title should be your roll number
