BUILD_NUMBER=$RANDOM

BUILD_IMAGE_NAME=role-presentation-build
BUILD_IMAGE="${BUILD_IMAGE_NAME}:${BUILD_NUMBER}"

docker build . \
    --file ./pipelines/Build.Dockerfile \
    --tag $BUILD_IMAGE


PUBLISH_IMAGE_NAME=role-presentation-publish
PUBLISH_IMAGE="${PUBLISH_IMAGE_NAME}:${BUILD_NUMBER}"

docker build . \
    --file ./pipelines/Publish.Dockerfile \
    --build-arg BASE_IMAGE=$BUILD_IMAGE \
    --tag $PUBLISH_IMAGE


docker run \
    --rm \
    --detach \
    --publish 8080:80 \
    --name role-presentation \
    $PUBLISH_IMAGE
