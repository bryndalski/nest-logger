FROM node:20-alpine3.17
WORKDIR /package
COPY /package/src /package/src
COPY /package/tests /package/tests
COPY /package/package.json /package/package.json
COPY /package/tsconfig.json /package/tsconfig.json
COPY /package/tsconfig.build.json /package/tsconfig.build.json
COPY /package/jest-e2e.json /package/jest-e2e.json



RUN npm install

CMD ["npm", "run", "test:e2e:watch"]
