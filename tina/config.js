import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "gh-pages";

export default defineConfig({
  branch,
  clientId: "22468546-c359-4bf1-99e7-d3cf8b6b6284", // Get this from tina.io
  token: "109a83f40fadcb4e93b1a503679349fd7c113078", // Get this from tina.io

  build: {
    outputFolder: "admin",
    publicFolder: "./",
  },
  media: {
    tina: {
      // mediaRoot: "",
      mediaRoot: "assets/images",
      // publicFolder: "./assets/images",
      publicFolder: "",
    },
  },
  schema: {
    collections: [
      {
        name: "service",
        label: "Services",
        path: "_services",
        fields: [
          {
            type: "boolean",
            name: "active",
            label: "Active",
          },
          {
            type: "string",
            name: "name",
            label: "Name",
          },
          {
            type: "string",
            name: "permalink",
            label: "Permalink",
          },
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "string",
            name: "frame_url",
            label: "Frame URL",
          },
          {
            type: "string",
            name: "services_tagline",
            nameOverride: "services-tagline",
            label: "Services Tagline",
          },
          {
            type: "object",
            name: "tags",
            label: "Tags",
            list: true,
            ui: {
              // This allows the customization of the list item UI
              // Data can be accessed by item?.<Name of field>
              itemProps: (item) => {
                return { label: `${item?.name}` };
              },
            },
            fields: [
              {
                type: "string",
                name: "name",
                label: "Tag",
              },
            ],
          },
          {
            type: "number",
            name: "order",
            label: "Order Index",
          },
        ],
      },
      {
        name: "case_study",
        label: "Case Studies",
        path: "_case-studies",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            ui: {
              component: "textarea",
            },
          },
          {
            name: "cover_image",
            type: "image",
            label: "Cover Image",
            // upload images to same directory as content file
            uploadDir: () => "/case-studies/thumbnails/",
          },
          {
            name: "illustration",
            type: "image",
            label: "Illustration",
            // upload images to same directory as content file
            uploadDir: () => "/case-studies/illustrations/",
          },
          {
            type: "string",
            name: "color",
            label: "Color",
            options: [
              {
                value: "gray",
                label: "Gray",
              },
              {
                value: "cool-gray",
                label: "Cool Gray",
              },
              {
                value: "red",
                label: "Red",
              },
              {
                value: "orange",
                label: "Orange",
              },
              {
                value: "green",
                label: "Green",
              },
              {
                value: "yellow",
                label: "Yellow",
              },
              {
                value: "blue",
                label: "Blue",
              },
              {
                value: "purple",
                label: "Purple",
              },
              {
                value: "violet",
                label: "Violet",
              },
            ],
          },
          {
            type: "string",
            name: "category",
            label: "Category",
            options: [
              {
                value: "product design",
                label: "Product Design",
              },
              {
                value: "branding",
                label: "Branding",
              },
              {
                value: "renders",
                label: "Renders",
              },
            ],
          },
          {
            type: "object",
            name: "services",
            label: "Services",
            list: true,
            ui: {
              // This allows the customization of the list item UI
              // Data can be accessed by item?.<Name of field>
              itemProps: (item) => {
                return { label: `${item?.name}` };
              },
            },
            fields: [
              {
                type: "string",
                name: "name",
                label: "Service",
              },
              {
                type: "string",
                name: "timeline",
                label: "Timeline",
              },
              {
                type: "object",
                name: "tags",
                label: "Tags",
                list: true,
                ui: {
                  // This allows the customization of the list item UI
                  // Data can be accessed by item?.<Name of field>
                  itemProps: (item) => {
                    return { label: `${item?.name}` };
                  },
                },
                fields: [
                  {
                    type: "string",
                    name: "name",
                    label: "Tag",
                  },
                ],
              },
            ],
          },
          {
            type: "string",
            name: "testimonial",
            label: "Testimonial",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "string",
            name: "cite",
            label: "Cite",
          },
          {
            type: "string",
            name: "icon",
            label: "Icon",
          },
          {
            type: "object",
            name: "tags",
            label: "Tags",
            list: true,
            ui: {
              // This allows the customization of the list item UI
              // Data can be accessed by item?.<Name of field>
              itemProps: (item) => {
                return { label: `${item?.name}` };
              },
            },
            fields: [
              {
                type: "string",
                name: "name",
                label: "Tag",
              },
            ],
          },
          {
            type: "string",
            name: "size",
            label: "Thumbnail Size",
            options: [
              {
                value: "small",
                label: "Small",
              },
              {
                value: "large",
                label: "Large",
              },
              {
                value: "featured",
                label: "Featured",
              },
            ],
          },
          {
            type: "string",
            name: "aspect",
            label: "Aspect Ratio",
            options: [
              {
                value: "wide",
                label: "Wide",
              },
              {
                value: "tall",
                label: "Tall",
              },
            ],
          },
          {
            type: "boolean",
            name: "visible",
            label: "Visible",
          },
          {
            type: "object",
            name: "solutions",
            label: "Solutions",
            list: true,
            ui: {
              // This allows the customization of the list item UI
              // Data can be accessed by item?.<Name of field>
              itemProps: (item) => {
                return { label: `${item?.title}` };
              },
            },
            fields: [
              {
                type: "string",
                name: "title",
                label: "Title",
              },
              {
                type: "string",
                name: "description",
                label: "Description",
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "image",
                name: "media",
                label: "Media",
                // upload images to same directory as content file
                uploadDir: () => "/case-studies/",

                // image file is sibling of content file
                // parse: (filename) => `./${filename}`,
              },
            ],
          },
        ],
      },
    ],
  },
});
