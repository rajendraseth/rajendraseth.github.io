webpackJsonp([35783957827783],{47:function(e,t,a){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function o(){return"undefined"==typeof S&&"undefined"!=typeof window&&window.IntersectionObserver&&(S=new window.IntersectionObserver(function(e){e.forEach(function(e){E.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(S.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),S}t.__esModule=!0;var r=a(32),n=i(r),s=a(38),l=i(s),d=a(37),c=i(d),u=a(69),f=i(u),p=a(68),h=i(p),m=a(1),g=i(m),y=a(6),b=i(y),v=function(e){var t=(0,h.default)({},e);return t.responsiveResolution&&(t.resolutions=t.responsiveResolution,delete t.responsiveResolution),t.responsiveSizes&&(t.sizes=t.responsiveSizes,delete t.responsiveSizes),t},w={},L=function(e){var t=v(e),a=t.sizes?t.sizes.src:t.resolutions.src;return!!w[a]||(w[a]=!0,!1)},S=void 0,E=[],O=function(e,t){o().observe(e),E.push([e,t])},I=null,z=function(){if(null!==I)return I;var e="undefined"!=typeof window?window.document.createElement("canvas"):{};return I=!(!e.getContext||!e.getContext("2d"))&&0===e.toDataURL("image/webp").indexOf("data:image/webp")},R=function(e){var t=e.opacity,a=void 0===t?"":t,i=e.src,o=e.srcSet,r=e.sizes,n=void 0===r?"":r,s=e.title,l=void 0===s?"":s,d=e.alt,c=void 0===d?"":d,u=e.width,f=void 0===u?"":u,p=e.height,h=void 0===p?"":p,m=e.transitionDelay,g=void 0===m?"":m;return"<img width="+f+" height="+h+' src="'+i+'" srcset="'+o+'" alt="'+c+'" title="'+l+'" sizes="'+n+'" style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+g+";opacity:"+a+';width:100%;height:100%;object-fit:cover;objectPosition:center"/>'},x=function(e){var t=e.opacity,a=e.onLoad,i=e.transitionDelay,o=void 0===i?"":i,r=(0,f.default)(e,["opacity","onLoad","transitionDelay"]);return g.default.createElement("img",(0,h.default)({},r,{onLoad:a,style:{position:"absolute",top:0,left:0,transition:"opacity 0.5s",transitionDelay:o,opacity:t,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"}}))};x.propTypes={opacity:b.default.number,transitionDelay:b.default.string,onLoad:b.default.func};var _=function(e){function t(a){(0,n.default)(this,t);var i=(0,l.default)(this,e.call(this,a)),o=!0,r=!0,s=!1,d=L(a);return!d&&"undefined"!=typeof window&&window.IntersectionObserver&&(o=!1,r=!1,s=!0),"undefined"==typeof window&&(o=!1,r=!1),i.state={isVisible:o,imgLoaded:r,IOSupported:s},i.handleRef=i.handleRef.bind(i),i}return(0,c.default)(t,e),t.prototype.handleRef=function(e){var t=this;this.state.IOSupported&&e&&O(e,function(){t.setState({isVisible:!0,imgLoaded:!1})})},t.prototype.render=function(){var e=this,t=v(this.props),a=t.title,i=t.alt,o=t.className,r=t.outerWrapperClassName,n=t.style,s=void 0===n?{}:n,l=t.sizes,d=t.resolutions,c=t.backgroundColor,u=void 0;if(u="boolean"==typeof c?"lightgray":c,l){var f=l;return f.srcWebp&&f.srcSetWebp&&z()&&(f.src=f.srcWebp,f.srcSet=f.srcSetWebp),g.default.createElement("div",{className:(r?r:"")+" gatsby-image-outer-wrapper",style:{zIndex:0,position:"absolute"===s.position?"initial":"relative"}},g.default.createElement("div",{className:(o?o:"")+" gatsby-image-wrapper",style:(0,h.default)({position:"relative",overflow:"hidden",zIndex:1},s),ref:this.handleRef},g.default.createElement("div",{style:{width:"100%",paddingBottom:100/f.aspectRatio+"%"}}),f.base64&&g.default.createElement(x,{alt:i,title:a,src:f.base64,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s"}),f.tracedSVG&&g.default.createElement(x,{alt:i,title:a,src:f.tracedSVG,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s"}),u&&g.default.createElement("div",{title:a,style:{backgroundColor:u,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&g.default.createElement(x,{alt:i,title:a,srcSet:f.srcSet,src:f.src,sizes:f.sizes,opacity:this.state.imgLoaded||this.props.fadeIn===!1?1:0,onLoad:function(){e.state.IOSupported&&e.setState({imgLoaded:!0}),e.props.onLoad&&e.props.onLoad()}}),g.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:R((0,h.default)({alt:i,title:a},f))}})))}if(d){var p=d,m=(0,h.default)({position:"relative",overflow:"hidden",display:"inline-block",zIndex:1,width:p.width,height:p.height},s);return"inherit"===s.display&&delete m.display,p.srcWebp&&p.srcSetWebp&&z()&&(p.src=p.srcWebp,p.srcSet=p.srcSetWebp),g.default.createElement("div",{className:(r?r:"")+" gatsby-image-outer-wrapper",style:{zIndex:0,position:"absolute"===s.position?"initial":"relative"}},g.default.createElement("div",{className:(o?o:"")+" gatsby-image-wrapper",style:m,ref:this.handleRef},p.base64&&g.default.createElement(x,{alt:i,title:a,src:p.base64,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s"}),p.tracedSVG&&g.default.createElement(x,{alt:i,title:a,src:p.tracedSVG,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s"}),u&&g.default.createElement("div",{title:a,style:{backgroundColor:u,width:p.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:p.height}}),this.state.isVisible&&g.default.createElement(x,{alt:i,title:a,width:p.width,height:p.height,srcSet:p.srcSet,src:p.src,opacity:this.state.imgLoaded||this.props.fadeIn===!1?1:0,onLoad:function(){e.setState({imgLoaded:!0}),e.props.onLoad&&e.props.onLoad()}}),g.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:R((0,h.default)({alt:i,title:a,width:p.width,height:p.height},p))}})))}return null},t}(g.default.Component);_.defaultProps={fadeIn:!0,alt:""},_.propTypes={responsiveResolution:b.default.object,responsiveSizes:b.default.object,resolutions:b.default.object,sizes:b.default.object,fadeIn:b.default.bool,title:b.default.string,alt:b.default.string,className:b.default.oneOfType([b.default.string,b.default.object]),outerWrapperClassName:b.default.oneOfType([b.default.string,b.default.object]),style:b.default.object,position:b.default.string,backgroundColor:b.default.oneOfType([b.default.string,b.default.bool]),onLoad:b.default.func},t.default=_},114:function(e,t){"use strict";var a={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,mixins:!0,propTypes:!0,type:!0},i={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},o=Object.defineProperty,r=Object.getOwnPropertyNames,n=Object.getOwnPropertySymbols,s=Object.getOwnPropertyDescriptor,l=Object.getPrototypeOf,d=l&&l(Object);e.exports=function e(t,c,u){if("string"!=typeof c){if(d){var f=l(c);f&&f!==d&&e(t,f,u)}var p=r(c);n&&(p=p.concat(n(c)));for(var h=0;h<p.length;++h){var m=p[h];if(!(a[m]||i[m]||u&&u[m])){var g=s(c,m);try{o(t,m,g)}catch(e){}}}return t}return t}},255:function(e,t,a){(function(i){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=a(1),n=(o(r),a(47)),s=o(n),l=a(10),d=o(l),c=a(34),u=o(c),f=function(e){var t,a,o;return i.createElement("div",{css:{padding:"1rem",borderBottom:"0.05rem",borderBottomColor:d.default.borderColor,borderBottomStyle:"solid",justifyContent:"space-between","&:last-child":{borderBottomStyle:"none"}}},i.createElement(u.default,{to:e.Link||"#",css:(t={color:d.default.brandColor,textDecoration:"none"},t[d.default.Tablet]={display:"flex"},t)},i.createElement("div",{css:(a={width:"100%"},a[d.default.Tablet]={width:"60%",order:""+(e.imageOnRight&&"true"==e.imageOnRight&&"99"),marginLeft:""+(e.imageOnRight&&"true"==e.imageOnRight&&"1rem"),marginRight:""+((e.imageOnRight||"1rem")&&"true"!=e.imageOnRight&&"1rem")},a)},i.createElement(s.default,{sizes:e.imageLink})),i.createElement("div",{css:(o={},o[d.default.Tablet]={width:"40%"},o)},e.children)))};t.default=f,e.exports=t.default}).call(t,a(7))},256:function(e,t,a){(function(i){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=a(1),n=(o(r),a(10)),s=o(n),l=function(e){var t=e.children;return i.createElement("div",{css:{borderRadius:"1rem",boxShadow:"0rem 0rem 0.1rem "+s.default.borderColor,borderColor:s.default.borderColor,backgroundColor:s.default.tileBackgroundColor}},t)};t.default=l,e.exports=t.default}).call(t,a(7))},261:function(e,t,a){(function(e){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.IndexPageQuery=void 0;var o=a(1),r=(i(o),a(47)),n=(i(r),a(256)),s=i(n),l=a(255),d=i(l),c=a(10),u=(i(c),function(t){var a=t.data;return e.createElement(s.default,null,e.createElement(d.default,{imageLink:a.sunrise.childImageSharp.sizes},"Dawn of a new era in Veterinary Health... Providing better solutions for tomorrow's health care needs..."),e.createElement(d.default,{imageLink:a.cattle.childImageSharp.sizes,imageOnRight:"true"},"Venovel healthcare was concieved as a company that provides leading-edge healthcare needs to eliminate the sufferings of animals at an affordable cost. It is founded by alumni of world's leading pharmaceutical firms having more than 25 years of experience working in animal healthcare."),e.createElement(d.default,{imageLink:a.products.childImageSharp.sizes,Link:"catalog"},"Venovel caters a wide variety of products with our primary focus in nutritional segment. Proper nutrition is very vital to avoid diseases and increase productivity of cattle."),e.createElement(d.default,{imageLink:a.contactUs.childImageSharp.sizes,imageOnRight:"true",Link:"contact"},"Get in touch with us to discuss our products"))});t.default=u;t.IndexPageQuery="** extracted graphql fragment **"}).call(t,a(7))}});
//# sourceMappingURL=component---src-pages-index-js-6c638fd2dc4470ab2c95.js.map