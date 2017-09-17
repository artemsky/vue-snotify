cd docs
rm -rf _book
gitbook install
gitbook build ./ ../demo/documentation
rm -rf _book
cd ../demo/documentation
git init
git add -A
git commit -m 'update demo'
git push -f git@github.com:artemsky/vue-snotify.git master:gh-pages
