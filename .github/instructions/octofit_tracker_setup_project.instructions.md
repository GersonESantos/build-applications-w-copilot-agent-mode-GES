---
applyTo: "**"
---
# Octofit-tracker Fitness App Setup and Structure Guidelines

## Explain the Octofit Tracker App goals and steps

I want to build an Octofit Tracker app that will include the following:

* User authentication and profiles
* Activity logging and tracking
* Team creation and management
* Competitive leader board
* Personalized workout suggestions

## Never change directories when agent mode is running commands

- Never change directories
- Instead point to the directory when issuing commands

## Forwarded ports

- 8000: public
- 3000: public
- 27017: private

Do not propose any other ports to forward or to make public

## OctoFit Tracker App structure

The section defines the OctoFit Tracker App's structure

```text
octofit-tracker/
├── backend/
│   ├── venv/
|   ├── octofit_tracker/
└── frontend/
```

## Create the OctoFit Tracker Python virtual environment 

- To create the virtual environment, run the following command:
  
  ```bash
 react
  ```

## OctoFit Tracker react required packages

### Create file octofit-tracker/backend/requirements.txt

- add the following to octofit-tracker/backend/requirements.txt
- Install the react packages below only for our OctoFit Tracker project

```text


Create a requirements.txt with the following Python required packages:
Install the requirements that we created in requirements.txt.

```bash
source octofit-tracker/backend/venv/bin/activate 
pip install -r octofit-tracker/backend/requirements.txt
```

## mongodb-org service and data creation

- always use `ps aux | grep mongod` for checking for mongod running
- mongodb-org is the official MongoDB package
- mongosh is the official client tool
- Always use Django's ORM, not direct MongoDB scripts to create the database structure and data
