ARG NODEJS_VERSION=15
FROM node:${NODEJS_VERSION}-buster-slim

RUN apt-get update && DEBIAN_FRONTED=noninteractive apt-get install -y --no-install-recommends \
    make \
    wget gnupg ca-certificates \
    && wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - \
     && sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list' \
     && apt-get update \
    && mkdir -p /usr/share/man/man1 \
    && apt-get install -y libxss1 google-chrome-stable \
    && rm -rf /var/lib/apt/lists/*

ARG WOKRKING_PACKAGE_PATH=/working_package
ENV WOKRKING_PACKAGE_PATH=${WOKRKING_PACKAGE_PATH}
RUN mkdir -p ${WOKRKING_PACKAGE_PATH} \
    && cd ${WOKRKING_PACKAGE_PATH} \
    && npm init -y \
    && npm install -D vuepress \
    && npm i -D markdown-it-plantuml \
    && npm i -D @snowdog/vuepress-plugin-pdf-export

COPY offlinify.js ${WOKRKING_PACKAGE_PATH}
RUN chown -R 1000:1000 ${WOKRKING_PACKAGE_PATH}

CMD [ "/bin/sh", "-c", "while sleep 1000; do :; done" ]