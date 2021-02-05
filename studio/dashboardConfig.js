export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '601d656583c314ffa31bde41',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-ysdwcw4d',
                  apiId: '6ed238f1-e128-4eea-9afe-6f751e95f777'
                },
                {
                  buildHookId: '601d65658bacca038b338fa2',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-tant99wg',
                  apiId: 'a49bca3d-3a06-4ed2-91db-c2dd3245c3a9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jdmr/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-tant99wg.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
