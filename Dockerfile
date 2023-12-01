FROM node:20.10-alpine
RUN corepack enable

COPY . /app
WORKDIR app

RUN pnpm install

EXPOSE 3000

CMD ["sh", "./start.sh"]