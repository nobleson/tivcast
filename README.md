Store Inventory App
# Deployment Step

STEP1: Build Image
>docker build -t nobleson/tivcast:latest .

STEP2: Test-run image locally
> docker run --name tivcast --rm -p 3000:3000 -d nobleson/tivcast:latest

STEP3: Login to Docker Hub Registry
> docker login

STEP4: Push Image to the registry
> docker push nobleson/tivcast:latest

# Other operations
To check image size:
> docker image ls nobleson/tivcast:latest

The organization policy constraint 'iam.disableServiceAccountKeyCreation' is enforced on your organization.


npm i bootstrap react-bootstrap --legacy-peer-deps