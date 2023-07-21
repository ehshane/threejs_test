FROM node:18.16-bullseye

# Install pnpm
#RUN curl -fsSL https://get.pnpm.io/install.sh | sh -; node - add --global pnpm
RUN corepack enable; corepack prepare pnpm@8.6.7 --activate
