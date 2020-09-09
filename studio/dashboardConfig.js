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
                  buildHookId: '5f58d7e556096828916e98fb',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-89asx3ar',
                  apiId: '5c7cdc9e-b54e-49f8-91a3-6f8eb73a253d'
                },
                {
                  buildHookId: '5f58d7e6338a3030a07590d7',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-t8rnsjp2',
                  apiId: '5fa6842d-6114-4ae6-be50-afbcc2060e9b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/WiduDeveloper/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-t8rnsjp2.netlify.app', category: 'apps'}
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
