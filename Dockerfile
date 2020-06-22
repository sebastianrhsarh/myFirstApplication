FROM node:10.9

RUN mkdir /usr/src/trabajo
WORKDIR /usr/src/trabajo

RUN npm install -g @angular/cli@8.3.21

COPY . /usr/src/trabajo
RUN npm install

CMD ng serve --host 0.0.0.0 --port 4200

#Para correrlo es "docker build -t angular-docker-image ."
#y luego "docker run -it -v ${PWD}:/usr/src/trabajo -p 4200:4200 angular-docker-image"
#Esto realizará un ng serve y mostrará donde está corriendo nuestra página en un servidor local

#Version de node y angularcli actualizadas.