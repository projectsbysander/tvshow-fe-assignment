# FE Assignment - TV SHOW

In this repo you'll find a Nextjs app that allows users to view TV shows and its details based on different genres and rates.

<p>
  <a href="https://tvshows-three.vercel.app/">Watch the demo here</a>
</p>

## tech

For this app I used the following techniques:
- Next
- React Server Components
- Tailwindcss
- Typescript
- Eslint
- Jest and Testing Library
- localStorage

### why next

One of the main benefits of Next is that it enables SSR (server-side rendering). This means the server can generate the HTML for a page and send it to the client, rather than the client generating the HTML using JavaScript. This can improve the performance and SEO of your app. 

Also the developer experience, more performance and flexibility has improved in the new release of next 13, where you can now use React Server (async) Components, a very intuitive file-based routing and streaming.


## folder structure 

Typically I like using UI libraries. In my current position, my team and I developed our own design system. The folder structure of our ui components are very similar, where components have their own component, tests and storybook files. The component is exported from an index.ts file to prevent exporting double naming collisions and imported/exported in @ui/index.ts.

Nextjs provides file-based routing. The App directly also provides a very intuitive separation of concerns with regards to shared or local layouts, loading and error states.

## testing

The requested unit tests have been added using Jest and Testing Library. Ideally I would add at least one test per component. However, I was a bit short on time. Also, normally I like to add Integration and E2E tests using puppeteer and cypress. 

## responsiveness

This app includes responsiveness for all devices/resolutions.

## accessibility

The following is enphasized to ensure accessibility:
- All pages are structured with semantic html so technologies and screen readers understand the content and navigate the page more effectively. 
- alt attribute on images
- keyboard accessibility: every element and feature is accessible by using tab and enter by using the focus psuedo
- tested color contrasting (very high contrast)
- ARIA roles, states, and properties where necessary
- Optimized Lighthouse
- In accordance with WCAG

## Requirements

- Node.js 16+ and npm/yarn

## Getting started

Run the following command on your local environment:

```shell
git clone git@github.com:projectsbysander/tvshow-fe-assignment.git
cd tvshow-fe-assignment
```

Then, you can install and run locally in development mode with live reload:

```shell
npm install
npm run dev
```

Or when using yarn:

```shell
yarn install
yarn dev
```

Open http://localhost:3000 to see this project.
