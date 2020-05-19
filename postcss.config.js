/* A postcss config file used to build and compress the tailwinds css file. */

// Remove comment and minify css
const cssnano = require('cssnano')({
    preset: ['default', {
        normalizeWhitespace: false
    }]
})

// Removes all unused css classes
const purgecss = require('@fullhuman/postcss-purgecss')({

    // Specify files that contain CSS that we want to keep.
    // Looks for all `html` and `md` file in your directory.
    // Does not look in `node_modules/` and `_site/` folders.
    //
    // Note: '_site/' is ignored because when Jekyll is generates on a server the '_site/'
    //        folder is not guaranteed to exist. This can cause CSS to dissapear unexpectedly.
    content: [
        '{,!(node_modules|_site)/**/}*.{html,md}',
    ],

    // Whitelist CSS classes or html elements to always keep.
    // NOTE:
    //       Markdown generates elements like '# My Title' -> '<h1>My Title</h1>.
    //       Generated HTML is placed in the '_site/' folder which is ignored by PurgeCSS.
    //       Therefore classes may disappear unexpectedly if not whitelisted here.
    whitelist: [
        // Not using a Jekyll as a blog? Comment these:
        'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'ul', 'li',

        // Using code hightlighting in your blog? Uncomment these:
        // 'code', 'pre',
    ],

    // Include any special characters you're using in this regular expression
    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
})

module.exports = ctx => ({
    plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
        ...ctx.env === 'production' ? [purgecss, cssnano] : [],
    ]
})
