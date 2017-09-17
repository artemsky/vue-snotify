rm -rf demo
npm run lib:build
npm run link:dist
npm run example:build
cd docs
rm -rf _book
gitbook install
gitbook build ./ ../demo/documentation
rm -rf _book
cd ../demo
git init
git add -A
git commit -m 'update demo'
git push -f git@github.com:artemsky/vue-snotify.git master:gh-pages
