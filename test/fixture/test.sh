DIR="$( cd "$( dirname "$0" )" && pwd -P )"
PROJECT_ROOT="$( cd $DIR/../.. && pwd -P )"

cd $DIR
rm -rf .links package.json yarn.lock node_modules

cd $PROJECT_ROOT
yarn link --link-folder $DIR/.links
cd $DIR
yarn init -y
yarn link @mizdra/eslint-config-mizdra --link-folder $DIR/.links

cd $DIR
# ref: https://github.com/yarnpkg/yarn/issues/4594
# ref: https://github.com/nathanhleung/install-peerdeps/issues/62
# ref: https://github.com/nathanhleung/install-peerdeps/pull/51
fail-on-stderr install-peerdeps @mizdra/eslint-config-mizdra --dev --yarn --only-peers --extra-args "--json" > /dev/null
