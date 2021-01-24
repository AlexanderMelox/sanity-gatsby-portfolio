export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
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
                  buildHookId: '600cce0a86547a70da71963f',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-j59pvdhb',
                  apiId: '6d2b230a-1f78-4858-bc32-5ce6d5e6258c'
                },
                {
                  buildHookId: '600cce0b5dcdeaa11b95cf5c',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-7xpb4zbq',
                  apiId: '899c8e79-1c97-4db9-ad40-3274b723ae3e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/AlexanderMelox/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-7xpb4zbq.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
