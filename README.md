# AICUT

<img src="https://user-images.githubusercontent.com/49341587/125423783-b184198e-d5a9-4753-9eec-a079ea1baa1d.png" width="140px" />

AIcut is a solution for streamers. The goal is to create an application which is creating clips from live streaming on Twitch.

You can being connecte on the solution with your twitch account, Then you can activate the AI script, and it will create a clip automatcly from a machine learning Python then You can edit it and then mount your video with your clips

We also want to have an acces without Twitch account to display trends, analytics and clips on it.


## Installation
Option 1 - Docker (Recommanded for production):<br />
launch all the containers
```
docker compose up
--build : Build a new image
--detach : Run containers in the background
```
and to shut down
```
docker compose down 
--rmi type: Remove images with type 'all', 'local' or '<tags>'
--volumes : Remove volumes
```

Option 2 - One by one (Recommanded for developpement):<br />
- Express API -> [API INSTALLATION](https://github.com/Nicochou/aicut/tree/main/server#installation)                        
- Client React -> [CLIENT INSTALLATION](https://github.com/Nicochou/aicut/tree/main/client#installation)                         
- AI server -> [AISERVER INSTALLATION](https://github.com/Nicochou/aicut/tree/main/ai-server#installation)            

## Production

The solution is currently runnning with AWS ECS & AWS ECR
- Open [http://13.37.251.205:3000](http://13.37.251.205:3000) to view the client in the browser.
- Open [http://13.37.251.205:3000](http://13.37.251.205:8082) to view the api in the browser.
## Environment
```
3 environment :
  -- PROD
  -- TEST
  -- DEV
```
## Documentations

You can see the official documentation in the github wiki of the repository. 

You can also read the documentation here -> [Aicut doc](https://nicochou.github.io/Aicut/)

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