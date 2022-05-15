const { 
    override, 
    fixBabelImports, 
    addLessLoader,
    addWebpackAlias
} = require('customize-cra');
const path = require('path');

module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
            libraryDirectory: 'es',
            style: 'true',
    }),
    addLessLoader({
        lessOptions: {
            javascriptEnabled: true,
            modifyVars: { '@primary-color': '#171e28' },
        }
    }),
    addWebpackAlias({
        "@": path.resolve(__dirname, 'src')
    })
);
