import * as $ from 'jquery'
import Post from '@models/Post'
// import json from './assets/json.json'
// import xml from './assets/data.xml'
// import csv from './assets/data.csv'
import WebpackLogo from '@/assets/webpack-logo.png'
import './style/style.css'
import './style/less.less'
import './style/scss.scss'
import './babel'

const post = new Post ('Webpack Post Title', WebpackLogo)

$('pre').html(post.toString())
// console.log('JSON: ', json);
// console.log('XML: ', xml);
// console.log('CSV: ', csv);

