import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'

const singletonTypes = new Set(['contactInfo', 'heroImage', 'aboutImage'])
const singletonActions = new Set(['publish', 'discardChanges', 'restore'])

export default defineConfig({
  name: 'default',
  title: 'Ahana-Mishra',

  projectId: 'sagvioeh',
  dataset: 'production',


  plugins: [
    deskTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([

            S.listItem()
              .title('Contact Info')
              .id('contactInfo')
              .child(
                S.document()
                  .schemaType('contactInfo')
                  .documentId('contactInfo')
              ),

            S.listItem()
              .title('Hero Image')
              .id('heroImage')
              .child(
                S.document()
                  .schemaType('heroImage')
                  .documentId('heroImage')
              ),

            S.listItem()
              .title('About Image')
              .id('aboutImage')
              .child(
                S.document()
                  .schemaType('aboutImage')
                  .documentId('aboutImage')
              ),

            S.divider(),

            // Regular document types
            ...S.documentTypeListItems().filter(
              (listItem) => !singletonTypes.has(listItem.getId())
            ),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
    // Filter out singleton types from the global “New document” menu options
    templates: (prev) =>
      prev.filter((template) => !singletonTypes.has(template.id)),
  },

  document: {
    // For singleton types, filter out actions that are not explicitly allowed
    actions: (prev, { schemaType }) =>
      singletonTypes.has(schemaType)
        ? prev.filter(({ action }) => action && singletonActions.has(action))
        : prev,
  },
})


