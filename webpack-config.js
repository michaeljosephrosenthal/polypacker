import fs from 'fs'
import path from 'path'
import webpack from 'webpack'
import nodeExternals from 'webpack-node-externals'
import XRegExp from 'xregexp'

var contextToTarget = {
    NODE: 'node',
    BROWSER: 'web'
}

const derivedEnv = process.env.NODE_ENV && process.env.NODE_ENV.toUpperCase() || 'DEVELOPMENT'

export default function webpackConfig({entry, out, hot, modules, babelPresets=[], context, env=derivedEnv, ...options}){
    var compound_version = (context && env) ? context.toLowerCase() + '_' + env.toLowerCase() : 'index'
    process.chdir(process.env.PWD)
    babelPresets.unshift('es2015')
    babelPresets.push('stage-0')
    var pwd = './'
    var config =  {
      devtool: 'source-map',
      externals: [
          nodeExternals(),
          (context, request, callback) => {
              if(/^polypack!/.test(request))
                  return callback(null, `${request.substr(9)}/dist/for/${compound_version}`);
              callback();
          },
      ],
      plugins: [
		new webpack.DefinePlugin({
          $ES: {
              CONTEXT: JSON.stringify(context || 'NODE'),
              ENV: JSON.stringify(env)
          }
        }),
		new webpack.DefinePlugin({"process.env": {NODE_ENV: `"${env.toLowerCase()}"`}}),
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.OccurenceOrderPlugin(),
        /*new webpack.BannerPlugin(
          'require("source-map-support").install();',
          { raw: true, entryOnly: false }
        ),*/
		new webpack.NoErrorsPlugin(),
      ],
      target: contextToTarget[context],
      cache: false,
      node: {
        __dirname: true,
        __filename: true
      },
      context: path.resolve(pwd),
      resolve: {
        moduleDirectories: [modules, "node_modules", "node_modules/polypacker/node_modules"],
        extensions: ['', '.json', '.js', '.jsx'],
        fallback: [
            path.join(__dirname, "node_modules"),
            path.join(path.resolve(pwd), "node_modules"),
            path.join(path.resolve(pwd), "node_modules/polypacker/node_modules")
        ]
      },
      resolveLoader: {
        moduleDirectories: ["node_modules", "polypacker/node_modules"],
        root: path.join(__dirname, "node_modules")
      },
      callbackLoader: {
          polypack: _ => `require("./for/${compound_version}") //polypacked by dist`
      },
      module: {
        loaders: [
          {
            test: /\.js|\.jsx$/,
            loader: 'babel',
            query: {
                presets: babelPresets.map(preset => `babel-preset-${preset}`).map(require.resolve)
            },
            exclude: /node_modules/,
            postLoaders: [
            ],
            noParse: /\.min\.js/
          }, {
            test: /\.json$/, loader: 'json-loader'
          }, {
            test: /\.html/, loader: 'html-loader'
          }, {
            test: /\.css$/, loader: 'style-loader!css-loader!postcss-loader'
          }, {
            test: /\.less$/, loader: 'style-loader!css-loader!less-loader'
          }, {
            test: /\.scss$/, loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded&' + "includePaths[]=" + (path.resolve(process.cwd(), "./node_modules"))
          }, {
            test: /\.woff(2)?(\?.+)?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" 
          }, {
            test: /\.ttf(\?.+)?$/, loader: "url-loader?limit=10000&mimetype=application/octet-stream" 
          }, {
            test: /\.eot(\?.+)?$/, loader: "file-loader&includePaths[]=" + (path.resolve(process.cwd(), "./node_modules"))
          }, {
            test: /\.svg(\?.+)?$/, loader: "url-loader?limit=10000&mimetype=image/svg+xml"
          }, {
            test: /\.png$/, loader: "url-loader?limit=100000" 
          }, {
            test: /\.jpg$/, loader: "file-loader" 
          } 
        ],
      },
      entry: [ entry ],
      output: {
        libraryTarget: "commonjs2",
        path: path.dirname(out),
        filename: path.basename(out),
      },
    }
    if (env.toLowerCase() == 'production')
      config.plugins.push( new webpack.optimize.UglifyJsPlugin() );
    if (hot){
      config.devtool = 'source-map'
      config.debug = true
      config.plugins = [
		new webpack.DefinePlugin({ $ES: { CONTEXT: JSON.stringify(context) || JSON.stringify('NODE'), ENV: JSON.stringify('DEVELOPMENT')} }),
        new webpack.HotModuleReplacementPlugin(),
		new webpack.optimize.DedupePlugin(),
		new webpack.NoErrorsPlugin(),
        new webpack.BannerPlugin(
          'require("source-map-support").install();',
          { raw: true, entryOnly: false }
        )
      ]
      config.externals = [nodeExternals({ whitelist: ["webpack/hot/poll?1000"] })]
      config.entry = [ "webpack/hot/poll?1000", entry ]
    }
    if(options.library){
        config.output.library = library
    }
    config._compound_version = compound_version
    return config
}
