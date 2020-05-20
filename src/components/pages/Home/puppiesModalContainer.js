import React from "react";
import RenderCard from "./RenderCard";
    const CardConfig = [
        {
          component: "card",
          children: [
            {
              component: "img",
              src:
                "https://images.pexels.com/photos/2877188/pexels-photo-2877188.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            },
            {
              component: "body",
              children: [
                {
                  component: "title",
                  children: "Harley"
                },
                {
                  component: "subtitle",
                  children: "This is the subtitle"
                },
                {
                  component: "text",
                  children:
                    "Some quick example text to build on the card title and make up the bulk of the card's content."
                },
                {
                  component: "button",
                  children: "Click Me!"
                }
              ]
            }
          ]
        }, 
        {
            component: "card",
            children: [
              {
                component: "img",
                src:
                  "https://images.pexels.com/photos/2877188/pexels-photo-2877188.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              },
              {
                component: "body",
                children: [
                  {
                    component: "title",
                    children: "Leo"
                  },
                  {
                    component: "subtitle",
                    children: "This is the subtitle"
                  },
                  {
                    component: "text",
                    children:
                      "Some quick example text to build on the card title and make up the bulk of the card's content."
                  },
                  {
                    component: "button",
                    children: "Click Me!"
                  }
                ]
              }
            ]
          },
          {
            component: "card",
            children: [
              {
                component: "img",
                src:
                  "https://images.pexels.com/photos/2877188/pexels-photo-2877188.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              },
              {
                component: "body",
                children: [
                  {
                    component: "title",
                    children: "Milo"
                  },
                  {
                    component: "subtitle",
                    children: "This is the subtitle"
                  },
                  {
                    component: "text",
                    children:
                      "Some quick example text to build on the card title and make up the bulk of the card's content."
                  },
                  {
                    component: "button",
                    children: "Click Me!"
                  }
                ]
              }
            ]
          }
      ];
export default function PuppiesModalContainer () {
    return (
      <div className="App">
        <div className="card-container">
          {CardConfig.map(config => RenderCard(config))}
        </div>
      </div>
    );
  }