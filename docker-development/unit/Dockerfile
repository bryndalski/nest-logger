FROM node:20-alpine3.17
# Test type should be passed as an argument
# Test types:
#   - unit
#   - e2e
# Default test type is unit
WORKDIR /package
COPY /package/src /package/src
COPY /package/tests /package/tests
COPY /package/package.json /package/package.json
COPY /package/tsconfig.json /package/tsconfig.json
COPY /package/tsconfig.build.json /package/tsconfig.build.json


RUN npm install

CMD ["npm", "run", "test:watchAll"]
