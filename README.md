## Introduction

### Project Description

Currently there are many machine learning frameworks, applications, and libraries designed to meet the challenges of natural language processing, and in particular in the large language model space.  While many of these are quite good at addressing some of the most challenging ML/AI problems, they are also complex and difficult to standup and operate, a consistently prevailing theme amongst these tools.

The Behavioral Cognition team has undertaken a strategic initiative aimed at the development of a sophisticated AI/MIL toolkit yet simple to setup, operate, and grow. This initiative has culminated in the creation of a machine learning framework that centers around the so-called "batteries include" design philosophy. One of our overarching goals is "zero-to-hero" in a matter of minutes.

A key distinguishing feature of the framework lies in its adaptability, facilitating the integration of any language learning model with ease. This flexibility empowers users to seamlessly incorporate diverse models into the toolkit, facilitating comparative analyses to identify optimal solutions tailored to their specific needs.

Beyond the basic model integration capability, the toolkit offers users extensive customization capabilities, affording control over parameters such as temperature adjustment and role allocation, among others. This empowers users to tailor the toolkit to precise specifications, ensuring alignment with their unique requirements and objectives.

### Background/Motivation

Creating a custom-made machine learning framework tailored specifically for conversational Generative Pre-Trained Transformer (GPT) models entails a significant investment of time and expertise, this presents a challenge for individuals, website developers, or small enterprises seeking to integrate GPT functionality into their services. Recognizing this challenge, our objective was to engineer a comprehensive framework capable of streamlining this process, enabling users to deploy a toolkit in mere minutes.

To achieve this goal, our team designed and developed a production-ready system with surrounding frameworks, ensuring seamless integration into any existing infrastructure. This innovative solution effectively abstracts the complexities associated with GPT implementation, offering users a plug-and-play experience that expedites the development of GPT models across a diverse range of platforms.

By providing a readily deployable toolkit, users can gain access to a versatile and efficient solution for incorporating GPT functionality into their chosen platforms, thereby minimizing development overhead and accelerating time-to-market for their conversational AI application.

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

![architecture](resources/lp-toolkit-architecture-2023-12-03.png)

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
