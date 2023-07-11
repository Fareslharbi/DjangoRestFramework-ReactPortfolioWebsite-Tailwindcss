# Django Rest Framework React Portfolio Website with Tailwind CSS

This is a web application built using Django Rest Framework (DRF), React, and Tailwind CSS. It serves as a portfolio website to showcase your projects and skills. The Django Rest Framework is used as the backend to provide API endpoints, while React and Tailwind CSS are used to build the frontend user interface.

## Features

- Display projects with details such as title, description, technologies used, and project image.
- Filter and search projects based on different criteria.
- Provide an overview of your skills and experience.
- Contact form to receive messages from visitors.
- Responsive design using Tailwind CSS for optimal viewing on different devices.

## Requirements

Make sure you have the following software installed on your system:

- Python (3.6 or higher)
- Node.js (14.x or higher)
- Django (3.x)
- Django Rest Framework (3.x)
- React (17.x)
- Tailwind CSS (2.x)

## Installation

Follow these steps to set up the project:

1. Clone the repository:

   ```
   $ git clone https://github.com/your-username/your-repo.git
   $ cd your-repo
   ```

2. Backend setup:

   - Create and activate a virtual environment (recommended):

     ```
     $ python -m venv venv
     $ source venv/bin/activate  # For Linux/Mac
     $ .\venv\Scripts\activate  # For Windows
     ```

   - Install the required Python packages:

     ```
     $ pip install -r requirements.txt
     ```

   - Apply migrations:

     ```
     $ python manage.py migrate
     ```

   - Run the Django development server:

     ```
     $ python manage.py runserver
     ```

3. Frontend setup:

   - Install the required npm packages:

     ```
     $ cd frontend
     $ npm install
     ```

   - Start the React development server:

     ```
     $ npm start
     ```

   The development server should start and open the website in your default browser.

4. Customize the Website:

   - Update the project details in the Django admin interface.
   - Modify the React components in the `frontend/src/components` directory to reflect your own projects, skills, and experiences.
   - Customize the styles in the `frontend/src/styles` directory using Tailwind CSS utility classes.

5. Deployment:

   When you're ready to deploy the website, follow the deployment guides for Django and React. Ensure that you configure the necessary settings for your production environment.

## Folder Structure

```
├── backend/             # Django backend project
│   ├── portfolio/       # Main Django app
│   ├── static/          # Static files for Django
│   └── ...
├── frontend/            # React frontend project
│   ├── public/          # Public assets
│   ├── src/             # React components and styles
│   ├── package.json     # npm package dependencies
│   └── ...
├── .gitignore           # Git ignore file
├── README.md            # Project documentation (you're reading it)
└── requirements.txt     # Python package dependencies
```

## Contributing

Contributions are welcome! If you find any bugs or want to add new features, please submit an issue or a pull request. Make sure to follow the project's code style and guidelines.

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use and modify the code as per your needs.

## Acknowledgements

- [Django](https://www.djangoproject.com/) - Python web framework
- [Django Rest Framework](https://www.django-rest-framework.org/) - Web API framework for Django
- [React](https://reactjs.org/) - JavaScript library for building user interfaces
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework

## Contact

If you have any questions or suggestions, feel free to reach out to me at [your-email@example.com](mailto:your-email@example.com).
