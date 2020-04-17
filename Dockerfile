FROM node:11.1-slim

# Update image and install dependencies
RUN set -x \
  && apt-get update \
  && apt-get install -y build-essential git --no-install-recommends \
  && apt-get clean \
  && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

RUN yarn global add serve

ARG NODE_ENV
ENV NODE_ENV $NODE_ENV
ENV APP_DIR /usr/src/app

RUN mkdir -p ${APP_DIR}
ADD package.json ${APP_DIR}
ADD yarn.lock ${APP_DIR}

WORKDIR ${APP_DIR}

ARG BUNDLE_GITHUB__COM
RUN git config --global url."https://$BUNDLE_GITHUB__COM@github.com/Talkdesk/".insteadOf "https://github.com/Talkdesk/"

RUN yarn

ADD .env ${APP_DIR}
ADD .storybook ${APP_DIR}/.storybook
ADD scripts ${APP_DIR}/scripts
ADD public ${APP_DIR}/public
ADD src ${APP_DIR}/src
ADD stories ${APP_DIR}/stories
