import { Repository } from '@typings/entities'

var dependenciesUpdatedAt = new Date()
dependenciesUpdatedAt.setDate(dependenciesUpdatedAt.getDate() - 2)

export const reactRepo: Repository = {
  id: 10,
  name: 'reactjs.org',
  fullName: 'reactjs/reactjs.org',
  githubId: '42',
  installationId: '42',
  author: 'facebook',
  repoImg: 'https://avatars0.githubusercontent.com/u/6412038?s=200&v=4',
  createdAt: '2020-07-10T09:25:50.000Z',
  dependenciesUpdatedAt: dependenciesUpdatedAt.toISOString(),
  repoUrl: 'https://github.com/reactjs/reactjs.org',
  packageJson: {
    dependencies: {
      'babel-eslint': '^8.0.1',
      eslint: '^4.8.0',
      'eslint-config-fbjs': '^2.0.0',
      'eslint-config-react': '^1.1.7',
      'eslint-plugin-babel': '^4.1.2',
      'eslint-plugin-flowtype': '^2.39.1',
      'eslint-plugin-jsx-a11y': '^6.0.2',
      'eslint-plugin-prettier': '^2.3.1',
      'eslint-plugin-react': '^7.4.0',
      'eslint-plugin-relay': '^0.0.19',
      'flow-bin': '^0.56.0',
      gatsby: '^2.0.0',
      'gatsby-plugin-catch-links': '^2.0.0',
      'gatsby-plugin-feed': '^2.0.0',
      'gatsby-plugin-glamor': '^2.0.0',
      'gatsby-plugin-google-analytics': '^2.0.0',
      'gatsby-plugin-manifest': '^2.0.0',
      'gatsby-plugin-netlify': '^2.0.0',
      'gatsby-plugin-nprogress': '^2.0.0',
      'gatsby-plugin-react-helmet': '^3.0.0',
      'gatsby-plugin-sharp': '^2.4.12',
      'gatsby-plugin-twitter': '^2.0.0',
      'gatsby-remark-code-repls': '^2.0.0',
      'gatsby-remark-copy-linked-files': '^2.0.0',
      'gatsby-remark-embed-snippet': '^3.0.0',
      'gatsby-remark-external-links': '^0.0.4',
      'gatsby-remark-images': '^2.0.0',
      'gatsby-remark-prismjs': '^3.0.2',
      'gatsby-remark-responsive-iframe': '^2.0.0',
      'gatsby-remark-smartypants': '^2.0.0',
      'gatsby-source-filesystem': '^2.0.0',
      'gatsby-transformer-remark': '^2.0.0',
      'gatsby-transformer-sharp': '^2.3.18',
      'github-slugger': '^1.2.1',
      glamor: '^2.20.40',
      hex2rgba: '^0.0.1',
      'mdast-util-to-string': '^1.0.5',
      'normalize.css': '^8.0.0',
      prettier: '^1.7.4',
      prismjs: '^1.15.0',
      react: '^16.13.1',
      'react-dom': '^16.13.1',
      'react-helmet': '^5.2.0',
      'react-live': '1.8.0-0',
      remarkable: '^1.7.1',
      'request-promise': '^4.2.2',
      rimraf: '^2.6.1',
      slugify: '^1.2.1',
      'unist-util-visit': '^1.1.3',
    },
    devDependencies: {
      '@babel/preset-flow': '^7.0.0',
      'eslint-config-prettier': '^2.6.0',
      'lz-string': '^1.4.4',
      'npm-run-all': '^4.1.5',
      'recursive-readdir': '^2.2.1',
      'unist-util-map': '^1.0.3',
    },
  },
  dependencies: {
    deps: [
      [
        '@babel/preset-flow',
        '7.8.3',
        '7.10.',
        '7.10.4',
        'devDependencies',
        'https://github.com/babel/babel#readme',
      ],
      [
        'babel-eslint',
        '8.2.6',
        '8.2.6',
        '10.1.0',
        'dependencies',
        'https://github.com/babel/babel-eslint',
      ],
      [
        'eslint',
        '4.19.0',
        '4.19.1',
        '7.5.0',
        'dependencies',
        'https://eslint.org',
      ],
      [
        'eslint-config-fbjs',
        '2.1.0',
        '2.1.0',
        '3.1.1',
        'dependencies',
        'https://github.com/facebook/fbjs#readme',
      ],
      [
        'eslint-config-prettier',
        '2.10.0',
        '2.10.0',
        '6.11.0',
        'devDependencies',
        'https://github.com/prettier/eslint-config-prettier#readme',
      ],
      [
        'eslint-plugin-babel',
        '4.1.2',
        '4.1.2',
        '5.3.1',
        'dependencies',
        'https://github.com/babel/eslint-plugin-babel#readme',
      ],
      [
        'eslint-plugin-flowtype',
        '2.50.3',
        '2.50.3',
        '5.2.0',
        'dependencies',
        'https://github.com/gajus/eslint-plugin-flowtype#readme',
      ],
      [
        'eslint-plugin-jsx-a11y',
        '6.2.3',
        '6.3.1',
        '6.3.1',
        'dependencies',
        'https://github.com/evcohen/eslint-plugin-jsx-a11y#readme',
      ],
      [
        'eslint-plugin-prettier',
        '2.7.0',
        '2.7.0',
        '3.1.4',
        'dependencies',
        'https://github.com/prettier/eslint-plugin-prettier#readme',
      ],
      [
        'eslint-plugin-react',
        '7.19.0',
        '7.20.3',
        '7.20.3',
        'dependencies',
        'https://github.com/yannickcr/eslint-plugin-react',
      ],
      [
        'eslint-plugin-relay',
        '0.0.19',
        '0.0.19',
        '1.7.1',
        'dependencies',
        'https://github.com/relayjs/eslint-plugin-relay.git',
      ],
      [
        'flow-bin',
        '0.56.0',
        '0.56.0',
        '0.129.0',
        'dependencies',
        'https://github.com/flowtype/flow-bin#readme',
      ],
      [
        'gatsby',
        '2.19.42',
        '2.24.7',
        '2.24.7',
        'dependencies',
        'https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby#readme',
      ],
      [
        'gatsby-plugin-catch-links',
        '2.1.27',
        '2.3.11',
        '2.3.11',
        'dependencies',
        'https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-catch-links#readme',
      ],
      [
        'gatsby-plugin-feed',
        '2.3.28',
        '2.5.11',
        '2.5.11',
        'dependencies',
        'https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-feed#readme',
      ],
      [
        'gatsby-plugin-glamor',
        '2.1.22',
        '2.3.10',
        '2.3.10',
        'dependencies',
        'https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-glamor#readme',
      ],
      [
        'gatsby-plugin-google-analytics',
        '2.1.37',
        '2.3.12',
        '2.3.12',
        'dependencies',
        'https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-google-analytics#readme',
      ],
      [
        'gatsby-plugin-manifest',
        '2.2.47',
        '2.4.19',
        '2.4.19',
        'dependencies',
        'https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-manifest#readme',
      ],
      [
        'gatsby-plugin-netlify',
        '2.1.34',
        '2.3.11',
        '2.3.11',
        'dependencies',
        'https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-netlify#readme',
      ],
      [
        'gatsby-plugin-nprogress',
        '2.1.20',
        '2.3.10',
        '2.3.10',
        'dependencies',
        'https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-nprogress#readme',
      ],
      [
        'gatsby-plugin-react-helmet',
        '3.1.23',
        '3.3.10',
        '3.3.10',
        'dependencies',
        'https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-react-helmet#readme',
      ],
      [
        'gatsby-plugin-sharp',
        '2.4.12',
        '2.6.20',
        '2.6.20',
        'dependencies',
        'https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-sharp#readme',
      ],
      [
        'gatsby-plugin-twitter',
        '2.1.20',
        '2.3.10',
        '2.3.10',
        'dependencies',
        'https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-twitter#readme',
      ],
      [
        'gatsby-remark-code-repls',
        '2.2.0',
        '2.2.0',
        '3.2.10',
        'dependencies',
        'https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-remark-code-repls#readme',
      ],
      [
        'gatsby-remark-copy-linked-files',
        '2.1.39',
        '2.3.11',
        '2.3.11',
        'dependencies',
        'https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-remark-copy-linked-files#readme',
      ],
      [
        'gatsby-remark-embed-snippet',
        '3.2.4',
        '3.2.4',
        '4.3.13',
        'dependencies',
        'https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-remark-embed-snippet#readme',
      ],
      [
        'gatsby-remark-images',
        '2.0.6',
        '2.0.6',
        '3.3.19',
        'dependencies',
        'https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-remark-images#readme',
      ],
      [
        'gatsby-remark-prismjs',
        '3.3.35',
        '3.5.10',
        '3.5.10',
        'dependencies',
        'https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-remark-prismjs#readme',
      ],
      [
        'gatsby-remark-responsive-iframe',
        '2.2.33',
        '2.4.11',
        '2.4.11',
        'dependencies',
        'https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-remark-responsive-iframe#readme',
      ],
      [
        'gatsby-remark-smartypants',
        '2.1.22',
        '2.3.10',
        '2.3.10',
        'dependencies',
        'https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-remark-smartypants#readme',
      ],
      [
        'gatsby-source-filesystem',
        '2.1.55',
        '2.3.20',
        '2.3.20',
        'dependencies',
        'https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-source-filesystem#readme',
      ],
      [
        'gatsby-transformer-remark',
        '2.6.58',
        '2.8.25',
        '2.8.25',
        'dependencies',
        'https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-transformer-remark#readme',
      ],
      [
        'gatsby-transformer-sharp',
        '2.3.18',
        '2.5.11',
        '2.5.11',
        'dependencies',
        'https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-transformer-sharp#readme',
      ],
      [
        'prettier',
        '1.19.1',
        '1.19.1',
        '2.0.5',
        'dependencies',
        'https://prettier.io',
      ],
      [
        'prismjs',
        '1.19.0',
        '1.20.0',
        '1.20.0',
        'dependencies',
        'https://github.com/LeaVerou/prism#readme',
      ],
      [
        'react-helmet',
        '5.2.1',
        '5.2.1',
        '6.1.0',
        'dependencies',
        'https://github.com/nfl/react-helmet#readme',
      ],
      [
        'react-live',
        '1.8.0-0',
        '1.8.0-0',
        '2.2.2',
        'dependencies',
        'git+https://github.com/philpl/react-live.git',
      ],
      [
        'remarkable',
        '1.7.4',
        '1.7.4',
        '2.0.1',
        'dependencies',
        'https://github.com/jonschlinkert/remarkable',
      ],
      [
        'rimraf',
        '2.7.1',
        '2.7.1',
        '3.0.2',
        'dependencies',
        'https://github.com/isaacs/rimraf#readme',
      ],
      [
        'slugify',
        '1.4.0',
        '1.4.4',
        '1.4.4',
        'dependencies',
        'https://github.com/simov/slugify',
      ],
      [
        'unist-util-map',
        '1.0.5',
        '1.0.5',
        '2.0.1',
        'devDependencies',
        'https://github.com/syntax-tree/unist-util-map#readme',
      ],
      [
        'unist-util-visit',
        '1.4.1',
        '1.4.1',
        '2.0.3',
        'dependencies',
        'https://github.com/syntax-tree/unist-util-visit#readme',
      ],
    ],
  },
  branch: '16.8.6',
  path: '/',
  isConfigured: true,
  score: 24,
  framework: 'react',
  hasYarnLock: true,
  crawlError: '',
  users: [],
  pullRequests: [],
}
