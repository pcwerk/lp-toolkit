# lp-toolkit

`lp-toolkit` is a project aimed to help developers get started with ML/AI development. It is both simple and flexible in its design and implementation.  

The project's goals include:

- Configurable and plugin architecture to allow adoption of evolving technologies
- Rapid instantiate and deploy a robust AI/ML development environment
- Utilize existing OpenSource tools - why reinvent the wheel?
- Self-contained containerized microservices - batteries included!

## Architecture

`lp-toolkit` is comprised of microservices that run inside a docker container environment.  Query requests are made to the `proxy` which routes them to either the `frontend` (for static assets, e.g. HTML, css, images, etc) or `backend` (API calls).  The persistent database is `mongo`.  The engine of the `lp-toolkit` is consisted of a LangChain wrapper and various microservices, e.g. `vectorizer` and other data analytics tools.  Communications between the microservices are accomplished through inter-docker API calls.

Note that in its current design, `lp-toolkit` does not scale.  For a large and complex production or enterprize deployment, use of a scaling technologies, e.g. a Kubernetes cluster, is almost a must.

![archictecture](resources/lp-toolkit-architecture-2023-12-03.png)

## Quick Start Guide

Before getting started, the following tools are required:

- `npm`
- `docker` and `docker-compose`

Note that out of the box, `lp-toolkit` uses the ChatGPT engine.  Therefore, an [OpenAI](https://openai.com/) API key is needed.  

The first step is to compile the frontend:

```bash
cd lp-toolkit/frontend/
npm install
```

Next, compile the backend:

```bash
cd lp-toolkit/backend/
npm install
```

Finally, start the `lp-toolkit` system:

```bash
cd lp-toolkit/
export OPENAI_API_KEY={replace-with-your-openai-api-key}
docker-compose up
```

Point a web browser to `http://localhost:3000` and the following screen should be shown:

![image](resources/lp-toolkit-initial-window.png)
