import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'iiif-metadata',
  styleUrl: 'iiif-metadata.css',
  shadow: true
})
export class IIIFMetadata {

  /*

  canvasDisplayOrder: "attribution, title",
  metadataGroupOrder: getGroupOrder(),
  canvases: canvases,
  canvasLabels: "Left page, Right page",
  //canvasExclude: "attribution",
  copyToClipboardEnabled: true,
  helper: helper,
  limitToRange: $('#limitToRange').is(':checked'),
  limitType: IIIFComponents.LimitType.LINES,
  //manifestDisplayOrder: "attribution, publication date, license, title",
  //manifestExclude: "license, attribution",
  range: getRange(helper),
  sanitizer: function (html) {
      return filterXSS(html, {
          whiteList: {
              a: ["href", "title", "target", "class"],
              br: [],
              img: ["src"],
              span: []
          }
      });
  },
  showAllLanguages: $('#allLanguages').is(':checked')

  */

  /**
   * The IIIF manifest
   */
  @Prop() manifest: string;

  componentDidLoad() {

    var locale = manifesto.Utils.getInexactLocale("en-GB");

    console.log(locale);

    manifold.loadManifest({
      manifestUri: this.manifest
    }).then(function (helper) {

      console.log(helper);

    }).catch(function (e) {
        console.error(e);
    });
  }

  render() {
    return <div>Manifest URL: { this.manifest }</div>;
  }
}
