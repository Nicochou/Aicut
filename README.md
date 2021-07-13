# AICUT

![Logo AICUT](https://user-images.githubusercontent.com/49341587/125423783-b184198e-d5a9-4753-9eec-a079ea1baa1d.png)

AIcut is a solution for streamers. The goal is to create an application which is creating clips from live streaming on Twitch.

You can being connecte on the solution with your twitch account, Then you can activate the AI script, and it will create a clip automatcly from a machine learning Python then You can edit it and then mount your video with your clips

We also want to have an acces without Twitch account to display trends, analytics and clips on it.

## Diagrams
![AICUT Process ](https://user-images.githubusercontent.com/49341587/121345215-df762680-c924-11eb-8666-07b8ca8f21e9.PNG)

![AICUT Tools ](https://user-images.githubusercontent.com/49341587/121340602-185fcc80-c920-11eb-9c38-3640f521c24c.PNG)

![AICUT Authentication](https://user-images.githubusercontent.com/49341587/121345509-3aa81900-c925-11eb-93bb-a118fde25d32.PNG)

![AICUT Algo](https://user-images.githubusercontent.com/49341587/121345569-50b5d980-c925-11eb-821e-d12eba52abe5.PNG)

## Installation
To launch the application, you got 2 options:

Option 1:
launch all the components so use Docker
```
docker compose up --build
```
and to shut down
```
docker compose down
```

Option 2 : Launch one or a few of components so check the install one per one
- Express API -> [API INSTALLATION](https://github.com/Nicochou/aicut/tree/main/server#installation)                        
- Client React -> [CLIENT INSTALLATION](https://github.com/Nicochou/aicut/tree/main/client#installation)                         
- AI server -> [AISERVER INSTALLATION](https://github.com/Nicochou/aicut/tree/main/ai-server#installation)            

## Documentations

The documentation is currently in wrinting

## Contributions

Feel free to contribute to the project.

    Step 1: Fork the project to your github
    
    Step 2: Create a new local branch according to the bugfix, features ... from the project forked
    
    Step 3: Code the feature.
    
    Step 4: Push the branch to your remote repository.
    
    Step 5: Create a Pull Request from your branch to the base branch : [develop]

## Deployment

On every Pull request or Push to the [main] branch, an build aws is launched.

Please, wait the build ended before merge the branches.

## Security Issues

If you discover a security vulnerability within Aicut, please follow our disclosure procedure and set up a new issue request on the github.
